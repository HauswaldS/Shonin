import auth_service from '../utils/auth_service';

export default ({isServer, store, req, redirect}) => {
    if (isServer && !req) return;
    const isAuthenticated = auth_service.isAuthenticated(isServer, req);
    if (isServer && !isAuthenticated && req.originalUrl.includes('admin')) redirect('/')
}
