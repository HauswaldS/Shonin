<template>
    <el-container>
        <el-aside id="main-menu-container">
            <main-menu></main-menu>
        </el-aside>
        <nuxt-child/>
    </el-container>
</template>

<script>
    import MainMenu from '@/components/admin/ui/menu/MainMenu.vue';

    export default {
        components: {
            MainMenu
        }
    };
</script>

<style scoped>
    #main-menu-container {
        height: 100vh;
    }
</style>
