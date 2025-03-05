import box from "../components/box.jpg"
import hist from "../components/Histogram.png"
import line from "../components/LineChart.png"


import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, LineChart, Line, Cell, CartesianGrid,
} from "recharts";
import { Button, Box, Typography, Paper } from "@mui/material";

const dataset = [10, 15, 18, 22, 30, 35, 40, 45, 50, 55, 60, 10, 30, 45];
const pieColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF4500", "#228B22"];
const pieColorMapping = { 10: "#FF6384", 15: "#36A2EB", 18: "#FFCE56", 22: "#4BC0C0", 30: "#9966FF", 35: "#FF4500", 40: "#228B22", 45: "#FF1493", 50: "#8A2BE2", 55: "#20B2AA", 60: "#FFD700" };

const computeFrequency = (data) => {
  let freqMap = {};
  data.forEach(num => {
    if (typeof num === "number" && !isNaN(num)) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }
  });

  return Object.entries(freqMap).map(([value, count]) => ({
    name: value,
    value: count
  }));
};

const computeTallyMarks = (data) => {
  let freqMap = computeFrequency(data);
  return freqMap.map(({ name, value }) => ({
    name,
    tally: "|".repeat(value)
  }));
};

const GraphVisualizer = () => {
  const [selectedGraph, setSelectedGraph] = useState("histogram");

  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        📊 Graph Visualizer
      </Typography>

      <Typography variant="h6">
        Data: {dataset.sort((a, b) => a - b).join(", ")}
      </Typography>

      <Box sx={{ margin: 2, display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
        {["tallyMarks", "stemLeaf", "histogram", "bar", "pie", "frequencyPolygon", "boxPlot", "lineChart"].map(graph => (
          <Button
            key={graph}
            variant={selectedGraph === graph ? "contained" : "outlined"}
            onClick={() => setSelectedGraph(graph)}
          >
            {graph.charAt(0).toUpperCase() + graph.slice(1).replace(/([A-Z])/g, ' $1').trim()}
          </Button>
        ))}
      </Box>

      <Paper sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
        {selectedGraph === "histogram" && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 500, height: 300 }}>
            <img src={hist} alt="Histogram Placeholder" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Box>
        )}

        {selectedGraph === "bar" && (
          <BarChart width={500} height={300} data={computeFrequency(dataset)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ff7300" />
          </BarChart>
        )}

        {selectedGraph === "pie" && (
          <PieChart width={400} height={400}>
            <Pie data={computeFrequency(dataset)} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
              {computeFrequency(dataset).map(({ name }, index) => (
                <Cell key={`cell-${index}`} fill={pieColorMapping[name] || pieColors[index % pieColors.length]} />
              ))}
            </Pie>
          </PieChart>
        )}

        {selectedGraph === "frequencyPolygon" && (
          <LineChart width={500} height={300} data={computeFrequency(dataset)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="blue" />
          </LineChart>
        )}

        {selectedGraph === "lineChart" && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 500, height: 300 }}>
            <img src={line} alt="Line Chart Placeholder" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Box>
        )}

        {selectedGraph === "boxPlot" && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 500, height: 300 }}>
            <img src={box} alt="Box Plot Placeholder" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Box>
        )}

        {selectedGraph === "tallyMarks" && (
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6">Tally Marks</Typography>
            {computeTallyMarks(dataset).map(({ name, tally }) => (
              <Typography key={name}>
                <b>{name}:</b> {tally}
              </Typography>
            ))}
          </Box>
        )}

        {selectedGraph === "stemLeaf" && (() => {
          let stemLeaf = {};
          dataset.sort((a, b) => a - b).forEach(num => {
            let stem = Math.floor(num / 10);
            let leaf = num % 10;
            if (!stemLeaf[stem]) stemLeaf[stem] = [];
            stemLeaf[stem].push(leaf);
          });

          return (
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6">Stem Leaf</Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                Key: 1 | 0 means 10
              </Typography>
              {Object.keys(stemLeaf).map(stem => (
                <Typography key={stem}>
                  <b>{stem} |</b> {stemLeaf[stem].join(" ")}
                </Typography>
              ))}
            </Box>
          );
        })()}
      </Paper>

      {/* Assignment Details Section */}
      <Paper sx={{ padding: 2, marginTop: 3, textAlign: "left" }}>
        <Typography variant="h6">📌 Assignment Details</Typography>
        <Typography variant="body1">This assignment included visualization different types of statistical graphs using python and react. The dataset was assumed, it includes random values. Histogram, Box plot and line chart are made on python, rest are done using react.</Typography>

      </Paper>

    </Box>
  );
};

export default GraphVisualizer;












