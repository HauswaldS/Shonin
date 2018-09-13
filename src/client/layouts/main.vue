<template>
    <el-container direction="vertical">
        <main-menu/>
        <el-main>
            <nuxt/>
        </el-main>
    </el-container>
</template>

<script>
    import MainMenu from '@/components/main/ui/menu/MainMenu.vue';

    export default {
        components: {
            MainMenu
        }
    }
</script>
<style>
    html {
        font-family: Roboto, Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .el-row {
        width: 100%;
    }

    .el-main {
        padding: 0;
    }
</style>
