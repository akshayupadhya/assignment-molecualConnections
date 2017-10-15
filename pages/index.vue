<template lang="pug">
.home(light)
  //h4 {{l1}}
  v-expansion-panel
    </br>
    h2 Crop commodities
    v-expansion-panel-content( v-for="(item,i) in l1" :key="i")
      div( slot="header") {{item}}
      v-card()
              v-card-text( class="grey ") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

</template>
<script>

export default {
  data () {
    return {
      l1: this.$store.state.level1.children.map((j) => j.name)
    }
  }
}
</script>
<style lang="scss" scoped>
h2{
  padding-top: 20px;
}
</style>
