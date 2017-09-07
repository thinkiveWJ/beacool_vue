<template>
  <div id="appChild" class="main-navi container-fluid">
    <div class="navi">当前位置 <span class="glyphicon glyphicon-menu-right"></span> APP</div>
    <div class="row msg">
      <div class="col-sm-offset-1 col-md-6"><img v-lazy="'/static/images/app.png'"></div>
      <div class="col-md-2 col-sm-offset-1">
        <div class="title">摩赞出行APP</div>
        <div class="desc">摩赞出行APP是上海智向自主开发的配合摩赞手环使用的工具APP产品，功能丰富，页面美观，操作方便。</div>
        <div class="desc">在摩赞出行APP里，你可以使用APP给手环交通卡充值，还可以随时查看您的健康报表等。现在您可以在各大商店搜索“摩赞出行”下载。</div>
      </div>
    </div>
    <div class="row download">
      <div class="col-md-2 title">DOWNLOAD</div>
      <div class="clearfix"></div>
      <div class="col-md-2 col-md-offset-3 col-xs-4"><a href=""><img v-lazy="'/static/images/ios.png'"></a></div>
      <div class="col-md-2 col-xs-4"><a href=""><img v-lazy="'/static/images/android.png'"></a></div>
      <div class="col-md-2 col-xs-4"><a href=""><img v-lazy="'/static/images/download_code.png'"></a></div>
      <div class="clearfix"></div>
      <v-concat></v-concat>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type='text/ecmascript-6'>
  import footer from '../footer/footer.vue'
  import concat from '../concat/concat.vue'
  export default{
    data () {
      return {

      }
    },
    components: {
      'v-footer': footer,
      'v-concat': concat
    },
    methods: {

    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #appChild > .row{
    margin: 0;
    background: #fff;
    padding-top: 30px;
  }
  #appChild > .row > div{
    margin-bottom: 15px;
  }
  #appChild .msg .title{
    font-size: 20px;
    margin: 15px auto;
  }
  #appChild .msg .desc{
    text-align: left;
    font-size: 14px;
    margin: 15px auto;
  }
  #appChild .download{
    margin: 30px auto 15px;
    padding-top: 30px;
  }
  #appChild .download .title{
    font-size: 24px;
    border-bottom: 3px solid #ddd;
  }
</style>
