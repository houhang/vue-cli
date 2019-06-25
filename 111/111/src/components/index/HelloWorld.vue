<template>
  <div id="app">
    <header :class="{head:main}">
      <img src="./img/logo.png" :class="{logo:main}">
      <img src="./img/icon_search_w.png" :class="{search:main}">
      <input type="text" :class="{head_input:main}" placeholder="请输入关键词搜索">
      <div :class="{pin_div:main}">
        <img src="./img/pin.png" :class="{pin:main}">
        <p :class="{pin_txt:main}">贵阳</p>
      </div>
    </header>
    <div :class="{cont:main}">
      <img src="./img/banner01.jpg">
    </div>

    <div :class="{get_person:main}">
      <ul>
        <li style="margin-left:0rem;">
          <img src="./img/icon01.png">
          <span>找人才</span>
        </li>
        <li>
          <img src="./img/icon02.png">
          <span>项目合伙人</span>
        </li>
        <li>
          <img src="./img/icon03.png" style="margin:0;">
          <span>人才定制</span>
        </li>
      </ul>
    </div>

    <div :class="{notice:main}">
      <img src="./img/news_tit.png">
      <div :class="{more:main}">
        <ul>
          <li>杨校长在2019春季开学典礼上致辞</li>
        </ul>
        <span>更多></span>
      </div>
    </div>

    <div :class="{project_together:main}">
      <div :class="{project_together_title:main}">
        <h2 :class="{project_together_h2:main}">
          <img src="./img/icon_xmhz.png">
          <span :class="{project_together_xm:main}">推荐项目合伙人</span>
          <span :class="{look_more:main}">查看更多></span>
        </h2>
      </div>

      <ul :class="{project_together_ul:main}">
        <li v-for="item in list" @click="todetial(item)">
          <div :class="{project1:main}">
            <h2>
              项目名称：
              <span class="id" style="display:none;">{{item.id}}</span>
              <router-link to="'index/detail">
                <span>{{item.id}}</span>
              </router-link>
              <span :class="{pro1:main}">{{item.name}}</span>
            </h2>
          </div>
          <div :class="{project1:main}">
            <h2>
              项目资金：
              <span :class="{price2:main}">{{item.number}}</span>
            </h2>
          </div>
          <div :class="{project1:main}">
            <h2>
              项目类型：
              <span>{{item.date}}</span>
              <em :class="{pro2:main}">{{item.name2}}</em>
            </h2>
          </div>
        </li>
      </ul>
    </div>

    <div :class="{recom:main}">
      <div :class="{recom_title:main}">
        <h2 :class="{recom_h2:main}">
          <img src="./img/icon_tjrc.png">
          <span :class="{recom_xm:main}">推荐求职</span>
          <div :class="{replace:main}">
            <img src="./img/refresh.png">
            <span>换一批</span>
          </div>
        </h2>
      </div>
      <ul :class="{project_together_ul:main}">
        <li style="height:1.64rem;">
          <div :class="{project2:main}">
            <h2>
              <span>曾先平 男 32岁 求职 营养师</span>
              <span :class="{pro1:main}">20小时前</span>
            </h2>
          </div>
          <div :class="{project3:main}">
            <h2>
              <span>大专 3-5年</span>
              <span :class="{price:main}">5000~8000元</span>
            </h2>
          </div>

          <div :class="{project3:main}">
            <h2>
              <span>期望工作地点：贵阳市</span>

              <em :class="{pro2:main}">已认证</em>
            </h2>
          </div>
        </li>
        <!--  -->
        <li style="height:1.64rem;">
          <div :class="{project2:main}">
            <h2>
              <span>李丽丽 女 24岁 求职 茶艺师</span>
              <span :class="{pro1:main}">20小时前</span>
            </h2>
          </div>
          <div :class="{project3:main}">
            <h2>
              <span>高中 3-5年</span>
              <span :class="{price:main}">面议</span>
            </h2>
          </div>

          <div :class="{project3:main}">
            <h2>
              <span>期望工作地点：南明区</span>
              <em :class="{pro2:main}">已认证</em>
            </h2>
          </div>
        </li>
        <!--  -->
        <li style="height:1.64rem;">
          <div :class="{project2:main}">
            <h2>
              <span>罗浮 男 22岁 求职 网络管理</span>

              <span :class="{pro1:main}">03-26</span>
            </h2>
          </div>
          <div :class="{project3:main}">
            <h2>
              <span>本科 2-3年</span>
              <span :class="{price:main}">面议</span>
            </h2>
          </div>

          <div :class="{project3:main}">
            <h2>
              <span>期望工作地点：花果园周边</span>

              <em :class="{pro2:main}">已认证</em>
            </h2>
          </div>
        </li>
        <!--  -->
        <li style="height:1.64rem;">
          <div :class="{project2:main}">
            <h2>
              <span>潘仲达 女 25岁 求职 音乐助教</span>
              <span :class="{pro1:main}">03-26</span>
            </h2>
          </div>
          <div :class="{project3:main}">
            <h2>
              <span>本科 2-3年</span>
              <span :class="{price:main}">3000~5000元</span>
            </h2>
          </div>

          <div :class="{project3:main}">
            <h2>
              <span>期望工作地点：花果园周边</span>

              <em :class="{pro2:main}">已认证</em>
            </h2>
          </div>
        </li>
        <!--  -->
        <li style="height:1.64rem;border:none;">
          <div :class="{project2:main}">
            <h2>
              <span>圆圆 女 26岁 求职 园艺设计</span>
              <span :class="{pro1:main}">03-26</span>
            </h2>
          </div>
          <div :class="{project3:main}">
            <h2>
              <span>本科 3-5年</span>
              <span :class="{price:main}">3000~5000元</span>
            </h2>
          </div>

          <div :class="{project3:main}">
            <h2>
              <span>期望工作地点：清镇市</span>

              <em :class="{pro2:main}">已认证</em>
            </h2>
          </div>
        </li>
      </ul>
    </div>

    <div :class="{hot_fess:main}">
      <div :class="{fess_title:main}">
        <h2 :class="{fess_h2:main}">
          <span :class="{fess_xm:main}">热门求职</span>
          <span :class="{look_more:main}">查看更多></span>
        </h2>
      </div>
      <div :class="{hot_cont:main}">
        <p>公共营养师&nbsp;&nbsp;塔吊工&nbsp;&nbsp;养老护理师&nbsp;&nbsp;茶艺师</p>
        <p>插花师&nbsp;&nbsp; 园林绿化工程师&nbsp;&nbsp;建筑工人 &nbsp;&nbsp;高级早教师</p>
        <p>装饰设计师&nbsp;&nbsp;导购员 &nbsp;&nbsp; 促销员&nbsp;&nbsp;电子商务师</p>
      </div>
    </div>
    <img src="./img/adpic02.jpg" style="width:100%;border-bottom: 5px solid #f1f1f1;">

    <div :class="{login_reg:main}">
      <span>登录 | 注册 | 同行入驻</span>
    </div>

    <div :class="{contact:main}">
      <span :class="{re:main}">关于我们</span>
      <span :class="{re1:main}">></span>
      <span :class="{re:main}">求职指南</span>
      <span :class="{re1:main}">></span>
      <span :class="{re:main}">联系我们</span>
      <span :class="{re1:main}">></span>
      <span :class="{re:main}">免责声明</span>
      <span :class="{re1:main}">></span>

      <p style="color: #999;margin-top:0.5rem;">贵公网安备 11010602030054</p>
    </div>
    <footer :class="{foot:main}">
      <ul style="margin-top: -0.5rem;">
        <li style="margin: 0;">
          <img src="./img/menu_icon01_r.png">
          <span>首页</span>
        </li>
        <li>
          <img src="./img/menu_icon02.png">
          <span>发布</span>
        </li>
        <li>
          <img src="./img/menu_icon03.png">
          <span>消息</span>
        </li>
        <li>
          <img src="./img/menu_icon04.png">
          <span>我的</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      main: true,
     list:[]
    };
  },
  mounted(){
    this.fetchdata();
  },
  methods: {
    todetial(item) {
      //this.$router.push({ name: 'detail', query: { userId: a }})
      this.$router.push({ name: "detail", params: { name:item} });
      console.log(item)
    },
    fetchdata() {
      this.$fetch("http://mockjs").then(res => {
        this.list=res.tableData
        // this.msg10=res.name
        // console.log(this.msg10);
      });
  }
   
    }
};
</script>
<style scoped>
.replace {
  color: #f2b300;
  font-weight: normal;
  width: 20%;
  position: absolute;
  /* top: 1rem; */
  position: relative;
  bottom: 0.5rem;
  /* right: 0.3rem; */
  left: 5.6rem;
}

.replace img {
  width: 0.3rem !important;
}
.replace span {
  font-size: 0.27rem;
}
.foot {
  text-align: center;
  border-top: 1px solid #f1f1f1;
}

.foot ul li {
  list-style-type: none;
  display: inline-block;
  margin-left: 1.1rem;
}

.foot ul {
  padding: 0;
}
.foot img {
  width: 0.4rem;
}

.foot span {
  display: block;
  font-size: 0.2rem;
  margin: -10px 1px 33px;
  color: white;
}

.foot {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 49;
  box-shadow: 0 1px 15px #eef0f4;
  /* padding: 0.01rem; */
  background-color: #3d3c41;
  width: 100%;
  border-top: 2px solid #d7d7d7;

  height: 1rem;
  margin-top: 1rem;
}
.contact {
  text-align: center;
  font-size: 0.27rem;
  margin-top: 0.45rem;
}

.re {
  color: #999;
  border-bottom: #999 solid 1px;
  margin-left: 0.22rem;
}

.re1 {
  color: yellowgreen;
}
.login_reg {
  text-align: center;
  color: #999;
  font-size: 0.3rem;
  border-bottom: #eee solid 1px;
  height: 0.7rem;
}

.hot_fess {
  border-bottom: 5px solid #f1f1f1;
}
.hot_cont {
  font-size: 0.3rem;
  padding-left: 0.15rem;
}
#app {
  height: 34.2rem;
}
.project_together_ul {
  padding: 0.05rem;
  margin: 0;
  border-bottom: 5px solid #f1f1f1;
}
.project_together_ul li {
  padding-left: 0.08rem;
  list-style-type: none;
  font-size: 0.2rem;
  border-bottom: 1px solid #f1f1f1;
  height: 1.8rem;

  font-weight: normal;
}

.project2 h2 {
  font-weight: normal;
}

.project3 h2 {
  font-weight: normal;
  color: #999;
  font-size: 0.26rem;
}
.project_together_ul div {
  height: 0.3rem;
}
.project1 {
  color: #999;
  font-size: 0.21rem;
}

.project1 h2 {
  font-weight: normal;
}

.pro1 {
  float: right;
  color: #999;
  font-size: 0.23rem;
  margin-right: 0.1rem;
}

a {
  text-decoration: none;
}
.pro2 {
  float: right;
  color: #f2b300;
  border: #f2b300 solid 1px;
  padding: 0 1%;
  line-height: 0.34rem;
  border-radius: 3px;
  margin-right: 0.1rem;

  font-size: 0.23rem;
}

.price {
  color: red;
  font-weight: normal;
}

.project1 span {
  color: #999;
}
.look_more {
  float: right;
  font-size: 0.25rem;
  color: #999;
  margin-top: 0.15rem;
}

.project_together_title {
  padding: 0.25rem 0.13rem;
  border-bottom: 1px solid #f1f1f1;
  height: 0.5rem;
}
.project_together_title img {
  width: 0.6rem;
}
.project_together_h2 {
  font-size: 0.4rem;
  margin: 0;
}
.project_together_xm {
  color: #f00;
  font-weight: normal;
}

.price2 {
  color: red !important;
}

.recom_title {
  padding: 0.25rem 0.13rem;
  border-bottom: 1px solid #f1f1f1;
  height: 0.5rem;
}
.recom img {
  width: 0.6rem;
}
.recom_h2 {
  font-size: 0.4rem;
  margin: 0;
}
.recom_xm {
  color: #5589ff;
  font-weight: normal;
}

.fess_title {
  padding: 0.25rem 0.13rem;
  border-bottom: 1px solid #f1f1f1;
  height: 0.5rem;
}
.fess_title img {
  width: 0.6rem;
}
.fess_h2 {
  font-size: 0.4rem;
  margin: 0;
}
.fess_xm {
  color: #5589ff;
  font-weight: normal;
  border-left: #5589ff solid 3px;
  padding-left: 0.1rem;
}
.more {
  width: 82%;
  position: relative;
  display: inline-block;
  bottom: 0.14rem;
  right: 0.15rem;
}
.head {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 80%);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0.1rem;
  height: 1.2rem;
  /* background: #f2b300; */
  /* background: black; */
  /* opacity: 0.6; */
}

.logo {
  width: 1.3rem;
  position: relative;
  top: -0.3rem;
}

.search {
  width: 0.35rem;
  position: absolute;
  left: 1.7rem;
  top: 0.32rem;
  z-index: 999;
}
.head_input {
  border: rgba(255, 255, 255, 0.4) solid 1px;
  outline: none;
  /* background: transparent; */
  height: 0.6rem;
  font-size: 0.24rem;
  border-radius: 1.1rem;
  /* box-shadow: 3px 3px 3px 3px pink; */
  width: 4.55rem;
  text-align: center;
  position: relative;
  top: -0.6rem;
  right: 0.2rem;
  background: transparent;
  color: white !important;
}
.cont img {
  width: 100%;
}

.pin {
  width: 0.25rem;
}

.pin_div {
  position: absolute;
  margin: 0;
  right: 0.05rem;
  width: 16%;
  height: 1rem;
  display: inline-block;
  line-height: 0.3;
}

.pin_txt {
  position: relative;
  /* position: absolute; */
  margin-left: -0.3rem;
  padding-right: 0rem;
  padding-left: -0.4rem;
  display: inline-block;
  margin: 0;
  font-size: 0.28rem;
  color: white;
  right: 0.2rem;
  bottom: 0.05rem;
}

.get_person {
  width: 100%;
  background: white;
  font-size: 0.3rem;
  border-bottom: 5px solid #f1f1f1;
  height: 1.7rem;
}

.get_person span {
  display: block;
}

.get_person img {
  width: 1rem;
}

.get_person ul {
  padding: 0;
  margin: 0;
  text-align: center;
}

.get_person li {
  list-style-type: none;
  display: inline-block;
  margin-left: 1rem;
}

.notice img {
  width: 0.9rem;
}
.notice {
  height: 0.8rem;
  line-height: 0.4;
  padding-left: 0.1rem;
  border-bottom: 5px solid #f1f1f1;
}

.notice ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  line-height: 0;
  height: 0.6rem;
}

.notice li {
  list-style-type: none;
  font-size: 0.27rem;
  display: inline-block;
  line-height: 0.5;
  color: #666;
}
.notice span {
  margin-top: 0.45rem;
  float: right;
  font-size: 0.25rem;
  color: #999;
}
</style>
