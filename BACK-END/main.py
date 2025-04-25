from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from passlib.context import CryptContext

# FastAPI app instance
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...), column: str = Form(...)):
    contents = await file.read()

    try:
        # Read uploaded file into a DataFrame
        if file.filename.endswith('.csv'):
            df = pd.read_csv(io.BytesIO(contents))
        elif file.filename.endswith(('.xls', '.xlsx')):
            df = pd.read_excel(io.BytesIO(contents))
        else:
            return {"error": "Unsupported file type. Upload a .csv or Excel file."}

        # Check if the provided column exists in the file
        if column not in df.columns:
            return {"error": f"Column '{column}' not found in file."}

        # Convert full DataFrame to a list of lists
        cleaned_data = df.values.tolist()

        # Extract the specified column for charting, dropping missing values
        chart_data = df[column].dropna().tolist()

        # Build chart_list ensuring that the label (first column) is a string.
        # Here the header row is set with the column name as the label header and "value" as the numeric header.
        chart_list = [[column, "value"]] + [[str(index), value] for index, value in enumerate(chart_data)]

        return {
            "chart_data": chart_list,
            "cleaned_data": cleaned_data
        }

    except Exception as e:
        return {"error": f"Failed to process the file: {str(e)}"}
    
    
# Database connection
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:meeran6991@localhost:3306/auth_system"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# SQLAlchemy model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    userName = Column(String(100), unique=True, index=True, nullable=False)
    mobileNumber = Column(String(15))
    password = Column(String(255), nullable=False)

# Create DB tables
Base.metadata.create_all(bind=engine)

# Pydantic models
class LoginModel(BaseModel):
    userName: str
    password: str

class SignupModel(BaseModel):
    userName1: str
    mobileNumber: str
    password: str
    conformPassword: str

class ForgotModel(BaseModel):
    userName: str
    password: str
    conformPassword: str


@app.post("/login")
def login(user: LoginModel):
    db = SessionLocal()
    db_user = db.query(User).filter(User.userName == user.userName).first()
    if db_user and pwd_context.verify(user.password, db_user.password):
        return {"message": "Login Successful", "status": "200"}
    raise HTTPException(status_code=401, detail="Invalid username or password")


@app.post("/signup")
def signup(data: SignupModel):
    if data.password != data.conformPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    db = SessionLocal()
    existing_user = db.query(User).filter(User.userName == data.userName1).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")
    hashed_pw = pwd_context.hash(data.password)
    new_user = User(userName=data.userName1, mobileNumber=data.mobileNumber, password=hashed_pw)
    db.add(new_user)
    db.commit()
    return {"message": "Signup successful"}


@app.post("/forgot-password")
def forgot_password(data: ForgotModel):
    if data.password != data.conformPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    db = SessionLocal()
    db_user = db.query(User).filter(User.userName == data.userName).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    db_user.password = pwd_context.hash(data.password)
    db.commit()
    return {"message": "Password updated successfully"}
