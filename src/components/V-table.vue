<template>
    <p>Hello</p>
    <v-data-table
    :headers="headers"
    >

    </v-data-table>
</template>

<script>
    export default {
        data: () => ({
            headers: [
                {text: 'ID', align: 'center', value: ''},
                {text: 'NAME', align: 'center', value: ''},
                {text: 'TEXT', align: 'center', value: ''}
            ],
        }),
    }
</script>

<style scoped>

</style>
