import { Link } from "react-router-dom"
import AnimatedContent from "./AnimatedContent"

export default function DataAnalysis() {
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
      <div className="min-h-screen p-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="bg-white text-black hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">
            Data Analysis and Visualization
          </h1>
        </div>
      </div>
    </AnimatedContent>
  )
}
