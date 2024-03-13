import Http from '@/utils/http';

export const signUp = ({ email, password, name }) => Http.post({
  path: '/api/signup',
  body: { email, password, name }
})