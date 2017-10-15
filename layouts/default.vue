<template>
  <v-app light>
    <v-toolbar fixed app class="blue accent-4">
      <v-toolbar-title>Molecular connections</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>
    </main>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>
<style lang="scss">
.content {
  display: flex; //width: 85%;
  flex-wrap: wrap
}
</style>
