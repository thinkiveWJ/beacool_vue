<template>
  <div id="problemSelf">
   <div class="detail" v-for="(item, index) in problems" :key="index">
     <a class="detail-title" @click="toggleCollapse(item)" v-cloak>{{item['title']}} <span :class="iconStyle(item)"></span></a>
     <div class="content" v-show="item['open']" v-for="(ite, inde) in item['content']" :key="inde">
       <div v-cloak>{{ite['text']}}</div>
       <div class="content" v-for="(it, ind) in ite['content']" :key="inde" v-cloak>{{it['text']}}</div>
     </div>
   </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        problems: []
      }
    },
    created () {
      let id = this.$route.query.id
      id = !id ? 'self' : id
      getProblems(this, id)
    },
    watch: {
      '$route' () {
        let id = this.$route.query.id
        getProblems(this, id)
      }
    },
    methods: {
      toggleCollapse (item) {
        item.open = !item.open
      },
      iconStyle (item) {
        let plus = true
        if (item['open']) {
          plus = false
        } else {
          plus = true
        }
        return {
          'glyphicon': true,
          'glyphicon-plus': plus,
          'glyphicon glyphicon-minus': !plus
        }
      }
    }
  }
  /**
   * 获取常见问题的具体数据
   * @param _this
   * @param id
   */
  function getProblems (_this, id) {
    let data = {
      self: [
        {
          title: '1，摩赞手环有哪些功能？',
          open: false,
          content: [
            {
              text: '全天的运动计步、能量消耗；睡眠监测分析；手环闹钟，久坐提醒和来电及消息提醒；微信运动排行，时间和日历等功能。'
            }
          ]
        },
        {
          title: '2，摩赞手环是否防水？',
          open: false,
          content: [
            {
              text: '摩赞手环支持IP67级防水，但是不建议佩戴手环游泳和淋浴。'
            }
          ]
        },
        {
          title: '3，摩赞手环正常的工作温度和湿度是多少？',
          open: false,
          content: [
            {
              text: '摩赞手环可正常工作温度：-20到70摄氏度；相对湿度：10%-95%无凝结。'
            }
          ]
        },
        {
          title: '4，摩赞手环如何充电？',
          open: false,
          content: [
            {
              text: '摩赞手环配备专用充电底座，将充电底座通过卡槽卡在手环主体背面，然后连接普通Android手机充电线即可。'
            }
          ]
        }
      ],
      travel: [
        {
          title: '1，摩赞手环配套APP系统要求？',
          open: false,
          content: [
            {
              text: 'IOS8.0及以上；Android4.4及以上；蓝牙4.0及以上。'
            }
          ]
        },
        {
          title: '2，摩赞手环有配套使用的手机APP吗？如何获取？',
          open: false,
          content: [
            {
              text: '摩赞手环有配合使用的手机APP（摩赞出行），用户可以扫描说明书上的下载二维码或者在APPstore或各大Android应用市场搜索“摩赞出行”获取。'
            }
          ]
        },
        {
          title: '3，摩赞手环和摩赞出行配套使用时如何连接？',
          open: false,
          content: [
            {
              text: '摩赞出行APP安装好之后，开启手机蓝牙，打开APP注册用户并设置个人基本信息，根据提示点击手环，当手环和手机出现一组相同数字时点击手环确定连接，再次点击APP确定连接即可。'
            }
          ]
        },
        {
          title: '4，摩赞手环和摩赞出行APP配套使用时需要蓝牙一直打开吗？',
          open: false,
          content: [
            {
              text: '运动计步、睡眠监测分析，手环闹钟，久坐提醒，微信运动排行，时间和日历等功能是不需要一直开启蓝牙连接手机的，只需要在使用摩赞出行APP时连接一次同步手环数据到手机APP即可。'
            },
            {
              text: '手环来电提醒和消息提醒功能由于需要实时了解手机是否有来电和消息情况所以需要蓝牙一直打开并连接手机APP。'
            }
          ]
        },
        {
          title: '5，如果摩赞手环连接不上摩赞出行怎么办？',
          open: false,
          content: [
            {
              text: '摩赞手环连接不上手环主要原因有几个：',
              content: [
                {
                  text: 'a，手环没电，手环充电后即可解决；'
                },
                {
                  text: 'b，手机蓝牙没开，开启手机蓝牙解决；'
                },
                {
                  text: 'c，手环已经被其他手机绑定，请确定附近是否有其他手机绑定手环，解绑后即可使用新手机重新绑定。'
                }
              ]
            }
          ]
        },
        {
          title: '6，手环和手机如何同步数据，同步数据时同步失败或一直在同步中？',
          open: false,
          content: [
            {
              text: '摩赞手环与手机采用蓝牙连接方式同步数据，所以当手环与手机连接之后，会自动同步数据，同步数据时失败主要可能原因时同步过程中手环与手机蓝牙连接断开或手环蓝牙已经被其他设备连接，确定手环与手机连接之后重试即可。'
            }
          ]
        },
        {
          title: '7，手环与手机同步数据之后，手环今日数据变为0？',
          open: false,
          content: [
            {
              text: '摩赞手环在与摩赞APP同步数据之后，摩赞手环会清除当前数据重新开始记录，所以手环今日数据变为0，属正常现象。'
            }
          ]
        },
        {
          title: '8，手环闹钟可以设置多组吗？',
          open: false,
          content: [
            {
              text: '目前摩赞手环的手环闹钟只支持设置1组。'
            }
          ]
        },
        {
          title: '9，久坐提醒是什么功能？',
          open: false,
          content: [
            {
              text: '久坐提醒是摩赞手环针对办公白领长时间坐办公室没有适量活动的人群开发，帮助提醒他们久坐之后适量活动。'
            }
          ]
        },
        {
          title: '10，微信运动是什么功能？如何使用？',
          open: false,
          content: [
            {
              text: '微信运动是摩赞手环合作微信运动，将摩赞手环硬件运动数据作为微信运动排行的数据来源，将手环用户运动数据实时同步到微信运动排行榜。'
            }
          ]
        }
      ],
      service: [
        {
          title: '1，摩赞手环售后服务政策是什么？',
          open: false,
          content: [
            {
              text: '1）自签收之日起，如配件齐全且无人为损坏，七天无理由退货，十五天换货，一年免费维修服务'
            },
            {
              text: '2）腕带变脏、私自改装、因接触化学试剂、接触尖锐物体等人为因素导致损坏、在非正常使用环境下使用（游泳、淋浴等）的不在质保范围内。'
            },
            {
              text: '3）用户退换货或维修服务需提供有效保修凭证和购物发票。'
            },
            {
              text: '4）因质量问题办理退换服务在邮寄商品时，此过程中产生的相关运费由客户自己承担。'
            },
            {
              text: '5）以下情况不予办理退换货',
              content: [
                {
                  text: 'a. 对于过保商品（超过三包保修期的商品）；'
                },
                {
                  text: 'b. 商品的外包装、附件、赠品、说明书不完整，发票缺失或涂改；'
                },
                {
                  text: 'c. 因不可抗力造成的损坏；'
                }
              ]
            }
          ]
        }
      ]
    }
    _this.problems = data[id]
    _this.open = false
  }
</script>
<style type='text/css' rel='stylesheet'>
  #problemSelf{
    background: #f9f9f7;
  }
  #problemSelf .detail{
    margin-bottom: 15px;
  }
  #problemSelf .detail .detail-title{
    padding: 6px 0;
    padding-right: 30px;
    display: block;
    font-size: 16px;
    line-height: 30px;
    background: #fff;
    color: #333;
    position: relative;
  }
  #problemSelf .detail .detail-title:hover{
    color: #1889cf;
  }
  #problemSelf .detail .detail-title .glyphicon{
    position: absolute;
    top: 6px;
    right: 0;
    width: 30px;
    line-height: 30px;
  }
  #problemSelf .detail .content{
    font-size: 14px;
    padding-left: 15px;
  }
  #problemSelf .detail .content .content{
    font-size: 12px;
    padding-left: 15px;
  }
</style>
