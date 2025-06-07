import { Outlet } from "react-router"

export default function ClientLayout() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-4 h-dvh">
      <div className="overflow-y-auto bg-slate-1 border border-slate-6 h-dvh max-w-100 min-w-10 w-full flex flex-col">
        <Outlet />
      </div>
    </div>
  )
}
