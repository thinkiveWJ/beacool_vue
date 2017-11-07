<template>
  <div id="header">
    <nav class="navbar navbar-default">
      <div class="container-fluid">

        <div class="navbar-header">
          <a type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarHeader" ref="navbarHeaderBTN">
            <span class="sr-only">Toggle navigation</span>
            <span class="remove"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <router-link :to="{path: '/'}" class="navbar-brand"><img class="logo" v-lazy="'/beacool/static/images/logo.png'"/></router-link>
        </div>

        <div class="collapse navbar-collapse" id="navbarHeader" @click="toggleCollapse($event)">
          <ul class="nav navbar-nav">
            <li v-for="(item, index) in title" :key="index" :class="{'hidden-sm': 1 == index, 'hidden-xs': 1 == index}">
              <router-link :to="item['link'] == '/toggle' ? '' : item['link'] " @mouseenter.native="mouseModule(index)" v-cloak>{{item['text']}}</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <div class="container-fluid">
      <transition name="slideDown">
        <div class="title-bracelects row hidden-xs hidden-sm" v-if="show" @mouseleave="show=false" v-cloak>
          <div class="col-md-1 col-md-push-2" v-for="(item, index) in titleBracelects" :key="index">
            <router-link v-if="item['flag']" :to="item['link']">
              <img v-lazy="item['url']">
              <div class="title-bracelects-desc" v-cloak>{{item['text']}}</div>
            </router-link>
            <a v-else :href="item['link']">
              <img v-lazy="item['url']">
              <div class="title-bracelects-desc" v-cloak>{{item['text']}}</div>
            </a>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        show: false,
        currentPath: this.$route.path,
        titleBracelects: [
          {
            url: '/beacool/static/images/m0.png',
            link: 'https://item.taobao.com/item.htm?spm=&id=550076547344',
            text: 'M0',
            flag: false
          },
          {
            url: '/beacool/static/images/m1.png',
            link: '',
            text: 'M1',
            flag: false
          },
          {
            url: '/beacool/static/images/m9.png',
            link: '/banner/bracelect5',
            text: 'M9',
            flag: true
          }
        ],
        title: [
          {
            link: '/index',
            text: '首页'
          },
          {
            link: '/toggle',
            text: '摩赞手环'
          },
          {
            link: '/appChild',
            text: 'APP'
          },
          {
            link: '/problem/self',
            text: '常见问题'
          },
          {
            link: '/news',
            text: '摩赞动态'
          }
        ]
      }
    },
    methods: {
      toggleCollapse (event) {
        if (this.$refs.navbarHeaderBTN.getAttribute('class') === 'navbar-toggle') {
          this.$refs.navbarHeaderBTN.click()
        }
      },
      mouseModule (index) {
        if (index === 1) {
          this.show = !this.show
        } else {
          this.show = false
        }
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  #header .navbar-brand{
    padding: 0 15px;
  }
  #header ul.navbar-nav{
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
  }
  @media (max-width: 992px){
    #header ul.navbar-nav{
      text-align: left;
    }
  }
  #header .logo{
    width: 40px;
    height: 40px;
    margin: 5px auto;
  }
  #header .title-bracelects{
    overflow: hidden;
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    background: #f6f6f6;
  }
  #header .title-bracelects a{
    display: block;
    color: #333;
    font-size: 16px;
    padding: 15px 0;
  }
  #header .title-bracelects a img{
    width: 50px;
    height: 70px;
  }
  #header .title-bracelects .title-bracelects-desc{
    height: 30px;
    line-height: 30px;
  }
  .slideDown-enter-active{
    height: 130px;
    overflow: hidden;
    transition: 1s;
  }
  .slideDown-enter {
    height: 0;
  }
  .slideDown-leave-active {
    height: 130px;
    overflow: hidden;
    transition: .5s;
  }
  .slideDown-leave-to {
    height: 0;;
  }
</style>
