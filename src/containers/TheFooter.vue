<template>
    <CFooter :fixed="false">
        <div>
            <span class="ml-1">&copy; {{new Date().getFullYear()}}</span>
        </div>
        <div class="mfs-auto">
            <span class="mr-1" target="_blank">Skipsolabs</span>
        </div>
    </CFooter>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>