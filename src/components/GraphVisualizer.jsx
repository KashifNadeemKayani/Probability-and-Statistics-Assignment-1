import box from "../components/box.jpg"

// import React, { useState } from "react";
// import styles from "./GraphVisualizer.module.css";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, LineChart, Line, Cell, CartesianGrid,
// } from "recharts";
// import { Button, Box, Typography, Paper } from "@mui/material";

// // Hardcoded Data
// const histogramData = [
//   { range: "10-20", count: 3 },
//   { range: "20-30", count: 5 },
//   { range: "30-40", count: 8 },
//   { range: "40-50", count: 6 },
//   { range: "50-60", count: 7 },
//   { range: "60-70", count: 4 },
// ];

// const barData = [
//   { category: "A", value: 23 },
//   { category: "B", value: 45 },
//   { category: "C", value: 56 },
//   { category: "D", value: 78 },
//   { category: "E", value: 12 },
// ];

// const pieColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

// const lineData = [
//   { x: 1, y: 15 },
//   { x: 2, y: 30 },
//   { x: 3, y: 45 },
//   { x: 4, y: 22 },
//   { x: 5, y: 40 },
//   { x: 6, y: 35 },
// ];

// const frequencyPolygonData = histogramData;

// const boxPlotData = [10, 15, 18, 22, 30, 35, 40, 45, 50, 55, 60];

// const GraphVisualizer = () => {
//   const [selectedGraph, setSelectedGraph] = useState("histogram");

//   // Generate Stem-and-Leaf Plot with Keys
//   const generateStemLeaf = () => {
//     let stemLeaf = {};
//     boxPlotData.sort((a, b) => a - b);
//     boxPlotData.forEach(num => {
//       let stem = Math.floor(num / 10);
//       let leaf = num % 10;
//       if (!stemLeaf[stem]) stemLeaf[stem] = [];
//       stemLeaf[stem].push(leaf);
//     });

//     return (
//       <div className={styles.stemLeaf}>
//         <Typography variant="h6">Stem-and-Leaf Plot</Typography>
//         {Object.keys(stemLeaf).map(stem => (
//           <Typography key={stem}>
//             <b>{stem} |</b> {stemLeaf[stem].join(" ")}
//           </Typography>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <Box className={styles.container}>
//       <Typography variant="h4" gutterBottom>
//         📊 Graph Visualizer
//       </Typography>

//       {/* Buttons to switch graphs */}
//       <Box className={styles.buttons}>
//         <Button variant="contained" onClick={() => setSelectedGraph("histogram")}>Histogram</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("bar")}>Bar Chart</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("pie")}>Pie Chart</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("line")}>Line Graph</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("polygon")}>Frequency Polygon</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("box")}>Box Plot</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("stemLeaf")}>Stem-and-Leaf</Button>
//       </Box>

//       <Paper className={styles.graphContainer}>
//         {/* Histogram */}
//         {selectedGraph === "histogram" && (
//           <BarChart width={500} height={300} data={histogramData}>
//             <XAxis dataKey="range" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="count" fill="#8884d8" />
//           </BarChart>
//         )}

//         {/* Bar Chart */}
//         {selectedGraph === "bar" && (
//           <BarChart width={500} height={300} data={barData}>
//             <XAxis dataKey="category" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#ff7300" />
//           </BarChart>
//         )}

//         {/* Pie Chart */}
//         {selectedGraph === "pie" && (
//           <PieChart width={400} height={400}>
//             <Pie data={barData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
//               {barData.map((_, index) => (
//                 <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
//               ))}
//             </Pie>
//           </PieChart>
//         )}

//         {/* Line Graph */}
//         {selectedGraph === "line" && (
//           <LineChart width={500} height={300} data={lineData}>
//             <XAxis dataKey="x" />
//             <YAxis />
//             <Tooltip />
//             <CartesianGrid stroke="#ccc" />
//             <Line type="monotone" dataKey="y" stroke="green" />
//           </LineChart>
//         )}

//         {/* Frequency Polygon */}
//         {selectedGraph === "polygon" && (
//           <LineChart width={500} height={300} data={frequencyPolygonData}>
//             <XAxis dataKey="range" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="count" stroke="blue" />
//           </LineChart>
//         )}

//         {/* Box Plot Visualization */}
//         {selectedGraph === "box" && (
//           <BarChart width={500} height={300} data={[{ min: Math.min(...boxPlotData), max: Math.max(...boxPlotData) }]}>
//             <XAxis dataKey="min" />
//             <YAxis domain={[Math.min(...boxPlotData), Math.max(...boxPlotData)]} />
//             <Tooltip />
//             <Bar dataKey="max" fill="#4caf50" />
//           </BarChart>
//         )}

//         {/* Stem-and-Leaf Plot */}
//         {selectedGraph === "stemLeaf" && generateStemLeaf()}
//       </Paper>
//     </Box>
//   );
// };

// export default GraphVisualizer;




// import React, { useState } from "react";
// import styles from "./GraphVisualizer.module.css";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, LineChart, Line, Cell, CartesianGrid,
// } from "recharts";
// import { Button, Box, Typography, Paper } from "@mui/material";

// // Hardcoded Data
// const histogramData = [
//   { range: "10-20", count: 3 },
//   { range: "20-30", count: 5 },
//   { range: "30-40", count: 8 },
//   { range: "40-50", count: 6 },
//   { range: "50-60", count: 7 },
//   { range: "60-70", count: 4 },
// ];

// const barData = [
//   { category: "A", value: 23 },
//   { category: "B", value: 45 },
//   { category: "C", value: 56 },
//   { category: "D", value: 78 },
//   { category: "E", value: 12 },
// ];

// const pieColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

// const lineData = [
//   { x: 1, y: 15 },
//   { x: 2, y: 30 },
//   { x: 3, y: 45 },
//   { x: 4, y: 22 },
//   { x: 5, y: 40 },
//   { x: 6, y: 35 },
// ];

// const frequencyPolygonData = histogramData;

// const boxPlotData = [10, 15, 18, 22, 30, 35, 40, 45, 50, 55, 60];

// const GraphVisualizer = () => {
//   const [selectedGraph, setSelectedGraph] = useState("histogram");

//   // Generate Stem-and-Leaf Plot with Keys
//   const generateStemLeaf = () => {
//     let stemLeaf = {};
//     boxPlotData.sort((a, b) => a - b);
//     boxPlotData.forEach(num => {
//       let stem = Math.floor(num / 10);
//       let leaf = num % 10;
//       if (!stemLeaf[stem]) stemLeaf[stem] = [];
//       stemLeaf[stem].push(leaf);
//     });

//     return (
//       <div className={styles.stemLeaf}>
//         <Typography variant="h6">Stem-and-Leaf Plot</Typography>
//         {Object.keys(stemLeaf).map(stem => (
//           <Typography key={stem}>
//             <b>{stem} |</b> {stemLeaf[stem].join(" ")}
//           </Typography>
//         ))}
//       </div>
//     );
//   };

//   // Compute quartiles for Box Plot
//   const computeBoxPlotData = () => {
//     const sortedData = [...boxPlotData].sort((a, b) => a - b);
//     const min = sortedData[0];
//     const max = sortedData[sortedData.length - 1];
//     const q1 = sortedData[Math.floor(sortedData.length * 0.25)];
//     const median = sortedData[Math.floor(sortedData.length * 0.5)];
//     const q3 = sortedData[Math.floor(sortedData.length * 0.75)];

//     return { min, q1, median, q3, max };
//   };

//   return (
//     <Box className={styles.container}>
//       <Typography variant="h4" gutterBottom>
//         📊 Graph Visualizer
//       </Typography>

//       {/* Buttons to switch graphs */}
//       <Box className={styles.buttons}>
//         <Button variant="contained" onClick={() => setSelectedGraph("histogram")}>Histogram</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("bar")}>Bar Chart</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("pie")}>Pie Chart</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("line")}>Line Graph</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("polygon")}>Frequency Polygon</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("box")}>Box Plot</Button>
//         <Button variant="contained" onClick={() => setSelectedGraph("stemLeaf")}>Stem-and-Leaf</Button>
//       </Box>

//       <Paper className={styles.graphContainer}>
//         {/* Histogram */}
//         {selectedGraph === "histogram" && (
//           <BarChart width={500} height={300} data={histogramData}>
//             <XAxis dataKey="range" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="count" fill="#8884d8" />
//           </BarChart>
//         )}

//         {/* Bar Chart */}
//         {selectedGraph === "bar" && (
//           <BarChart width={500} height={300} data={barData}>
//             <XAxis dataKey="category" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#ff7300" />
//           </BarChart>
//         )}

//         {/* Pie Chart */}
//         {selectedGraph === "pie" && (
//           <PieChart width={400} height={400}>
//             <Pie data={barData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
//               {barData.map((_, index) => (
//                 <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
//               ))}
//             </Pie>
//           </PieChart>
//         )}

//         {/* Line Graph */}
//         {selectedGraph === "line" && (
//           <LineChart width={500} height={300} data={lineData}>
//             <XAxis dataKey="x" />
//             <YAxis />
//             <Tooltip />
//             <CartesianGrid stroke="#ccc" />
//             <Line type="monotone" dataKey="y" stroke="green" />
//           </LineChart>
//         )}

//         {/* Frequency Polygon */}
//         {selectedGraph === "polygon" && (
//           <LineChart width={500} height={300} data={frequencyPolygonData}>
//             <XAxis dataKey="range" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="count" stroke="blue" />
//           </LineChart>
//         )}

//         {/* Box Plot Visualization */}
//         {selectedGraph === "box" && (() => {
//           const { min, q1, median, q3, max } = computeBoxPlotData();
//           return (
//             <LineChart width={500} height={300} data={[{ min, q1, median, q3, max }]}>
//               <XAxis dataKey="median" hide />
//               <YAxis domain={[min - 5, max + 5]} />
//               <Tooltip />

//               {/* Lines for whiskers */}
//               <Line type="monotone" dataKey="min" stroke="black" dot={false} />
//               <Line type="monotone" dataKey="q1" stroke="blue" dot={false} />
//               <Line type="monotone" dataKey="median" stroke="red" dot={false} />
//               <Line type="monotone" dataKey="q3" stroke="blue" dot={false} />
//               <Line type="monotone" dataKey="max" stroke="black" dot={false} />
//             </LineChart>
//           );
//         })()}

//         {/* Stem-and-Leaf Plot */}
//         {selectedGraph === "stemLeaf" && generateStemLeaf()}
//       </Paper>
//     </Box>
//   );
// };

// export default GraphVisualizer;









// import React, { useState } from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, LineChart, Line, Cell, CartesianGrid,
// } from "recharts";
// import { Button, Box, Typography, Paper } from "@mui/material";

// // Hardcoded Data
// const dataset = [10, 15, 18, 22, 30, 35, 40, 45, 50, 55, 60, 10, 30, 45]; // Sample data

// const pieColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF4500", "#228B22"];

// // Function to compute frequency distribution for Pie Chart
// const computeFrequency = (data) => {
//   let freqMap = {};
//   data.forEach(num => {
//     if (typeof num === "number" && !isNaN(num)) {
//       freqMap[num] = (freqMap[num] || 0) + 1;
//     }
//   });

//   return Object.entries(freqMap).map(([value, count]) => ({
//     name: value,
//     value: count
//   }));
// };

// // Function to compute Box Plot statistics
// const computeBoxPlotData = (data) => {
//   try {
//     const sortedData = [...data].sort((a, b) => a - b);
//     if (sortedData.length === 0) return null;

//     return {
//       min: sortedData[0],
//       q1: sortedData[Math.floor(sortedData.length * 0.25)],
//       median: sortedData[Math.floor(sortedData.length * 0.5)],
//       q3: sortedData[Math.floor(sortedData.length * 0.75)],
//       max: sortedData[sortedData.length - 1],
//     };
//   } catch (error) {
//     console.error("Error computing Box Plot:", error);
//     return null;
//   }
// };

// const GraphVisualizer = () => {
//   const [selectedGraph, setSelectedGraph] = useState("histogram");

//   return (
//     <Box sx={{ padding: 2, textAlign: "center" }}>
//       <Typography variant="h5" gutterBottom>
//         📊 Graph Visualizer
//       </Typography>

//       {/* Display sorted dataset */}
//       <Typography variant="h6">
//         Data: {dataset.sort((a, b) => a - b).join(", ")}
//       </Typography>

//       {/* Graph Selection Buttons */}
//       <Box sx={{ margin: 2, display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
//         {["histogram", "bar", "pie", "line", "polygon", "box", "stemLeaf"].map(graph => (
//           <Button
//             key={graph}
//             variant={selectedGraph === graph ? "contained" : "outlined"}
//             onClick={() => setSelectedGraph(graph)}
//           >
//             {graph.charAt(0).toUpperCase() + graph.slice(1)} Chart
//           </Button>
//         ))}
//       </Box>

//       <Paper sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
//         {/* Histogram */}
//         {selectedGraph === "histogram" && (
//           <BarChart width={500} height={300} data={computeFrequency(dataset)}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         )}

//         {/* Bar Chart */}
//         {selectedGraph === "bar" && (
//           <BarChart width={500} height={300} data={computeFrequency(dataset)}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#ff7300" />
//           </BarChart>
//         )}

//         {/* Pie Chart */}
//         {selectedGraph === "pie" && (
//           <PieChart width={400} height={400}>
//             <Pie data={computeFrequency(dataset)} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
//               {computeFrequency(dataset).map((_, index) => (
//                 <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
//               ))}
//             </Pie>
//           </PieChart>
//         )}

//         {/* Line Graph */}
//         {selectedGraph === "line" && (
//           <LineChart width={500} height={300} data={computeFrequency(dataset)}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <CartesianGrid stroke="#ccc" />
//             <Line type="monotone" dataKey="value" stroke="green" />
//           </LineChart>
//         )}

//         {/* Frequency Polygon */}
//         {selectedGraph === "polygon" && (
//           <LineChart width={500} height={300} data={computeFrequency(dataset)}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="value" stroke="blue" />
//           </LineChart>
//         )}

//         {/* Box Plot (Horizontal) */}
//         {selectedGraph === "box" && (() => {
//           const boxPlot = computeBoxPlotData(dataset);
//           return (
//             <LineChart width={500} height={100} data={[boxPlot]}>
//               <XAxis type="number" domain={[boxPlot.min - 5, boxPlot.max + 5]} />
//               <YAxis dataKey="median" hide />
//               <Tooltip />
//               <Line type="monotone" dataKey="min" stroke="black" dot={false} />
//               <Line type="monotone" dataKey="q1" stroke="blue" dot={false} />
//               <Line type="monotone" dataKey="median" stroke="red" dot={false} />
//               <Line type="monotone" dataKey="q3" stroke="blue" dot={false} />
//               <Line type="monotone" dataKey="max" stroke="black" dot={false} />
//             </LineChart>
//           );
//         })()}

//         {/* Stem-and-Leaf Plot */}
//         {selectedGraph === "stemLeaf" && (() => {
//           let stemLeaf = {};
//           dataset.sort((a, b) => a - b).forEach(num => {
//             let stem = Math.floor(num / 10);
//             let leaf = num % 10;
//             if (!stemLeaf[stem]) stemLeaf[stem] = [];
//             stemLeaf[stem].push(leaf);
//           });

//           return (
//             <Box sx={{ textAlign: "left" }}>
//               <Typography variant="h6">Stem-and-Leaf Plot</Typography>
//               {Object.keys(stemLeaf).map(stem => (
//                 <Typography key={stem}>
//                   <b>{stem} |</b> {stemLeaf[stem].join(" ")}
//                 </Typography>
//               ))}
//             </Box>
//           );
//         })()}
//       </Paper>
//     </Box>
//   );
// };

// export default GraphVisualizer;











import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, LineChart, Line, Cell, CartesianGrid,
} from "recharts";
import { Button, Box, Typography, Paper } from "@mui/material";

const dataset = [10, 15, 18, 22, 30, 35, 40, 45, 50, 55, 60, 10, 30, 45];
const pieColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF4500", "#228B22"];

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
        {["histogram", "bar", "pie", "line", "polygon", "box", "stemLeaf"].map(graph => (
          <Button
            key={graph}
            variant={selectedGraph === graph ? "contained" : "outlined"}
            onClick={() => setSelectedGraph(graph)}
          >
            {graph.charAt(0).toUpperCase() + graph.slice(1)} Chart
          </Button>
        ))}
      </Box>

      <Paper sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
        {selectedGraph === "histogram" && (
          <BarChart width={500} height={300} data={computeFrequency(dataset)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
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
              {computeFrequency(dataset).map((_, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
          </PieChart>
        )}

        {selectedGraph === "line" && (
          <LineChart width={500} height={300} data={computeFrequency(dataset)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="value" stroke="green" />
          </LineChart>
        )}

        {selectedGraph === "polygon" && (
          <LineChart width={500} height={300} data={computeFrequency(dataset)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="blue" />
          </LineChart>
        )}

        {selectedGraph === "box" && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 500, height: 300 }}>
            <img src={box} alt="Box Plot Placeholder" style={{ maxWidth: "100%", maxHeight: "100%" }} />
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
              <Typography variant="h6">Stem-and-Leaf Plot</Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                Key: 1 | 0 means 25
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
    </Box>
  );
};

export default GraphVisualizer;
