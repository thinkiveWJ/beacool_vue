<template>
  <div id="consultation" class="main-navi container">
    <div class="navi"><router-link to="{path: '/index'}">首页</router-link> <span class="glyphicon glyphicon-menu-right"></span> 售后咨询</div>
    <!--<div class="img"><img v-lazy="/static/images/consultation.png"></div>-->
    <div class="row img">
      <div class="col-md-4 col-xs-6 col-md-offset-2 col-xs-offset-1">
        <img v-lazy="'/static/images/consultation.png'">
      </div>
      <div class="desc">售后咨询</div>
    </div>

    <div class="row service">
      <div class="col-md-2 title text-left">SERVICE</div>
      <div class="clearfix"></div>
      <div class="col-md-1 col-xs-6 col-sm-3 service-logo"><img v-lazy="'/static/images/service_logo.png'"/></div>
      <div class="clearfix"></div>

      <div class="col-md-4 icon phone">
        <img v-lazy="'/static/images/service_phone.png'">
        <div class="desc">
          <div>售后客服电话</div>
          <div>400-663-0309</div>
          <div>周一至周日8:00-18:00</div>
        </div>
      </div>
      <div class="col-md-4 icon">
        <img v-lazy="'/static/images/service_phone.png'">
        <div class="desc">
          <div>售后客服邮箱</div>
          <div>service@beacool.com</div>
        </div>
      </div>
      <div class="col-md-4 icon">
        <img v-lazy="'/static/images/service_pencil.png'">
        <div class="desc">
          <div>更多建议</div>
          <div>info@beacool.com</div>
        </div>
      </div>
      <div class="col-xs-10 col-xs-offset-1 text-left">
        <div class="service-desc">
          <div class="title">
            <span class="glyphicon glyphicon-play"></span> 全国联保
          </div>
          <div>智向科技承诺：</div>
          <div>自购买之日一年内，非人为导致产品故障免费维修。超过1年可享受终身维修服务，您只需支付少许费用。</div>
          <br>
          <div>详细条款:</div>
          <div>通过智向科技商城、天猫摩赞旗舰店、京东智向官方旗舰店购买的商品，自购买之日一年内，非人为导致产品故障免费维修，由智向公司承担来回运费 送修时，请提供保修凭证（含保修卡发票）及产品保修期内，有下列情况之一，智向科技将不提供免费保修服务：</div> 
          <div>1.因使用、维护、保管不当或不按照说明书操作而引起的故障</div> 
          <div>2.自行拆装产品或非我司生产基地的修理引起的故障</div> 
          <div>3.因不可抗力（如火灾、水灾、地震、雷击等）引起的故障</div> 
          <div>4.无法提供保修凭证，或擅自修改保修凭证等</div> 
          <br>
          <div>购买的商品可直接拨打服务热线，将产品寄回摩赞生产基地进行维修。</div>
        </div>
      </div>

    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type='text/ecmascript-6'>
  import footer from '../footer/footer.vue'
  export default{
    components: {
      'v-footer': footer
    },
    created () {
      window.scrollTo(0, 0)
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #consultation .row.img{
    position: relative;
    background: #fff;
    padding-top: 15px;
  }
  #consultation .row.img .desc{
    position: absolute;
    top: 0;
    right: 17%;
    bottom: 0;
    margin: auto;
    width: 110px;
    height: 45px;
    font-size: 24px;
  }
  #consultation .service{
    margin: 30px auto 15px;
    padding: 15px 0;
    background: #fff;
  }
  #consultation .service > .title{
    font-size: 24px;
    border-bottom: 3px solid #ddd;
  }
  #consultation .service .service-logo img{
    margin: 15px auto;
  }
  #consultation .service .icon{
    text-align: left;
    margin: 15px auto;
  }
  @media (min-width: 992px){
    #consultation .service .icon{
      text-align: center;
    }
    #consultation .row.img .desc{
      position: absolute;
      top: 0;
      right: 17%;
      bottom: 0;
      margin: auto;
      width: 440px;
      height: 45px;
      font-size: 40px;
    }
  }
  #consultation .service .icon img{
    width: 50px;
    height: 50px;
    vertical-align: top;
  }
  #consultation .service .icon .desc{
    display: inline-block;
    text-align: left;
    margin-left: 15px;
  }
  #consultation .service .service-desc{
    background: #f9f9f7;
    padding: 6px;
  }
  #consultation .service .service-desc .title{
    font-size: 16px;
    margin-left: -20px;
  }
  #consultation .service .service-desc .title span{
    color: #0467aa;
  }
</style>
