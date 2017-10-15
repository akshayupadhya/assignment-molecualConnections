import level1 from '../assets/level1.json'
import level2 from '../assets/level2.json'
export const state = () => ({
  level1,
  level2
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
