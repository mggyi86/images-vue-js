import qs from 'qs'
import api from '../../api/imgur'
import { router } from '../../main.js'

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token // return false if state.token is null
}

const actions = {
  login: ({ commit }) => {
    api.login()
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''))

    commit('setToken', query.access_token)
    window.localStorage.setItem('imgur_token', query.access_token)
    router.push('/')
  },
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}