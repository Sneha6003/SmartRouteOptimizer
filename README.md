
# SmartRoute Optimizer

SmartRoute Optimizer is an AI/ML-based solution designed to optimize last-mile delivery planning for grocery and essential item deliveries. The system automates shipment clustering, vehicle assignment, and route sequencing while considering multiple constraints like time slots, vehicle capacities, and distance minimization.



## Features

1. **Automated Route Optimization:** Assigns shipments to trips while minimizing travel distance.
2. **Vehicle Capacity Utilization:** Ensures optimal use of delivery vehicles.
3. **Time Slot Constraints:** Plans deliveries based on user-selected slots.
4. **Trip Sequencing:** Determines the most efficient delivery order.

5. **Future Scope:** Plans to integrate reinforcement learning for continuous improvement.







## 📁 Project Structure

Install my-project with npm

```bash
  backend/
│── app.py                    # Main Flask application
│── route_optimizer.py         # Core optimization logic
│── tsp_solver.py              # Solves the Traveling Salesman Problem
│── clustering.py              # Clustering of shipments
│── vehicle_assignment.py      # Assigns shipments to vehicles
│── folium_visualizer.py       # Visualizes routes on a map
│── models.py                  # Machine learning models (if any)
│── data/
│   │── shipments.csv          # Shipment details
│   │── vehicles.csv           # Vehicle capacities & constraints
│── static/                    # Static files (if needed)
│── downloads/                 # Stores generated route files
frontend/
│── src/
│   │── components/
│   │   ├── MapComponent.js    # Displays routes on a map
│   │── App.js                 # Main React component
│   │── index.js               # Entry point for the React app
│── public/                    # Static assets

```

    
## Setup Instructions

**Backend (Flask)**

1.Install dependencies:

```bash
  cd backend
  pip install -r requirements.txt

```
2. Run the Flask server:
```bash
  python app.py

```
API will be available at http://127.0.0.1:5000/

**Frontend (React)**

1.Install dependencies:

```bash
  cd frontend
  npm install

```
2. Start the React app:
```bash
  npm start

```
The frontend will run at http://localhost:3000/



## Future Scope

1. Integration of reinforcement learning (RL) models for dynamic optimization.
2. Traffic-aware routing using real-time data.
3. Multi-slot trip optimization for improved delivery efficiency.
4. Use of google maps for real time visualization.


## Demo


