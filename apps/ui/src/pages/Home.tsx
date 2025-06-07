import Cookies from "js-cookie"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import storageKeys from "../shared/storage-keys"
import routes from "./routes"

const isRoleValid = (role: string) => {
  if (role === "admin") return true
  if (role === "client") return true
  return false
}

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const fullName = Cookies.get(storageKeys.fullName)
    const phone = Cookies.get(storageKeys.phone)
    const role = Cookies.get(storageKeys.role)

    alert(`${fullName} ${phone} ${role}`)
    if (fullName && phone && role && isRoleValid(role)) {
      if (role === "admin") {
        navigate(routes.admin_dashboard())
        return
      }

      if (role === "client") {
        navigate(routes.client_home())
        return
      }
    }

    navigate(routes.intro())
  }, [navigate])

  return null
}
