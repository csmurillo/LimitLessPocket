import { useEffect, useState } from "react";

const useForm = (validateForm:Function)=>{
    const [formValues, setFormValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    });
    const [errors,setErrors]=useState({
        firstNameError:'',
        lastNameError:'',
        emailError:'',
        passwordError:'',
    });
    const onHandleChange = (e: { target: { name: string; value: string; }; })=>{
        const {name, value}=e.target;
        setFormValues({
            ...formValues,
            [name]:value
        });
    };

    const onHandleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        // setErrors({...formValues,firstName:'Error firstname', lastName:'Error lastname', email:'Error email', password:'Error password' });
        setErrors(validateForm(formValues));
    };

    useEffect(()=>{
        console.log('-------------------------------------');
        console.log(errors);
        console.log('-------------------------------------');
    },[errors]);

    return { formValues, onHandleChange, onHandleSubmit };
};

export default useForm;
