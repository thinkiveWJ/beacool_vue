<template>
  <div id="index">
    <v-swiper></v-swiper>
    <div class="container-fluid">
      <div class="row bracelects">
        <div class="col-md-3 col-xs-12" v-for="(item, index) in picBracelects" :key="index">
          <router-link v-if="item['flag']" :to="item['link']"><img v-lazy="item['url']"/></router-link>
          <a v-else :href="item['link']"><img v-lazy="item['url']"/></a>
        </div>
      </div>
    </div>
    <v-companyInfo></v-companyInfo>
    <v-footer></v-footer>
  </div>
</template>
<script type='text/ecmascript-6'>
  import footer from '../footer/footer.vue'
  import swiper from '../swiper/swiper.vue'
  import companyInfo from '../companyInfo/companyInfo.vue'
  export default{
    data () {
      return {
        picBracelects: [
          {
            url: '/static/images/bracelect_m0.png',
            link: 'https://item.taobao.com/item.htm?spm=&id=550076547344',
            flag: false
          },
          {
            url: '/static/images/bracelect_m1.png',
            link: '',
            flag: false
          },
          {
            url: '/static/images/bracelect_m9.png',
            link: '/banner/bracelect5',
            flag: true
          },
          {
            url: '/static/images/bracelect_app.png',
            link: '/appChild',
            flag: true
          }
        ]
      }
    },
    components: {
      'v-footer': footer,
      'v-swiper': swiper,
      'v-companyInfo': companyInfo
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #index .bracelects{
    background: #e8e7e5;
    padding-top: 2px;
  }
  #index .bracelects a:hover{
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transition: all 1s;
    -webkit-transition: all 1s;
  }
  #index .bracelects > .col-xs-12{
    padding: 0;
    padding-bottom: 2px;
  }
  @media (min-width: 992px){
    #index .bracelects > .col-xs-12{
      padding-left: 6px;
    }
  }
  #index .bracelects a{
    display: block;
  }
</style>
