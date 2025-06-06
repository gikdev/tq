import { Outlet } from "react-router"

export default function CardLayout() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center p-5">
      <Outlet />
    </div>
  )
}
