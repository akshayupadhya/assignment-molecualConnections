<template lang="pug">
.l3
    .view(v-for="j in l3")
        v-expansion-panel
            v-expansion-panel-content( )
                div( slot="header") {{j}}
                v-card
                    v-list(v-for="k in nextLevel(j)")
                        v-card
                            v-list-tile
                                v-list-tile-content
                                    v-list-tile-title(slot="subheader") {{k.name}}
                                //- v-list-tile-action
                                //-     v-btn( icon ripple) 
                                //-       v-icon send
           
</template>
<script>
// import { mapActions } from 'vuex';
import level2 from '../../assets/level2.json'
export default {
  data () {
    return {
      route: this.$route.params.id
    }
  },
  computed: {
    l3: () => level2.termsrelation.map((j) => j.rel)
  },
  methods: {
    nextLevel (key) {
      //  console.log(key, this.l2.key)
      let Arr = level2.termsrelation.filter((j) => {
        return j.rel === key
      })
      let res = Arr[0].terms.map((j) => {
        j.dis_formated_name = j.dis_formated_name.length >= 20 ? j.dis_formated_name.substring(0, 20) + '........' : j.name
        return j
      })
      console.log('res', res)
      let resu = res.map((j) => {
        return {name: j.dis_formated_name, id: j.objid, disp: j.dis_name}
      })
      // console.log(resu)
      return resu
    }
  }
}
</script>
