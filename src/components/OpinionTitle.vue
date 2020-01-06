<template>
  <div class="opiniontitle">
    <div class="columns">
      <div class="column is-full">
        <article class="message is-dark">
          <div class="message-header">
            <p>あなたの主張</p>
          </div>
          <textarea class="input pinion" type="text" placeholder="あなたの主張を入力" v-model="opinion" rows="4"></textarea>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OpinionTitle',
  computed: {
    opinion: {
      get () {
        return this.$store.state.opinion
      },
      set (value) {
        this.$store.commit('SetOpinion', value)
      }
    }
  }
}

</script>

<style>
.pinion{
  height:80px
}
</style>