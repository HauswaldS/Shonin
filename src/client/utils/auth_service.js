import auth0 from 'auth0-js'
import Cookie from 'js-cookie'
import jwt_decode from 'jwt-decode';

const authService = {
    webAuth() {
        return new auth0.WebAuth({
            domain: 'lblm.eu.auth0.com',
            clientID: 'S6420XIM4BKZVk9yjexjNa5d5sbRaJp5',
            redirectUri: 'http://localhost:8080/login',
            audience: 'https://lblm.eu.auth0.com/api/v2/',
            responseType: 'code',
            scope: 'openid email name id',
        });
    },

    login() {
        this.webAuth().authorize();
    },

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expires_at = JSON.stringify(
            authResult.expires_in * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResult.access_token);
        localStorage.setItem('id_token', authResult.id_token);
        localStorage.setItem('expires_at', expires_at);
        Cookie.set('access_token', authResult.access_token);
    },

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.setItem('logout', new Date().getTime());
        Cookie.remove('access_token');
        // this.authNotifier.emit('authChange', false)
        this.webAuth().logout({returnTo: 'http://localhost:8080'})
    },

    isAuthenticated(isServer, req) {
        let token = isServer ? this.getUserFromCookie(req) : this.getUserFromLocalStorage();
        if (token) {
            let expiresAt = token.exp * 1000;
            console.log(new Date().getTime());
            console.log(expiresAt);
            return new Date().getTime() < expiresAt;
        }
        return false;
    },
    getUserFromCookie(req) {
        if (!req.headers.cookie) return;
        const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('access_token='));
        if (!jwtCookie) return;
        const jwt = jwtCookie.split('=')[1];
        return jwt_decode(jwt)
    },

    getUserFromLocalStorage() {
        return jwt_decode(localStorage.getItem('access_token'));
    }

};

export default authService;
