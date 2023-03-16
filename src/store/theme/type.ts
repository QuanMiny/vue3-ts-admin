export interface IThemeState {
  styles: IThemeStyles
}

interface IThemeStyles {
  isLogo: boolean //是否展示logo
  headerBg: string //头部背景颜色
  mainBg: string //主体内容背景颜色
  asideBg: string //侧边栏背景颜色
  menuBg: string //菜单栏背景颜色
  menuTextColor: string //菜单栏字体颜色
  menuTextActiveColor: string //菜单栏选中字体颜色
  menuActiveBg: string
  subMenuBg: string //子菜单栏背景颜色
  subMenuHover: string //子菜单栏悬浮颜色
  subMenuActive: string //子菜单选中背景颜色
}
