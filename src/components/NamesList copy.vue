<template>
  <div class="nameslist">
    <div class="columns">
      <div class="column is-full">
        <button  class="button is-info is-fullwidth" @click="add" :disabled="nameslength>30">賛同者の追加 {{nameslength}}/31</button>
        
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <label class="checkbox">
          <input type="checkbox" v-model="dummyon">
          ダミー賛同者10名を追加する
        </label>
      </div>
    </div>
    <div class="columns" v-for="(name,index) of names" :key="index+(new Date().getTime())">
      <div class="column is-full">
        <Name v-bind:index="nameslength-index-1" />
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

