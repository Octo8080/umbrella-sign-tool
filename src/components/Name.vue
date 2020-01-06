<template>
  <div class="name">
    <div class="columnsis-gapless">
      <div class="column is-full">
        <article v-if="namestate" class="message is-danger">
          <div class="message-body">
            <p>お名前は8文字以内で設定してください</p>
          </div>
        </article>
        <input class="no-new-line neme-form-input input" type="text" placeholder="お名前(8文字まで)" v-model="name">
        <button class="no-new-line neme-form-button button  is-danger" @click="DeleteName">削除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  props:{index:Number},
  data: function () {
    return {
      namestate:false
    }
  },
  methods: {
    DeleteName: function() {
      this.$store.commit('DeleteNamesAt', this.index)      
    },
    ValidateName: function(){
      //this.namestate=this.$store.state.names[this.index].length>8?true:false
      if( this.$store.state.names[this.index].length>8){
        this.namestate=true
      }
      else{
        this.namestate=false
      }
      console.log(`this.name.length=${this.$store.state.names[this.index].length},this.namestate=${this.namestate}`)
      //this.$nextTick(()=>{this.$refs["ValidateName"]})
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.names[this.index]
      },
      set (value) {
        value=value.substr(0,8)
        this.$store.commit('SetNamesAt', {name:value,index:this.index})
      }
    }
  }
}
</script>

<style>
.neme-form-input{
  width:70%
}
.neme-form-button{
  width:30%
}
.no-new-line{
  display:inline-block
}
</style>