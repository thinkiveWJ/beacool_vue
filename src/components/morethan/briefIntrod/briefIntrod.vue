<template>
  <div id="morethanBriefIntrod">
    <div class="pic">
      <img v-lazy="'/static/images/morethan_pic01.png'">
    </div>
    <div class="row about">
      <div class="col-md-2 text-left">ABOUT US</div>
      <div class="clearfix"></div>
      <div class="row text">
        <div class="col-md-1 col-xs-6 col-sm-3 service-logo"><img v-lazy="'/static/images/service_logo.png'"></div>
        <div class="clearfix"></div>
        <div class="col-xs-10 col-xs-push-1">
          <div>
            智向科技是目前国内最大的基于位置的物联网精准感知服务提供商，已经为包括百度，阿里，兴业银行，上海嘉会国际医院，上海正大广场，摩拜单车等超过二十家国内外知名企业提供专业的物联位置感知服务。同时，依托多年行业探索和诸多精英合作伙伴，继续在智慧交通、智慧金融、智慧商超、智慧医院、智慧医疗、智慧养老、智慧园区等领域迈进。
          </div>
          <div>
            摩赞系列手环，是智向科技依托多年技术沉淀，匠心打磨精致外观，力求为消费者提供更佳用户体验。该系列手环不仅具备传统的运动、健康监测等功能，更是增加了心率、血压、血氧监测及交通支付等功能。智向科技领业内之先，推出彩屏手环。更多功能版本摩赞系列手环也将陆续推出市场。
          </div>
        </div>
        <div class="clearfix"></div>
        <v-concat></v-concat>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import concat from '../../concat/concat.vue'
  export default{
    components: {
      'v-concat': concat
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #morethanBriefIntrod {
    background: #fff;
  }

  #morethanBriefIntrod .pic {
    padding: 0 15px;
  }

  #morethanBriefIntrod > .row {
    margin: 0;
  }

  #morethanBriefIntrod .about {
    padding: 30px 0 15px;
  }

  #morethanBriefIntrod .about .col-md-2.text-left {
    font-size: 24px;
    border-bottom: 3px solid #ddd;
  }

  #morethanBriefIntrod .about .text {
    padding: 0 15px;
  }

  #morethanBriefIntrod .service-logo {
    margin: 15px auto;
  }

  #morethanBriefIntrod .about .col-xs-10 {
    text-align: left;
    text-indent: 30px;
    margin: 15px auto;
  }

  #morethanBriefIntrod .about .col-xs-10 > div {
    margin-top: 8px;
  }
</style>
