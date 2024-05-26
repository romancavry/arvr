import { setIn } from 'final-form';
import * as Yup from 'yup';

export const validate = async (
  values: unknown,
  schema: Yup.AnyObject | (() => Yup.AnyObject),
) => {
  const currentSchema = typeof schema === 'function' ? schema() : schema;

  try {
    await currentSchema.validate(values, { abortEarly: false });
  } catch (_e) {
    const e = _e as Yup.ValidationError;

    return e.inner.reduce(
      (errors, error) => setIn(errors, error.path!, error.message),
      {},
    );
  }

  return {};
};
