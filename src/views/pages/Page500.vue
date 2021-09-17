<template>
    <CContainer class="d-flex align-items-center min-vh-100">
        <CRow class="w-100 justify-content-center">
            <CCol md="6">
                <div class="clearfix">
                    <h1 class="float-left display-3 mr-4">500</h1>
                    <h4 class="pt-3">We have a problem!</h4>
                    <p class="text-muted">The page you are looking for is temporarily unavailable.</p>

                    <router-link :to="{ name: 'contact-page' }" class="btn btn-info" color="info">Go to Landing Page</router-link>
                </div>
            </CCol>
        </CRow>
    </CContainer>
</template>

<script>
export default {
    name: 'Page500'
}
</script>
