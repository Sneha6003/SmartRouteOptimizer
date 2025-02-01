import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";  // Import the CSS file for custom styles

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [routes, setRoutes] = useState([]); // Store optimized routes

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setMessage(selectedFile ? `Selected: ${selectedFile.name}` : "⚠️ No file selected");
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("⚠️ Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    setMessage("⏳ Uploading & Processing...");

    try {
      const response = await axios.post("http://127.0.0.1:5000/optimize", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(`✅ Success: ${response.data.message}`);
      
      // Fetch the optimized routes CSV file as JSON
      const csvResponse = await axios.get("http://127.0.0.1:5000/get_routes");
      setRoutes(csvResponse.data);
    } catch (error) {
      setMessage("❌ Error uploading file. Please try again.");
      console.error("Upload error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    window.location.href = "http://127.0.0.1:5000/download";
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary font-weight-bold mb-4">🚀 Smart Route Optimizer</h2>

      {/* Upload Section */}
      <div className="card p-4 shadow-lg rounded-lg border-light">
        <h4 className="text-center mb-4 text-muted">Upload your CSV to optimize routes</h4>
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            accept=".csv"
            disabled={loading}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  &nbsp;Processing...
                </>
              ) : (
                "Upload & Optimize"
              )}
            </button>
          </div>
        </div>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>

      {/* Display Optimized Routes */}
      {routes.length > 0 && (
        <div className="card mt-5 p-4 shadow-lg rounded-lg border-light">
          <h4 className="text-center text-success mb-4">📌 Optimized Routes:</h4>
          <table className="table table-bordered mt-3 text-dark">
            <thead className="table-light">
              <tr>
                <th>Trip ID</th>
                <th>Shipments</th>
                <th>Distance (km)</th>
                <th>Time (min)</th>
                <th>Vehicle Type</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => (
                <tr key={index}>
                  <td>{route.trip_id}</td>
                  <td>{route.shipments}</td>
                  <td>{route.mst_distance.toFixed(2)}</td>
                  <td>{route.total_time.toFixed(2)}</td>
                  <td>{route.vehicle_type}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Download Button */}
          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={handleDownload} disabled={loading}>
              📥 Download CSV
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;