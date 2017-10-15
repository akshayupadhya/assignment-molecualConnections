<template lang="pug">
  .l3
    </br>
    </br>
    </br>
    </br>
    </br>
    p(v-model="l3") l3{{l3}}
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    l3: () => console.log(this.$store)
  }
}
</script>
