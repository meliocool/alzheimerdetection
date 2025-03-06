import { ReactTyped } from "react-typed"
import BlurText from "./BlurText"
import AnimatedContent from "./AnimatedContent"

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-max relative z-10 text-center">
          <BlurText
            className="text-7xl font-bold text-center flex justify-center"
            text="Detect Alzheimer's Early with AI"
            delay={150}
            animateBy="words"
            direction="top"
          />
          <div className="flex justify-center">
            <p className="py-6 lg:text-2xl md:text-xl sm:text-lg">
              Insert your health information, and let different AI models decide
              if Alzheimer's ==
              <ReactTyped
                className="py-6 font-bold pl-2 lg:text-2xl md:text-md sm:text-lg"
                strings={["true", "false"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </p>
          </div>
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
            <button className="text-xl btn btn-outline px-6 py-6">
              Get Started
            </button>
          </AnimatedContent>
        </div>
      </div>
    </>
  )
}
