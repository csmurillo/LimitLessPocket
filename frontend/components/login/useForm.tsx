import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { login, saveAuth } from "../../adapters/authAPI";

const useForm = (validateForm:Function)=>{
    const router = useRouter();

    const [isSubmitting, setIsSubmitting]=useState(false);
    const [redirect,setRedirect] = useState(false);
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
        setIsSubmitting(true);
    };

    useEffect(()=>{
        if(isSubmitting){
            console.log('inside is submitting');
            console.log('show errors');
            console.log(errors);
            if(errors.emailError==''&&errors.passwordError==''){
                console.log('no errors: emailError | passwordError');
                login(formValues).then(res=>{
                    if(res.error){
                        console.log(res);
                        setIsSubmitting(false);
                    }
                    else{
                        saveAuth(res,()=>{
                            setFormValues({
                                email:'',
                                password:'',
                            });
                            setRedirect(true);
                        })
                    }
                });
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors]);

    useEffect(()=>{
        if(redirect){
            console.log('wil redirect login');
            router.push({
                pathname: '/home'
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[redirect]);

    return ({formValues,errors,onHandleChange,onHandleSubmit});
};

export default useForm;



