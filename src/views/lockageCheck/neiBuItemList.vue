<template>
  <div class="box">
    <van-nav-bar title="开闭店检查" left-text="首页" @click-left="onClickLeft" left-arrow>
      <template #right>
        <img src="../../images/图标/日期.png" style="width:25px;height:25px" @click="isShow" />
      </template>
    </van-nav-bar>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="top" :style="{ height: '100%' }">
      <van-cell-group class="flex">
        <van-field v-model="time" placeholder="开始时间" readonly @click="kaiShi" />-
        <van-field v-model="time1" placeholder="结束时间" readonly @click="jieShu" />
      </van-cell-group>
      <!-- 时间选择 -->
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择开始时间"
        :min-date="minDate"
        :max-date="maxDate"
        v-if="startTime"
        @confirm="okTime"
        @cancel="startTime = false"
      />
      <van-datetime-picker
        v-model="currentDate1"
        type="date"
        title="选择结束时间"
        :min-date="minDate1"
        :max-date="maxDate"
        v-if="endTime"
        @confirm="overTime"
        @cancel="endTime = false"
      />
      <!-- 事件状态 -->
      <div class="baoShiType flex_f" v-if="tiaoJian">
        <p>报事类型:</p>
        <span
          v-for="(item,i) in baoShiType"
          :key="i"
          @click="leftChange(item.id,i)"
          :class="{discolor:changeLeftBackground == i}"
        >{{item.name}}</span>
      </div>
      <!-- 按钮 -->
      <div class="btn flex">
        <van-button color="#999" @click="show = false">取消</van-button>
        <van-button color="#a48f36" @click="end">确认</van-button>
      </div>
    </van-popup>
    <!-- 搜索框 -->
    <van-search v-model="value" show-action shape="round" placeholder="模糊搜索：商户名">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="con">
      <van-tabs v-model="active" color="#000" background="#fff" :sticky="true" @change="tab">
        <Mescroll-vue
          ref="mescroll"
          :up="mescrollUp"
          @init="mescrollInit"
          :class="active<3?'mescroll':'mescroll1'"
        >
          <!-- 代我处理 -->
          <van-tab title="未开始">
            <div class="null" v-if="list.length==0">暂无记录~</div>
            <div class="minBox" v-for="(item,i) in list" :key="i">
              <van-checkbox
                v-model="item.checked"
                @click="fuXuan(item.detail_id,item.checked)"
                :disabled="item.groupAdmin == 1?false:true"
                v-if="isFlag"
              ></van-checkbox>
              <div class="flex col" @click.stop="sign4(item.detail_id,'4')">
                <span>事件类型：</span>
                <span>商户闭店自检</span>
              </div>
              <div class="flex col" @click.stop="sign4(item.detail_id,'4')">
                <span>任务名称：</span>
                <span>{{item.task_name}}</span>
              </div>
              <div class="flex col" @click.stop="sign4(item.detail_id,'4')">
                <span>商户名称：</span>
                <span>{{item.shop_name}}</span>
              </div>
              <div class="flex col" @click.stop="sign4(item.detail_id,'4')">
                <span>起止时间：</span>
                <span>{{item.start_time}}~{{item.end_time}}</span>
              </div>
              <div class="flex col" @click.stop="sign4(item.detail_id,'4')">
                <!-- <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>-->
                <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>
                <div>
                  <span>自检结果：</span>
                  <span>{{item.ziJian_check}}</span>
                </div>
              </div>
              <div class="flex col" @click.stop="sign4(item.detail_id,'4')">
                <div>
                  <span>复查状态：</span>
                  <span>{{item.fuCha_status}}</span>
                </div>
                <div>
                  <span>复查结果：</span>
                  <span>{{item.fuCha_check}}</span>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="待复查">
            <div class="null" v-if="list.length==0">暂无记录~</div>
            <div class="minBox" v-for="(item,i) in list" :key="i">
              <van-checkbox
                v-model="item.checked"
                @click="fuXuan(item.detail_id,item.checked)"
                :disabled="item.groupAdmin == 1?false:true"
                v-if="isFlag"
              ></van-checkbox>
              <div class="flex col" @click.stop="sign(item.detail_id,'0')">
                <span>事件类型：</span>
                <span>商户闭店自检</span>
              </div>
              <div class="flex col" @click.stop="sign(item.detail_id,'0')">
                <span>任务名称：</span>
                <span>{{item.task_name}}</span>
              </div>
              <div class="flex col" @click.stop="sign(item.detail_id,'0')">
                <span>商户名称：</span>
                <span>{{item.shop_name}}</span>
              </div>
              <div class="flex col" @click.stop="sign(item.detail_id,'0')">
                <span>起止时间：</span>
                <span>{{item.start_time}}~{{item.end_time}}</span>
              </div>
              <div class="flex col" @click.stop="sign(item.detail_id,'0')">
                <!-- <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>-->
                <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>
                <div>
                  <span>自检结果：</span>
                  <span>{{item.ziJian_check}}</span>
                </div>
              </div>
              <div class="flex col" @click.stop="sign(item.detail_id,'0')">
                <div>
                  <span>复查状态：</span>
                  <span>{{item.fuCha_status}}</span>
                </div>
                <div>
                  <span>复查结果：</span>
                  <span>{{item.fuCha_check}}</span>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="可抽查">
            <div class="null" v-if="list.length==0">暂无记录~</div>
            <div class="minBox" v-for="(item,i) in list" :key="i">
              <van-checkbox
                v-model="item.checked"
                @click="fuXuan(item.detail_id,item.checked)"
                :disabled="item.groupAdmin == 1?false:true"
                v-if="isFlag"
              ></van-checkbox>
              <div class="flex col" @click.stop="sign1(item.detail_id,'1')">
                <span>事件类型：</span>
                <span>商户闭店自检</span>
              </div>
              <div class="flex col" @click.stop="sign1(item.detail_id,'1')">
                <span>任务名称：</span>
                <span>{{item.task_name}}</span>
              </div>
              <div class="flex col" @click.stop="sign1(item.detail_id,'1')">
                <span>商户名称：</span>
                <span>{{item.shop_name}}</span>
              </div>
              <div class="flex col" @click.stop="sign1(item.detail_id,'1')">
                <span>起止时间：</span>
                <span>{{item.start_time}}~{{item.end_time}}</span>
              </div>
              <div class="flex col" @click.stop="sign1(item.detail_id,'1')">
                <!-- <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>-->
                <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>
                <div>
                  <span>自检结果：</span>
                  <span>{{item.ziJian_check}}</span>
                </div>
              </div>
              <div class="flex col" @click.stop="sign1(item.detail_id,'1')">
                <div>
                  <span>复查状态：</span>
                  <span>{{item.fuCha_status}}</span>
                </div>
                <div>
                  <span>复查结果：</span>
                  <span>{{item.fuCha_check}}</span>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="处理中">
            <div class="null" v-if="list.length==0">暂无记录~</div>
            <div
              class="minBox"
              v-for="(item,i) in list"
              :key="i"
              @click="sign2(item.detail_id,'2')"
            >
              <div class="flex col">
                <span>事件类型：</span>
                <span>商户闭店自检</span>
              </div>
              <div class="flex col">
                <span>任务名称：</span>
                <span>{{item.task_name}}</span>
              </div>
              <div class="flex col">
                <span>商户名称：</span>
                <span>{{item.shop_name}}</span>
              </div>
              <div class="flex col">
                <span>起止时间：</span>
                <span>{{item.start_time}}~{{item.end_time}}</span>
              </div>
              <div class="flex col">
                <!-- <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>-->
                <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>
                <div>
                  <span>自检结果：</span>
                  <span>{{item.ziJian_check}}</span>
                </div>
              </div>
              <div class="flex col">
                <div>
                  <span>复查状态：</span>
                  <span>{{item.fuCha_status}}</span>
                </div>
                <div>
                  <span>复查结果：</span>
                  <span>{{item.fuCha_check}}</span>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="已处理">
            <div class="null" v-if="list.length==0">暂无记录~</div>
            <div
              class="minBox"
              v-for="(item,i) in list"
              :key="i"
              @click="sign3(item.detail_id,'3')"
            >
              <div class="flex col">
                <span>事件类型：</span>
                <span>商户闭店自检</span>
              </div>
              <div class="flex col">
                <span>任务名称：</span>
                <span>{{item.task_name}}</span>
              </div>
              <div class="flex col">
                <span>商户名称：</span>
                <span>{{item.shop_name}}</span>
              </div>
              <div class="flex col">
                <span>起止时间：</span>
                <span>{{item.start_time}}~{{item.end_time}}</span>
              </div>
              <div class="flex col">
                <!-- <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>-->
                <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>
                <div>
                  <span>自检结果：</span>
                  <span>{{item.ziJian_check}}</span>
                </div>
              </div>
              <div class="flex col">
                <div>
                  <span>复查状态：</span>
                  <span>{{item.fuCha_status}}</span>
                </div>
                <div>
                  <span>复查结果：</span>
                  <span>{{item.fuCha_check}}</span>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="申请审批">
            <div class="null" v-if="list.length==0">暂无记录~</div>
            <div
              class="minBox"
              v-for="(item,i) in list"
              :key="i"
              @click="sign5(item.detail_id,'5')"
            >
              <div class="flex col">
                <span>事件类型：</span>
                <span>商户闭店自检</span>
              </div>
              <div class="flex col">
                <span>任务名称：</span>
                <span>{{item.task_name}}</span>
              </div>
              <div class="flex col">
                <span>商户名称：</span>
                <span>{{item.shop_name}}</span>
              </div>
              <div class="flex col">
                <span>起止时间：</span>
                <span>{{item.start_time}}~{{item.end_time}}</span>
              </div>
              <div class="flex col">
                <!-- <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>-->
                <div>
                  <span>自检状态：</span>
                  <span>{{item.ziJian_status}}</span>
                </div>
                <div>
                  <span>自检结果：</span>
                  <span>{{item.ziJian_check}}</span>
                </div>
              </div>
              <div class="flex col">
                <div>
                  <span>复查状态：</span>
                  <span>{{item.fuCha_status}}</span>
                </div>
                <div>
                  <span>复查结果：</span>
                  <span>{{item.fuCha_check}}</span>
                </div>
              </div>
            </div>
          </van-tab>
        </Mescroll-vue>
      </van-tabs>
      <div class="zhuanFa" v-if="groupAdmin==1&&active<3">
        <van-button
          type="primary"
          size="large"
          color="#A68E44"
          @click="isFlag = !isFlag"
          v-if="!isFlag"
        >发起转发</van-button>
        <van-button type="primary" color="#A68E44" @click="fqzf" v-if="isFlag">开始转发</van-button>
        <van-button
          type="primary"
          color="#A68E44"
          class="zhuanFaA"
          @click="isFlag = !isFlag"
          v-if="isFlag"
        >取消</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue' //下拉刷新，上拉加载
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  watch: {
    $route: function(newUrl, oldUrl) {
      if (newUrl.name == 'keepWatch') {
        console.log('我刷新一下list')
        this.mescroll.resetUpScroll()
      }
    }
  },
  // 离开路由之前执行的函数,让ios可以下拉
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'keepWatch') {
      console.log('我让ios可以下拉')
      this.mescroll.setBounce(true)
      this.mescroll.hideTopBtn(0)
    }
    next()
  },
  data() {
    return {
      active: 0, //标签页索引
      value: '', //筛选内容
      mescroll: null, // mescroll实例对象
      list: [], //待我处理List

      baoShiType: [
        { name: '已转交', id: '1' },
        { name: '已完成', id: '2' },
        { name: '全部', id: '3' }
      ], //事件状态
      changeLeftBackground: -1, //报事类型按钮改变颜色
      mescrollUp: {
        isBounce: false, //是否允许ios的bounce回弹;默认true,允许回弹
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        noMoreSize: 1, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        toTop: {
          warpId: null,
          src: 'http://www.mescroll.com/img/mescroll-totop.png',
          html: null,
          offset: 1000,
          warpClass: 'mescroll-totop',
          showClass: 'mescroll-fade-in',
          hideClass: 'mescroll-fade-out',
          duration: 300,
          supportTap: false,
          btnClick: null
        }
      },
      show: false, //筛选框
      time: '', //开始时间
      time1: '', //结束时间
      minDate: new Date(1970, 1, 1),
      minDate1: new Date(),
      maxDate: new Date(3000, 10, 1),
      currentDate: new Date(),
      currentDate1: new Date(),
      startTime: false, //筛选开始时间
      endTime: false, //筛选结束时间
      tiaoJian: false, //只在我已处理里显示条件筛选
      checked: false,
      checkedFlag: false,
      zhuanFa: false, //控制转发按钮
      zhuanArr: [],
      zhuan: [], //转交的任务ID
      zhuan1: '', //转交的任务ID
      zu: localStorage.getItem('zu'),
      groupAdmin: localStorage.getItem('groupAdmin'),
      isFlag: false
    }
  },
  mounted() {},
  methods: {
    allUserName() {
      this.axios
        .get('/rest/department/getCompanyAllUser', {
          params: { id: localStorage.getItem('uid') }
        })
        .then(data => {
          console.log(data)
          console.log(this.list1)
          let arr = []
          data.forEach(item => {
            this.list1.forEach(item1 => {
              if (item.uid == item1.executeUserId) {
                this.$set(item1, 'executeUserName1', item.vserName)
              }
            })
          })
        })
    },
    fqzf() {
      this.$router.push({
        path: '/zhuanFa1',
        query: {
          taskId: this.zhuan1
        }
      })
    },

    // 撤回
    out(taskId) {
      this.keepAxios
        .post(this.baseUrl.keepAxios + '/app/patrolTask/cancelDeliver', {
          uid: localStorage.getItem('uid'),
          detailIds: taskId
        })
        .then(data => {
          console.log(data)
          if (data.data.code == 20000) {
            this.$toast(data.data.msg)
            this.mescroll.resetUpScroll()
          } else {
            this.$toast(data.data.msg)
          }
        })
    },
    p(s) {
      return s < 10 ? '0' + s : s
    },
    onClickLeft() {
      this.$router.push('/')
    },
    isShow() {
      this.show = true
    },
    // 开始时间选择
    kaiShi() {
      this.startTime = true
      this.endTime = false
    },
    // 结束时间选择
    jieShu() {
      this.startTime = false
      this.endTime = true
    },
    // 确定开始时间
    okTime(val) {
      let time = new Date(val)
      this.startTime = false
      this.endTime = false
      this.time =
        time.getFullYear() +
        '-' +
        this.p(time.getMonth() + 1) +
        '-' +
        this.p(time.getDate()) +
        ' 00:00:00'
    },
    // 确定结束时间
    overTime(val) {
      let time = new Date(val)
      this.startTime = false
      this.endTime = false
      this.time1 =
        time.getFullYear() +
        '-' +
        this.p(time.getMonth() + 1) +
        '-' +
        this.p(time.getDate()) +
        ' 23:59:59'
    },
    //报事类型点击改变颜色
    leftChange(id, index) {
      this.changeLeftBackground = index
      this.reportEventTypeId = id
      console.log(id)
    },
    // 模糊查询
    onSearch() {
      this.query()
    },
    sign(detail_id, flag1) {
      this.$router.push({
        path: '/neiBuDetails1',
        query: {
          detail_id,
          flag1
        }
      })
    },
    // 尚未开始
    sign1(detail_id, flag1) {
      this.$router.push({
        path: '/neiBuDetails',
        query: {
          detail_id,
          flag1
        }
      })
    },
    //
    sign2(detail_id, flag1) {
      this.$router.push({
        path: '/traceClose',
        query: {
          detail_id,
          flag1
        }
      })
    },
    // 已处理
    sign3(detail_id, flag1) {
      this.$router.push({
        path: '/details',
        query: {
          detail_id,
          flag1
        }
      })
    },
    // 已经逾期
    sign4(detail_id, flag1) {
      this.$router.push({
        path: '/timeApprove',
        query: {
          detail_id,
          flag1
        }
      })
    },
    // 已经逾期
    sign5(detail_id, flag1) {
      this.$router.push({
        path: '/timeApprove',
        query: {
          detail_id,
          flag1
        }
      })
    },
    tab(name) {
      console.log(name)
      if (name == 0) {
        this.tiaoJian = false
        this.zhuanFa = false
        this.list = []
        this.mescroll.resetUpScroll()
        this.mescroll.hideTopBtn(0)
      } else if (name == 1) {
        this.tiaoJian = true
        this.zhuanFa = false
        this.list1 = []
        this.mescroll.resetUpScroll()
        this.mescroll.hideTopBtn(0)
        // this.allUserName()
      } else if (name == 2) {
        this.tiaoJian = false
        this.zhuanFa = true
        this.list2 = []
        this.mescroll.resetUpScroll()
        this.mescroll.hideTopBtn(0)
      } else if (name == 3) {
        this.tiaoJian = false
        this.zhuanFa = false
        this.list3 = []
        this.mescroll.resetUpScroll()
        this.mescroll.hideTopBtn(0)
      } else if (name == 4) {
        this.tiaoJian = false
        this.zhuanFa = false
        this.list3 = []
        this.mescroll.resetUpScroll()
        this.mescroll.hideTopBtn(0)
      } else if (name == 5) {
        this.tiaoJian = false
        this.zhuanFa = false
        this.list3 = []
        this.mescroll.resetUpScroll()
        this.mescroll.hideTopBtn(0)
      }
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    getList(page, mescroll, type) {
      this.keepAxios
        .post(this.baseUrl.lockage + '/rest/checkTask/getDetailsByParam', {
          uid: localStorage.getItem('uid'),
          page: page.num,
          pageSize: page.size,
          spot_status: type,
          start_time: this.time,
          end_time: this.time1,
          searchCon: this.value
        })
        .then(data => {
          console.log(data)
          let arr = data.data.data
          if (page.num === 1) {
            // 请求的列表数据
            this.list = []
          }
          // 把请求到的数据添加到列表
          this.list = this.list.concat(arr)
          this.list.forEach(item => {
            this.$set(item, 'checked', false)
            // 自检状态
            if (item.shop_status == 0) {
              this.$set(item, 'ziJian_status', '未开始')
            } else if (item.shop_status == 1) {
              this.$set(item, 'ziJian_status', '进行中')
            } else if (item.shop_status == 2) {
              this.$set(item, 'ziJian_status', '已完成')
            } else if (item.shop_status == 3) {
              this.$set(item, 'ziJian_status', '已逾期')
            } else if (item.shop_status == 4) {
              this.$set(item, 'ziJian_status', '已报事')
            }
            // 自检结果
            if (item.self_check_status == 0) {
              this.$set(item, 'ziJian_check', 'N/A')
            } else if (item.self_check_status == 2) {
              this.$set(item, 'ziJian_check', '不合格')
            } else if (item.self_check_status == 1) {
              this.$set(item, 'ziJian_check', '合格')
            }
            // 复查状态
            if (item.event_status == 0 || item.event_status == 6) {
              this.$set(item, 'fuCha_status', 'N/A')
            } else if (item.event_status == 1) {
              this.$set(item, 'fuCha_status', '待复查')
            } else if (item.event_status == 2) {
              this.$set(item, 'fuCha_status', '可抽查')
            } else if (item.event_status == 3) {
              this.$set(item, 'fuCha_status', '处理中')
            } else if (item.event_status == 4) {
              this.$set(item, 'fuCha_status', '已处理')
            } else if (item.event_status == 5) {
              this.$set(item, 'fuCha_status', '已报事')
            }
            // 复查结果
            if (item.check_status == null) {
              this.$set(item, 'fuCha_check', 'N/A')
            } else if (item.check_status == 0) {
              this.$set(item, 'fuCha_check', '正常')
            } else if (item.check_status == 1) {
              this.$set(item, 'fuCha_check', '异常')
            }
          })
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length, true)
          })
        })
    },
    upCallback(page, mescroll) {
      if (this.active == 0) {
        this.getList(page, mescroll, '0')
      } else if (this.active == 1) {
        this.getList(page, mescroll, '1')
      } else if (this.active == 2) {
        this.getList(page, mescroll, '2')
      } else if (this.active == 3) {
        this.getList(page, mescroll, '3')
      } else if (this.active == 4) {
        this.getList(page, mescroll, '4')
      } else if (this.active == 5) {
        this.getList(page, mescroll, '6')
      }
    },
    fuXuan(id, checked) {
      console.log(checked)
      console.log(id)
      if (checked == true) {
        this.zhuanArr.push(id)
        this.zhuan = [...new Set(this.zhuanArr)]
      } else if (checked == false) {
        if (this.zhuan.indexOf(id) != -1) {
          this.zhuan.splice(this.zhuan.indexOf(id), 1)
          this.zhuanArr.splice(this.zhuanArr.indexOf(id), 1)
        }
      }
      this.zhuan1 = this.zhuan.join(',')
      console.log(this.zhuan)
    },
    // 筛选确定
    end() {
      console.log('aaa')
      this.mescroll.resetUpScroll()
      this.show = false
    },
    //筛选
    query() {
      this.mescroll.resetUpScroll()
      // this.show = false
    }
  }
}
</script>
<style lang='less' scoped>
.box {
  /deep/input[type='text'] {
    text-align: center;
  }
  .break {
    // background: #f5f6f7;
    position: fixed;
    right: 55px;
    top: 8px;
    z-index: 100;
    border-radius: 50%;
    .van-icon {
      padding: 5px;
    }
  }
  .break1 {
    // background: #f5f6f7;
    position: fixed;
    right: 90px;
    top: 8px;
    z-index: 100;
    border-radius: 50%;
    .van-icon {
      padding: 5px;
    }
  }
  .btn {
    padding-top: 100px;
    padding-bottom: 30px;
    .van-button--normal {
      margin: 0 30px;
      width: 127px;
    }
  }
  .anNiu {
    padding: 15px;
    position: fixed;
    bottom: 0;
    .van-button--large {
      width: 340px;
    }
  }
  .baoShiType {
    p {
      font-size: 13px;
      color: #000;
    }
    padding: 12px 15px;
    background: #fff;
    span {
      background: #999;
      padding: 5px 8px;
      border-radius: 5px;
      color: #fff;
      font-size: 10px;
      margin: 5px 7px;
    }
    .discolor {
      background: #a68e44;
    }
    .discolor1 {
      background: #a68e44;
    }
  }
  min-height: 100vh;
  background: #f4f5f6;
  .con {
    .mescroll {
      position: fixed;
      top: 145px;
      bottom: 50px;
      height: auto; /*如设置bottom:50px,则需height:auto才能生效*/
    }
    .mescroll1 {
      position: fixed;
      top: 145px;
      bottom: 0px;
      height: auto; /*如设置bottom:50px,则需height:auto才能生效*/
    }
    .zhuanFaA {
      margin-left: 185px;
      padding: 0 25px;
    }
    .zhuanFa {
      position: relative;
      z-index: 99999;
      bottom: -475px;
      padding: 0 6px;
      .quXiao {
        margin-right: 180px;
      }
    }
    .minBox {
      padding: 15px;
      margin: 5px;
      border-radius: 15px;
      background: #fff;
      .col {
        padding: 5px 0;
        font-size: 13px;
        span:nth-child(1) {
          color: #b9b9b9;
        }
        span:nth-child(2) {
          color: #000;
          width: 260px;
          .red {
            color: red;
          }
        }
      }
    }
  }
}
</style>