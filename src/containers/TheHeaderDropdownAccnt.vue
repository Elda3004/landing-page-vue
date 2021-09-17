<template>
    <CHeaderNavLink>
        <button type="button" @click.stop="handleLogout()" class="btn btn-square btn-dark">Logout</button>
    </CHeaderNavLink>
</template>
<script>
    export default {
        name: 'TheHeaderDropdownAccnt',
        data () {
            return {
                //
            }
        },

        /**
         *
        */
        methods: {
            /**
            *
            */
            handleLogout()
            {
                this.$store.dispatch('Auth/logout')
            }
        }
    }
</script>
<style scoped>
    .c-icon {
        margin-right: 0.3rem;
    }
</style>