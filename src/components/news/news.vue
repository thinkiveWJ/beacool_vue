<template>
  <div id="news" class="main-navi container">
    <div class="navi">当前位置 <span class="glyphicon glyphicon-menu-right"></span> 摩赞动态</div>

    <div class="row title text-left">
      <div class="col-md-4">
        <div class="pull-left title-desc">NEWS</div>
        <div class="pull-left">
          <div>摩赞动态</div>
          <div>随时随地掌握最新动态</div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
      <div class="col-md-10 col-xs-10 col-md-offset-1 col-xs-offset-1 news-pic">
        <img v-lazy="'/static/images/new.png'">
      </div>
    </div>

    <div class="row year">
      <div v-for="(item, index) in newsYears" :key="index"
           :class="{'col-md-2': true, 'col-xs-3': index == 0, 'col-xs-2': index != 0 && index != newsYearsLen, 'col-xs-4': index == newsYearsLen}" >
        <router-link :to="item['link']" v-html="item['text']" v-cloak>{{item['text']}}</router-link>
      </div>
    </div>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script type='text/ecmascript-6'>
  import footer from '../footer/footer.vue'
  export default{
    data () {
      return {
        newsYears: [
          {
            link: {
              path: '/news/contents',
              query: {
                id: 0
              }
            },
            text: '全部'
          },
          {
            link: {
              path: '/news/contents',
              query: {
                id: 2017
              }
            },
            text: '2017'
          },
          {
            link: {
              path: '/news/contents',
              query: {
                id: 2016
              }
            },
            text: '2016'
          },
          {
            link: '',
            text: '查看更多 <span class="glyphicon glyphicon-share-alt"></span>'
          }
        ],
        newsYearsLen: 0
      }
    },
    created () {
      this.newsYearsLen = this.newsYears.length - 1
    },
    components: {
      'v-footer': footer
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #news > .title{
    padding: 15px 0;
    background: #fff;
    margin: 0;
  }
  #news > .title > .col-md-4{
    border-bottom: 3px solid #ddd;
  }
  #news > .title .title-desc{
    font-size: 24px;
    margin-right: 15px;
  }
  #news > .title .pull-left div{
      color: #999;
  }
  #news .news-pic{
    padding: 15px 0;
  }
  #news .year{
    padding: 15px 0;
  }
  #news .year a{
    display: block;
    color: #333;
  }
  #news .year .glyphicon{
    color: #658ed5;
  }
</style>
