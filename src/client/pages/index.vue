<template>
    <section class="container">
        <h1>Time to log-in</h1>
        <el-button type="primary" @click="log">Log</el-button>
        <el-button type="primary" @click="logout">Logout</el-button>
    </section>
</template>

<script>
    import AuthService from '../components/utils/auth_service';

    export default {
        data() {
            return {
                authService: null
            }
        },
        methods: {
            log() {
                this.authService.login()
            },
            logout() {
                this.authService.logout()
            }
        },
        created() {
            this.authService = new AuthService();
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
