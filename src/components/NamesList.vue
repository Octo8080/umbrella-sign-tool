<template>
  <div class="nameslist">
    <div class="columns">
      <div class="column is-full">
        <button class="button is-info is-fullwidth" @click="add" :disabled="nameslength>30">賛同者枠の追加 {{nameslength}}/31</button>
        
      </div>
    </div>
    <div class="names">
    <div class="columns name-cel" v-for="(name,index) of names" :key="index+(new Date().getTime())">
      <div class="column is-full">
        <Name v-bind:index="nameslength-index-1" />
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import Name from '@/components/Name.vue'

export default {
  name: 'nameslist',
  props: {
    msg: String
  },
  components: {
    Name
  },
  methods: {
    add:function() {
      this.$store.commit('AddNames')
    }
  },
  computed: {
    names: {
      get () {
        return this.$store.state.names
      },
      set (value) {
        this.$store.commit('SetNames', value)
      }
    },
    nameslength(){
        return this.$store.state.names.length;
    },
    dummyon: {
      get () {
        return this.$store.state.dummy
      },
      set (value) {
        this.$store.commit('SetDummy')
      }
    }
  }
}
</script>

<style>
.names{
  overflow: auto;
  height:50vh;
  padding:0;
  margin:0;
}
.name-cel{
  width:97%
}
</style>

