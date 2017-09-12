<template>
  <div id="bracelect5">
    <ul class="list">
      <li>
        <div class="pic01 pic">
          <div class="fs35">摩赞彩屏手环</div>
          <div class="fs45">多的不只是色彩</div>
          <div class="img"><img v-lazy="'/static/images/bracelect5_pic01_icon.png'"></div>
          <div class="fs20">多彩颜色，配0.96英寸屏，再加更多功能应用，<br>更清晰、更直观、更丰富，更值得拥有。</div>
        </div>
        <div><img v-lazy="'/static/images/bracelect5_pic01.png'"></div>
      </li>
      <li>
        <div class="pic02 pic">
          <div class="fs30">多彩生活，</div>
          <div class="fs30">小视角，大舞台</div>
          <div class="fs20">多彩屏幕呈现的多彩应用，覆盖你整个生活，让你原本单调的生活更加丰富多彩！</div>
        </div>
        <div><img v-lazy="'/static/images/bracelect5_pic02.png'"></div>
      </li>
      <li>
        <div class="pic03 pic">
          <div class="fs30">思念，不如时刻陪伴</div>
          <div class="fs20">把她/他的照片植入手环屏幕，不管工作还是出行，跑步还是坐咖啡厅，每一分、每一秒，每一步、每一次心跳，都有她/他的陪伴。</div>
        </div>
        <div><img v-lazy="'/static/images/bracelect5_pic03.png'"></div>
      </li>
      <li>
        <div class="pic04 pic">
          <div class="fs30">更彩，更亮丽</div>
          <div class="fs20">不同于普通手环的小块屏，摩赞彩屏使屏幕显示色彩更丰富、更直观。有时候，我们需要一双有色眼镜，才发现生活并不是非黑即白，而是有更多色彩。</div>
        </div>
        <div><img v-lazy="'/static/images/bracelect5_pic04.png'"></div>
      </li>
      <li>
        <div class="pic05 pic">
          <div class="fs30">时尚逼格的人生</div>
          <div class="fs30">总有人懂</div>
          <div class="fs20">没有对比，就没有伤害，有时候，你比别人少的，确实就是那么块彩。</div>
        </div>
        <div><img v-lazy="'/static/images/bracelect5_pic05.png'"></div>
      </li>
      <li>
        <div class="pic06 pic">
          <div class="fs30">勇怼强者</div>
          <div class="fs30">凸显多彩本色</div>
          <div class="fs20">相比于普通黑白屏，摩赞彩屏在户外阳光等强光下，依然高清显示，不失本色。</div>
        </div>
        <div><img v-lazy="'/static/images/bracelect5_pic06.png'"></div>
      </li>
    </ul>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    created () {
      window.scrollTo(0, 0)
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #bracelect5 ul.list li{
    position: relative;
    min-height: 160px;
  }
  #bracelect5 ul.list li .pic{
    position: absolute;
    top: 50%;
    left: 0;
    width: 30%;
    height: auto;
    color: #fff;
  }
  #bracelect5 ul.list li .pic01{
    left: 25%;
    transform: translate(-25%, -50%);
    -ms-transform: translate(-25%, -50%); 	/* IE 9 */
    -moz-transform: translate(-25%, -50%); 	/* Firefox */
    -webkit-transform: translate(-25%, -50%); /* Safari 和 Chrome */
    -o-transform: translate(-25%, -50%); 	/* Opera */
  }
  #bracelect5 ul.list li .pic01 .img{
    width: 60%;
    margin: 15px auto 0;
  }
  #bracelect5 ul.list li .pic > div{
    margin-top: 15px;
  }
  #bracelect5 ul.list li .pic .fs24,
  #bracelect5 ul.list li .pic .fs30{
    font-weight: bold;
  }
  #bracelect5 ul.list li .pic02{
    color: #333;
    left: 80%;
    transform: translate(-80%, -50%);
    -moz-transform: translate(-80%, -50%);
    -ms-transform: translate(-80%, -50%);
    -webkit-transform: translate(-80%, -50%);
    -o-transform: translate(-80%, -50%);
    width: 30%;
  }
  #bracelect5 ul.list li .pic03,
  #bracelect5 ul.list li .pic04,
  #bracelect5 ul.list li .pic05{
    left: 80%;
    transform: translate(-80%, -50%);
    -ms-transform: translate(-80%, -50%);
    -webkit-transform: translate(-80%, -50%);
    -moz-transform: translate(-80%, -50%);
    -o-transform: translate(-80%, -50%);
    width: 30%;
  }
  #bracelect5 ul.list li .pic05{
    color: #333;
  }
  #bracelect5 ul.list li .pic06{
    color: #333;
    width: 30%;
    left: 10%;
    transform: translate(-10%, -50%);
    -o-transform: translate(-10%, -50%);
    -ms-transform: translate(-10%, -50%);
    -webkit-transform: translate(-10%, -50%);
    -moz-transform: translate(-10%, -50%);

  }
  @media (max-width: 992px){
    #bracelect5 ul.list li .pic .img{
      width: 80%;
      margin: 6px auto 0
    }
    #bracelect5 ul.list li .pic{
      position: static;
      width: 80%;
      height: auto;
      color: #333;
      margin: 0 auto;
      padding: 15px 0;
      background: #f9f9f7;
      transform: translate(0, 0);
      -o-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
    }
    #bracelect5 ul.list li .pic > div{
      margin-top: 6px;
    }
    #bracelect5 ul.list li .pic02,
    #bracelect5 ul.list li .pic03,
    #bracelect5 ul.list li .pic04,
    #bracelect5 ul.list li .pic05{
      width: 50%;
    }
  }
</style>
