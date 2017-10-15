<template lang="pug">
.home
  //h4 {{l1}}
  v-expansion-panel.md8.xs11.sm10.lg6
   </br>
    h2 Crop commodities
    v-expansion-panel-content( v-for="(item,i) in l1" :key="i")
      div( slot="header") {{item.name}}
      .subHeader( slot="subheader") {{item.id}}
      v-card
        .view(v-for="j in nextLevel(item.name)")
          router-link(v-bind:to="link(j)")
            v-list
              .list__tile
                v-list-tile-content 
                  .list__tile__title {{j.name}}
                v-list-tile-action
                  v-btn( icon ripple) 
                    v-icon send

                
</template>
<script>
// import listItem from '../components/listItem.vue'
export default {
  data () {
    return {
      l1: this.$store.state.level1.children.map((j) => { return { name: j.name, id: j.id } }),
      l2: this.$store.state.level1.termsrelation.map((j) => {
        return {
          root: j.rel,
          terms: j.terms.map((k) => {
            return {
              id: k.objid,
              name: k.dis_formated_name
            }
          })
        }
      })
    }
  },
  methods: {
    nextLevel (key) {
      //  console.log(key, this.l2.key)
      let Arr = this.l2.filter((j) => {
        return j.root === key
      })
      Arr[0].terms.map((j) => {
        j.name = j.name.length >= 50 ? j.name.substring(0, 40) + '........' : j.name
        return j
      })
      return Arr[0].terms
    },
    link (j) {
      return 'l3/' + j.id.toString()
    }
  }
}
</script>
<style lang="scss" scoped>
h2{
  padding: 5%;
}
  a{
  text-decoration: none;
  }

.list__tile__title {

  text-decoration: none;
  //color: #2b2b2b;
}
</style>
