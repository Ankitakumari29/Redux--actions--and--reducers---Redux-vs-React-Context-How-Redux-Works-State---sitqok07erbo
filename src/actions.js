export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (username)=> {
  return {
    type : LOGIN,
    payload : username,
  }
}
export const logoutAction = ()=>{
  return {type:LOGOUT}
}
