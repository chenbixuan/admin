<template>
  <div class="page-content">
    <div class="page-cont-main">
      <h2 class="page-cont-title">沉壁轩后台<span @click="loginOut()">退出登录</span></h2>
      <div class="page-cont-wrapper">
        <navigator></navigator>
        <!--内容部分-->
        <div class="page-cont-rightHome">
          <h3 class="rightHome-cont-title">运营管理/预约管理</h3>
          <div class="rightHome-cont-main">
            <router-view></router-view>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style lang="less">


</style>
<script>
import Navigator from '@/components/public/mainNavigator';
export default {
  data() {
    return {
      
    };
  },
  created: function () {
    
  },
  mounted: function () {},
  methods: {
    loginOut:function() {
      this.$router.push({ name: 'webLogin' });
    }
  },
  components: {
    Navigator
  }
};
</script>
