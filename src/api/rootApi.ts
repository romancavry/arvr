import { getAuthEndpoints } from '../modules';

import { createApi } from './createApi';
import type { ApiOptions, BaseApi } from './types';

const options: ApiOptions = { reducerPath: 'rootApi' };

const rootApi = createApi(options);

export default rootApi.injectEndpoints({
  endpoints: builder => ({
    // auth
    ...getAuthEndpoints(builder, options, rootApi as unknown as BaseApi),
  }),
});
