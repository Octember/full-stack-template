import { User } from './models'
const isDev = process.env.NODE_ENV === 'development'

export const dbInit = () => {
    User.sync({ alter: isDev })
};
