<template>
  <div class="works-content">
    <div class="works-cont-add" @click="addWorks()">
      +新增客照
    </div>
    <div class="works-cont-main">
      <ul class="works-cont-header">
        <li class="header-list header-list-lioOne">时间</li>
        <li class="header-list">客照</li>
        <li class="header-list header-list-lioLast">操作</li>
      </ul>
      <ul class="works-cont-body">
        <li class="body-list">
          <ul class="body-list-ul">
            <li class="body-list-li body-list-lioOne">
              2019-08-17 16:50
            </li>
            <li class="body-list-li">
              <p class="li-text">本网站是由上海景域文化传播有限公司依法设立，并按照《网络商品交易及有关服务行为管理暂行办法》（国家工商行政管理总局令第49号）的规定，向网络商品经营者、旅游者通过本网站提供有关经营性服务、提供网络交易平台旅游服务的网站经营者。</p>
              <div class="li-img">
                <ul>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                </ul>
              </div>
            </li>
            <li class="body-list-li body-list-lioLast">
              <span class="suspend"><i class="i1">暂停</i><i class="i2" style="display:none">启用</i></span>
              <span class="modify">修改</span>
            </li>
          </ul>
        </li>
        <li class="body-list">
          <ul class="body-list-ul">
            <li class="body-list-li body-list-lioOne">
              2019-08-17 16:50
            </li>
            <li class="body-list-li">
              <p class="li-text">本网站是由上海景域文化传播有限公司依法设立，并按照《网络商品交易及有关服务行为管理暂行办法》（国家工商行政管理总局令第49号）的规定，向网络商品经营者、旅游者通过本网站提供有关经营性服务、提供网络交易平台旅游服务的网站经营者。</p>
              <div class="li-img">
                <ul>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                  <li class="li-img-list">
                    <img src="../../assets/images/r.jpg"/>
                  </li>
                </ul>
              </div>
            </li>
            <li class="body-list-li body-list-lioLast">
              <span class="suspend"><i class="i1" style="display:none">暂停</i><i class="i2">启用</i></span>
              <span class="modify">修改</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <van-dialog
      v-model="worksFrom"
      title=""
      show-cancel-button
      class="works-dialog-content"
    >
      <h2 class="works-dialog-title">新增客照</h2>
      <div class="works-dialog-main">
        <div class="works-dialog-putBox">
          <van-cell-group>
            <van-field
              v-model="message"
              rows="2"
              autosize
              label=""
              type="textarea"
              maxlength="140"
              placeholder="请输入..."
              show-word-limit
            />
          </van-cell-group>
        </div>
        <div class="works-dialog-file">
          <van-uploader
            v-model="fileList"
            multiple
            :max-count="9"
          />
        </div>
      </div>
      
    </van-dialog>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        worksFrom:false,
        fileList: [
          { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          { url: 'https://cloud-image', isImage: true }
        ],
        message:''
      }
    },
    methods: {
      addWorks:function(){
        this.worksFrom = true
      }
    },
    components:{
      
    }
  }
</script>
  