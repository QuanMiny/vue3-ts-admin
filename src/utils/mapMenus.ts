import { RouteRecordRaw } from 'vue-router'
import { IAsyncMenus } from '@/router/asyncMenus'
import { IBreadcrumb } from '@/components/Breadcrumb/type'

const modules = import.meta.glob('../views/**/*.vue')

/**
 * 生成路由表
 * @param userMenus 用户路由
 * @returns {Array}
 */

export function mapMenusToRoutes(userMenus: IAsyncMenus[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const _recurseGetRoute = (menus: IAsyncMenus[], isFirst = true) => {
    for (const menu of menus) {
      if (menu.type === 1) {
        const accessRoutes: RouteRecordRaw = {
          path: String(menu.url),
          component: modules[`../views${menu.url}/Index.vue`],
          meta: { title: menu.name, icon: isFirst ? menu.icon : '' }
        }
        if (accessRoutes) routes.push(accessRoutes)
      } else if (menu.type === 2) {
        _recurseGetRoute(menu.children, false)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

export function mapPathToBreadcrumb(
  userMenus: IAsyncMenus[],
  currentPath: string
): IBreadcrumb[] {
  const breadcrumb: IBreadcrumb[] = []

  // const currentMenu = pathMapCurrentMenu(userMenus, currentPath)
  // parentIdMapBreadcrumb(userMenus, currentMenu?.parentId, breadcrumb)
  // console.log(currentPath) //  /nested/menu1-2/menu1-2-2

  for (const menu of userMenus) {
    if (menu.type === 1 && menu.url === currentPath) {
      breadcrumb.push({ name: menu.name })
      break
    } else if (menu.type === 2) {
      for (const b of menu.children) {
        if (b.url === currentPath) {
          breadcrumb.push({ name: menu.name })
          breadcrumb.push({ name: b.name })
          break
        } else if (b.type === 2) {
          for (const c of b.children) {
            if (c.url === currentPath) {
              breadcrumb.push({ name: menu.name })
              breadcrumb.push({ name: b.name })
              breadcrumb.push({ name: c.name })
              break
            }
          }
        }
      }
    }
  }
  // pathMapToMenu(userMenus, currentPath, breadcrumb)
  return breadcrumb
}

// export function pathMapToMenu(
//   userMenus: any[],
//   currentPath: string,
//   breadcrumbs?: IBreadcrumb[]
// ): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1 && menu.url === currentPath) {
//       breadcrumbs?.push({ name: menu.name })
//       return menu
//     } else if (menu.type === 2) {
//       const findMenu = pathMapToMenu(menu.children, currentPath)
//       if (findMenu) {
//         breadcrumbs?.push({ name: menu.name })
//         breadcrumbs?.push({ name: findMenu.name })
//         return findMenu
//       } else if (menu.children.type === 2) {
//         pathMapToMenu(menu.children.children, currentPath)
//       }
//     }
//   }
// }

// function pathMapCurrentMenu(
//   userMenus: IAsyncMenus[],
//   currentPath: string
// ): IAsyncMenus | undefined {
//   for (const menu of userMenus) {
//     if (menu.type === 1 && menu.url === currentPath) {
//       return menu
//     } else if (menu.type === 2) {
//       const findMenu = pathMapCurrentMenu(menu.children, currentPath)
//       if (findMenu) {
//         return findMenu
//       }
//     }
//   }
// }

// function parentIdMapBreadcrumb(
//   userMenus: IAsyncMenus[],
//   parentId: number,
//   breadcrumb: IBreadcrumb[]
// ): any {
//   for (const menu of userMenus) {
//     if (menu.id === parentId) {
//       breadcrumb.push({ name: menu.name })
//       if (menu.parentId !== null) {
//         parentIdMapBreadcrumb(userMenus, menu.parentId as number, breadcrumb)
//       }
//     }
//   }
// }
