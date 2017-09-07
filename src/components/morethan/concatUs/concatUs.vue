<template>
  <div id="morethanConcatUs">
    <div class="pic">
      <img v-lazy="'/static/images/morethan_pic02.png'">
      <div class="row concat-us">
        <div class="col-md-2 text-left">CONCAT US</div>
        <div class="clearfix"></div>
        <div class="row text">
          <div class="col-md-1 col-xs-6 col-sm-3 service-logo"><img v-lazy="'/static/images/service_logo.png'"></div>
          <div class="clearfix"></div>
          <div class="col-xs-10 col-xs-offset-1">
            <div class="col-md-6 text-left" v-for="(item, index) in concatUs" :key="index">
              <div class="title desc" v-cloak>
                <span class="glyphicon glyphicon-play"></span> {{item['title']}}
              </div>
              <div class="desc" v-for="(it, ind) in item['desc']" :key="ind" v-cloak>{{it}}</div>
            </div>
          </div>
          <div class="clearfix"></div>
          <v-concat></v-concat>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import concat from '../../concat/concat.vue'
  export default{
    data () {
      return {
        concatUs: [
          {
            title: '上海总部：',
            desc: [
              '电话：021-61622198-811',
              '商务合作：linda.yang@beacool.com | tim.huang@beacool.com',
              '品牌合作 | 战略合作 | 媒体沟通：timothy.zuo@beacool.com',
              '地址：上海市浦东新区金科路2966号（创智空间）1幢207/209室'
            ]
          },
          {
            title: '成都公司：',
            desc: [
              '电话：028-85138897',
              '商务合作：yin.wang@beacool.com',
              '地址：四川成都市高新区九兴大道6号高发大厦B座407'
            ]
          }
        ]
      }
    },
    components: {
      'v-concat': concat
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #morethanConcatUs{
    background: #fff;
  }
  #morethanConcatUs .pic{
    padding: 0 15px;
  }
  #morethanConcatUs .concat-us{
    padding: 30px 0 15px;
  }
  #morethanConcatUs .concat-us .col-md-2.text-left{
    font-size: 24px;
    border-bottom: 3px solid #ddd;
  }
  #morethanConcatUs .concat-us .text{
    padding: 0 15px;
  }
  #morethanConcatUs .service-logo{
    margin: 15px auto;
  }
  #morethanConcatUs .col-md-6{
    margin-top: 15px;
  }
  #morethanConcatUs .title{
    margin-left: -15px;
  }
  #morethanConcatUs .title .glyphicon{
    color: #0467aa;
  }
  #morethanConcatUs .desc{
    margin-top: 6px;
  }
  #morethanConcatUs .text .col-md-6{
    margin-top: 15px;
  }
</style>
