<template>
  <div id="problem" class="container main-navi">
    <div class="navi"><router-link to="{path: '/index'}">首页</router-link> <span class="glyphicon glyphicon-menu-right"></span> 常见问题</div>
    <div class="row img">
      <div class="col-md-4 col-xs-6 col-md-offset-4 col-xs-offset-3">
        <img v-lazy="'/beacool/static/images/problem_pic.png'">
      </div>
    </div>

    <div class="row problems">
      <div class="col-md-2 title text-left">Q&A</div>
      <div class="clearfix"></div>
      <div class="col-md-10 col-md-offset-1">
        <div class="row list text-left">
          <div class="col-md-3">
            <div class="title">问题分类</div>
            <ul>
              <li v-for="(item, index) in problemTitles" :key="index">
                <router-link :to="item['link']" @click.native="toggleSty(index)" :class="activeFunc(index)" ref="probA" v-cloak>{{item['text']}}</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-9 col-md-offset-3">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type='text/ecmascript-6'>
  import footer from '../footer/footer'
  export default{
    data () {
      return {
        problemTitles: [
          {
            text: '手环自身问题',
            link: {
              path: '/problem/self',
              query: {
                id: 'self'
              }
            }
          },
          {
            text: '摩赞出行',
            link: {
              path: '/problem/self',
              query: {
                id: 'travel'
              }
            }
          },
          {
            text: '售后服务',
            link: {
              path: '/problem/self',
              query: {
                id: 'service'
              }
            }
          }
        ]
      }
    },
    components: {
      'v-footer': footer
    },
    methods: {
      activeFunc (index) {
        let id = this.$route.query.id
        if (index === 1 && (id === undefined || id === 'travel')) {
          return {
            'router-link-exact-active': true,
            'router-link-active': true
          }
        }
      },
      toggleSty (index) {
        this.problemTitles.map((v, k) => {
          if (k !== index) {
            this.$refs.probA[k].$el.className = ''
          }
        })
      }
    },
    created () {
      window.scrollTo(0, 0)
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #problem .row.img{
    background: #fff;
    padding-top: 15px;
  }
  #problem .problems{
    margin: 30px auto 15px;
    padding: 15px 0;
    background: #fff;
    min-height: 450px;
  }
  #problem .problems > .title{
    font-size: 24px;
    text-align: center;
    border-bottom: 3px solid #ddd;
  }
  #problem .problems .list{
    margin: 30px 0 15px;
    position: relative;
    padding: 15px 0;
  }
  #problem .problems .list > .col-md-3 {
    background: #00a1e9;
    color: #fff;
  }
  @media (min-width: 992px){
    #problem .problems .list > .col-md-3{
      color: #fff;
      position: absolute;
      left: 0;
      top: 15px;
      bottom: 0;
      width: 25%;
      min-height: 300px;
    }
  }
  #problem .problems .list .title{
    font-size: 18px;
    line-height: 60px;
    padding-left: 30px;
  }
  #problem .problems .list > .col-md-3 a{
    color: #fff;
    display: block;
    line-height: 45px;
    padding-left: 30px;
  }
  #problem .problems .list > .col-md-3 a.router-link-exact-active.router-link-active{
    background: #008ecd;
    margin-left: -15px;
    margin-right: -15px;
    padding-left: 45px;
    border-left: 1px solid #fff;
  }
</style>
