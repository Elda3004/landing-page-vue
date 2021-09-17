<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta content="width=device-width, initial-scale=1.0" name="viewport">
            <title>Landing Page App</title>
            <meta content="Landing Page App" name="description">
            <meta content="Landing Page App" name="keywords">
            <!-- Google Fonts -->
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i" rel="stylesheet">
        </head>
        <body>
            <div id="body-wrapper">
                <div class="row">
                    <nav class="navbar navbar-light bg-light sticky-top">
                        <div class="col-md-12">
                            <router-link class="navbar-brand" to="/auth/login">{{ title }}</router-link>
                        </div>
                    </nav>
                </div>
                <header id="header" class="d-flex align-items-center">
                    <div class="container d-flex flex-column align-items-center">
                        <h1>Landing Page Application</h1>
                        <h2>Enter your submission</h2>
                    </div>
                </header>
                <ContactForm/>
            </div>
        </body>
    </html>
</template>

<script>

import ContactForm from '@/components/ContactForm.vue'

export default {
	name: "LandingPage",
	components: {
		ContactForm
	},

    computed: {

        /**
         *
        */
        title()
        {
            return this.$store.state.Auth.token !== null ? 'Dashboard' : 'Login'
        }
    }
}
</script>

<style lang="scss">
	//custom style import
	@import '../../assets/scss/frontend';
</style>