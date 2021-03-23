<template>
  <div class="box">
    <van-nav-bar title="xxx" left-arrow fixed />
    <div class="con">
      <div class="charts">
        <!-- 事件类型分析饼图 -->
        <ve-histogram
          :data="option"
          :settings="chartSettings"
          :colors="colors"
          :extend="extend"
          :loading="loading"
        ></ve-histogram>
      </div>
    </div>
  </div>
</template>

<script>
import 'v-charts/lib/style.css'
import 'echarts/lib/component/dataZoom'
export default {
  data() {
    this.chartSettings = {
      // limitShowNum: 5
      dimension: ['日期', '日期'],
      axisSite: { right: ['下单率'] },
      showLine: ['下单率'],
      yAxisName: ['老张', '老季'],
      opacity: 0.5
    }
    return {
      colors: ['red', 'green', '#f0f'],

      extend: {
        // x轴的文字倾斜
        'xAxis.0.axisLabel.rotate': 45,
        yAxis: {
          //是否显示y轴线条
          axisLine: {
            show: true,
            lineStyle: {
              color: '#999'
            }
          },
          // 纵坐标网格线设置，同理横坐标
          splitLine: {
            show: true
          }

          // 线条位置
          // position: 'left'
        },
        xAxis: {
          axisLine: {
            show: true
          },
          axisLabel: {
            formatter: v => {
              return v.substring(5, 10)
            }
          }
        },
        series: {
          label: {
            show: true,
            position: 'top',
            formatter: function(val) {
              return `${val.value}个`
            }
          },
          // 配置去掉折线图的点
          smooth: false,
          symbol: 'none'
        },
        //数据过多时出现横向滚动条
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 50
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 50
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: function(data) {
            return `日期：${data.name}<br/>下单用户：${data.value}`
          }
        }
      },

      option: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '2020-01-11',
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: '2020-01-12',
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: '2020-01-13',
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: '2020-01-14',
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: '2020-01-15',
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          { 日期: '2020-01-16', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      loading: false
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
.box {
  padding-bottom: 45px;
  min-height: 100vh;
  background: #f4f5f6;
  color: black;
  font-size: 14px;
  .con {
    padding-top: 45px;
  }
}
</style>