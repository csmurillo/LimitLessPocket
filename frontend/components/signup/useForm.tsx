import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import { signup } from "../../adapters/authAPI";

const useForm = (validateForm:Function)=>{
    const router = useRouter();

    const [isSubmitting,setIsSubmitting]=useState(false);
    const [redirect,setRedirect] = useState(false);
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

        setErrors({
            firstNameError:'',
            lastNameError:'',
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
            let zeroErrors=false;
        
            if(errors.firstNameError==''&&errors.lastNameError==''&&errors.emailError==''&&errors.passwordError==''){
                zeroErrors=true;
            }
            console.log('zeroErrors'+zeroErrors);
            console.log(errors);
            console.log('---------------------');
            if(zeroErrors){
                console.log('signup');
                signup(formValues).then(res=>{
                    if(res.error){
                        setIsSubmitting(false);
                        console.log(res.error);
                    }
                    else{
                        setFormValues({
                            firstName:'',
                            lastName:'',
                            email:'',
                            password:'',
                        });
                        setRedirect(true);
                    }
                });   

            }
            else{
                setIsSubmitting(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors]);
    useEffect(()=>{
        if(redirect){
            console.log('wil redirect');
            router.push({
                pathname: '/'
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[redirect]);

    return { formValues, errors, redirect, onHandleChange, onHandleSubmit };

};

export default useForm;




