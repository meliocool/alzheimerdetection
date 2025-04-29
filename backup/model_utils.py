import pickle
import pandas as pd
import numpy as np

def load_model():
    """Load the trained model and scaler"""
    with open('./random_forest/alzheimer_model.pkl', 'rb') as f:
        model = pickle.load(f)
    
    with open('./random_forest/scaler.pkl', 'rb') as f:
        scaler = pickle.load(f)
    
    return model, scaler

def predict_alzheimers(patient_data, model, scaler):
    """
    Make prediction with probability
    Args:
        patient_data: dict of patient features
        model: trained model
        scaler: fitted scaler
    Returns:
        tuple: (prediction, probability)
    """
    # Create DataFrame with correct column order
    expected_columns = [
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
    
    # Create DataFrame with all expected columns
    patient_df = pd.DataFrame(columns=expected_columns)
    
    # Fill in provided values, leave others as NaN (shouldn't happen with proper frontend validation)
    for col in expected_columns:
        if col in patient_data:
            patient_df[col] = [patient_data[col]]
        else:
            patient_df[col] = [np.nan]  # Will raise error if any missing
    
    # Scale the data
    patient_scaled = scaler.transform(patient_df)
    
    # Make prediction
    prediction = model.predict(patient_scaled)[0]
    probability = model.predict_proba(patient_scaled)[0][1]
    
    return prediction, probability