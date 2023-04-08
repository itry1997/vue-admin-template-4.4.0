const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  menuList: state => state.user.menuList,
  visitedViews: state => state.tagView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  permission_router: state => state.permission.routes
}
export default getters
