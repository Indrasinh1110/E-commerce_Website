import Commerce from '@check/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHECK_PUBLIC_KEY, true);
