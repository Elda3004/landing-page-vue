<template>
    <div class="c-app">
        <TheSidebar v-show="authenticated && isAdmin" />
        <CWrapper>
            <TheHeader v-show="authenticated && isAdmin" />
                <div class="c-body">
                    <main class="c-main">
                        <CContainer fluid>
                            <transition name="fade" mode="out-in">
                                <router-view :key="$route.path"></router-view>
                            </transition>
                        </CContainer>
                    </main>
                </div>
            <TheFooter v-show="authenticated && isAdmin" />
        </CWrapper>
    </div>
</template>

<script>
    import TheSidebar from './TheSidebar'
    import TheHeader from './TheHeader'

    import TheFooter from './TheFooter'
    import {mapGetters} from 'vuex'

    export default {
        /**
         *
        */
        name: 'TheContainer',

        /**
         *
        */
        components: {
            TheSidebar,
            TheHeader,
            TheFooter
        },

        /**
         *
        */
        data() {
            return {
                //
            }
        },

        mounted() {
            //
        },

        /**
         *
        */
        computed: {

            /**
             *
            */
            ...mapGetters({
                authenticated: 'Auth/authenticated',
                isAdmin: 'Auth/isAdmin'
            }),
        },
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
