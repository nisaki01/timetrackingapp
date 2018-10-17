import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userId: {}
    },

    getters: {
        getID(state) {
            return state.userId
        }
    },
    
    mutations : {
        changeUserID (state, value) {
            state.userId = value
        }
    }
})

