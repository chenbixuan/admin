<template>
  <div class="home-content">
    <div class="home-cont-date">
      <!-- <span class="date-icon fl"><van-icon name="arrow-left" /></span> -->
      <div class="date-content fl" @click="showPopFn()">
        {{timeValue}}
      </div>
      <!-- <span class="date-icon fg"><van-icon name="arrow" /></span> -->
    </div>
    <div class="home-cont-time">
      <div class="timeHead">
        <ul class="timeHead-ul">
          <li class="timeHead-li">9:00</li>
          <li class="timeHead-li">10:00</li>
          <li class="timeHead-li">11:00</li>
          <li class="timeHead-li">12:00</li>
          <li class="timeHead-li">13:00</li>
          <li class="timeHead-li">14:00</li>
          <li class="timeHead-li">15:00</li>
          <li class="timeHead-li">16:00</li>
          <li class="timeHead-li">17:00</li>
          <li class="timeHead-li">18:00</li>
          <li class="timeHead-li">19:00</li>
          <li class="timeHead-li">20:00</li>
          <li class="timeHead-li">21:00</li>
        </ul>
      </div>
      <div class="timeBody">
        <ul class="timeBody-ul">
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
        </ul>
        <ul class="timeBody-ul">
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
        </ul>
        <ul class="timeBody-ul">
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
        </ul>
        <ul class="timeBody-ul">
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
        </ul>
        <ul class="timeBody-ul">
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
        </ul>
        <ul class="timeBody-ul">
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <p class="list-text">微信昵称最长只能有十四个汉字</p>
          </li>
          <li class="timeBody-li">
            <!-- <p class="list-text">微信昵称最长只能有十四个汉字</p> -->
          </li>
        </ul>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker v-model="currentDate" type="date" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
    </van-popup>
  </div>
</template>
<script>
import moment from 'moment'
  export default {
    data() {
      return {
        timeValue:moment(new Date()).format('YYYY-MM-DD'),
        currentDate: new Date(),
        changeDate: new Date(),
        show: false, // 用来显示弹出层
      }
    },
    methods: {
      showPopFn() {
        this.show = true;
      },
      changeFn() { // 值变化是触发
        this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
      },
      confirmFn() { // 确定按钮
        this.timeValue = this.timeFormat(this.currentDate);
        this.show = false;
      },
      cancelFn(){
        this.show = true;
      },
      timeFormat(time) { // 时间格式化 2019-09-08
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        return year + '年' + month + '月' + day + '日'
      }
    },
    mounted() {
      this.timeFormat(new Date());
    },
    components:{
      
    }
  }
</script>
  