<template>
    <section v-loading.fullscreen.lock="loading"></section>
</template>

<script>
    import AuthService from '../../components/utils/auth_service';

    export default {
        data() {
            return {
                loading: true
            }
        },
        methods: {
            getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            },
        },
        mounted() {
            this.loading = true;
            this.$axios.$post('https://lblm.eu.auth0.com/oauth/token', {
                grant_type: 'authorization_code',
                client_id: 'S6420XIM4BKZVk9yjexjNa5d5sbRaJp5',
                client_secret: 'H5vHEeBjobnPAP-1_6lsOK3U-H8Ru5bbD_5FfdkxLOn4xr1UH5g-lPwZYJqohLb3',
                code: this.getParameterByName('code'),
                redirect_uri:
                    'http://localhost:8080'
            }).then(res => {
                new AuthService().setSession(res);
                this.loading = false;
                this.$router.push('/users');
                console.log(res)
            }, err => {
                this.loading = false;
                console.log(err)
            })
        }
    }
</script>
