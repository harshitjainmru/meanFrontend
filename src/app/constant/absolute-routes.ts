
/**
 * @ABS === ABSOLUTE
*/
import { IRoute } from '../models/routes';
import * as routes from './routes'

// export const ABS_ACCOUNT_LOGIN = `/${routes.ACCOUNT}/${routes.LOGIN}`;
// export const ABS_ACCOUNT_SIGNUP = `/${routes.ACCOUNT}/${routes.SIGNUP}`;
// export const ABS_ACCOUNT_FORGOT_PASSWORD = `/${routes.ACCOUNT}/${routes.FORGOT_PASSWORD}`;
// export const ABS_LAYOUT = `/${routes.LAYOUT}`
export const ACCOUNT: IRoute = {
  path: routes.account,
  get fullUrl(): string {
    return `${this.path}`;
  },
};
export const ABS_ACCOUNT_SIGNUP: IRoute = {
  path: routes.signup,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const ABS_ACCOUNT_LOGIN: IRoute = {
  path: routes.login,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const ABS_ACCOUNT_FORGOT_PASSWORD: IRoute = {
  path: routes.forgot_password,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const ABS_ACCOUNT_RESET_PASSWORD: IRoute = {
  path: routes.nav_to_reset_password,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};


