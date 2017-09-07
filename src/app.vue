<template>
  <div id="main">
    <v-header></v-header>
    <router-view class="top52"></router-view>
  </div>
</template>

<script type='text/ecmascript-6'>
import header from './components/header/header'
export default{
  data () {
    return {
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.top52{
  margin-top: 52px;
}
</style>
