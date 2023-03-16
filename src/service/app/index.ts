import Http from '../request/index'
import { IDataType } from '../request/type'
import { MomentObject } from './type'

/**
 * 请求列表数据
 * @param url 请求路径
 * @param queryInfo 请求参数
 * @returns IDataType
 */

export function getMomentList(offset: number, size: number) {
  return Http.get<IDataType<MomentObject>>(
    `/moment?offset=${offset}&size=${size}`
  )
}
