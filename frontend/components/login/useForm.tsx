import React, { useState } from "react";

const useForm = (validateForm:Function)=>{

    const [formValues, setFormValues]=useState({
        email:'',
        password:'',
    });

    const [errors,setErrors]=useState({
        emailError:'',
        passwordError:'',
    });

    const onHandleChange = (e: { target: { name: string; value: string; }; })=>{
        const {name, value}=e.target;
        
        setFormValues({
            ...formValues,
            [name]:value
        });

        setErrors({
            emailError:'',
            passwordError:'',
        });
    };

    const onHandleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        setErrors(validateForm(formValues));
    };

    return ({formValues,errors,onHandleChange,onHandleSubmit});
};

export default useForm;



