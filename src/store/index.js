import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opinion:"",
    names:[],
    dummy:false
  },
  mutations: {
    SetOpinion(state,text){
      state.opinion=text
    },
    SetNames(state,arr){
      state.names=arr
    },
    SetNamesAt(state,param){
      state.names[param.index]=param.name
    },
    AddNames(state){
      if(state.names.length<50){
        state.names.push("")
      }
    },
    DeleteNamesAt(state,index){
      state.names.splice(index, 1);
    },
    SetDummy(state){
      state.dummy = !state.dummy;
      
    },
  },
  actions: {
    SetOpinion(text){
      text.commit('SetOpinion')
    },
    SetNames(arr){
      arr.commit('SetNames')
    },
    SetNamesAt(param={name,index}){
      param.commit('SetNamesAt')
    },
    AddNames(){
      param.commit('AddNames')
    },
    DeleteNamesAt(index){
      index.commit('AddNames')
    },
    SetDummy(){
      commit('SetDummy')
    }
  },
  modules: {

  }
})
