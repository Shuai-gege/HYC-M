<template>
  <div class="box">
    <van-nav-bar title="商户自检" left-arrow @click-left="$router.push('/shangHuItemList')" fixed />
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
        <span>{{ziJianRen}}</span>
      </div>
      <div class="flex col">
        <span>自检状态：</span>
        <span v-if="flag == 0">进行中</span>
        <span v-if="flag == 1">未开始</span>
        <span v-if="flag == 2">已逾期</span>
      </div>
      <div class="title">自检明细</div>
      <div class="flex col" v-for="(item,i) in obj.checkItemBeanList" :key="i">
        <span v-if="item.check_type != 0&&item.check_type != 2">{{item.check_item_description}}：</span>
        <span>
          <!-- 选择类检查项 -->
          <van-radio-group
            v-model="radio"
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
              @click="duoXuan(item1.detail_value,item1.id,item1.normal_item,result,item.check_item_description)"
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
            :readonly="flag == 1||flag == 2?true:false"
            @blur="item1.normal_item !=null?verify(item1.min_value,item1.max_value,item1.font_value,item.check_item_description,item1.normal_item,item1.id):verify1(item1.min_value,item1.max_value,item1.font_value,item.check_item_description,item1.normal_item,item1.id)"
          />
        </span>
      </div>
      <div class="title" v-if="flag == 0||flag == 2">其他描述</div>
      <van-field
        v-model="message"
        v-if="flag == 0||flag == 2"
        rows="2"
        autosize
        label="描述："
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
        :readonly="flag == 1||flag == 2?true:false"
      />
      <div class="title" v-if="flag == 0||flag == 2">上传图片</div>
      <div class="col" v-if="flag == 0||flag == 2">
        <van-uploader
          v-model="fileList"
          :max-count="3"
          :after-read="updateImg"
          @delete="remove"
          :disabled="flag == 1||flag == 2?true:false"
        />
      </div>
      <div class="btn flex" v-if="flag == 0">
        <van-button
          type="primary"
          size="large"
          color="#A68E44"
          @click="up"
          style="padding:0 35px;"
        >提交</van-button>
        <!-- <van-button type="primary" color="#A68E44" @click="yanQi">延期申请</van-button> -->
        <van-dialog
          v-model="show"
          title="异常提示"
          show-cancel-button
          confirm-button-color="#A68E44"
          @confirm="yiChang"
        >
          <div class="tit">您的自检结果中存在异常，确认提交检查结果吗？</div>
          <div class="title">异常项内容:</div>
          <div class="tit" v-for="(item,i) in yiChangTitle" :key="i">{{i+1}}.{{item.title}}</div>
          <div class="tit">若您继续提交，将执行报事流程</div>
          <div class="tit red">请注意：完成工维报事后自检任务方可完成。</div>
        </van-dialog>
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
      radio: '',
      message: '',
      fileList: [], //图片上传
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
      isArr3: [],
      wenBen: '',
      checkQuery: {
        uid: localStorage.getItem('uid'),
        detail_id: this.$route.query.detail_id,
        detail_info: ''
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
      })
  },
  methods: {
    // 正确值验证
    verify(min, max, val, desp, normal_item, id) {
      console.log('我是数字')
      let shuZu = []
      if (normal_item != null) {
        let arr1 = []
        arr1.push(id + ':' + val)
        shuZu.push(...arr1)
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
      }
      this.isArr2 = deteleObject(shuZu)
      console.log(this.isArr2)
    },
    verify1(min, max, val, desp, normal_item, id) {
      console.log('我是文本类')
      let shuZu = []
      let arr2 = []
      arr2.push(id + ':' + val)
      console.log(arr2)
      let arr3 = deteleObject(arr2)
      this.wenBen = val
      shuZu.push(...arr3)
      this.isArr3 = deteleObject(shuZu)
      console.log(this.isArr3)
    },
    // 多选框
    duoXuan(val, id, normal_item, result, name) {
      this.isArr1 = result
      let arr = []
      let arr1 = []
      console.log(result)

      result.forEach(item => {
        arr1.push(item.slice(3).slice(1))
      })
      arr1.forEach(item => {
        if (item == 1) {
          arr.push({
            title: name + ':异常'
          })
        }
      })
      this.yiChangTitle = deteleObject(arr)
    },
    // 多选框
    danXuan(arr, names) {
      console.log(arr)
      console.log(names)
      if (names == 1) {
        this.isArr.push(arr[0].id + ':1')
      } else {
        this.isArr.push(arr[0].id + ':2')
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
        console.log(this.base64)
        console.log(this.tuName)
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
    up() {
      console.log('diyici')
      let flag = true
      let isArr = []
      if (this.yiChangTitle.length != 0) {
        this.show = true
      } else {
        this.checkQuery
        this.checkQuery.description = this.message
        isArr.push(
          ...this.isArr,
          ...this.isArr1,
          ...this.isArr2,
          ...this.isArr3
        )
        this.checkQuery.detail_info = isArr.join(';')
        // if (this.isArr.length != 0) {
        //   this.checkQuery.detail_info = this.isArr.join(';')
        //   console.log('走1')
        // } else if (this.isArr1.length != 0) {
        //   this.checkQuery.detail_info = this.isArr1.join(';')
        //   console.log('走2')
        // } else if (this.isArr2.length != 0) {
        //   this.checkQuery.detail_info = this.isArr2.join(';')
        //   console.log('走3')
        // } else if (this.isArr3.length != 0) {
        //   this.checkQuery.detail_info = his.isArr3.join(';')
        //   console.log('走4')
        // } else
        // if (
        //   this.isArr.length != 0 &&
        //   this.isArr1.length != 0 &&
        //   this.isArr2.length != 0 &&
        //   this.isArr3.length != 0
        // ) {
        //   this.checkQuery.detail_info =
        //     this.isArr.join(';') +
        //     ';' +
        //     this.isArr1.join(';') +
        //     ';' +
        //     this.isArr2.join(';') +
        //     ';' +
        //     this.isArr3.join(';')
        // }
        this.obj.checkItemBeanList.forEach(item => {
          if (item.check_type == 0) {
            if (this.isArr2.length == 0) {
              this.$toast('请填写' + item.check_item_description + '的值')
              flag = false
            } else if (this.message == '') {
              this.$toast('请填写描述')
              flag = false
            } else if (this.tuName == '') {
              this.$toast('请填上传图片')
              flag = false
            }
          } else if (item.check_type == 1) {
            if (this.isArr1.length == 0) {
              this.$toast('请选择' + item.check_item_description + '的值')
              flag = false
            } else if (this.message == '') {
              this.$toast('请填写描述')
              flag = false
            } else if (this.tuName == '') {
              this.$toast('请填上传图片')
              flag = false
            }
          } else if (item.check_type == 2) {
            if (this.wenBen == '') {
              this.$toast('请填写' + item.check_item_description + '的值')
              flag = false
            } else if (this.message == '') {
              this.$toast('请填写描述')
              flag = false
            } else if (this.tuName == '') {
              this.$toast('请填上传图片')
              flag = false
            }
          } else if (item.check_type == 3) {
            if (this.radio == '') {
              this.$toast('请选择' + item.check_item_description + '的值')
              flag = false
            } else if (this.message == '') {
              this.$toast('请填写描述')
              flag = false
            } else if (this.tuName == '') {
              this.$toast('请填上传图片')
              flag = false
            }
          }
        })
        if (flag) {
          console.log(this.checkQuery)
          this.checkQuery.base64 = this.base64
          this.checkQuery.file_name = this.tuName
          if (new Date(this.obj.end_time) < new Date()) {
            console.log('bu')
            this.$dialog
              .confirm({
                title: '此任务已逾期。'
              })
              .then(() => {
                // on close
                this.$router.push('/shangHuItemList')
              })
              .catch(() => {
                // on cancel
              })
          } else {
            console.log(this.checkQuery)
            this.addDetails(this.checkQuery)
          }
        }
      }
    },
    yiChang() {
      this.$router.push({
        path: '/ordermatter',
        query: {
          flag1: '1',
          detail_id: this.$route.query.detail_id
        }
      })
    },
    // 延期跳转传参
    yanQi() {
      this.$router.push({
        path: '/shangHuPostpone',
        query: {
          flag1: '1',
          detail_id: this.$route.query.detail_id
        }
      })
    },
    addDetails(obj) {
      this.keepAxios
        .post(this.baseUrl.lockage + '/rest/checkTask/addDetails', obj)
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