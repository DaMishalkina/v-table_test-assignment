<template>

    <div class="v-table__wrapper">
        <table class="v-table">
            <thead class="v-table__heading">
                <tr  class="v-table__headers">
                    <th class="v-table__header" @click="sortByID">
                        ID
                        <img :src="require('../assets/unfold_more.svg')"
                        >
                    </th>
                    <th class="v-table__header" @click="sortByName">
                        NAME
                        <img :src="require('../assets/unfold_more.svg')"
                        >
                    </th>
                    <th class="v-table__header" @click="sortByText">
                        TEXT
                        <img :src="require('../assets/unfold_more.svg')"
                        >
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="v-table__row"
                    v-for="row in paginatedItems">
                    <td class="v-table__column v-table__id">{{row.id}}</td>
                    <td class="v-table__column v-table__name">{{row.name}}</td>
                    <td class="v-table__column v-table__text">{{row.body}}</td>
                </tr>
            </tbody>
        </table>
        <div class="v-table__pagintation">
            <div class="page"
            v-for="page in pages"
            :key="page"
            :class="{'page__selected': page === pageNumber}"
            @click="pageClick(page)">
                {{page}}
            </div>
        </div>
    </div>

<!--            <p  v-for="header in headers">-->
<!--            {{header.text}}-->
<!--            </p>-->
<!--        </div>-->
<!--        <div class="v-table__body">-->
<!--            <div class="v-table__row"-->
<!--            v-for="row in users_data">-->
<!--                <div class="v-table__id v-table__cell">{{row.id}}</div>-->
<!--                <div class="v-table__name v-table__cell">{{row.name}}</div>-->
<!--                <div class="v-table__text v-table__cell">{{row.body}}</div>-->
<!--
           <v-data-table-->
<!--        :headers="headers"-->
<!--        :items="users_data">-->
<!--            <template slot="items" slot-scope="props">-->
<!--                <td v-for="header in headers">-->
<!--                    {{props.item[header.value]}}-->
<!--                </td>-->
<!--                <td>-->
<!--                    -->
<!--                </td>-->
<!--            </template>-->

<!--        </v-data-table>-->

</template>

<script>
    export default {
        data: () => ({
            headers: [
                {text: 'ID', align: 'center', value: 'id'},
                {text: 'NAME', align: 'center', value: 'name'},
                {text: 'TEXT', align: 'center', value: 'body'}
            ],

            usersPerPage: 50,
            pageNumber: 1,
        }),
        props: {
            users_data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        methods: {
            pageClick(page){
                this.pageNumber = page;
            },
            sortByName(){
                this.users_data.sort((a,b) => a.name.localeCompare(b.name))
            },
            sortByID(){
                this.users_data.sort((a,b) => a.id - b.id)
            },
            sortByText(){
                this.users_data.sort((a,b) => a.body.localeCompare(b.body))
            }
        },
        computed: {
            pages() {
                return Math.ceil(this.users_data.length/50);
            },
            paginatedItems () {
                let from = (this.pageNumber-1)*this.usersPerPage;
                let to =from + this.usersPerPage;
                return this.users_data.slice(from,to);
            }
        }
    }
</script>

<style scoped>
   /*.v-table__header, .v-table__row {*/
   /*    display: flex;*/
   /*    justify-content: space-around;*/
   /*}*/

   /* .v-table__cell {*/
   /*     text-align: center;*/
   /*     flex-basis: 33%;*/
   /*     padding: 8px 16px;*/
   /* }*/
   .v-table__header{
      cursor: pointer;
   }
    .v-table__column {
        padding: 8px 16px;

    }
    .v-table__pagintation {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 20px 0;
    }

    .page {
        padding: 8px;
        border: solid 1px #676767;
        margin-right: 10px;
    }

    .page:hover{
        background: #676767;
        cursor: pointer;
        color: #fff;
    }

    .page__selected {
        background: #676767;
        cursor: pointer;
        color: #fff;
    }

</style>
