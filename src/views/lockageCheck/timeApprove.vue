<template>
  <div class="box">
    <van-nav-bar title="延期审核" left-arrow @click-left="$router.go(-1)" fixed />
    <div class="con">
      <div class="flex col">
        <span>起止时间：</span>
        <span>{{obj.start_time}}~{{obj.end_time}}</span>
      </div>
      <div class="title">商户自检信息</div>
      <div class="flex col">
        <span>商户：</span>
        <span>{{obj.shop_name}}</span>
      </div>
      <div class="flex col">
        <span>任务：</span>
        <span>{{obj.task_name}}</span>
      </div>

      <div v-for="(item,i) in arr" :key="i">
        <div class="title">延期事由</div>
        <van-field
          v-model="item.delay_cause"
          rows="2"
          autosize
          label="描述："
          type="textarea"
          maxlength="50"
          placeholder="请填写延期自检原因"
          show-word-limit
          readonly
        />
        <div class="col">
          <van-uploader v-model="fileList" :max-count="3" :disabled="true" :deletable="false" />
        </div>

        <div class="title">所需支持</div>
        <van-field
          v-model="item.delay_support"
          rows="2"
          autosize
          label="描述："
          type="textarea"
          maxlength="50"
          placeholder="请填写需物业提供的支持，例如：不断电，不停水"
          show-word-limit
          readonly
        />
        <div class="title">延期时间</div>
        <van-cell-group>
          <van-field label="延期至：" :value="item.delay_time" readonly />
        </van-cell-group>
        <div class="title">审核信息</div>
        <div class="flex col">
          <span>审核人：</span>
          <span>{{item.manage_name}}</span>
        </div>
        <div class="flex col">
          <span>审核状态：</span>
          <span>{{item.status}}</span>
        </div>
        <div class="flex col">
          <span>审核时间：</span>
          <span>{{time1}}</span>
        </div>
      </div>

      <div class="title" v-if="flag == 5">审批意见</div>
      <van-field
        v-if="flag == 5"
        v-model="message1"
        rows="2"
        autosize
        label="审批意见："
        type="textarea"
        maxlength="50"
        placeholder
        show-word-limit
      />
      <div class="btn flex" v-if="flag == 5">
        <van-button type="primary" color="#A68E44" @click="up('1')">同意</van-button>
        <van-button type="primary" color="#A68E44" @click="up('2')">拒绝</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: this.$route.query.flag1,
      message: '', //延期事由
      message1: '', //所需支持
      newTime: '请选择时间',
      obj: {},
      arr: [],
      time1: '',
      fileList: [],
      yanShiId: ''
    }
  },
  mounted() {
    let newTime1 = new Date()
    this.time1 =
      newTime1.getFullYear() +
      '-' +
      JSON.stringify(newTime1.getMonth() + 1).padStart(2, '0') +
      '-' +
      JSON.stringify(newTime1.getDate()).padStart(2, '0') +
      ' ' +
      JSON.stringify(newTime1.getHours()).padStart(2, '0') +
      ':' +
      JSON.stringify(newTime1.getMinutes()).padStart(2, '0') +
      ':' +
      JSON.stringify(newTime1.getSeconds()).padStart(2, '0')
    this.keepAxios
      .get(this.baseUrl.lockage + '/rest/checkTask/getDetailsByParamById', {
        params: {
          detail_id: this.$route.query.detail_id
        }
      })
      .then(data => {
        console.log(data)
        this.obj = data.data.data
        this.arr = data.data.data.delayApplyBeans
        var url0 = unescape(localStorage.getItem('baseUrl'))
        let arrImg = []
        this.arr.forEach(item => {
          if (item.exam_status == 0) {
            this.$set(item, 'status', '待审核')
          } else if (item.exam_status == 1) {
            this.$set(item, 'status', '已同意')
          } else if (item.exam_status == 2) {
            this.$set(item, 'status', '已拒绝')
          }
          if (new Date(this.obj.start_time) < new Date()) {
            this.$set(item, 'status', '已过期')
          }
          arrImg = item.delay_img.split(',')
        })

        arrImg.forEach(item => {
          this.fileList.push({ url: url0 + item })
        })
        this.obj.delayApplyBeans.forEach(item => {
          if (item.exam_status == 0) {
            this.yanShiId = item.id
          }
        })
      })
  },
  methods: {
    up(num) {
      if (new Date(this.obj.start_time) < new Date()) {
        this.$dialog
          .alert({
            title: '此任务已过期'
          })
          .then(() => {
            this.$router.go(-1)
            // on close
          })
      } else {
        // 这里没过期
        console.log('bbb')
        this.keepAxios
          .post(this.baseUrl.lockage + '/rest/checkTask/delayApplyExam', {
            task_detail_id: this.$route.query.detail_id,
            id: this.yanShiId,
            exam_status: num,
            manage_uid: localStorage.getItem('uid'),
            company_id: localStorage.getItem('companyId'),
            uid: localStorage.getItem('uid')
          })
          .then(data => {
            console.log(data)
            if (data.data.code == 200) {
              this.$toast(data.data.msg)
            } else {
              this.$toast(data.data.msg)
            }
          })
      }
    }
  }
}
</script>
<style lang='less' scoped>
.box {
  min-height: 100vh;
  background: #f4f5f6;
  color: black;
  font-size: 14px;
  .con {
    padding-top: 45px;
    .col {
      background: #fff;
      border-bottom: 1px solid #f4f5f6;
      padding: 10px;
    }
    .title {
      font-weight: 700;
      font-size: 16px;
      padding: 10px;
    }
    .btn {
      /deep/.van-dialog__content {
        background: #f4f5f6;
      }
      .van-button--normal {
        padding: 0 30px;
      }
      padding: 15px;
      .tit {
        padding: 10px;
        background: #fff;
        border-bottom: 1px solid #f4f5f6;
      }
      .red {
        color: #f00;
      }
    }
  }
}
</style>