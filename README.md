# Web App with PKL Model, React Frontend, and Flask Backend

## Overview
This is a web application that utilizes a trained `.pkl` machine learning model, a React JSX frontend, and a Flask backend. The application allows users to interact with the ML model via the web interface.

## Features
- Machine learning model loaded from a `.pkl` file
- Flask backend for API communication
- React JSX frontend for user interaction
- API endpoints for processing user input and returning results
- Interactive UI with real-time feedback

## Tech Stack
- **Frontend:** React (JSX)
- **Backend:** Flask (Python)
- **Machine Learning:** `.pkl` model (trained in Python)

## Installation
### Prerequisites
Ensure you have the following installed:
- Python 3.8+
- Node.js & npm
- Virtual environment (optional, but recommended)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/meliocool/alzheimerdetection.git
   cd your-repo
   ```
2. Create a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Ensure your `.pkl` model is placed in the appropriate directory (e.g., `models/`).
5. Run the Flask backend:
   ```sh
   python app.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd alzheimer-detection-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm run dev
   ```

## API Endpoints
### `POST /predict`
### 'GET /health'
### 'GET /models'

## Contributing
Feel free to fork the project and submit pull requests.
