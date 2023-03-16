import { MomentResult } from '@/service/app/type'

export interface IAppState {
  menuCollapse: boolean
  momentList: MomentResult[]
  momentTotal: number
}
