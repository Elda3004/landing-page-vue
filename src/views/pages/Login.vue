<template>
    <div class="c-app flex-row align-items-center">
        <div class="container">
            <CRow class="justify-content-center">
                <CCol md="8">
                    <CCardGroup>
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h1>Login</h1>
                                    <p class="text-muted">Sign In to your account</p>
                                    <CInput
                                        placeholder="Username"
                                        autocomplete="username email"
                                        v-model="email"
                                        >
                                        <template #prepend-content>
                                            <CIcon name="cil-user"/>
                                        </template>
                                    </CInput>

                                    <div class="error" v-if="errors.hasOwnProperty('username_email')">{{ errors["username_email"][0] }}</div>

                                    <CInput
                                        placeholder="Password"
                                        type="password"
                                        autocomplete="curent-password"
                                        v-model="password"
                                        >
                                        <template #prepend-content>
                                            <CIcon name="cil-lock-locked"/>
                                        </template>
                                    </CInput>

                                    <div class="error" v-if="errors.hasOwnProperty('password')">{{ errors["password"][0] }}</div>

                                    <CRow>
                                        <CCol col="6" class="text-left">
                                            <CButton color="primary" class="px-4" :disabled="disabled" @click.stop="handleLogin()">Login</CButton>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCard>
                        <CCard
                            color="primary"
                            text-color="white"
                            class="text-center py-5 d-md-down-none"
                            body-wrapper
                            >
                            <CCardBody>
                                <h2>Skipsolabs Project</h2>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'Login',

        data() {
            return {
                email: null,
                password: null,
                disabled: false
            }
        },

        /**
         *
        */
        mounted() {
            //
        },

        /**
         *
        */
        computed: {

            ...mapGetters({
                errors: 'HandleErrors/errors'
            }),
        },

        /**
         *
        */
        methods: {

            /**
             * Post user data to api
            */
            handleLogin()
            {
                this.disabled = true

                this.$store.dispatch('Auth/postLogin', {
                    username_email: this.email,
                    password: this.password
                })

                this.disabled = false
            },
        }
    }
</script>

<style>
    .error {
        color: red;
        font-size: 14px;
        padding-bottom: 5px;
    }
</style>