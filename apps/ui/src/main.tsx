import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter, Route, Routes } from "react-router"
import "./styles/index.css"
import routes from "./pages/routes"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Intro from "./pages/Intro"
import RootLayout from "./layouts/RootLayout"
import ClientLayout from "./layouts/ClientLayout"
import AdminLayout from "./layouts/AdminLayout"
import ClientHome from "./pages/Client"
import CardLayout from "./layouts/CardLayout"

const container = document.querySelector("#root")
if (!container) throw new Error("No root element")

createRoot(container).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={routes.base()} element={<Home />} />
          
          <Route element={<CardLayout />}>
            <Route path={routes.intro()} element={<Intro />} />
            <Route path={routes.login()} element={<Login />} />
          </Route>

          <Route element={<ClientLayout />}>
            <Route path={routes.client_home()} element={<ClientHome />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path={routes.admin_dashboard()} element={<ClientHome />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
