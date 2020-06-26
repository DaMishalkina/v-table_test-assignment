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

  components: {
    Vtable,
    AddItem
  },
  methods: {
    ...mapActions([
      'get_users'
    ]),
    addRow(user){
      console.log(user)
      this.users.push(user)

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
