import { Link } from "react-router-dom"

type NextPageProps = {
    url?: string,
    title?: string
}
export default function NextPage({url, title} : NextPageProps) {
  return (
    <div className="mt-3 pr-7">
      <span className="text-gray-500 font-bold text-sm flex">Next</span>
      <Link to={`/${url}`} className="text-xl font-bold">{title}</Link>
    </div>
  )
}
