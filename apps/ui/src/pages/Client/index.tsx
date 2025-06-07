import { GlobeIcon } from "@phosphor-icons/react"
import { Link } from "react-router"
import routes from "../routes"

const Nav = () => (
  <nav className="bg-slate-2 border border-slate-6 flex items-center justify-between rounded-md overflow-hidden">
    <Link className="flex items-center gap-2 hover:bg-slate-3 p-2" to={routes.base()}>
      <img src="/logo.png" className="w-6 rounded-full" />
      <span className="text-slate-12">پرسش‌نامه</span>
    </Link>

    <a className="flex items-center gap-2 hover:bg-slate-3 p-2" href="https://toranjctr.com/">
      <GlobeIcon size={24} />
    </a>
  </nav>
)

export default function ClientHome() {
  return (
    <div className="flex flex-col h-full p-2 gap-5">
      <Nav />
    </div>
  )
}
