const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  namespace: state => state.header.namespace
};
export default getters
