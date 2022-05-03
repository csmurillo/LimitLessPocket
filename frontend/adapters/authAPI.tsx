import { stringify } from 'querystring';
import { API } from '../config';

export const signup = (userData:{firstName:string, lastName:string, email:string, password:string}) =>{
    return fetch(`http://localhost:3003/api/signup`,{
        method:'POST',
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
};

export const login = (userData:{email:string, password:string})=>{
    return fetch(`http://localhost:3003/api/login`,{
        method:'POST',
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(userData)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
};

export const saveAuth = ({token,user}:{token:string, user:{firstName:string, lastName:string, email:string}}, next:Function)=>{
    localStorage.setItem('authInfo',JSON.stringify(user));
    localStorage.setItem('token',token);
    next();
};

export const isAuthenticated = ()=>{
    if(localStorage.getItem('token')){
        if(localStorage.getItem('authInfo')){
            return JSON.parse(localStorage.getItem('authInfo')!);
        }
        return false;
    }
    return false;
};