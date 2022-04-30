import { useState } from "react";
const useForm = ()=>{
    const [form, setForm]=useState({
        email:'',
        password:'',
    });

    const onHandleChange = ()=>{

    };
    return ({onHandleChange});
};

export default useForm;