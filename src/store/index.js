import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    users: []
  },

  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    }
  },

  actions: {
    GET_USERS_FROM_API({ commit }) {
      return axios('http://localhost:3000/users', {
        method: 'GET'
      })
        .then( response => {
          commit('SET_USERS', response.data)
        })
    }
  },

  getters: {
    USERS(state) {
      return state.users
    }
  }

})
