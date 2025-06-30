import { Outlet } from "react-router"

export default function ClientLayout() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-4 min-h-dvh">
      <div className="overflow-y-hidden bg-slate-1 border border-slate-6 min-h-dvh max-w-100 min-w-10 w-full flex flex-col">
        <Outlet />
      </div>
    </div>
  )
}
