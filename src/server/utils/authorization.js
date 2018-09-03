export default {
    getUserId: (authToken) => {
        return authToken && typeof authToken === 'object' && authToken.sub
    }
}