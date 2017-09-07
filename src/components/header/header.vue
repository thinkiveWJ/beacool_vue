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
          <router-link :to="{path: '/'}" class="navbar-brand"><img class="logo" v-lazy="'/static/images/logo.png'"/></router-link>
        </div>

        <div class="collapse navbar-collapse" id="navbarHeader" @click="toggleCollapse($event)">
          <ul class="nav navbar-nav">
            <li v-for="(item, index) in title" :key="index" :class="{'hidden-sm': 1 == index, 'hidden-xs': 1 == index}">
              <router-link :to="item['link'] == '/toggle' ? '' : item['link'] " @click.native="toggleModule(index)" v-cloak>{{item['text']}}</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <div class="container-fluid">
      <div class="title-bracelects row hidden-xs hidden-sm" v-show="show" v-cloak>
        <div class="col-md-1 col-md-push-2" v-for="(item, index) in titleBracelects" :key="index">
          <a :href="item['link']">
            <img v-lazy="item['url']">
            <div v-cloak>{{item['text']}}</div>
          </a>
        </div>
      </div>
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
          url: '/static/images/m0.png',
          link: '',
          text: 'M0'
        },
        {
          url: '/static/images/m1.png',
          link: '',
          text: 'M1'
        },
        {
          url: '/static/images/m9.png',
          link: '',
          text: 'M9'
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
          link: '/consultation',
          text: '服务与支持'
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
    toggleModule (index) {
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
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    padding: 15px 0;
    background: #f6f6f6;
  }
  #header .title-bracelects a{
    display: block;
    color: #333;
    font-size: 16px;
  }
  #header .title-bracelects a img{
    width: 50%;
  }
</style>
