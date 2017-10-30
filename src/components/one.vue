<template>
  <div id="one">
    <h1>{{ oneText }}</h1>
    <a href="javascript:;">{{contactMe}}</a>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      oneText: '我是第一个组件页面',
      contactMe: 'QQ-1079832313'
    }
  }
}
</script>
