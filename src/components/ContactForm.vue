<template>
    <main id="main">
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                    <h2>Send your request</h2>
                </div>

                <div class="row">
                    <div class="col-lg-12 mt-12 mt-lg-0 d-flex align-items-stretch">
                        <form role="form" class="submission-form" @submit.prevent="postUserSubmission()">
                            <div class="row">
                                <div class="form-group col-md-6" :class="{ 'form-group--error': $v.user.first_name.$error }">
                                    <label for="name">Name *</label>
                                    <input type="text" v-model.trim="$v.user.first_name.$model" class="form-control">

                                    <div class="error" v-if="!$v.user.first_name.required || errors.hasOwnProperty('first_name')">{{ 'Name is required' || errors["first_name"][0] }}</div>

                                    <div class="error" v-if="!$v.user.first_name.alpha">Name must contain only letters.</div>
                                </div>

                                <div class="form-group col-md-6" :class="{ 'form-group--error': $v.user.last_name.$error }">
                                    <label for="last name">Surname *</label>
                                    <input type="text" v-model.trim="$v.user.last_name.$model" class="form-control">

                                    <div class="error" v-if="!$v.user.last_name.required || errors.hasOwnProperty('last_name')">{{ 'Surname is required' || errors["last_name"][0] }}</div>

                                    <div class="error" v-if="!$v.user.last_name.alpha">Surname must contain only letters.</div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-6" :class="{ 'form-group--error': $v.user.username.$error }">
                                    <label for="name">Username *</label>
                                    <input type="text" v-model.trim="$v.user.username.$model" class="form-control">

                                    <div class="error" v-if="!$v.user.username.required || errors.hasOwnProperty('username')">{{ 'Username is required' || errors["username"][0] }}</div>

                                    <div class="error" v-if="!$v.user.username.minLength || !$v.user.username.maxLength">Username must be between {{$v.user.username.$params.minLength.min}} and {{$v.user.username.$params.maxLength.max}}</div>
                                </div>

                                <div class="form-group col-md-6 mt-3 mt-md-0" :class="{ 'form-group--error': $v.user.email.$error }">
                                    <label for="email">E-mail *</label>
                                    <input type="email" class="form-control" v-model.trim="$v.user.email.$model">

                                    <div class="error" v-if="!$v.user.email.required || errors.hasOwnProperty('email')">{{ 'The e-mail is required' || errors["email"][0] }}</div>
                                    <div class="error" v-if="!$v.user.email.email">The e-mail must be a valid email.</div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="street">Street *</label>
                                    <input type="text" v-model="user.address.street" class="form-control">

                                    <div class="error" v-if="errors.hasOwnProperty('address.street')">{{ errors["address.street"][0] }}</div>
                                </div>

                                <div class="form-group col-md-6 mt-3 mt-md-0">
                                    <label for="city">City *</label>
                                    <input type="text" class="form-control"  v-model="user.address.city">

                                    <div class="error" v-if="errors.hasOwnProperty('address.city')">
                                        {{ errors["address.city"][0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="zip">Zip *</label>
                                    <input type="text" v-model="user.address.zipcode" class="form-control">

                                    <div class="error" v-if="errors.hasOwnProperty('address.zipcode')">{{ errors["address.zipcode"][0] }}</div>
                                </div>

                                <div class="form-group col-md-6 mt-3 mt-md-0">
                                    <label for="contry_id">Country *</label>
                                    <select class="form-control selectbox" v-model="user.address.country_id">
                                        <option value="" selected disabled>Choose</option>
                                        <option v-for="country in apiCountries" :key="country.id" :value="country.id">{{ country.name }}</option>
                                    </select>

                                    <div class="error" v-if="errors.hasOwnProperty('address.country_id')">{{ errors["address.country_id"][0] }}</div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" v-model="user.has_company">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Do you belong to a company?</label>
                                    </div>

                                    <div class="error" v-if="errors.hasOwnProperty('has_company')">{{ errors["has_company"][0] }}</div>
                                </div>
                            </div>

                            <div class="row" v-show="hasCompany">
                                <div class="form-group col-md-12">
                                    <label for="company-name">Name</label>
                                    <input type="text" v-model="user.company.name" class="form-control">

                                    <div class="error" v-if="errors.hasOwnProperty('company.name')">{{ errors["company.name"][0] }}</div>
                                </div>

                                <div class="form-group col-md-12">
                                    <label for="company-description">Description</label>
                                    <textarea v-model="user.company.description" class="form-control" rows="2"></textarea>

                                    <div class="error" v-if="errors.hasOwnProperty('company.description')">{{ errors["company.description"][0] }}</div>
                                </div>
                            </div>

                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>

                            <div class="text-center"><button type="submit" :disabled="disabled">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

    import { validationMixin } from 'vuelidate'
    import { email, required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'

    const alpha = helpers.regex('alpha', /^[A-Za-z]+$/)
    const alphanumeric = helpers.regex('alphanumeric', /^\w+$/)

    import {mapGetters} from 'vuex'

    export default {
        /**
         *
        */
        name: 'ContactForm',
        data() {
            return {
                user: {
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    has_company: 0,

                    address: {
                        street: '',
                        city: '',
                        zipcode: '',
                        country_id: ''
                    },

                    company: {
                        name: '',
                        description: ''
                    }
                },

                disabled: false
            }
        },

        /**
         * Validate inputs before form submit
        */
        validations: {
            user: {
                first_name: { required, alpha },
                last_name: { required, alpha },
                username: { required, minLength: minLength(8), maxLength: maxLength(20), alphanumeric },
                email: { required, email }
            }
        },

        /**
         *
        */
        mounted() {
            //get countries from store
            this.$store.dispatch('Submission/fetchCountries')
        },

        /**
         *
        */
        computed: {

            /**
             * Check if user has company
            */
            hasCompany()
            {
                return this.user.has_company == 1;
            },

            ...mapGetters({
                apiCountries: 'Submission/countries',
                errors: 'HandleErrors/errors',
                submitted: 'Submission/submitted'
            }),
        },

        /**
         *
        */
        methods: {

            /**
             * Post user data to api
            */
            postUserSubmission()
            {
                this.disabled = true;
                this.$store.dispatch('Submission/postUserSubmission', this.user)

                this.successMessage()
            },

            /**
             * Show success message after posting data
            */
            successMessage()
            {
                if(this.submitted) {
                    this.$swal({
                        title: "Success",
                        text: "Your submition is posted correctly",
                        type: "success",
                        icon: "success",
                        button: true
                    });
                }

                //reset submitted value
                this.$store.dispatch('Submission/resetSubmitted', false)
                this.disabled = false
            }
        },
    }
</script>

<style scoped lang="css">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .form-check-label {
        line-height: 51px;
    }

    .error {
        color: red;
        font-size: 14px;
        padding-top: 10px;
    }
</style>