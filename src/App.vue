<template>
  <v-main>
    <AddItem/>
    <!--@add-row="addRow"-->
    <Vtable
    :users_data="users"/>
  </v-main>
</template>

<script>
import Vtable from './components/V-table';
import {mapActions, mapGetters} from 'vuex'; /*методы-хелперы vuex, к позволяют упростить получение данных из store.js*/
import AddItem from './components/add-item';


export default {
  name: 'App',
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  components: {
    Vtable,
    AddItem
  },
  methods: {
    ...mapActions([
      'get_users'
    ]),
   /* addRow(user){
      let toAdd = {id: user.id, name: user.name, body: user.body}
      this.users.push(toAdd);

    }*/
  },
  computed: {
    ...mapGetters([/*функция, к принимает в себя массив, состоящий из строк, к. совпадают с сущностями из store.js*/
      'users'
    ])
  },
  mounted (){
    this.get_users()
  },

  data: () => ({
    //
  }),
  /*Без vuex
  * async mounted (){
  * const res = await fetch('url')
  * const users = await res.json()
  * this.users = users
  * },
  * data () => {
  * users: []
  * }*/
};
</script>
