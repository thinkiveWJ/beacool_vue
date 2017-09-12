<template>
  <div id="concat" class="container-fluid">
    <div class="row">
      <div class="col-md-5 col-md-offset-2 text-left">
        <div class="phone"><span class="glyphicon glyphicon-earphone"></span> 电话：021-61622198-811</div>
        <div class="email"><span class="glyphicon glyphicon-envelope"></span> 邮箱：info@beacool.com</div>
        <div class="address"><span class="glyphicon glyphicon-map-marker"></span> 地址：上海浦东新区金科路2966号（创智空间）1栋207</div>
      </div>
      <div class="col-md-4">
        <div class="consultation">
          <div class="pull-left consultation-img">
            <img v-lazy="'/static/images/qr_code.png'">
          </div>
          <div class="pull-left consultation-info text-left">
            <div class="consultation-title">咨询服务（免费电话）</div>
            <div class="consultation-phone">400-663-0309</div>
            <div class="consultation-desc">
              扫一扫二维码，<br>
              关注摩赞最新动态！
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
</script>
<style type='text/css' rel='stylesheet'>
  #concat > .row > .col-md-4,
  #concat > .row > .col-md-5{
    padding: 15px;
  }
</style>
