<template>
  <div class="dispose-content">
    <div class="dispose-cont-tab">
      <van-tabs type="card">
        <van-tab title="首页">
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">首页BANNER</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号2</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号3</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号4</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">首页服务说明</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">服务展示1</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号2</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号3</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号4</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">服务展示2</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号2</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号3</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号4</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">门店照片</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号2</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="服务">
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">服务BANNER</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号2</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号3</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号4</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">服务页服务说明</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="我的">
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">会员服务</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">生日</div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">活动</div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">专享</div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
          <div class="card-itemCon">
            <h2 class="card-itemCon-title">服务页服务说明</h2>
            <ul class="card-itemCon-ul">
              <li class="card-itemCon-list">
                <div class="list-num">序号1</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号2</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号3</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
              <li class="card-itemCon-list">
                <div class="list-num">序号4</div>
                <div class="list-name">
                  <input type="text" placeholder="名称" />
                </div>
                <div class="list-file">
                  <div class="file">
                    <van-uploader>
                      <van-button icon="photo" type="primary">选择文件</van-button>
                    </van-uploader>
                  </div>
                  <span class="download">下载</span>
                </div>
                <div class="list-skipLink">
                  <input type="text" placeholder="跳转链接" />
                </div>
                <div class="list-slider"><van-switch v-model="checked" size="18px" /></div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        checked: true
      }
    },
    components:{
      
    }
  }
</script>
  