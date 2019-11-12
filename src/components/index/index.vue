<template>
  <div class="home-content">
    <div class="home-cont-main">
      <h2 class="home-cont-title">沉壁轩后台<span>退出登录</span></h2>
      <div class="home-cont-wrapper">
        <navigator></navigator>
        <!--内容部分-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Navigator from '@/components/public/mainNavigator';
  export default {
    data() {
      return {
      }
    },
    components:{
      Navigator
    }
  }
</script>
  