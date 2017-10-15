<template lang="pug">
  .list
    v-list-tile
      v-list-title {{name}}
</template>
<script>
export default {
  props: ['name']
}
</script>
