<template>
  <div id="footer" class="text-center">
    <address>
      @Copyright 2013 上海智向科技 备案号：沪ICP备17043844号
    </address>
    <div class="icon_copmany">
      <router-link class="pull-left" :to="{path: '/morethan/concatUs', query: {id: '2'}}"><span class="glyphicon glyphicon-earphone"></span></router-link>
      <a class="pull-left" target="_blank" href="http://weibo.com/p/1006065295095683/home?from=page_100606&mod=TAB&is_all=1#1506568153603"><img v-lazy="'/static/images/weibo.png'"></a>
      <a class="pull-left" target="_blank" href="/static/html/map.html"><span class="glyphicon glyphicon-map-marker"></span></a>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
</script>
<style type='text/css' rel='stylesheet'>
  #footer{
    background-color: #eef0ef;
    padding: 20px 0;
  }
  #footer .icon_copmany{
    width: 90px;
    /*height: 20px;*/
    margin: 0 auto;
  }
  #footer .icon_copmany a{
    width: 20px;
    height: 20px;
    font-size: 0;
  }
  #footer .icon_copmany a span{
    display: block;
    font-size: 18px;
    color: #333;
  }
  #footer .icon_copmany a span.glyphicon-map-marker{
    font-size: 20px;
  }
  #footer .icon_copmany a + a{
    margin-left: 15px;
  }
</style>

