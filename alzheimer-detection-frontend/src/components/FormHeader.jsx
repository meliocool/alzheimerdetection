import ScrollFloat from "./ScrollFloat.jsx"

export default function FormHeader() {
  return (
    <ScrollFloat
      animationDuration={0.4}
      ease="back.inOut(2)"
      scrollStart="center bottom+=30%"
      scrollEnd="bottom bottom-=60%"
      stagger={0.02}
    >
      <div className="flex flex-col items-center">
        <div className="lg:mt-16 md:mt-12 sm:mt-8 mt-6">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-bold">
            To get started, fill in these fields
          </h1>
          <p className="md:py-5 py-3 lg:text-xl md:text-lg sm:text-md text-sm text-center">
            Note that the information given will effect the result accuracy
          </p>
        </div>
      </div>
    </ScrollFloat>
  )
}
