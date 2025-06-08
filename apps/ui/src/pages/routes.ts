const routes = {
  base: () => "/",
  intro: () => "/intro",
  login: () => "/login",
  client_home: () => "/client",
  client_testById: (id: string) => `/client/test/${id}`,
  admin_dashboard: () => "/admin/dashboard",
}

export default routes
