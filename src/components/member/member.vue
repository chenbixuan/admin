<template>
  <div class="member-content">
    <div v-if="memberFlag">
      <div class="member-cont-search">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <div class="member-cont-main">
        <ul class="member-cont-header">
          <li class="header-list header-list-lioOne">会员（微信昵称）</li>
          <li class="header-list">姓名</li>
          <li class="header-list">年龄</li>
          <li class="header-list">手机号码</li>
          <li class="header-list">入会时间</li>
          <li class="header-list">积分</li>
          <li class="header-list">消费次数</li>
          <li class="header-list">消费总金额</li>
          <li class="header-list header-list-lioLast">操作</li>
        </ul>
        <ul class="member-cont-body">
          <li class="body-list">
            <ul class="body-list-ul">
              <li class="body-list-li body-list-lioOne">
                <img class="portrait" src="../../assets/images/r.jpg" />
                <p class="text">微信昵称最长只能有十四个汉字</p>
              </li>
              <li class="body-list-li">周一</li>
              <li class="body-list-li">26</li>
              <li class="body-list-li">18607154458</li>
              <li class="body-list-li">2019.07.22</li>
              <li class="body-list-li">4500</li>
              <li class="body-list-li">9</li>
              <li class="body-list-li">450</li>
              <li class="body-list-li body-list-lioLast">
                <div class="search-btn" @click="memberDetail()">
                  <van-icon name="search" />
                </div>
              </li>
            </ul>
          </li>
          <li class="body-list">
            <ul class="body-list-ul">
              <li class="body-list-li body-list-lioOne">
                <img class="portrait" src="../../assets/images/r.jpg" />
                <p class="text">微信昵称最长只能有十四个汉字</p>
              </li>
              <li class="body-list-li">周一</li>
              <li class="body-list-li">26</li>
              <li class="body-list-li">18607154458</li>
              <li class="body-list-li">2019.07.22</li>
              <li class="body-list-li">4500</li>
              <li class="body-list-li">9</li>
              <li class="body-list-li">450</li>
              <li class="body-list-li body-list-lioLast">
                <div class="search-btn" @click="memberDetail()">
                  <van-icon name="search" />
                </div>
              </li>
            </ul>
          </li>
          <li class="body-list">
            <ul class="body-list-ul">
              <li class="body-list-li body-list-lioOne">
                <img class="portrait" src="../../assets/images/r.jpg" />
                <p class="text">微信昵称最长只能有十四个汉字</p>
              </li>
              <li class="body-list-li">周一</li>
              <li class="body-list-li">26</li>
              <li class="body-list-li">18607154458</li>
              <li class="body-list-li">2019.07.22</li>
              <li class="body-list-li">4500</li>
              <li class="body-list-li">9</li>
              <li class="body-list-li">450</li>
              <li class="body-list-li body-list-lioLast">
                <div class="search-btn" @click="memberDetail()">
                  <van-icon name="search" />
                </div>
              </li>
            </ul>
          </li>
          <li class="body-list">
            <ul class="body-list-ul">
              <li class="body-list-li body-list-lioOne">
                <img class="portrait" src="../../assets/images/r.jpg" />
                <p class="text">微信昵称最长只能有十四个汉字</p>
              </li>
              <li class="body-list-li">周一</li>
              <li class="body-list-li">26</li>
              <li class="body-list-li">18607154458</li>
              <li class="body-list-li">2019.07.22</li>
              <li class="body-list-li">4500</li>
              <li class="body-list-li">9</li>
              <li class="body-list-li">450</li>
              <li class="body-list-li body-list-lioLast">
                <div class="search-btn" @click="memberDetail()">
                  <van-icon name="search" />
                </div>
              </li>
            </ul>
          </li>
          <li class="body-list">
            <ul class="body-list-ul">
              <li class="body-list-li body-list-lioOne">
                <img class="portrait" src="../../assets/images/r.jpg" />
                <p class="text">微信昵称最长只能有十四个汉字</p>
              </li>
              <li class="body-list-li">周一</li>
              <li class="body-list-li">26</li>
              <li class="body-list-li">18607154458</li>
              <li class="body-list-li">2019.07.22</li>
              <li class="body-list-li">4500</li>
              <li class="body-list-li">9</li>
              <li class="body-list-li">450</li>
              <li class="body-list-li body-list-lioLast">
                <div class="search-btn" @click="memberDetail()">
                  <van-icon name="search" />
                </div>
              </li>
            </ul>
          </li>
          <li class="body-list">
            <ul class="body-list-ul">
              <li class="body-list-li body-list-lioOne">
                <img class="portrait" src="../../assets/images/r.jpg" />
                <p class="text">微信昵称最长只能有十四个汉字</p>
              </li>
              <li class="body-list-li">周一</li>
              <li class="body-list-li">26</li>
              <li class="body-list-li">18607154458</li>
              <li class="body-list-li">2019.07.22</li>
              <li class="body-list-li">4500</li>
              <li class="body-list-li">9</li>
              <li class="body-list-li">450</li>
              <li class="body-list-li body-list-lioLast">
                <div class="search-btn" @click="memberDetail()">
                  <van-icon name="search" />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 会员详情 -->
    <div class="member-detail" v-else>
      <div class="member-detail-item">
        <h2 class="member-detail-title">基本信息</h2>
        <div class="member-detail-info">
          <ul class="member-detail-common member-detail-ul">
            <li class="info-list">
              <div class="info-list-fl">姓名：叶良辰</div>
              <div class="info-list-fg">手机号码：18129957770</div>
            </li>
            <li class="info-list">
              <div class="info-list-fl">出生年月：1987-12-02</div>
              <div class="info-list-fg">性别：女</div>
            </li>
            <li class="info-list">
              <div class="info-list-fl">微信昵称：future</div>
            </li>
          </ul>
          <p class="member-detail-sculpture"><img src="../../assets/images/r.jpg" /></p>
        </div>
      </div>
      <div class="member-detail-item">
        <h2 class="member-detail-title">服务记录</h2>
        <div class="member-detail-info">
          <ul class="member-detail-common member-detail-text">
            <li class="info-list">
              <div class="info-list-li">预约次数：24次</div>
              <div class="info-list-li">实际到店：20次</div>
              <div class="info-list-li">取消预约：2次</div>
              <div class="info-list-li">待到店：1次</div>
            </li>
            <li class="info-list">
              <div class="info-list-li">汉服体验：10次</div>
              <div class="info-list-li">汉服约拍：10次</div>
              <div class="info-list-li">其他服务：0次</div>
              <div class="info-list-li"></div>
            </li>
            <li class="info-list">
              <div class="info-list-li">消费总金额：1680元</div>
              <div class="info-list-li">平均客单价：84元</div>
              <div class="info-list-li">最近消费日：2019-08-10</div>
              <div class="info-list-li"></div>
            </li>
            <li class="info-list">
              <div class="info-list-li">优惠券张数：5张</div>
              <div class="info-list-li">优惠券金额：25元</div>
              <div class="info-list-li">已使用张数：2张</div>
              <div class="info-list-li">已使用金额：10元</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        memberFlag:true,
        value:''
      }
    },
    methods: {
       memberDetail:function(){
         this.memberFlag = false
       }
    },
    components:{
      
    }
  }
</script>
  