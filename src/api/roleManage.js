import request from '@/utils/request'

export default {
  // 查询所有角色列表
  getALLRole() {
    return request({
      url: '/role/all',
      method: 'get'
    })
  },
  getRoleList(searchMoudle) {
    return request({
      url: 'role/list',
      method: 'get',
      params: {
        pageNo: searchMoudle.pageNo,
        pageSize: searchMoudle.pageSize,
        roleName: searchMoudle.roleName
      }
    })
  },

  addRole(role) {
    return request({
      url: '/role',
      method: 'post',
      data: role
    })
  },

  getRoleById(id) {
    return request({
      // url: '/user' + id,
      url: `/role/${id}`,
      method: 'get'
    })
  },

  updateRole(role) {
    return request({
      url: '/role',
      method: 'put',
      data: role
    })
  },

  saveRole(role) {
    if (role.roleId == null || role.roleId == undefined) {
      return this.addRole(role)
    }
    return this.updateRole(role)
  },

  deleteRoleById(id) {
    return request({
      url: `/role/${id}`,
      method: 'delete'
    })
  }

}

