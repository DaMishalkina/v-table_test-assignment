<template>
  <v-main>
    <AddItem
    @add-row="addRow"/>
    <Vtable
    :users_data="users"/>
  </v-main>
</template>

<script>
import Vtable from './components/V-table';
import {mapActions, mapGetters} from 'vuex';
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
    addRow(user){
      let toAdd = {id: user.id, name: user.name, body: user.body}
      this.users.push(toAdd);

    }
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  mounted (){
    this.get_users()
  },

  data: () => ({
    //
  }),
};
</script>
