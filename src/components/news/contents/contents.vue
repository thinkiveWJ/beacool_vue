<template>
  <div id="newContents" class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <div class="row introduce" v-for="(item, index) in newsContentsArr" :key="index">
          <div class="col-md-9 col-xs-8 title" v-cloak>{{item['title']}}</div>
          <div class="col-md-3 col-xs-4 read-num" v-cloak><span class="glyphicon glyphicon-eye-open"></span> {{item['readNum']}}</div>
          <div class="col-xs-12 date" v-cloak>{{item['date']}}，by {{item['author']}}</div>
          <div class="col-xs-12 abstract" v-cloak>{{item['abstract']}}</div>
          <div class="col-xs-12 img"><img v-lazy="item['url']"></div>
          <div class="col-xs-12 text-right"><a @click="readNews(index, newsContentsAll, newsContentsArr)">阅读全文 <span class="glyphicon glyphicon-share-alt"></span></a></div>
        </div>
        <div class="moreBTN"><a class="btn btn-default" @click="moreNews" v-cloak>{{moreBTN}}</a></div>
      </div>
      <div class="col-md-4 hot">
        <div class="row introduce">
          <div class="col-md-9 col-xs-8 title">热门抢先看</div>
          <div class="col-md-3 col-xs-4 text-center"><span class="icon"></span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        id: '',
        newsContentsAll: [],
        newsContentsArr: [], // 显示新闻的数据列表
        page: 1,
        pageSize: 5,
        moreBTN: '加载更多'
      }
    },
    watch: {
      '$route' () {
//        初始化分页数据的页数
        initPage(this)
//        加载当前页面新闻数据
        initNews(this)
      }
    },
    created () {
//        初始化分页数据的页数
      initPage(this)
//        加载当前页面新闻数据
      initNews(this)
    },
    methods: {
      moreNews () {
        this.page++
//        加载当前页面新闻数据
        initNews(this)
      },
      readNews (index, newsContentsAll, newsContentsArr) {
        sessionStorage.setItem('news', JSON.stringify({
          index: index,
          arr: newsContentsAll
        }))
        this.$router.push(newsContentsArr[index]['link'])
      }
    }
  }
  /**
   * 初始化新闻分页数据
   * @param _this
   */
  function initPage (_this) {
    _this.newsContentsArr = []
    _this.page = 1
    _this.pageSize = 5
  }

  /**
   * 初始化新闻列表
   * @param _this
   * @param page
   * @param pageSize
   */
  function initNews (_this) {
    _this.newsContentsAll = []
    let page = _this.page
    let pageSize = _this.pageSize
    _this.id = _this.$route.query.id
    _this.id = _this.id ? _this.id : 0
    let newsContents = {
      2017: [
        {
          title: '智向科技联合Nordic，推出汽车手环',
          readNum: 919,
          date: '2017-07-24',
          author: '智向科技',
          abstract: '摘要：BeacoolCarFit手环用Nordic的nRF52832 SoC，Nordic SoC超低功耗，手环充一次电可1个月以上。',
          url: '/beacool/static/images/news_icon01.png',
          link: {
            path: '/news/details',
            query: {
              id: 20170724
            }
          }
        },
        {
          title: '智向科技加入阿里IoT合作伙伴联盟',
          readNum: 252,
          date: '2017-06-16',
          author: 'timothy',
          abstract: '摘要：阿里联合海尔优家，松下，NXP，智向科技等近200多家IoT企业成立“IoT合作伙伴计划联盟”',
          url: '/beacool/static/images/news_icon02.png',
          link: {
            path: '/news/details',
            query: {
              id: 20170616
            }
          }
        },
        {
          title: '智向科技助力芝麻信用、盼达智能出行发布会',
          readNum: 452,
          date: '2017-05-11',
          author: '智向科技',
          abstract: '摘要：在发布会上，智向科技的摩赞出行手环，作为与智能汽车互动的黑科技，引爆发布会现场。',
          url: '/beacool/static/images/news_icon03.png',
          link: {
            path: '/news/details',
            query: {
              id: 20170511
            }
          }
        }
      ],
      2016: [
        {
          title: '智向科技全球首创，情景化安全移动支付投入商用',
          readNum: 910,
          date: '2016-08-01',
          author: '智向科技',
          abstract: '摘要：智向科技联合捷德集团研发的场景化智能支付手环，使手环成功运用于安全认证及支付领域。',
          url: '/beacool/static/images/news_icon04.png',
          link: {
            path: '/news/details',
            query: {
              id: 20160801
            }
          }
        },
        {
          title: '智向科技可支付定位智能手环',
          readNum: 382,
          date: '2016-06-01',
          author: '智向科技',
          abstract: '摘要：智向科技定位智能手环加入安全智能芯片及非接触线圈，成为安全支付领域的又一全新载体。',
          url: '/beacool/static/images/news_icon05.png',
          link: {
            path: '/news/details',
            query: {
              id: 20160601
            }
          }
        },
        {
          title: '智向手环新科技防范网络诈骗',
          readNum: 32,
          date: '2016-05-05',
          author: '智向科技',
          abstract: '摘要：智向手环进行移动支付不依赖网络，无需验证码，支付手环的SE安全芯片无法进行复制。',
          url: '/beacool/static/images/news_icon06.png',
          link: {
            path: '/news/details',
            query: {
              id: 20160505
            }
          }
        },
        {
          title: '智向科技与金联汇通签署合作协议，剑指智能穿戴eID市场',
          readNum: 82,
          date: '2016-01-06',
          author: '智向科技',
          abstract: '摘要：智向科技信息有限公司与北京金联汇通信息技术有限公司联合宣布在北京签署战略合作协议。',
          url: '/beacool/static/images/news_icon07.png',
          link: {
            path: '/news/details',
            query: {
              id: 20160106
            }
          }
        }
      ]
    }
    let index = (page - 1) * pageSize
    index = index > 0 ? index : 0
    let endNum = page * pageSize
    if (newsContents[_this.id]) {
      newsContents[_this.id].sort(function (a, b) {
        return b['date'].replace(/-/g, '') - a['date'].replace(/-/g, '')
      })
//      所有新闻数据，以便传送到详情页
      _this.newsContentsAll = newsContents[_this.id]
      let len = newsContents[_this.id].length
      endNum = endNum > len ? len : endNum
      _this.moreBTN = endNum < len ? '加载更多' : '已全部加载'
      for (let i = index; i < endNum; i++) {
        _this.newsContentsArr.push(newsContents[_this.id][i])
      }
    } else {
      let arr = []
      for (let i in newsContents) {
        for (let j = 0; j < newsContents[i].length; j++) {
          arr.push(newsContents[i][j])
        }
      }
      let len = arr.length
//      按照时间排序
      arr.sort(function (a, b) {
        return b['date'].replace(/-/g, '') - a['date'].replace(/-/g, '')
      })
//      所有新闻数据，以便传送到详情页
      _this.newsContentsAll = arr
      endNum = endNum > len ? len : endNum
      _this.moreBTN = endNum < len ? '加载更多' : '已全部加载'
      for (let i = index; i < endNum; i++) {
        _this.newsContentsArr.push(arr[i])
      }
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #newContents{
    background: #f9f9f7;
    padding: 15px 0;
    text-align: left;
  }
  #newContents .title{
    font-size: 18px;
    font-weight: bold;
  }
  #newContents .read-num{
    color: #999;
  }
  #newContents .introduce{
    margin: 15px 0;
    border-bottom: 1px solid #ddd;
    padding: 6px 0;
    background: #fff;
  }
  #newContents .introduce > div{
    margin-top: 6px;
  }
  #newContents .introduce .date{
    color: #999;
  }
  #newContents .introduce .abstract{
    font-size: 14px;
  }
  #newContents .introduce img{
    padding: 15px 0 6px;
  }
  #newContents .moreBTN a{
    display: block;
    border: 0;
  }
  #newContents .moreBTN a.btn-default:hover,
  #newContents .moreBTN a.btn-default:focus,
  #newContents .moreBTN a.btn-default.focus{
    color: #337ab7;
    border: 0;
    background: #fff;
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  #newContents .hot .introduce{
    border: 0;
    padding: 15px 0 40px;
  }
  #newContents .hot .introduce span.icon{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('/beacool/static/images/news_hot.png');
    background-size: 100% 100%;
  }
</style>
