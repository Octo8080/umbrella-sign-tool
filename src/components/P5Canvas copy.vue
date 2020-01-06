<template>
  <div class="p5canvas">
    <div class="columns">
      <div class="column is-full">
        <div id="karakasa">
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
      <button  class="button is-primary is-fullwidth" v-on:click="save">保存</button>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'p5canvas',
  props: {
    msg: String
  },
  methods: {
    save: function(){
      //scaleval=0.004
      //p5obj.resizeCanvas(window.innerWidth*2/3*0.9,window.innerWidth*2/3*0.9)
      //console.log(scaleval)
      //p5obj.scale(scaleval);
      //p5obj.draw();
      p5obj.save("filenamejpg");
      //p5obj.resizeCanvas(window.innerWidth*2/3*0.9, window.innerWidth*2/3*0.9)
    }
  },
  mounted() {
    //p5sketchを基に実体化
    new p5(sketch);
    vueobj=this
  },
}

import * as p5 from "p5";
let vueobj=null

let p5obj=null
let font=null

// 画面サイズ計算式
const canvassize = function(){
  let buf = window.innerWidth*2/3*0.9
  return buf<=500?buf:500
}

class Name{
  constructor(p, x, y, t, text,c,sc) {
    this.p = p;
    this.position = p.createVector(x, y);
    this.theta = t;
    this.color = c;
    this.text = text;
    this.scale = sc;
  }
  update(vol) {
  }
  display() {
    this.p.push();
    this.p.translate(this.position.x, this.position.y);
    this.p.rotate(this.theta);
    let splittext = this.text.split('')
    splittext.forEach((chr,index)=>{
      this.p.text(chr,-5,index*7*this.scale)
    })
    this.p.pop();
  }
}

let scaleval=null

let sketch = function(p) {
  p.preload = function(){
    font = p.loadFont('851tegaki_zatsu_normal_0883.ttf');
  }

  p.setup = function() {
    // キャンバス作成
    p.createCanvas(canvassize(), canvassize()).parent('karakasa');
    scaleval=0.004*(canvassize())
    p.scale(scaleval);
    p.textFont(font);
    console.log(`${canvassize()}`)

    //背景を設定
    p.background("#EEE");

    //p5obj=p
  };
  
  p.draw = function() {
    p.background("#EEE");
    scaleval=0.004*(canvassize())
    console.log(`canvassize()=${canvassize()},0.004*canvassize()=${0.004*canvassize()},p.width=${p.width}`)
    p.width

    p.scale(scaleval);

    p.fill("#222");
    p.textSize(7*scaleval);
    
    p.text(vueobj.$store.state.opinion, 50, 70);
    const names_len= vueobj.$store.state.names.length
    vueobj.$store.state.names.forEach((name,index)=>{
          //バーの位置、角度を設定
      let x = (p.width/2 + Math.sin(((360 / names_len) * index * Math.PI) / 180) * 60)/scaleval;
      //console.log(`x=${x}`)
      let y = (p.width/2 + Math.cos(((360 / names_len) * index * Math.PI) / 180) * 60)/scaleval;
      //console.log(`y=${y}`)
      
      let t = ((-360 / names_len) * index * Math.PI) / 180;
      let n=new Name(p,x,y,t,name,"#000",scaleval)
      n.display();
    })

    p5obj=p
  };
  
  p.windowResized =()=> {
    scaleval=0.004*(canvassize())
    console.log(`scaleval=${scaleval}`)
    //p.textSize(20/scaleval ,20/scaleval);
    p.resizeCanvas(canvassize(), canvassize())
  }
};



</script>

