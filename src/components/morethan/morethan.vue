<template>
  <div id="morethan" class="main-navi container">
    <div class="navi" v-cloak>当前位置 <span class="glyphicon glyphicon-menu-right"></span> {{title}}</div>
    <div class="row header">
      <div class="col-xs-4" v-for="(item, index) in morethan" :key="index">
        <router-link :to="item['link']" v-cloak>{{item['text']}}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        title: '',
        morethan: [
          {
            text: '公司简介',
            link: {
              path: '/morethan/briefIntrod',
              query: {
                id: 0
              }
            }
          },
          {
            text: '合伙招募',
            link: ''
          },
          {
            text: '联系我们',
            link: {
              path: '/morethan/concatUs',
              query: {
                id: 2
              }
            }
          }
        ]
      }
    },
    created () {
//      显示当前位置
      showNavTitle(this)
    },
    watch: {
      '$route' () {
//        显示当前位置
        showNavTitle(this)
      }
    }
  }
  /**
   * 显示当前位置
   * @param _this
   */
  function showNavTitle (_this) {
    let id = _this.$route.query.id
    if (id !== undefined) {
      _this.title = _this.morethan[id]['text']
    }
  }
</script>
<style type='text/css' rel='stylesheet'>
  #morethan{
    padding: 0 15px;
  }
  #morethan .header{
    background: #fff;
    padding: 15px;
    margin: 0;
  }
  #morethan .header a{
    color: #999;
  }
</style>
