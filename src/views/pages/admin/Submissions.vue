<template>
    <CCardBody>
        <CDataTable
            :items="users"
            :fields="headers"
            table-filter
            items-per-page-select
            :items-per-page="5"
            hover
            sorter
            pagination
        >
            <template #address.street="{item}">
                <td class="py-2">
                    {{item | filterAddress}}
                </td>
            </template>
            <template #company.name="{item}">
                <td class="py-2">
                    {{item | filterCompany}}
                </td>
            </template>
        </CDataTable>
    </CCardBody>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {

        /**
         *
        */
        name: 'Submissions',

        /**
         *
        */
        data () {
            return {
                usersOpened: null,
                collapseDuration: 0
            }
        },

        /**
         *
        */
        created() {
            this.$store.dispatch('Admin/fetchUsers')
        },

        /**
         *
        */
        computed: {

            /**
             *
            */
            users() {
                return this.$store.state.Admin.users
            },

            /**
             * Header of table
            */
            headers() {
                return [
                    {key: 'name', label: 'Name'},
                    {key: 'username', label: 'Username'},
                    {key: 'email', label: 'E-mail'},
                    {key: 'phone', label: 'Phone'},
                    {key: 'website', label: 'Website'},
                    {key: 'address.street', label: 'Address'},
                    {key: 'company.name', label: 'Company'},
                ]
            }
        },

        /**
         *
        */
        filters: {

            /**
             *
            */
            filterAddress(item)
            {
                if (item.address) {
                    return item.address.street +' ' + item.address.zip +' '+ item.address.suite +' '+ item.address.city
                }

                return 'N/A'
            },

            /**
             *
            */
            filterCompany(item)
            {
                if (item.company) {
                    return item.company.name+', '+item.company.catchPhrase
                }
                return 'N/A'
            }
        },

        /**
         *
        */
        methods: {
            //
        }
    }
</script>