<template>
  <div id="home">
    <h1>我是首页</h1>

    <h1 class="message" v-waves.block>Hello Vue Waves</h1>
    <section>
        <a v-for="color in colors" :style="{background:color}" v-waves.button>Vue Waves</a>
    </section>
    <section>
        <button type="button" v-for="color in colors" :style="{background:color}" v-waves.button.float>Vue Waves</button>
    </section>
    <section>
        <input type="button" v-for="color in colors" :style="{background:color}" v-waves.button.light value="Vue Waves">
    </section>
    <section>
        <i v-for="color in colors" :style="{background:color}" v-waves.circle>V</i>
    </section>
    <section>
        <i v-for="color in colors" :style="{background:color}" v-waves.circle.float>V</i>
    </section>

    <section>
        <img v-waves src="https://farm2.staticflickr.com/1297/1091511802_2fb2451ecc_n.jpg"/>
    </section>

    <ul>
      <li><router-link to="/one">点我跳转到第一页</router-link></li>
      <li><router-link to="/two">点我跳转到第二页</router-link></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      colors: [
        'rgb(3, 169, 244)',
        'rgb(76, 175, 80)',
        'rgb(255, 235, 59)',
        'rgb(255, 152, 0)',
        'rgb(255, 87, 34)',
        'rgb(233, 30, 99)'
      ]
    }
  }
}
</script>
