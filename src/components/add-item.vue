<template>

    <form @submit.prevent="onSubmit" class="form__wrapper">

        <label class="form__label" for="new_id">
            <input class="form__input" id="new_id"  type="text" v-model="newItem.id">New ID
        </label>
        <label class="form__label" for="new-name">
            <input class="form__input" id="new-name"  type="text" v-model="newItem.name">New NAME
        </label>
        <label class="form__label" for="new-text">
            <input  class="form__input"   id="new-text"  type="text" v-model="newItem.body">New TEXT
        </label>
        <v-btn
                color="primary"
                dark
                type="submit"
        >
            Create New Item
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

              if (this.newItem.id.trim()){
                  this.$emit('add-row', this.newItem)
              }
          }
        }
    }
</script>



<style>
    .form__wrapper {
        display: flex;
        margin: 20px;
        font-family: Roboto, sans-serif;
        justify-content: space-around;
    }
    .form__input{
        border: solid 1px #676767;
        border-radius: 15px;
    }

    .form__label {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
