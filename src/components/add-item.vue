<template>

    <form @submit.prevent="onSubmit" class="form__wrapper">

        <label class="form__label" for="new_id">
            <input class="form__input" id="new_id"  type="text" v-model.trim="newId">new ID:
        </label>
        <label class="form__label" for="new-name">
            <input class="form__input" id="new-name"  type="text" v-model.trim="newName">new NAME:
        </label>
        <label class="form__label" for="new-text">
            <input  class="form__input"   id="new-text"  type="text" v-model.trim="newBody">new TEXT:
        </label>
        <v-btn
                color="primary"
                dark
                type="submit"
                class="form__button"
        >
            New Item
        </v-btn>
    </form>
</template>


<script>
    import {mapMutations} from 'vuex';
    export default {
        data: () => ({
            newItem:
                {id: '', name: '', body: ''}
            ,
            newId: '',
            newName: '',
            newBody: ''
        }),
        methods: {
            ...mapMutations (['createUser']),
          onSubmit()  {
              if (this.newId && this.newName && this.newBody){
                  this.createUser({
                     /* this.newItem.id = this.newId;
                      this.newItem.name = this.newName;
                      this.newItem.body = this.newBody;
                      this.$emit('add-row', this.newItem);*/
                      id: this.newId,
                      name: this.newName,
                      body: this.newBody,
                  })
                  this.newId = '';
                  this.newName = '';
                  this.newBody = '';

              } else {
                  alert('Заполните, пожалуйста, все поля');
                  this.users_data = this.users_data;
              }
          }
        }
    }
</script>



<style>
    .form__wrapper {
        display: flex;
        font-family: Roboto, sans-serif;
        justify-content: space-around;
        margin: 20px;
    }
    .form__input{
        border: 3px solid #ccc;
        border-radius: 4px;
    }

    .form__input[type=text] {
        padding: 4px;
    }


    .form__label {
        display: flex;
        flex-direction: column-reverse;
        width: 25%;

    }
    .form__button{
        display: flex;
        margin: 0;
    }
</style>
