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
