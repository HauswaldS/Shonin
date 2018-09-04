export default (user) => {
    return user && user.sub && (user.exp * 1000 > new Date().getTime());
}