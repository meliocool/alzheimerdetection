import Masonry from "./Masonry"
import { Link } from "react-router-dom"

const data = [
  { id: 1, image: "gooner.jpg", height: 1000 },
  { id: 2, image: "samle.jpg", height: 500 },
  { id: 3, image: "diaz.jpg", height: 500 },
  { id: 4, image: "nate.jpg", height: 1000 },
  { id: 5, image: "kharon.jpg", height: 1000 },
  { id: 6, image: "samle2.jpg", height: 500 },
  { id: 7, image: "dhitan.jpg", height: 500 },
  // { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
  // { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
  // { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
]

export default function AboutUs() {
  return (
    <>
      <div className="flex justify-between items-center m-2">
        <Link
          to="/"
          className="bg-white text-black hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
      <Masonry data={data} />
    </>
  )
}
