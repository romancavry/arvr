import * as Yup from 'yup';

import type { AuthValues } from 'modules/auth';

import { validate } from 'utils/validationUtils';

const getSchema = () =>
  Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

export default () => (values: AuthValues) => validate(values, getSchema());
