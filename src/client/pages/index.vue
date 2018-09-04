<template>
    <section class="container">
        <h1>Time to log-in</h1>
        <el-button type="primary" @click="log">Log</el-button>
        <el-button type="primary" @click="logout">Logout</el-button>
    </section>
</template>

<script>
    import authService from '../utils/auth_service';
    import {mapState} from 'vuex';

    export default {
        methods: {
            log() {
                authService.login()
            },
            logout() {
                authService.logout()
            }
        }
    }
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>
