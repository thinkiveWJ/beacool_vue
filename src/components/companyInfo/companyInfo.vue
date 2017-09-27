<template>
  <div id="companyInfo" class="container-fluid">
    <div class="row company text-center">
      <div class="col-md-6 col-sm-12 hidden-xs">
        <div class="company-info">
          <div class="pull-left" v-for="(item, index) in companyInfo" :key="index">
            <div class="title" v-cloak>{{item['text']}}</div>
            <router-link v-for="(data, i) in item['children']" :key="i" :to="data['link']" v-cloak>{{data['text']}}</router-link>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="col-sm-12 visible-xs">
        <ul class="company-info-sm">
          <li class="title" v-for="(item, index) in companyInfo" :key="index" @click="toggleShow(index, item, companyInfo)">
            <div class="pull-left" v-cloak>{{item['text']}}</div>
            <div class="pull-right"><span :class="{glyphicon:true, 'glyphicon-plus': item['smInfo'], 'glyphicon-minus': !item['smInfo']}"></span></div>
            <div class="clearfix"></div>
            <ul v-if="item['children']" :class="{details: true, none: item['smInfo'], 'text-left': true}">
              <li v-for="(data, i) in item['children']" :key="i">
                <router-link :to="data['link']" v-cloak>{{data['text']}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-4 col-md-offset-2 col-sm-12">
        <div class="consultation">
          <div class="pull-left consultation-img">
            <img v-lazy="'/beacool/static/images/qr_code.png'">
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
  export default{
    data () {
      return {
        companyInfo: [
          {
            text: '购买产品',
            smInfo: true,
            children: [
              {
                link: '',
                text: '摩赞商城'
              }
            ]
          },
          {
            text: '服务与支持',
            smInfo: true,
            children: [
              {
                link: {
                  path: '/consultation'
                },
                text: '售后咨询'
              },
              {
                link: {
                  path: '/problem'
                },
                text: '常见问题'
              }
            ]
          },
          {
            text: '关于摩赞',
            smInfo: true,
            children: [
              {
                link: {
                  path: '/morethan/briefIntrod',
                  query: {
                    id: 0
                  }
                },
                text: '公司简介'
              },
              {
                link: {
                  path: '/news'
                },
                text: '摩赞动态'
              },
              {
                link: {
                  path: '/morethan/concatUs',
                  query: {
                    id: 2
                  }
                },
                text: '联系我们'
              }
            ]
          }
        ]
      }
    },
    methods: {
//      公司信息的收缩
      toggleShow (index, item, companyInfo) {
        for (var i = 0; i < companyInfo.length; i++) {
          if (i !== index) {
            companyInfo[i]['smInfo'] = true
          }
        }
        item['smInfo'] = !item['smInfo']
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #companyInfo .company{
    padding: 30px 0;
  }
  #companyInfo .company-info{
    display: block;
    margin: 0 -15px 15px -15px;
  }
  #companyInfo .company-info > .pull-left{
    width: 33.33%;
  }
  #companyInfo .company-info > .pull-left .title{
    background: #d9d8d6;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
  }
  #companyInfo .company-info > .pull-left a{
    font-size: 14px;
    color: #333;
    display: block;
    margin-top: 15px;
  }
  #companyInfo .company-info-sm{
    margin: 15px auto;
  }
  #companyInfo .company-info-sm > li{
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
  }
  #companyInfo .company-info-sm > li ul.details a{
    display: block;
    text-indent: 6px;
    color: #999;
    font-size: 12px;
    margin-top: 15px;
  }
</style>
