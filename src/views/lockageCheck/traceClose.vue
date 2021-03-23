<template>
  <div class="box">
    <van-nav-bar title="商户自检" left-arrow @click-left="$router.push('/neiBuItemList')" fixed />
    <div class="con">
      <!-- <div class="flex col">
        <span>事件编号：</span>
        <span>32as23asd321a32sd</span>
      </div>-->
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
        <span>{{time}}</span>
      </div>
      <div class="flex col">
        <span>自检人：</span>
        <span>{{obj.check_name}}</span>
      </div>
      <div class="flex col">
        <span>自检状态：</span>
        <span v-if="flag1 == 0">待复查</span>
        <span v-if="flag1 == 1">未开始</span>
        <span v-if="flag1 == 2">已逾期</span>
      </div>
      <div class="title">自检明细</div>
      <div class="flex col" v-for="(item,i) in obj.checkItemBeanList" :key="i">
        <span v-if="item.check_type != 0&&item.check_type != 2">{{item.check_item_description}}：</span>
        <span>
          <!-- 选择类检查项 -->
          <van-radio-group
            v-model="item.checkItemDetailBeanList[0].font_value"
            direction="horizontal"
            v-if="item.check_type != 0&&item.check_type != 1&&item.check_type != 2"
            @change="danXuan(item.checkItemDetailBeanList,radio)"
            :disabled="flag == 0?false:true"
          >
            <van-radio name="1">正常</van-radio>
            <van-radio name="2">异常</van-radio>
          </van-radio-group>
          <!-- 可多选 -->
          <van-checkbox-group v-model="result" direction="horizontal" v-if="item.check_type == 1">
            <van-checkbox
              v-for="(item1,i) in item.checkItemDetailBeanList"
              :key="i"
              :name="item1.id+':'+item1.detail_value+item1.normal_item"
              :disabled="flag == 0?false:true"
            >{{item1.detail_value}}</van-checkbox>
          </van-checkbox-group>
          <!-- 输入类检查项 -->
          <van-field
            v-for="(item1,i) in item.checkItemDetailBeanList"
            :key="i"
            style="margin-left:-16px;width:400px"
            v-model="item1.font_value"
            :type="item.check_type == 2?'':'number'"
            :label="item.check_item_description+'：'"
            :placeholder="'请输入：例如'+item.input_tip"
            v-if="item.check_type == 0||item.check_type == 2"
            :readonly="true"
            @blur="verify(item1.min_value,item1.max_value,item1.font_value,item.check_item_description,item1.normal_item,item1.id)"
          />
        </span>
      </div>
      <div class="title" v-if="flag">其他描述</div>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="描述："
        type="textarea"
        placeholder="请输入留言"
        show-word-limit
        :readonly="true"
      />
      <div class="title">自检图片</div>
      <div class="col">
        <van-uploader v-model="fileList1" :max-count="3" :disabled="true" :deletable="false" />
      </div>
      <div class="title">现管检查信息</div>
      <div class="col flex">
        <span>检查人：</span>
        <span>{{obj.repeat_check_name}}</span>
      </div>
      <div class="col flex">
        <span>检查时间：</span>
        <span>{{obj.repeat_time}}</span>
      </div>
      <div class="col flex">
        <span>检查结果：</span>
        <span>
          <!-- 选择类检查项 -->
          <van-radio-group
            v-model="obj.repeat_result"
            direction="horizontal"
            @change="danXuan1"
            :disabled="true"
          >
            <van-radio name="0">正常</van-radio>
            <van-radio name="1">异常</van-radio>
          </van-radio-group>
        </span>
      </div>
      <div class="title" v-if="flag">事件描述</div>
      <van-field
        v-model="obj.repeat_desp"
        rows="2"
        autosize
        label="描述："
        type="textarea"
        placeholder="请输入留言"
        show-word-limit
        :readonly="true"
      />
      <div v-for="(item,i) in obj.followBeans" :key="i" v-if="obj.followBeans">
        <div class="title">跟进记录{{i+1}}</div>
        <div class="col flex">
          <span>跟进时间：</span>
          <span>{{item.create_time}}</span>
        </div>
        <div class="col flex">
          <span>跟进人：</span>
          <span>{{item.follow_name}}</span>
        </div>
        <van-field
          v-model="item.follow_desp"
          rows="2"
          autosize
          label="事件描述："
          type="textarea"
          placeholder="请输入留言"
          show-word-limit
          :readonly="true"
        />
        <div class="title">跟进图片{{i+1}}</div>
        <div class="col">
          <van-uploader v-model="item.img" :max-count="3" :disabled="true" :deletable="false" />
        </div>
      </div>
      <!--  -->
      <div class="title">处理结果</div>
      <div class="col flex">
        <span>事件状态：</span>
        <span>处理中</span>
      </div>
      <div class="col flex">
        <span>跟进时间：</span>
        <span>{{time}}</span>
      </div>
      <div class="col flex">
        <span>跟进人：</span>
        <span>{{ziJianRen}}</span>
      </div>
      <van-field
        v-model="message1"
        rows="2"
        autosize
        label="事件描述："
        type="textarea"
        placeholder="请输入留言"
        show-word-limit
      />
      <div class="title">上传图片</div>
      <div class="col">
        <van-uploader v-model="fileList" :max-count="3" :after-read="updateImg" @delete="remove" />
      </div>
      <div class="btn flex">
        <van-button type="primary" color="#A68E44" @click="genJin" style="padding:0 35px;">事件跟进</van-button>
        <van-button type="primary" color="#A68E44" @click="up" style="padding:0 35px;">处理完成</van-button>
        <van-dialog
          v-model="show"
          title="确认提交检查结果吗？"
          show-cancel-button
          confirm-button-color="#A68E44"
          @confirm="endAdd"
        ></van-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { deteleObject } from '@/common/FUN'
export default {
  data() {
    return {
      flag: this.$route.query.flag,
      flag1: this.$route.query.flag1,
      radio: '',
      radio1: '',
      message: '',
      message1: '',
      fileList: [], //图片上传
      fileList1: [],
      fileList2: [],
      base64: '', //图片格式
      base64Arr: [], //图片格式
      tuName: '', //图片名字
      tuNameArr: [], //图片名字
      show: false, //异常提醒
      time: '',
      obj: {},
      ziJianRen: localStorage.getItem('userName'),
      value: '',
      yiChangTitle: [],
      result: [],
      isArr: [],
      isArr1: [],
      isArr2: [],
      wenBen: '',
      checkQuery: {
        uid: localStorage.getItem('uid'),
        detail_id: this.$route.query.detail_id,
        id: this.$route.query.detail_id
      } //自检上报参数
    }
  },
  mounted() {
    let newTime = new Date()
    this.time =
      newTime.getFullYear() +
      '-' +
      JSON.stringify(newTime.getMonth() + 1).padStart(2, '0') +
      '-' +
      JSON.stringify(newTime.getDate()).padStart(2, '0') +
      ' ' +
      JSON.stringify(newTime.getHours()).padStart(2, '0') +
      ':' +
      JSON.stringify(newTime.getMinutes()).padStart(2, '0') +
      ':' +
      JSON.stringify(newTime.getSeconds()).padStart(2, '0')
    // --------------------------------------
    this.keepAxios
      .get(this.baseUrl.lockage + '/rest/checkTask/getDetailsByParamById', {
        params: {
          detail_id: this.$route.query.detail_id
        }
      })
      .then(data => {
        console.log(data)
        this.obj = data.data.data
        this.message = this.obj.description
        var url0 = unescape(localStorage.getItem('baseUrl'))
        this.fileList1.push({ url: url0 + this.obj.check_img })
        this.obj.checkItemBeanList.forEach(item => {
          item.checkItemDetailBeanList.forEach(item1 => {
            console.log(item1.detail_value == '红0'.slice(0, 1))
            if (item1.font_value != null) {
              if (item1.detail_value == item1.font_value.slice(0, 1)) {
                this.result.push(item1.id + ':' + item1.font_value)
              }
            }
          })
        })
        let imgArr = []
        this.obj.followBeans.forEach(item => {
          imgArr = [{ url: (url0 + item.follow_img).split(',') }]
          this.$set(item, 'img', imgArr)
        })
        this.fileList2 = imgArr
      })
  },
  methods: {
    // 正确值验证
    verify(min, max, val, desp, normal_item, id) {
      if (normal_item != null) {
        let arr1 = []
        arr1.push(id + ':' + val)
        this.isArr2.push(...arr1)
        let arr = []
        if (min != '') {
          if (val < min) {
            console.log('我试试1')
            arr.push({
              title: desp + '异常'
            })
          }
        } else if (max != '') {
          if (val > max) {
            console.log('我试试2')
            arr.push({
              title: desp + '异常'
            })
          }
        } else if (max != '' && min != '') {
          if (val < max || val > min) {
            console.log('我试试3')
            arr.push({
              title: desp + '异常'
            })
          }
        }
      } else {
        console.log('我是文本类')
        let arr2 = []
        arr2.push(id + ':' + val)
        this.wenBen = val
        this.isArr2.push(...arr2)
      }
      console.log(this.isArr2)
    },

    // 多选框
    danXuan(arr, names) {
      console.log(arr)
      console.log(names)
      if (names == 1) {
        this.isArr.push(arr[0].id + ':正常')
      } else {
        this.isArr.push(arr[0].id + ':异常')
      }
    },
    // 多选框
    danXuan1(names) {
      if (names == 1) {
        this.checkQuery.repeat_result = '0'
      } else {
        this.checkQuery.repeat_result = '1'
      }
    },
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
      console.log(this.base64)
      console.log(this.tuName)
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
    up() {
      this.show = true
    },
    genJin() {
      this.keepAxios
        .post(this.baseUrl.lockage + '/rest/checkTask/taskFollow', {
          detail_id: this.$route.query.detail_id,
          follow_desp: this.message1,
          follow_uid: localStorage.getItem('uid'),
          uid: localStorage.getItem('uid'),
          company_id: localStorage.getItem('companyId'),
          base64: this.base64Arr.join('#'),
          file_name: this.tuNameArr.join(',')
        })
        .then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this.$toast(data.data.msg)
          } else {
            this.$toast(data.data.msg)
          }
        })
    },
    endAdd() {
      console.log('我是确定')
      this.checkQuery.description = this.message1
      this.checkQuery.check_type = this.flag1
      console.log(this.checkQuery)
      this.addDetails(this.$route.query.detail_id)
    },
    addDetails(obj) {
      this.keepAxios
        .get(this.baseUrl.lockage + '/rest/checkTask/taskHandlerFinish', {
          params: { detail_id: obj }
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
</script>
<style lang='less' scoped>
.box {
  min-height: 100vh;
  background: #f4f5f6;
  color: black;
  font-size: 14px;
  .con {
    /deep/.van-cell {
      padding-left: 12.5px;
    }
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
    }
  }
}
</style>