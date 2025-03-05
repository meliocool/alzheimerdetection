import { ReactTyped } from "react-typed"

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-max relative z-10 text-center">
          <h1 className="text-7xl font-bold">
            Detect Alzheimer's Early <br></br>with AI
          </h1>
          <div className="flex">
            <p className="py-6 text-2xl">
              Insert your health information, and let the AI decide if
              Alzheimer's
            </p>
            <ReactTyped
              className="py-6 text-2xl font-bold pl-2"
              strings={["true", "false"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <button className="btn btn-outline">Get Started</button>
        </div>
      </div>
    </>
  )
}
