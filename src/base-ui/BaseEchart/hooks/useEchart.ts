import * as echarts from 'echarts'
import { ECOption } from './type'

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: ECOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    // 延时变化
    setTimeout(() => {
      echartInstance.resize()
    }, 300)
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
