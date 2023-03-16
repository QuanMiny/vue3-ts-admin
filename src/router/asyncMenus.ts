export interface IAsyncMenus {
  id: number
  parentId?: number | null
  name: string
  type: number // 1 ==> 页面 2 ==> 目录
  url: string
  icon?: string | null
  sort?: number | null
  createAt: string
  updateAt: string
  // permission?: string
  children: IAsyncMenus[]
}

export const mockMenus: IAsyncMenus[] = [
  {
    id: 1,
    parentId: null,
    name: '主面板',
    type: 1,
    url: '/dashboard',
    icon: 'icon-dashboard',
    sort: 1,
    createAt: '2021-04-19T14:11:02.000Z',
    updateAt: '2021-08-20T06:59:55.000Z',
    children: []
  },
  {
    id: 10,
    parentId: null,
    name: '表格',
    type: 1,
    url: '/table',
    icon: 'icon-table',
    sort: 1,
    createAt: '2021-04-19T14:11:02.000Z',
    updateAt: '2021-08-20T06:59:55.000Z',
    children: []
  },
  {
    id: 2,
    parentId: null,
    name: '图表',
    type: 2,
    url: '/charts',
    icon: 'icon-bar-chart',
    sort: 2,
    createAt: '2021-04-19T14:11:02.000Z',
    updateAt: '2021-08-20T06:59:55.000Z',
    children: [
      {
        id: 3,
        parentId: 2,
        name: 'bar',
        type: 1,
        url: '/charts/bar',
        icon: null,
        sort: 1,
        createAt: '2021-04-19T14:11:02.000Z',
        updateAt: '2021-08-20T06:59:55.000Z',
        children: []
      },
      {
        id: 4,
        parentId: 2,
        name: 'line',
        type: 1,
        url: '/charts/line',
        icon: null,
        sort: 2,
        createAt: '2021-04-19T14:11:02.000Z',
        updateAt: '2021-08-20T06:59:55.000Z',
        children: []
      }
    ]
  },
  {
    id: 5,
    parentId: null,
    name: '嵌套页面',
    type: 2,
    url: '/nested',
    icon: 'icon-align-left',
    sort: 3,
    createAt: '2021-04-19T14:11:02.000Z',
    updateAt: '2021-08-20T06:59:55.000Z',
    children: [
      {
        id: 6,
        parentId: 5,
        name: '菜单1-1',
        type: 1,
        url: '/nested/menu1-1',
        icon: null,
        sort: 1,
        createAt: '2021-04-19T14:11:02.000Z',
        updateAt: '2021-08-20T06:59:55.000Z',
        children: []
      },
      {
        id: 7,
        parentId: 5,
        name: '菜单1-2',
        type: 2,
        url: '/nested/menu1-2',
        icon: null,
        sort: 2,
        createAt: '2021-04-19T14:11:02.000Z',
        updateAt: '2021-08-20T06:59:55.000Z',
        children: [
          {
            id: 8,
            parentId: 7,
            name: '菜单1-2-1',
            type: 1,
            url: '/nested/menu1-2/menu1-2-1',
            icon: null,
            sort: 1,
            createAt: '2021-04-19T14:11:02.000Z',
            updateAt: '2021-08-20T06:59:55.000Z',
            children: []
          },
          {
            id: 9,
            parentId: 7,
            name: '菜单1-2-2',
            type: 1,
            url: '/nested/menu1-2/menu1-2-2',
            icon: null,
            sort: 2,
            createAt: '2021-04-19T14:11:02.000Z',
            updateAt: '2021-08-20T06:59:55.000Z',
            children: []
          }
        ]
      }
    ]
  }
]

export const adminMenus: IAsyncMenus[] = [
  {
    id: 100,
    parentId: null,
    name: '权限管理',
    type: 2,
    url: '/permission',
    icon: 'icon-key',
    sort: 1,
    createAt: '2021-04-19T14:11:02.000Z',
    updateAt: '2021-08-20T06:59:55.000Z',
    children: [
      {
        id: 101,
        parentId: 100,
        name: '管理员',
        type: 1,
        url: '/permission/admin',
        icon: null,
        sort: 1,
        createAt: '2021-04-19T14:11:02.000Z',
        updateAt: '2021-08-20T06:59:55.000Z',
        children: []
      }
    ]
  }
]

export const vistorMenus: IAsyncMenus[] = [
  {
    id: 100,
    parentId: null,
    name: '权限管理',
    type: 2,
    url: '/permission',
    icon: 'icon-key',
    sort: 1,
    createAt: '2021-04-19T14:11:02.000Z',
    updateAt: '2021-08-20T06:59:55.000Z',
    children: [
      {
        id: 101,
        parentId: 100,
        name: '普通用户',
        type: 1,
        url: '/permission/vistor',
        icon: null,
        sort: 1,
        createAt: '2021-04-19T14:11:02.000Z',
        updateAt: '2021-08-20T06:59:55.000Z',
        children: []
      }
    ]
  }
]
