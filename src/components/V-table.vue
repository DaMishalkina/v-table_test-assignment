<template>

    <div>
        <v-data-table
        :headers="headers"
        :items="users_data">

        </v-data-table>
    </div>
</template>

<script>
    export default {
        data: () => ({
            headers: [
                {text: 'ID', align: 'center', value: 'id'},
                {text: 'NAME', align: 'center', value: 'name'},
                {text: 'TEXT', align: 'center', value: 'body'}
            ],
        }),
        props: {
            users_data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>
