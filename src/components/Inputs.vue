<template>
  <div class="inputs">
    <div class="columns">
      <div class="column is-full">
      <OpinionTitle/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <NamesList/>
      </div>
    </div>
  </div>
</template>

<script>
import OpinionTitle from '@/components/OpinionTitle.vue'
import NamesList from '@/components/NamesList.vue'

export default {
  name: 'inputs',
  components: {
    OpinionTitle,
    NamesList
  }
}
</script>

<style>
.inputs{
  margin-bottom:100px
}  
</style>>
