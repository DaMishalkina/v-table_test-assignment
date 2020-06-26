import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const store= new Vuex.Store({
    state: {
        users: []
    },
    actions:{
        get_users({commit}){
            return axios('http://localhost:3000/users', {
                method: 'GET'
            })
                .then((response) => {
                    commit('set_users', response.data)
                })
                .catch(error => console.log(error))
        }
    },
    mutations: {
        set_users: (state, users) => {
            state.users = users
        }
    },
    getters: {
        users(state){
            return state.users;
        }
    }
});

export default store;
