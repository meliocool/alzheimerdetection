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

def load_model_and_scaler(model_name="Random Forest"):
    try:
        model_folders = {
            "Random Forest": "random_forest",
            "Logistic Regression": "logistic_regression"
        }
        model_files = {
            "Random Forest": "alzheimer_model_hpt.pkl", 
            "Logistic Regression": "alzheimer_model_logreg_tuned.pkl" 
        }
        scaler_file = "scaler.pkl"

        folder = model_folders.get(model_name)
        model_file = model_files.get(model_name)

        if not folder or not model_file:
            raise ValueError(f"Model '{model_name}' is not supported.")

        model_path = os.path.join(folder, model_file)
        scaler_path = os.path.join(folder, scaler_file)

        if not os.path.exists(model_path) or not os.path.exists(scaler_path):
            raise FileNotFoundError(f"Model or scaler file not found for {model_name}")
        model = joblib.load(model_path)
        scaler = joblib.load(scaler_path)

        print(f"{model_name} model and scaler loaded successfully!")
        return model, scaler
    except Exception as e:
        print(f"Error loading model and scaler: {e}")
        return None, None

# Initialize model and scaler
print("Initializing server and loading model...")
model, scaler = load_model_and_scaler()

def format_input_data(data):
    try:
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
        data = request.json
        print("\nReceived data:", json.dumps(data, indent=2))

        selected_model = data.get("Model", "Random Forest")
        print(f"Selected model: {selected_model}")

        model, scaler = load_model_and_scaler(selected_model)
        if not model or not scaler:
            return jsonify({
                'status': 'error',
                'message': f"Failed to load the {selected_model} model."
            }), 500

        formatted_data = format_input_data(data)
        input_df = pd.DataFrame([formatted_data])

        scaled_data = scaler.transform(input_df)
        
        prediction = int(model.predict(scaled_data)[0])
        probabilities = model.predict_proba(scaled_data)[0]

        alzheimer_prob = float(format(probabilities[1], '.4f'))
        no_alzheimer_prob = float(format(probabilities[0], '.4f'))

        processing_time = time.time() - start_time

        response = jsonify({
            'status': 'success',
            'prediction': prediction,
            'prediction_label': 'Has Alzheimer\'s' if prediction == 1 else 'No Alzheimer\'s',
            'probability': alzheimer_prob,
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