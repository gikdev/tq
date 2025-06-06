import { useNavigate } from "react-router"
import routes from "./routes"

export default function Intro() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col bg-slate-2 border border-slate-6 p-5 gap-5 text-center rounded-lg max-w-96 w-full items-center">
      <img src="/light-bulb.png" className="w-60" />

      <h1 className="text-3xl font-black text-slate-12">وقت خودشناسیه 😉</h1>

      <p className="">
        اینجا میتونی کلی تست مختلف انجام بدی و بیشتر خودت و وضعیتی که داری رو بشناسی!
      </p>

      <button
        type="button"
        className="cursor-pointer p-3 bg-blue-9 hover:bg-blue-10 text-slate-1 rounded-lg active:scale-95"
        onClick={() => navigate(routes.login())}
      >
        بریم که شروع کنیم!
      </button>
    </div>
  )
}
