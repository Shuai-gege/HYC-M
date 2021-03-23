<template>
  <div class="box">
    <div class="con">
      <van-cell-group>
        <van-cell title="退出登录" is-link @click="Clare" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    Clare() {
      this.axios
        .get('/rest/wxserver/loginWXOut', {
          params: {
            uid: localStorage.getItem('uid')
          }
        })
        .then(data => {
          this.$toast('已退出')
          window.localStorage.clear()
          this.$router.push('/login')
        })
    }
  }
}
</script>
<style lang='less' scoped>
.box {
  .con {
  }
}
</style>