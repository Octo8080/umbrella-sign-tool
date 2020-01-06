<template>
  <div class="p5canvas">
    <div class="columns">
      <div class="column is-full">
        <div v-if="!state" >
          <article class="message is-warning">
            <div class="message-header">
              <p>準備中</p>
            </div>
            <div class="message-body">
              <p>Fontファイルの読み込み中です。</p><p>少々お待ちください。</p>
            </div>
          </article>
        </div>
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
  data: function () {
    return {
      state:false,
      callback:null
    }
  },
  methods: {
    save: function(){
      p5obj.save("filenamejpg");
    },
    checkstate: function(){
      this.state=fontReady;
      if(this.state){
        clearInterval(this.callback)
      }
    }
  },
  mounted() {
    //p5sketchを基に実体化
    new p5(sketch);
    vueobj=this
    this.callback=setInterval(() => {
      this.checkstate()
    }, 300);
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
  constructor(p, x, y, t, text,c) {
    this.p = p;
    this.position = p.createVector(x, y);
    this.theta = t;
    this.color = c;
    this.text = text;
  }
  update(vol) {
  }
  display() {
    this.p.push();
    this.p.translate(this.position.x, this.position.y);
    this.p.rotate(this.theta);
    let splittext = this.text.split('')
    splittext.forEach((chr,index)=>{
      this.p.text(chr,-5,index*10)
    })
    this.p.pop();
  }
}

class Opinion{
  constructor(p, x, y,text,c) {
    this.p = p;
    this.position = p.createVector(x, y);
    this.color = c;
    this.text = text;
  }
  update(vol) {
  }
  display() {
    this.p.push();
    this.p.translate(this.position.x, this.position.y);
    let buftext = this.text.replace(/\r?\n/g, ' ')  
    this.p.text(buftext,-35,-20,70,140)
    this.p.pop();
  }
}

let scaleval=null
let fontReady = false;

function fontRead(readfont){
  font=readfont
  fontReady = true;
  console.info("Fontloaded")
}

let sketch = function(p) {
  p.preload = function(){
    p.loadFont('851tegaki_zatsu_normal_0883.ttf',fontRead);
    
  }

  p.setup = function() {
    // キャンバス作成
    p.createCanvas(canvassize(), canvassize()).parent('karakasa');
    scaleval=0.004*(canvassize())
    p.scale(scaleval);

    //背景を設定
    p.background("#EEE");

    p5obj=p
  };
  
  p.draw = function() {
    p.background("#EEE");

    if(!fontReady){
      p.textSize(10);
      p.text("フォント準備中",0,0)
      return
    }

    p.textFont(font);
    scaleval=0.004*(canvassize())
    p.scale(scaleval);

    //ガイド用の円を描く
    //p.fill("#999");
    //p.circle(p.width/2/scaleval, p.width/2/scaleval, p.width/scaleval);

    p.fill("#222");
    p.textSize(10);

    const names_len= vueobj.$store.state.names.length
    let center = p.width / 2 / scaleval;


    const opinionstr= vueobj.$store.state.opinion

    //p.text(opinion, center-5*opinion.length, center,100,100);
    let o=new Opinion(p,center,center,opinionstr,"#000")
    o.display();

    
    vueobj.$store.state.names.forEach((name,index)=>{
      let rad = 360/names_len * index * Math.PI / 180
          //バーの位置、角度を設定
      let x = center + Math.sin(rad)*50;
      let y = center + Math.cos(rad)*50;
      
      let t = ((-360 / names_len) * index * Math.PI) / 180;
      let n=new Name(p,x,y,t,name,"#000",scaleval)
      n.display();
    })

    //p5obj=p
  };
  
  p.windowResized =()=> {
    scaleval=0.004*(canvassize())
    p.resizeCanvas(canvassize(), canvassize())
  }
};



</script>

