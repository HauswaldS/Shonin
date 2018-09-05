<template>
    <section v-loading.fullscreen.lock="loading"></section>
</template>

<script>
    import jwt_decode from 'jwt-decode';
    import {mapMutations, mapActions} from 'vuex';
    import authService from '../../utils/auth_service';

    export default {
        data() {
            return {
                loading: true
            };
        },
        methods: {
            ...mapMutations([
                'SET_LOGGED_USER'
            ]),
            ...mapActions([
                'createUser'
            ]),
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
        // computed: {
        //     ...mapState([
        //         'authService',
        //     ])
        // },
        created() {

        },
        mounted() {
            if (this.getParameterByName('code')) {
                this.loading = true;
                this.$axios.$post('https://lblm.eu.auth0.com/oauth/token', {
                    grant_type: 'authorization_code',
                    client_id: 'S6420XIM4BKZVk9yjexjNa5d5sbRaJp5',
                    client_secret: 'H5vHEeBjobnPAP-1_6lsOK3U-H8Ru5bbD_5FfdkxLOn4xr1UH5g-lPwZYJqohLb3',
                    code: this.getParameterByName('code'),
                    scope: 'openid email name id',
                    redirect_uri:
                        'http://localhost:8080'
                }).then(res => {
                    authService.setSession(res);
                    let user = jwt_decode(res.id_token);
                    let auth0_id = jwt_decode(res.access_token).sub.split('auth0|')[1];
                    this.createUser({
                        auth0_id,
                        name: user.email.split('@')[0],
                        email: user.email
                    }).then(user => {
                        this.SET_LOGGED_USER(user);
                        this.loading = false;
                        this.$router.push('/admin/applicators');
                    });
                }, err => {
                    this.loading = false;
                    console.log(err);
                });
            } else authService.login();
        }
    };
</script>
