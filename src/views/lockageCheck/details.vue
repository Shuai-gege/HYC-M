<template>
  <div class="box">
    <van-nav-bar title="商户自检" left-arrow @click-left="$router.go(-1)" fixed />
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
        <span v-if="obj.check_result == 0||obj.check_result == null">N/A</span>
        <span v-if="obj.check_result == 1">合格</span>
        <span v-if="obj.check_result == 2">不合格</span>
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
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
        :readonly="true"
      />
      <div class="title">自检图片</div>
      <div class="col">
        <van-uploader v-model="fileList1" :max-count="3" :disabled="true" :deletable="false" />
      </div>
      <div class="title">复查信息</div>
      <div class="col flex">
        <span>复查人:</span>
        <span>{{obj.repeat_check_name}}</span>
      </div>
      <div class="col flex">
        <span>复查时间:</span>
        <span>{{obj.repeat_time}}</span>
      </div>
      <div class="col flex" v-if="obj.repeat_result == 0">
        <span>复查状态:</span>
        <span>正常</span>
      </div>
      <div class="col flex" v-if="obj.repeat_result == 1">
        <span>复查状态:</span>
        <span>异常</span>
      </div>
      <!-- 现管信息，有在显示 -->
      <div v-if="obj.repeat_desp">
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
      </div>

      <div v-for="(item,i) in obj.followBeans" :key="i" v-if="obj.followBeans">
        <div class="title">跟进记录{{i+1}}</div>
        <div class="col flex">
          <span>跟进时间：</span>
          <span>{{item.create_time}}</span>
        </div>
        <div class="col flex">
          <span>跟进人人：</span>
          <span>{{item.follow_name}}</span>
        </div>
        <van-field
          v-model="item.follow_desp"
          rows="2"
          autosize
          label="事件描述："
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
          :readonly="true"
        />
        <div class="title">跟进图片{{i+1}}</div>
        <div class="col">
          <van-uploader v-model="item.img" :max-count="3" :disabled="true" :deletable="false" />
        </div>
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