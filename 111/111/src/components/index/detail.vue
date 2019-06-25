<template>
  <div id="app">
    <header :class="{head:main}">
      <div :class="{head_cont:main}">
          <router-link to="/">
        <div :class="{head_back:main}">
          <img src="./img/back_jt.png">
          <span>返回</span>
        </div>
          </router-link>

        <div :class="{head_txt:main}">
          <span>项目详情</span>
        </div>

        <img src="./img/menu_icon04.png" :class="{person:main}">
      </div>
    </header>

    <div :class="{cont:main}">
      <div :class="{cont_title:main}">
        <h2>开个茶艺馆</h2>
        <span>浏览量：9999+</span>
      </div>

      <div :class="{cont_txt:main}">
        <div :class="{pro1:main}" style="margin-top:0.1rem;">
          <h2>
            项目主体:
            <span>&nbsp;&nbsp;{{mas}}</span>
          </h2>
        </div>
        <div :class="{pro1:main}">
          <h2>
            项目资金:
            <span>&nbsp;&nbsp;20万</span>
          </h2>
        </div>
        <div :class="{pro1:main}">
          <h2>
            项目类型:
            <span>&nbsp;&nbsp;休闲餐饮</span>
          </h2>
        </div>
        <div :class="{pro1:main}">
          <h2>
            项目地址:
            <span>&nbsp;&nbsp;贵州省贵阳市南明区甲秀楼附近</span>
          </h2>
        </div>
      </div>
      <div :class="{company_profile:main}">
        <h2>企业介绍</h2>
        <p>{{mas1}}</p>
      </div>
      <div :class="{company_profile:main}">
        <h2>项目介绍</h2>
        <p>项目位于具有书香门第的甲秀楼附近，聚集许多文雅人士到此品茶聊天，所以这个项目非常好，具有很高的投资回报率。这里是项目介绍这里是项目介绍这里是项目介绍这里是项目介绍。</p>
      </div>
      <div :class="{company_profile:main}" style="height: 1.7rem;">
        <h2>项目优势</h2>
        <p>项目有什么优势写在这里，还有其他需要添加介绍的栏目往后面添加</p>
      </div>
      <div :class="{login_reg:main}">
        <span>圆圆 | 同行入驻</span>
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
    </div>

    <div :class="{foot:main}">
      <div :class="{foot_one:main}">
        <img src="./img/zy_icon_sc_w.png">
        <span>收藏项目</span>
      </div>
      <div :class="{foot_two:main}">
        <img src="./img/zy_icon_tel_w.png">
        <span>电话交谈</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      main: true,
      mas:"",
      mas1:"",
      
    };
  },
  mounted(){
   // console.log(this.$route.query.userId)
   //console.log(this.$route.params.userId) 
   this.mas=this.$route.params.name.id;
   this.mas1=this.$route.params.name.Loophole;
   //console.log(this.$route.params.namea)
  },
  methods:{
  }
}
</script>

<style scoped>

.foot{
    position: fixed;
    bottom: 0;
    z-index: 999;
    color: white;
    width: 100%;
    line-height: 1;
}

.foot_one{
    background-color: #3d3c41;
    width: 50%;
      display: inline-table;
    margin: 0;
    /* display: inline; */
    padding: 0;
    text-align: center;
}

.foot_two{
        background: #f2b300;
        width: 50%;
            position: absolute;
    display: inline-table;
        text-align: center;
}
.foot img{
    width: 0.41rem;
}
.foot span{
    font-size: 0.35rem;
}

.foot img{
    padding-bottom: 0.2rem;
}

.foot span{
     position: relative;
    bottom: 0.25rem;
    left: 0.1rem;
}

.re {
  color: #999;
  border-bottom: #999 solid 1px;
  margin-left: 0.22rem;
}

.re1 {
  color: yellowgreen;
}

.contact {
  text-align: center;
  font-size: 0.27rem;
  margin-top: 0.45rem;
}
.cont {
  height: 16rem;
}
.login_reg {
  text-align: center;
  color: #999;
  font-size: 0.3rem;
  border-bottom: #eee solid 1px;
  height: 0.7rem;
  margin-top: 0.15rem;
}
.company_profile h2 {
  margin-top: 0.2rem;
  color: #f2b300;
  font-size: 0.28rem;
  font-weight: normal;
}

.company_profile p {
  font-size: 0.27rem;
  font-weight: normal;
  line-height: 2;
  margin-top: 0.1rem;
}
.company_profile {
  border-bottom: 5px solid #f1f1f1;
  padding-left: 0.17rem;
  height: 2.8rem;
  padding-right: 0.1rem;
}
.cont_txt {
  height: 2.5rem;
  border-bottom: 5px solid #f1f1f1;
}
.pro1 {
  padding: 0.13rem 0.13rem 0.13rem 0.15rem;
  font-size: 0.17rem;
}

.pro1 h2 {
  color: #999;
  font-weight: normal;
}

.pro1 span {
  color: black;
  font-weight: normal;
}
.cont {
  margin-top: 0.9rem;
}
.cont_title h2 {
  font-size: 0.35rem;
  font-weight: normal;
  width: 50%;
}

.cont_title span {
  color: #999;
  font-size: 0.25rem;
  float: right;
  width: 27%;
  /* display: inherit; */
  margin-top: -0.4rem;
  /* margin-bottom: 0.1rem; */
}
.cont_title {
  border-bottom: #f2b300 dashed 1px;
  padding: 4% 2% 4%;
}
.person {
  width: 0.44rem;
  float: right;
  margin-top: -0.43rem;
  /* margin-bottom: 0.1rem; */
  margin-right: 0.15rem;
}
.head_txt {
  text-align: center;
  margin-top: 0.12rem;
  font-size: 0.38rem;
  color: white;
}

* {
  margin: 0;
  padding: 0;
}
.head {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
}
.head_cont {
  background-color: #f2b300;
  padding: 1% 0;
  overflow: hidden;
  height: 0.78rem;
}

.head_back img {
  width: 0.22rem;
}
.head_back {
  left: 0.1rem;
  bottom: 0rem;
  position: absolute;
}

.head_back span {
  font-size: 0.3rem;
  color: white;
  position: relative;
  bottom: 0.08rem;
  right: 0.2rem;
}
</style>