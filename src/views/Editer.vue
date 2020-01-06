<template>
  <div class="editeris-widescreen">
    
    <header class="navbar">
      <h1><div class="logo"><img alt="0pinion logo" src="../assets/logo.png"></div></h1>
    </header>

    <section class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <div id="asd"><P5Canvas/></div>
      </div>
      <div class="column">
        <div id="qwe"><Inputs/></div>
      </div>
    </div>
    </section> 
    <footer>
      <div class="column is-full">
        傘連判状作成ツール 0pinion
        <p class="is-size-7">本サイトでは「851手書き雑フォント Ver 0.883 」を使用しています。
          作成者様サイトはこちら「<a href="http://pm85122.onamae.jp/index.html">8:51:22 pm の云々</a>」
        </p>
      </div>
    </footer>    
  </div>
</template>

<script>
import P5Canvas from '@/components/P5Canvas.vue'
import Inputs from '@/components/Inputs.vue'

export default {
  name: 'editer',
  components: {
    P5Canvas,
    Inputs
  }
}
</script>

<style>
.container{
  width:95%
}
.navbar{
  background:#fdeada;
}
footer{
  position:fixed;
  bottom:0;
  background:#cc8654;
  left:0;
  right:0;
}
header{
  margin-bottom:10px
}
.logo{
  width:100px
}
</style>