export default {
    SET_LOGGED_USER: (state, user) => {
        state.loggedUser = user;
    },
    SET_LANGUAGES: (state, languages) => {
        state.languages = languages;
        console.log('mutation', languages);
    },
};
