import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const store= new Vuex.Store({
    state: { /*изначальные данные, данные, к. есть в приложении*/
        users: []
    },
    actions:{
        get_users({commit}){ /*можно было и без axios с помощью fetch, первый параметр - некоторый контекст, а у контекста
        есть метод commit*/
            return axios('http://localhost:3000/users', {
                method: 'GET'
            })
                .then((response) => {
                    commit('set_users', response.data)/*первый параметр commit - название мутации,
                     которую хотим вызвать, второй п */
                })
                .catch(error => console.log(error))
        }
    },
    mutations: { /*функции, которые напрямую изменют store*/
        set_users: (state, users) => { /*всегда первый параметр state, второй то, что меняем*/
            state.users = users
        },
        createUser: (state, newUser) => {
            state.users.unshift(newUser)
        }
    },
    getters: { /*функции, которые позволяют трансформировать данные, полученные в store*/
        users(state){
            return state.users;
        },
        /*validUsers(state){
            return state.users.filter(r =>{
                return r.id && r.name && r.body
            })
        }*/
    }
    /*modules : {

    * }*/
});

export default store;
