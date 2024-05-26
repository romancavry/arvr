import { api } from 'api/index';

const useAuth = () => api.endpoints.getUser.useQueryState();

export default useAuth;
