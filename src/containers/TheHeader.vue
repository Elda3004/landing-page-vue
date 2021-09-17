<template>
    <CHeader fixed with-subheader light>
        <CToggler
            in-header
            class="ml-3 d-lg-none"
            @click="$store.commit('CMS/toggleSidebarMobile')"
            />
        <CToggler
            in-header
            class="ml-3 d-md-down-none"
            @click="$store.commit('CMS/toggleSidebarDesktop')"
            />
        <CHeaderBrand class="mx-auto d-lg-none" to="/">
            <CIcon name="logo" height="48" alt="Logo"/>
        </CHeaderBrand>
        <CHeaderNav class="d-md-down-none mr-auto">
            <CHeaderNavItem class="px-3">
                <CHeaderNavLink :to="{ name: 'admin.dashboard' }">
                    Dashboard
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="px-3">
                <CHeaderNavLink :to="{ name: 'admin.submissions.index' }" exact>
                    Submissions
                </CHeaderNavLink>
            </CHeaderNavItem>
        </CHeaderNav>
        <CHeaderNav class="mr-4">
            <TheHeaderDropdownAccnt/>
        </CHeaderNav>
    </CHeader>
</template>
<script>
    import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

    export default {
        name: 'TheHeader',
        components: {
            TheHeaderDropdownAccnt
        },
    }
</script>