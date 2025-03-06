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
    // Personal Information
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    ethnicity: "",
    education: "",
    familyHistoryAlzheimers: false,

    // Daily Routines
    smoking: false,
    alcoholConsumption: "",
    physicalActivity: "",
    dietQuality: "",
    sleepQuality: "",
    functionalAssessment: "",
    memoryComplaints: false,
    behavioralProblems: false,
    ADL: "",
    confusion: false,
    disorientation: false,
    personalityChanges: false,
    difficultyCompletingTasks: false,
    forgetfulness: false,

    // Medical History
    BMI: "",
    depression: false,
    cardiovascularDisease: false,
    diabetes: false,
    headInjury: false,
    hyperTension: false,
    systolicBP: "",
    diastolicBP: "",
    cholesterolTotal: "",
    cholesterolLDL: "",
    cholesterolHDL: "",
    cholesterolTriglycerides: "",
    MMSE: "",
  })

  // Update form data
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Form pages configuration
  const formPages = [
    {
      title: "Personal Information",
      fields: [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "age", label: "Age", type: "number" },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["", "Male", "Female"],
          columnClass: "col-span-1", // For two-column layout
        },
        {
          name: "ethnicity",
          label: "Ethnicity",
          type: "select",
          options: ["", "Caucasian", "African American", "Asian", "Other"],
          columnClass: "col-span-1", // For two-column layout
        },
        {
          name: "education",
          label: "Education Level",
          type: "select",
          options: ["", "Elementary", "Middle", "High", "Bachelor's", "Higher"],
          columnClass: "col-span-1", // For two-column layout
        },
        {
          name: "familyHistoryOfAlzheimers",
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
          name: "alcoholConsumption",
          label: "Alcohol Consumption",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "physicalActivity",
          label: "Physical Activity",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "dietQuality",
          label: "Diet Quality",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "sleepQuality",
          label: "Sleep Quality",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "Functional Assessment",
          label: "How do you function daily?",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "memoryComplaints",
          label: "Do you have any Memory Complaints?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "behavioralProblems",
          label: "Do you have any Behavioral Problems?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "smoking",
          label: "Do you smoke?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "confusion",
          label: "Do you have any confusion Problems?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "disorientation",
          label: "Do you have any diorientation Problems?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "personalityChanges",
          label: "Do you notice any Personality Changes??",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "difficultyCompletingTasks",
          label: "Do you have any difficulty completing daily tasks?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "forgetfulness",
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
          name: "depression",
          label: "Depression",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "cardiovascularDisease",
          label: "Do you have any Cardiovascular Diseases?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "diabetes",
          label: "Do you have any history of Diabetes?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "headInjury",
          label: "Do you have any Head Injury in the past?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "hyperTension",
          label: "Do you have Hyper Tension?",
          type: "select",
          options: ["", "Yes", "No"],
          columnClass: "col-span-1",
        },
        {
          name: "systolicBP",
          label: "Systolic BP",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "diastolicBP",
          label: "Diastolic BP",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "cholesterolTotal",
          label: "Cholesterol Total",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "cholesterolLDL",
          label: "Cholesterol LDL",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "cholesterolHDL",
          label: "Cholesterol HDL",
          type: "number",
          columnClass: "col-span-1",
        },
        {
          name: "cholesterolTriglycerides",
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
    {
      title: "Choose Model",
      fields: [
        {
          name: "model",
          label: "Choose The Model to be used",
          type: "select",
          options: ["", "Random Forest", "Logistic Regression", "XGBoost"],
          columnClass: "col-span-1",
        },
      ],
    },
  ]

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)
    // Nunggu Modeol dari Damnil
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
                {option || "Select..."}
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
            checked={formData[field.name]}
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
              {formPages.map((page, index) => (
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

          <form onSubmit={handleSubmit}>
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
                        isFullWidth ? "col-span-2" : "col-span-1"
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
                <ResultBtn />
              )}
            </div>
          </form>
        </div>
      </div>
    </AnimatedContent>
  )
}
