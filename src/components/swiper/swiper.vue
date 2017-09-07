<template>
  <div id="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banners" :key="index" ref="swiperImg">
        <div class="desc pic01" v-show="index === 0">
          <div class="fs30">摩赞手环</div>
          <div class="fs35 top15">便捷出行</div>
          <div class="fs20 top15">公交地铁 | 运动记步 | 睡眠监测</div>
          <div class="fs20">心率监测 | 电话提醒 | 久坐提醒</div>
        </div>
        <div class="desc pic02" v-show="index === 1">
          <div class="fs30">摩赞手环</div>
          <div class="fs30">五彩态度*舞彩生活</div>
          <div class="fs20">More Than，给你不止一点点</div>
        </div>
        <div class="desc pic03" v-show="index === 2">
          <div class="fs24">摩赞彩屏手环</div>
          <div class="fs30 top15">多的不只是色彩</div>
          <div class="img top15"><img v-lazy="'/static/images/bracelect5_pic01_icon.png'"></div>
          <div class="fs20  top15">多彩颜色，配0.96英寸屏，再加更多功能应用，更清晰、更直观、更丰富，更值得拥有。</div>
        </div>
        <router-link v-if="item['flag']" :to="item['link']">
          <img :src="item['url']">
        </router-link>
        <a v-else :href="item['link']">
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
            url: '/static/images/banner01.png',
            link: '',
            flag: false
          },
          {
            url: '/static/images/banner_pic02.png',
            link: '/banner/bracelect5',
            flag: true
          },
          {
            url: '/static/images/bracelect5_pic01.png',
            link: '/banner/m9',
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
  #swiper .desc.pic01,
  #swiper .desc.pic03{
    top: 50%;
    transform: translate(0, -50%);
  }
  #swiper .desc.pic02{
    color: #333;
    top: 15px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  #swiper .desc.pic03{
    width: 40%;
    left: 10%;
  }
  #swiper .desc.pic03 img{
    width: 60%;
    margin: 0 auto;
  }
  @media (max-width: 992px) {
    #swiper .top15{
      margin-top: 6px;
    }
    #swiper a img{
      min-height: 200px;
    }
    #swiper .desc.pic03{
      width: 60%;
    }
    #swiper .desc.pic03 img{
      width: 80%;
    }
  }
</style>
