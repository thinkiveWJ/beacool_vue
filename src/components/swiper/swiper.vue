<template>
  <div id="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banners" :key="index" ref="swiperImg">
        <router-link v-if="item['flag']" :to="item['link']">
          <div class="desc pic01" v-show="index === 0">
            <div class="fs40">摩赞手环</div>
            <div class="fs100 top15 s-h">便捷出行</div>
            <div class="fs20 top15">公交地铁 | 运动记步 | 睡眠监测</div>
            <div class="fs20">心率监测 | 电话提醒 | 久坐提醒</div>
          </div>
          <div class="desc pic02 top15" v-show="index === 1">
            <div class="fs30 top15">摩赞手环</div>
            <div class="fs30">五彩态度 · 舞彩生活</div>
            <div class="fs24">More Than，给你不止一点点</div>
          </div>
          <div class="desc pic03" v-show="index === 2">
            <div class="fs35">摩赞彩屏手环</div>
            <div class="fs45 top15">多的不只是色彩</div>
            <div class="img top15"><img v-lazy="'/beacool/static/images/bracelect5_pic01_icon.png'"></div>
            <div class="fs18 hidden-sm hidden-xs top15">多彩颜色，配0.96英寸屏，再加更多功能应用，<br>更清晰、更直观、更丰富，更值得拥有。</div>
          </div>
          <img :src="item['url']">
        </router-link>
        <a v-else :href="item['link']">
          <div class="desc pic01" v-show="index === 0">
            <div class="fs40">摩赞手环</div>
            <div class="fs100 top15 s-h">便捷出行</div>
            <div class="fs20 top15">公交地铁 | 运动记步 | 睡眠监测</div>
            <div class="fs20">心率监测 | 电话提醒 | 久坐提醒</div>
          </div>
          <div class="desc pic02 top15" v-show="index === 1">
            <div class="fs30 top15">摩赞手环</div>
            <div class="fs30">五彩态度*舞彩生活</div>
            <div class="fs24">More Than，给你不止一点点</div>
          </div>
          <div class="desc pic03" v-show="index === 2">
            <div class="fs30">摩赞彩屏手环</div>
            <div class="fs40 top15">多的不只是色彩</div>
            <div class="img top15"><img v-lazy="'/beacool/static/images/bracelect5_pic01_icon.png'"></div>
            <div class="fs18 hidden-sm hidden-xs top15">多彩颜色，配0.96英寸屏，再加更多功能应用，<br>更清晰、更直观、更丰富，更值得拥有。</div>
          </div>
          <img :src="item['url']">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type='text/ecmascript-6'>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        banners: [
          {
            url: '/beacool/static/images/banner01.png',
            link: 'https://item.taobao.com/item.htm?spm=&id=550076547344',
            flag: false
          },
          {
            url: '/beacool/static/images/banner02.png',
            link: '/banner/m9',
            flag: true
          },
          {
            url: '/beacool/static/images/bracelect5_pic01.png',
            link: '/banner/bracelect5',
            flag: true
          }
        ],
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          loop: false,
          spaceBetween: 30,
          autoplay: 3000,
          speed: 1500,
//          effect: 'cube',
//          'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'or '' or 'coverflow' or 'flip'
          autoplayDisableOnInteraction: false
        }
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #swiper .swiper-slide{
    position: relative;
  }
  #swiper a{
    display: block;
  }
  #swiper .desc{
    position: absolute;
    color: #fff;
    width: 60%;
    height: auto;
  }
  #swiper .desc.pic01{
    top: 45%;
    transform: translate(-5%, -45%);
  }
  #swiper .desc.pic02{
    color: #333;
    top: 15px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  #swiper .desc.pic03{
    width: 60%;
    left: 10%;
    top: 45%;
    transform: translate(0, -45%);
  }
  #swiper .desc.pic03 img{
    width: 50%;
    margin: 0 auto;
  }
  #swiper .swiper-pagination-bullet{
    width: 14px;
    height: 14px;
  }
  @media (max-width: 992px) {
    #swiper .top15{
      margin-top: 6px;
    }
    #swiper a > img{
      min-height: 200px;
    }
    #swiper .desc.pic02{
      margin-top: 0;
    }
    #swiper .desc.pic03{
      width: 60%;
    }
    #swiper .desc.pic03 img{
      width: 80%;
    }
    #swiper .fs30,
    #swiper .fs24{
      font-weight: bold;
    }
  }
</style>
