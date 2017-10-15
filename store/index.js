import level1 from '../assets/level1.json'
export const state = () => ({
  level1
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
