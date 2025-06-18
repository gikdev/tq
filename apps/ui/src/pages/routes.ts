const routes = {
  base: () => "/",
  intro: () => "/intro",
  login: () => "/login",
  client_home: () => "/client",
  client_testById_home: (id: string) => `/client/test/${id}`,
  client_testById_test: (id: string) => `/client/test/${id}/test`,
  client_testById_result: (id: string) => `/client/test/${id}/result`,
  admin_dashboard: () => "/admin/dashboard",
}

export default routes
