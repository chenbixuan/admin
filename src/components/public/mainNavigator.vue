<template>
  <div class="nav-content">
    <h2 class="nav-cont-title">运营管理</h2>
    <ul class="nav-cont-ul">
      <li class="nav-cont-list" v-bind:class="{ 'on': this.$route.name === 'webIndex'}">
        <router-link :to="{ name: 'webIndex'}">预约管理</router-link>
      </li>
      <li class="nav-cont-list" v-bind:class="{ 'on': this.$route.name === 'webDispose'}">
        <router-link :to="{ name: 'webDispose'}">配置管理</router-link>
      </li>
      <li class="nav-cont-list" v-bind:class="{ 'on': this.$route.name === 'webMember'}">
        <router-link :to="{ name: 'webMember'}">会员管理</router-link>
      </li>
      <li class="nav-cont-list" v-bind:class="{ 'on': this.$route.name === 'webCard'}">
        <router-link :to="{ name: 'webCard'}">卡券管理</router-link>
      </li>
      <li class="nav-cont-list" v-bind:class="{ 'on': this.$route.name === 'webWorks'}">
        <router-link :to="{ name: 'webWorks'}">客照管理</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
  