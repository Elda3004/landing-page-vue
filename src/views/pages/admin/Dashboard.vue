<template>
    <div>
        <CCard>
            <CCardBody>
                <CRow class="text-center">
                    <div class="col-md-12">
                        Welcome {{ fullName }}
                    </div>
                </CRow>
            </CCardBody>
        </CCard>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        /**
         *
        */
        name: 'Dashboard',

        /**
         *
        */
        data () {
            return {
                //
            }
        },

        /**
         *
        */
        computed: {

            ...mapGetters({
                user: "Auth/user"
            }),

            /**
             * Get user fullName
            */
            fullName()
            {
                return (this.user !== null) ? this.user.first_name+' '+this.user.last_name : ''
            }
        }
    }
</script>
