<template>
  <div class="box">
    <van-nav-bar title="延期申请" left-arrow @click-left="out" fixed />
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
      <div class="flex col">
        <span>自检时间：</span>
        <span>{{time1}}</span>
      </div>
      <div class="flex col">
        <span>自检人：</span>
        <span>{{ziJianRen}}</span>
      </div>
      <div class="flex col">
        <span>自检结果：</span>
        <span>N/A</span>
      </div>
      <div class="flex col">
        <span>自检状态：</span>
        <span>进行中</span>
      </div>
      <div class="title">选择延期时间</div>
      <van-cell-group>
        <van-field label="延期至：" :value="newTime" readonly @click="isShow = !isShow" />
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          title="选择完整时间"
          :min-date="minDate"
          :max-date="maxDate"
          v-if="isShow"
          @confirm="time"
          @cancel="isShow = !isShow"
        />
      </van-cell-group>
      <div class="title">延期事由</div>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="描述："
        type="textarea"
        maxlength="50"
        placeholder="请填写延期自检原因"
        show-word-limit
      />
      <div class="title">所需支持</div>
      <van-field
        v-model="message1"
        rows="2"
        autosize
        label="描述："
        type="textarea"
        maxlength="50"
        placeholder="请填写需物业提供的支持，例如：不断电，不停水"
        show-word-limit
      />
      <div class="title">上传图片</div>
      <div class="col">
        <van-uploader v-model="fileList" :max-count="3" :after-read="updateImg" @delete="remove" />
      </div>
      <div class="btn">
        <van-button size="large" type="primary" color="#A68E44" @click="up">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [], //图片上传
      base64: '', //图片格式
      base64Arr: [], //图片格式
      tuName: '', //图片名字
      tuNameArr: [], //图片名字
      ziJianRen: localStorage.getItem('userName'),
      message: '', //延期事由
      message1: '', //所需支持
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2999, 10, 1),
      currentDate: new Date(),
      isShow: false,
      newTime: '请选择时间',
      time1: '',
      obj: {},
      yanQiQuery: {
        uid: localStorage.getItem('uid'),
        task_detail_id: this.$route.query.detail_id,
        company_id: localStorage.getItem('companyId')
      }
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
        // this.message = this.obj.description
        // this.obj.checkItemBeanList.forEach(item => {
        //   item.checkItemDetailBeanList.forEach(item1 => {
        //     console.log(item1.detail_value == '红0'.slice(0, 1))
        //     if (item1.font_value != null) {
        //       if (item1.detail_value == item1.font_value.slice(0, 1)) {
        //         this.result.push(item1.id + ':' + item1.font_value)
        //       }
        //     }
        //   })
        // })
      })
  },
  methods: {
    dataURLtoFile(dataurl, filename) {
      // 将base64转换为file文件
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
    updateImg(file) {
      let canvas = document.createElement('canvas') // 创建Canvas对象(画布)
      let context = canvas.getContext('2d')
      let img = new Image()
      img.src = file.content // 指定图片的DataURL(图片的base64编码数据)
      img.onload = () => {
        canvas.width = 400
        canvas.height = 300
        context.drawImage(img, 0, 0, 400, 300)
        file.content = canvas.toDataURL(file.file.type, 0.92) // 0.92为默认压缩质量
        let files = this.dataURLtoFile(file.content, file.file.name)
        const data = new FormData()
        data.append('file', files)
        data.append('code', this.applyNo)
        data.append('type', 'chat')
        this.base64Arr.push(file.content)
        this.tuNameArr.push(file.file.name)
        this.base64 = this.base64Arr.join('#')
        this.tuName = this.tuNameArr.join(',')
      }
    },
    // 点击xx的时候触发
    remove(file, detail) {
      console.log(file)
      console.log(detail)
      this.base64Arr.forEach(item => {
        if (item == file.content) {
          return this.base64Arr.splice(detail.index, 1)
        }
      })
      this.tuNameArr.forEach(item => {
        if (item == file.file.name) {
          return this.tuNameArr.splice(detail.index, 1)
        }
      })

      this.base64 = this.base64Arr.join('#')
      this.tuName = this.tuNameArr.join(',')
      console.log(this.base64Arr)
      console.log(this.tuNameArr)
    },
    out() {
      this.$router.push({
        path: '/shangHuDetails1',
        query: {
          flag: '1',
          detail_id: this.$route.query.detail_id
        }
      })
    },
    time(val) {
      let time = new Date(val)
      this.newTime =
        time.getFullYear() +
        '-' +
        JSON.stringify(time.getMonth() + 1).padStart(2, '0') +
        '-' +
        JSON.stringify(time.getDate()).padStart(2, '0') +
        ' ' +
        JSON.stringify(time.getHours()).padStart(2, '0') +
        ':' +
        JSON.stringify(time.getMinutes()).padStart(2, '0') +
        ':00'
      this.isShow = !this.isShow
      this.yanQiQuery.delay_time = this.newTime
    },
    up() {
      this.yanQiQuery.delay_cause = this.message
      this.yanQiQuery.delay_support = this.message1
      this.yanQiQuery.base64 = this.base64
      this.yanQiQuery.file_name = this.tuName
      console.log(this.yanQiQuery)
      this.delayApply(this.yanQiQuery)
    },
    delayApply(obj) {
      this.keepAxios
        .post(this.baseUrl.lockage + '/rest/checkTask/delayApply', obj)
        .then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this.$toast(data.data.msg)
            this.$router.push('/shangHuItemList')
          } else {
            this.$toast(data.data.msg)
          }
        })
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