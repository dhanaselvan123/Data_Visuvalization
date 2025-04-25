import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Upload } from "lucide-react";
import { Chart } from "react-google-charts";

const chartOptions = [
  { value: "BarChart", label: "Bar Chart", is3D: true },
  { value: "PieChart", label: "Pie Chart", is3D: true },
  { value: "LineChart", label: "Line Chart", is3D: true },
  { value: "AreaChart", label: "Area Chart", is3D: true },
  { value: "ScatterChart", label: "Scatter Chart", is3D: true },
  // { value: "BubbleChart", label: "Bubble Chart", is3D: true },
  { value: "Histogram", label: "Histogram", is3D: true },
  { value: "GeoChart", label: "Geo Chart", is3D: true },
  { value: "Gauge", label: "Gauge Chart", is3D: true },
  // { value: "Timeline", label: "Timeline Chart", is3D: true },
  // { value: "CandlestickChart", label: "Candlestick Chart", is3D: true },
  // { value: "TreeMap", label: "TreeMap Chart", is3D: true },
];

export default function CsvUploader() {
  const [file, setFile] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState("BarChart");
  const [column, setColumn] = useState("Marks");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !column) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("column", column);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setChartData(data.chart_data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Sidenav />
      <div className="flex justify-center min-h-screen w-full p-4">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <input
            type="file"
            accept=".csv, .xlsx, .xls"
            id="file-upload"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="file-upload">
            <Button
              variant="contained"
              component="span"
              sx={{
                padding: "10px 20px",
                background: "linear-gradient(158deg, rgb(61, 48, 129) 0%, rgba(30,47,141,1) 100%)",
                backgroundColor: "#007bff",
                "&:hover": { backgroundColor: "#0056b3" },
              }}
            >
              Choose File
            </Button>
          </label>

          {file && <p style={{ marginTop: "8px" }}>{file.name}</p>}

          <Button
            variant="contained"
            onClick={handleUpload}
            startIcon={<Upload />}
            sx={{ padding: "10px 20px",background: "linear-gradient(158deg, rgb(61, 48, 129) 0%, rgba(30,47,141,1) 100%)" }}
          >
            Upload CSV
          </Button>
        </Box>

        {chartData && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            mt={8}
            gap={4}
          >
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel>Select Chart Type</InputLabel>
              <Select
                value={chartType}
                label="Chart Type"
                onChange={(e) => setChartType(e.target.value)}
                sx={{
                  // background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Gradient background
                  borderRadius: "12px", // Smooth rounded edges
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Deeper shadow
                  fontWeight: "bold", // Makes text stand out
                  transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
                  "&:hover": {
                    background: "linear-gradient(158deg, rgb(61, 48, 129) 0%, rgba(30,47,141,1) 100%)", // Hover color change
                    color: "#fff", // Text color on hover
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
                  },
                  "&.Mui-focused": {
                    background: "linear-gradient(135deg, #84fab0, #8fd3f4)", // Different gradient when focused
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)", // Deep focus shadow
                    transform: "scale(1.05)", // Slight enlargement on focus
                  },
                }}
              >
                {chartOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{
                      fontSize: "16px", // Larger font
                      fontWeight: "500", // Slightly bold
                      "&:hover": {
                        background: "#e0f7fa", // Light cyan hover effect
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Chart
              chartType={chartType}
              data={chartData}
              options={chartOptions.find((option) => option.value === chartType)?.is3D ? { is3D: true } : { tootip: { showColorCode: true } }}
              width={"800px"}
              height={"500px"}
              loader={<div>Loading Chart...</div>}
            />
          </Box>
        )}
      </div>
    </>
  );
}