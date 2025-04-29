import React, { useState } from "react"
import FormHeader from "./FormHeader"
import AnimatedContent from "./AnimatedContent"
import ResultBtn from "./ResultBtn"

export default function FinalForm() {
  return (
    <div className="min-h-screen">
      <FormHeader />
      <Form />
    </div>
  )
}

function Form() {
  const [currentPage, setCurrentPage] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Age: "",
    gender: "",
    Ethnicity: "",
    Education: "",
    FamilyHistoryAlzheimers: "",
    Smoking: "",
    AlcoholConsumption: "",
    PhysicalActivity: "",
    DietQuality: "",
    SleepQuality: "",
    FunctionalAssessment: "",
    MemoryComplaints: "",
    BehavioralProblems: "",
    ADL: "",
    Confusion: "",
    Disorientation: "",
    PersonalityChanges: "",
    DifficultyCompletingTasks: "",
    Forgetfulness: "",
    BMI: "",
    Depression: "",
    CardiovascularDisease: "",
    Diabetes: "",
    HeadInjury: "",
    Hypertension: "",
    SystolicBP: "",
    DiastolicBP: "",
    CholesterolTotal: "",
    CholesterolLDL: "",
    CholesterolHDL: "",
    CholesterolTriglycerides: "",
    MMSE: "",
  })

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  // Update form data
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? "Yes" : "No") : value,
    })
  }

  // Form pages configuration
  const formPages = [
    {
      title: "Personal Information",
      fields: [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "Age", label: "Age", type: "number" },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["", "Male", "Female"],
          columnClass: "col-span-1", // For two-column layout
        },
        {
          name: "Ethnicity",
          label: "Ethnicity",
          type: "select",
          options: ["", "Caucasian", "African American", "Asian", "Other"],
          columnClass: "col-span-1", // For two-column layout
        },
        {
          name: "Education",
          label: "Education Level",
          type: "select",
          options: ["", "High", "Bachelor's", "Higher"],
          columnClass: "col-span-1", // For two-column layout
        },
        {
          name: "FamilyHistoryAlzheimers",
          label: "Does anyone in your family has Alzheimer?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1", // For two-column layout
        },
      ],
    },
    {
      title: "Daily Routines",
      fields: [
        {
          name: "ADL",
          label: "ADL",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "AlcoholConsumption",
          label: "Alcohol Consumption",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "PhysicalActivity",
          label: "Physical Activity",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "DietQuality",
          label: "Diet Quality",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "SleepQuality",
          label: "Sleep Quality",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "FunctionalAssessment",
          label: "How do you function daily?",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "MemoryComplaints",
          label: "Do you have any Memory Complaints?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "BehavioralProblems",
          label: "Do you have any Behavioral Problems?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "Smoking",
          label: "Do you smoke?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "Confusion",
          label: "Do you have any confusion Problems?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "Disorientation",
          label: "Do you have any disorientation Problems?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "PersonalityChanges",
          label: "Do you notice any Personality Changes??",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "DifficultyCompletingTasks",
          label: "Do you have any difficulty completing daily tasks?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "Forgetfulness",
          label: "Do you have any forgetfulness?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
      ],
    },
    {
      title: "Medical History",
      fields: [
        {
          name: "BMI",
          label: "BMI",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "Depression",
          label: "Depression",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "CardiovascularDisease",
          label: "Do you have any Cardiovascular Diseases?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "Diabetes",
          label: "Do you have any history of Diabetes?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "HeadInjury",
          label: "Do you have any Head Injury in the past?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "Hypertension",
          label: "Do you have Hyper Tension?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "SystolicBP",
          label: "Systolic BP",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "DiastolicBP",
          label: "Diastolic BP",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "CholesterolTotal",
          label: "Cholesterol Total",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "CholesterolLDL",
          label: "Cholesterol LDL",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "CholesterolHDL",
          label: "Cholesterol HDL",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "CholesterolTriglycerides",
          label: "Cholesterol Triglycerides",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "MMSE",
          label: "MMSE",
          type: "number",
          columnClass: "col-span-1",
        },
      ],
    },
  ]

  // Prepare data for the model
  // const prepareDataForModel = () => {
  //   // Map form data to the expected model input format
  //   const processedData = {
  //     // Numerical features
  //     Age: parseFloat(formData.age) || 0,
  //     BMI: parseFloat(formData.BMI) || 0,
  //     AlcoholConsumption: parseFloat(formData.alcoholConsumption) || 0,
  //     PhysicalActivity: parseFloat(formData.physicalActivity) || 0,
  //     DietQuality: parseFloat(formData.dietQuality) || 0,
  //     SleepQuality: parseFloat(formData.sleepQuality) || 0,
  //     SystolicBP: parseFloat(formData.systolicBP) || 0,
  //     DiastolicBP: parseFloat(formData.diastolicBP) || 0,
  //     CholesterolTotal: parseFloat(formData.cholesterolTotal) || 0,
  //     CholesterolLDL: parseFloat(formData.cholesterolLDL) || 0,
  //     CholesterolHDL: parseFloat(formData.cholesterolHDL) || 0,
  //     CholesterolTriglycerides:
  //       parseFloat(formData.cholesterolTriglycerides) || 0,
  //     MMSE: parseFloat(formData.MMSE) || 0,
  //     FunctionalAssessment: parseFloat(formData.functionalAssessment) || 0,
  //     ADL: parseFloat(formData.ADL) || 0,

  //     // Categorical features (sent as strings)
  //     Gender: formData.gender || "Male",
  //     Ethnicity: formData.ethnicity || "Caucasian",
  //     EducationLevel: formData.education || "None",
  //     Smoking: formData.smoking || "No",
  //     FamilyHistoryAlzheimers: formData.familyHistoryOfAlzheimers || "No",
  //     CardiovascularDisease: formData.cardiovascularDisease || "No",
  //     Diabetes: formData.diabetes || "No",
  //     Depression: formData.depression || "No",
  //     HeadInjury: formData.headInjury || "No",
  //     Hypertension: formData.hyperTension || "No",
  //     MemoryComplaints: formData.memoryComplaints || "No",
  //     BehavioralProblems: formData.behavioralProblems || "No",
  //     Confusion: formData.confusion || "No",
  //     Disorientation: formData.disorientation || "No",
  //     PersonalityChanges: formData.personalityChanges || "No",
  //     DifficultyCompletingTasks: formData.difficultyCompletingTasks || "No",
  //     Forgetfulness: formData.forgetfulness || "No",
  //   }

  //   return processedData
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Format data before sending
      const processedData = {
        Age: parseFloat(formData.Age) || 0,
        BMI: parseFloat(formData.BMI) || 0,
        AlcoholConsumption: parseFloat(formData.AlcoholConsumption) || 0,
        PhysicalActivity: parseFloat(formData.PhysicalActivity) || 0,
        DietQuality: parseFloat(formData.DietQuality) || 0,
        SleepQuality: parseFloat(formData.SleepQuality) || 0,
        SystolicBP: parseFloat(formData.SystolicBP) || 0,
        DiastolicBP: parseFloat(formData.DiastolicBP) || 0,
        CholesterolTotal: parseFloat(formData.CholesterolTotal) || 0,
        CholesterolLDL: parseFloat(formData.CholesterolLDL) || 0,
        CholesterolHDL: parseFloat(formData.CholesterolHDL) || 0,
        CholesterolTriglycerides:
          parseFloat(formData.CholesterolTriglycerides) || 0,
        MMSE: parseFloat(formData.MMSE) || 0,
        FunctionalAssessment: parseFloat(formData.FunctionalAssessment) || 0,
        ADL: parseFloat(formData.ADL) || 0,

        // Categorical features
        Gender: formData.gender,
        Ethnicity: formData.Ethnicity,
        EducationLevel: formData.Education,
        Smoking: formData.Smoking,
        FamilyHistoryAlzheimers: formData.FamilyHistoryAlzheimers,
        CardiovascularDisease: formData.CardiovascularDisease,
        Diabetes: formData.Diabetes,
        Depression: formData.Depression,
        HeadInjury: formData.HeadInjury,
        Hypertension: formData.Hypertension,
        MemoryComplaints: formData.MemoryComplaints,
        BehavioralProblems: formData.BehavioralProblems,
        Confusion: formData.Confusion,
        Disorientation: formData.Disorientation,
        PersonalityChanges: formData.PersonalityChanges,
        DifficultyCompletingTasks: formData.DifficultyCompletingTasks,
        Forgetfulness: formData.Forgetfulness,
      }

      console.log("Sending data:", processedData) // Debug log

      const response = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        )
      }

      const data = await response.json()
      console.log("Received response:", data) // Debug log
      setResult(data)
    } catch (err) {
      setError(err.message)
      console.error("Error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Pagination
  const nextPage = () => {
    if (currentPage < formPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Render form fields
  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "number":
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )
      case "select":
        return (
          <select
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option === ""
                  ? "Select..."
                  : option === "XGBoost"
                  ? "XGBoost"
                  : option === "Random Forest"
                  ? "Random Forest"
                  : option === "Logistic Regression"
                  ? "Logistic Regression"
                  : option}
              </option>
            ))}
          </select>
        )
      case "checkbox":
        return (
          <input
            type="checkbox"
            id={field.name}
            name={field.name}
            checked={formData[field.name] === "Yes"}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        )
      case "textarea":
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )
      default:
        return null
    }
  }
  // Calculate progress percentage
  const progressPercentage = ((currentPage + 1) / formPages.length) * 100

  return (
    <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
    >
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="mb-6">
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              {formPages.map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    currentPage === index ? "font-bold text-blue-600" : ""
                  }`}
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          <form>
            {!result ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {formPages[currentPage].title}
                  </h2>

                  {/* Two-column grid layout */}
                  <div className="grid grid-cols-2 gap-4">
                    {formPages[currentPage].fields.map((field) => {
                      // Determine if this field should be full width or half width
                      const isFullWidth =
                        currentPage === 0 &&
                        ["firstName", "lastName", "age"].includes(field.name)

                      return (
                        <div
                          key={field.name}
                          className={`form-group ${
                            isFullWidth || field.columnClass
                              ? field.columnClass || "col-span-2"
                              : "col-span-1"
                          }`}
                        >
                          <label
                            htmlFor={field.name}
                            className="block mb-2 font-medium text-gray-700"
                          >
                            {field.label}
                          </label>
                          {renderField(field)}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`px-4 py-2 rounded-md cursor-pointer ${
                      currentPage === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-gray-600 text-white hover:bg-gray-700"
                    }`}
                  >
                    Previous
                  </button>

                  {currentPage < formPages.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextPage}
                      className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button" // Change from "submit" to "button"
                      onClick={handleSubmit} // Add this onClick handler
                      disabled={loading}
                      className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-300"
                    >
                      {loading ? "Processing..." : "Get Results"}
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Alzheimer's Detection Results
                </h2>

                <div
                  className={`p-4 mb-6 rounded-md ${
                    result.prediction === 1
                      ? "bg-red-100 border border-red-400"
                      : "bg-green-100 border border-green-400"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {result.prediction === 1
                      ? "Positive: Alzheimer's Detected"
                      : "Negative: Alzheimer's Not Detected"}
                  </h3>
                  <p className="text-gray-700">
                    The model predicts a {(result.probability * 100).toFixed(2)}
                    % probability of Alzheimer's disease.
                  </p>
                  <p className="text-gray-700">
                    Interpretation: {result.interpretation}
                  </p>
                  <p className="text-gray-700">
                    Confidence: {result.confidence}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Patient Information:
                  </h4>
                  <p>
                    Name: {formData.firstName} {formData.lastName}
                  </p>
                  <p>Age: {formData.Age}</p>
                  <p>Gender: {formData.gender}</p>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Go Back to Form
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        // Reset form data to initial state
                        firstName: "",
                        lastName: "",
                        age: "",
                        gender: "",
                        ethnicity: "",
                        education: "",
                        familyHistoryOfAlzheimers: "",
                        smoking: "",
                        alcoholConsumption: "",
                        physicalActivity: "",
                        dietQuality: "",
                        sleepQuality: "",
                        functionalAssessment: "",
                        memoryComplaints: "",
                        behavioralProblems: "",
                        ADL: "",
                        confusion: "",
                        disorientation: "",
                        personalityChanges: "",
                        difficultyCompletingTasks: "",
                        forgetfulness: "",
                        BMI: "",
                        depression: "",
                        cardiovascularDisease: "",
                        diabetes: "",
                        headInjury: "",
                        hyperTension: "",
                        systolicBP: "",
                        diastolicBP: "",
                        cholesterolTotal: "",
                        cholesterolLDL: "",
                        cholesterolHDL: "",
                        cholesterolTriglycerides: "",
                        MMSE: "",
                        model: "Random Forest",
                      })
                      setCurrentPage(0)
                      setResult(null)
                    }}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  >
                    Start New Assessment
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                <p>
                  <strong>Error:</strong> {error}
                </p>
                <p className="mt-2">Please check your inputs and try again.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </AnimatedContent>
  )
}
