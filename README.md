# AI-Powered Health Insights: Preliminary Alzheimer's Detection Web App

## Overview

This web application provides a user-friendly interface for the preliminary detection of Alzheimer's disease based on health data. Leveraging a trained machine learning model, a responsive React frontend, and a robust Flask backend, the app offers potential insights for healthcare professionals.

---

### Live Demo

[![Alzheimer's Detection Demo Video](https://github.com/meliocool/alzheimerdetection/blob/main/image.png?raw=true)](https://youtu.be/12r6yzwfRIA) 
**Click the image above to watch a full demonstration of the application in action.**

---

### Key Features

* **Predictive Analysis:** Utilizes a trained `.pkl` machine learning model (initially exploring Random Forest and Logistic Regression) to provide potential risk assessments.
* **Intuitive User Interface:** A clean and responsive frontend built with React (JSX) ensures a seamless user experience for inputting health information.
* **Robust API Communication:** A Flask backend provides secure and efficient API endpoints for the frontend to send data and receive predictions.
* **Real-time Feedback:** The application processes user input and returns prediction results with clear visualizations.

### Tech Stack

* **Frontend:** React (JSX), HTML, CSS
* **Backend:** Flask (Python), RESTful API design
* **Machine Learning:** Scikit-learn (for model training & `.pkl` export), Pandas (for data preprocessing)

### Model Development 

* **Data Preprocessing:** Led the cleaning, feature engineering, and preparation of the health data used for training.
* **Model Selection & Training:** Experimented with and trained various models, including Random Forest and Logistic Regression, to achieve optimal performance.
* **Model Serialization:** Implemented the saving of the trained model into a `.pkl` file for seamless integration with the Flask backend.

### Backend & API Development

* Developed a Flask backend and RESTful API endpoints (`POST /predict`) to receive user input from the React frontend and serve the model's predictions.

### Frontend Integration

* Interactive React JSX frontend, focusing on a user-friendly design for data input and clear display of the prediction results.
* Implemented the API calls to communicate with the Flask backend.

### How to Run Locally

1.  Clone the repository: `git clone https://youtu.be/12r6yzwfRIA`
2.  Navigate to the project directory: `cd alzheimer-detection-backend`
3.  Create and activate a virtual environment (recommended):
    * `python -m venv venv`
    * `source venv/bin/activate` (macOS/Linux) or `.\venv\Scripts\activate` (Windows)
4.  Install backend dependencies: `pip install -r requirements.txt` (Adjust path if needed)
5.  Run the Flask backend: `python app.py`
6.  In a separate terminal, navigate to the frontend: `cd alzheimer-detection-frontend`
7.  Install frontend dependencies: `npm install`
8.  Start the React frontend: `npm run dev`
9.  Open a browser tab to the address provided by the React development server (`http://localhost:5173`).

### 🤝 Contributing

This was a group data analytics project.
