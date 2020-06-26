<template>

    <form @submit.prevent="onSubmit" class="form__wrapper">

        <label class="form__label" for="new_id">
            <input class="form__input" id="new_id"  type="text" v-model.trim="newItem.id">new ID:
        </label>
        <label class="form__label" for="new-name">
            <input class="form__input" id="new-name"  type="text" v-model.trim="newItem.name">new NAME:
        </label>
        <label class="form__label" for="new-text">
            <input  class="form__input"   id="new-text"  type="text" v-model.trim="newItem.body">new TEXT:
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
    export default {
        data: () => ({
            newItem: [
                {id: '', name: '', body: ''}
            ]
        }),
        methods: {
          onSubmit()  {

              if (this.newItem.id){
                  this.$emit('add-row', this.newItem)
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
