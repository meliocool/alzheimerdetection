from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
import os
import time
import json

app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Constants
MODELS_DIR = './random_forest'

# Load model and scaler
def load_model_and_scaler():
    """Load the Random Forest model and scaler"""
    try:
        model_path = os.path.join(MODELS_DIR, 'alzheimer_model.pkl')
        scaler_path = os.path.join(MODELS_DIR, 'scaler.pkl')

        if not all(os.path.exists(p) for p in [model_path, scaler_path]):
            print("Model or scaler file is missing!")
            return None, None

        model = joblib.load(model_path)
        scaler = joblib.load(scaler_path)
        
        print("Model and scaler loaded successfully!")
        return model, scaler
    except Exception as e:
        print(f"Error loading model and scaler: {e}")
        return None, None

# Initialize model and scaler
print("Initializing server and loading model...")
model, scaler = load_model_and_scaler()

def format_input_data(data):
    """Format input data to match model requirements"""
    try:
        # Define the exact feature order from training
        feature_order = [
            'Age', 'Gender', 'Ethnicity', 'EducationLevel', 'BMI', 'Smoking',
            'AlcoholConsumption', 'PhysicalActivity', 'DietQuality', 'SleepQuality',
            'FamilyHistoryAlzheimers', 'CardiovascularDisease', 'Diabetes',
            'Depression', 'HeadInjury', 'Hypertension', 'SystolicBP', 'DiastolicBP',
            'CholesterolTotal', 'CholesterolLDL', 'CholesterolHDL',
            'CholesterolTriglycerides', 'MMSE', 'FunctionalAssessment',
            'MemoryComplaints', 'BehavioralProblems', 'ADL', 'Confusion',
            'Disorientation', 'PersonalityChanges', 'DifficultyCompletingTasks',
            'Forgetfulness'
        ]

        # First format the data with exact same encoding as notebook
        formatted_data = {
            # Numerical features - exact float values
            'Age': float(data.get('Age')),
            'BMI': float(data.get('BMI')),
            'AlcoholConsumption': float(data.get('AlcoholConsumption')),
            'PhysicalActivity': float(data.get('PhysicalActivity')),
            'DietQuality': float(data.get('DietQuality')),
            'SleepQuality': float(data.get('SleepQuality')),
            'SystolicBP': float(data.get('SystolicBP')),
            'DiastolicBP': float(data.get('DiastolicBP')),
            'CholesterolTotal': float(data.get('CholesterolTotal')),
            'CholesterolLDL': float(data.get('CholesterolLDL')),
            'CholesterolHDL': float(data.get('CholesterolHDL')),
            'CholesterolTriglycerides': float(data.get('CholesterolTriglycerides')),
            'MMSE': float(data.get('MMSE')),
            'FunctionalAssessment': float(data.get('FunctionalAssessment')),
            'ADL': float(data.get('ADL')),

            # Categorical features - match notebook encoding exactly
            'Gender': 0 if data.get('Gender') == 'Male' else 1,
            'Ethnicity': {
                'Caucasian': 0,
                'African American': 1,
                'Asian': 2,
                'Other': 3
            }.get(data.get('Ethnicity', 'Caucasian')),
            'EducationLevel': {
                'None': 0,
                'High': 1,
                "Bachelor's": 2,
                'Higher': 3
            }.get(data.get('EducationLevel')),
            
            # Boolean features - convert to exact integers as in notebook
            'Smoking': 1 if data.get('Smoking') == 'Yes' else 0,
            'FamilyHistoryAlzheimers': 1 if data.get('FamilyHistoryAlzheimers') == 'Yes' else 0,
            'CardiovascularDisease': 1 if data.get('CardiovascularDisease') == 'Yes' else 0,
            'Diabetes': 1 if data.get('Diabetes') == 'Yes' else 0,
            'Depression': 1 if data.get('Depression') == 'Yes' else 0,
            'HeadInjury': 1 if data.get('HeadInjury') == 'Yes' else 0,
            'Hypertension': 1 if data.get('Hypertension') == 'Yes' else 0,
            'MemoryComplaints': 1 if data.get('MemoryComplaints') == 'Yes' else 0,
            'BehavioralProblems': 1 if data.get('BehavioralProblems') == 'Yes' else 0,
            'Confusion': 1 if data.get('Confusion') == 'Yes' else 0,
            'Disorientation': 1 if data.get('Disorientation') == 'Yes' else 0,
            'PersonalityChanges': 1 if data.get('PersonalityChanges') == 'Yes' else 0,
            'DifficultyCompletingTasks': 1 if data.get('DifficultyCompletingTasks') == 'Yes' else 0,
            'Forgetfulness': 1 if data.get('Forgetfulness') == 'Yes' else 0
        }

        # Create DataFrame and ensure exact column order
        df = pd.DataFrame([formatted_data])
        df = df[feature_order]
        print("\nFormatted data matches notebook format:")
        print(df.to_string())
        return df.iloc[0].to_dict()

    except Exception as e:
        print(f"Error formatting data: {e}")
        raise ValueError(f"Error formatting input data: {str(e)}")

@app.route('/api/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()

    start_time = time.time()
    
    try:
        if not model or not scaler:
            return jsonify({
                'status': 'error',
                'message': 'Model not loaded'
            }), 500

        # Get and format input data
        data = request.json
        print("\nReceived data:", json.dumps(data, indent=2))
        
        formatted_data = format_input_data(data)
        print("\nFormatted data:", json.dumps(formatted_data, indent=2))
        
        # Convert to DataFrame and scale
        input_df = pd.DataFrame([formatted_data])
        print("\nInput DataFrame shape:", input_df.shape)
        
        # Scale the data
        scaled_data = scaler.transform(input_df)
        print("\nScaled data shape:", scaled_data.shape)
        
        # Make prediction
        prediction = int(model.predict(scaled_data)[0])
        probabilities = model.predict_proba(scaled_data)[0]
        
        # Format probabilities with consistent precision
        alzheimer_prob = float(format(probabilities[1], '.4f'))
        no_alzheimer_prob = float(format(probabilities[0], '.4f'))
        
        print("\nPrediction results:")
        print(f"Raw prediction: {prediction}")
        print(f"Raw probabilities: {probabilities}")
        print(f"Formatted probabilities: No Alzheimer's = {no_alzheimer_prob}, Has Alzheimer's = {alzheimer_prob}")

        processing_time = time.time() - start_time

        response = jsonify({
            'status': 'success',
            'prediction': prediction,
            'prediction_label': 'Has Alzheimer\'s' if prediction == 1 else 'No Alzheimer\'s',
            'probability': alzheimer_prob,  # Using formatted probability
            'probability_not_alzheimer': no_alzheimer_prob,
            'probability_alzheimer': alzheimer_prob,
            'processing_time': round(processing_time, 2),
            'interpretation': 'High risk of Alzheimer\'s' if prediction == 1 else 'Low risk of Alzheimer\'s',
            'confidence': f"{max(no_alzheimer_prob, alzheimer_prob):.1%}"
        })
        
        return _corsify_actual_response(response)

    except Exception as e:
        print(f"Error during prediction: {e}")
        return _corsify_actual_response(jsonify({
            'status': 'error',
            'message': str(e)
        })), 500

def _build_cors_preflight_response():
    response = jsonify({'status': 'success'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    return response

def _corsify_actual_response(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)