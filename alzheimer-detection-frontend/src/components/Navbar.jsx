import AnimatedContent from "./AnimatedContent"

export default function Navbar() {
  return (
    <AnimatedContent
      distance={10}
      direction="vertical"
      reverse={true}
      config={{ tension: 50, friction: 25 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.0}
    >
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>What is Alzheimer's?</a>
              </li>
              <li>
                <a>Datasets & References</a>
                <ul className="p-2">
                  <li>
                    <a
                      href="https://www.kaggle.com/code/adhamtarek147/alzheimer-s-disease-prediction/input"
                      target="_blank"
                    >
                      Kaggle
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ieeexplore.ieee.org/abstract/document/9459692"
                      target="_blank"
                    >
                      Paper
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Alzheimer Detector</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-xl md:text-lg sm:text-md text-sm">
            <li>
              <a>What is Alzheimer's?</a>
            </li>
            <li>
              <details>
                <summary>Datasets & References</summary>
                <ul className="p-2">
                  <li>
                    <a
                      href="https://www.kaggle.com/code/adhamtarek147/alzheimer-s-disease-prediction/input"
                      target="_blank"
                    >
                      Kaggle
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ieeexplore.ieee.org/abstract/document/9459692"
                      target="_blank"
                    >
                      Paper
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedContent>
  )
}
