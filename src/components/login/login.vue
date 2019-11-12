<template>
  <div class="login-content">
    <div class="login-cont-fromBox">
      <h2 class="fromBox-title">沉壁轩</h2>
      <div class="fromBox-item">
        <div class="fromBox-list">
          <span class="name">用户名</span>
          <input class="putBox" type="text" placeholder="请输入用户名" />
        </div>
        <div class="fromBox-list">
          <span class="name">密码</span>
          <input class="putBox" type="password" placeholder="请输入密码" />
        </div>
      </div>
      <van-checkbox v-model="checked">自动登录</van-checkbox>
      <p class="btn">登录</p>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      checked: true
    }
  }
}
</script>
  