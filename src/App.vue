<template>
  <v-main>
    <Vtable
    :users_data="users"/>
  </v-main>
</template>

<script>
import Vtable from './components/V-table';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',

  components: {
    Vtable,
  },
  methods: {
    ...mapActions([
      'get_users'
    ])
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
