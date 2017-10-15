import level1 from '../assets/level1.json'
import level2 from '../assets/level2.json'

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      level1,
      level2,
      level3: level2.termsrelation.map((j) => j.rel)
    }
  })
}

export default createStore
