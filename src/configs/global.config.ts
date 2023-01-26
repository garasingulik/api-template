import { registerAs } from '@nestjs/config';

export default registerAs('global', () => ({
  appEnv: process.env.APP_ENV,
  enablePlayground: process.env.APP_ENV !== 'production',
}));
