import auth0 from 'auth0-js'

export default class AuthService {


    constructor() {
        this.login = this.login.bind(this);
        this.setSession = this.setSession.bind(this);
        this.logout = this.logout.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.webAuth = new auth0.WebAuth({
            domain: 'lblm.eu.auth0.com',
            clientID: 'S6420XIM4BKZVk9yjexjNa5d5sbRaJp5',
            redirectUri: 'http://localhost:8080/login',
            audience: 'https://lblm.eu.auth0.com/api/v2/',
            responseType: 'code',
            scope: 'openid email name'
        });
    }


    login() {
        this.webAuth.authorize();
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // this.authNotifier.emit('authChange', false)
        this.webAuth.logout({returnTo: 'http://localhost:8080'})
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt
    }
}
