import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window

    // For React components, we need to target the actual elements we want to animate
    // Let's select the h1 and p tags inside the container
    const textElements = el.querySelectorAll("h1, p")

    if (textElements.length > 0) {
      // Animate each text element
      textElements.forEach((element) => {
        // Create spans for each character in the element
        const originalText = element.innerText
        element.innerHTML = ""

        const spans = []
        originalText.split("").forEach((char) => {
          const span = document.createElement("span")
          span.className = "inline-block"
          span.textContent = char === " " ? "\u00A0" : char
          element.appendChild(span)
          spans.push(span)
        })

        // Animate the spans
        gsap.fromTo(
          spans,
          {
            willChange: "opacity, transform",
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: "50% 0%",
          },
          {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: stagger,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: scrollStart,
              end: scrollEnd,
              scrub: true,
            },
          }
        )
      })
    } else {
      // Fallback animation for when no text elements are found
      gsap.fromTo(
        el,
        {
          willChange: "opacity, transform",
          opacity: 0,
          y: 50,
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        }
      )
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    children, // Add children to dependencies
  ])

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      {children}
    </div>
  )
}

export default ScrollFloat
