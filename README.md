
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Sneha6003"><img src="https://avatars.githubusercontent.com/u/147996970?v=4?s=100" width="100px;" alt="Sneha6003"/><br /><sub><b>Sneha6003</b></sub></a><br /><a href="https://github.com/Sneha6003/SmartRouteOptimizer/commits?author=Sneha6003" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nancyvora"><img src="https://avatars.githubusercontent.com/u/176607793?v=4?s=100" width="100px;" alt="nancyvora"/><br /><sub><b>nancyvora</b></sub></a><br /><a href="https://github.com/Sneha6003/SmartRouteOptimizer/commits?author=nancyvora" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/neelkheni19"><img src="https://avatars.githubusercontent.com/u/131980752?v=4?s=100" width="100px;" alt="neelkheni19"/><br /><sub><b>neelkheni19</b></sub></a><br /><a href="https://github.com/Sneha6003/SmartRouteOptimizer/commits?author=neelkheni19" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!