import { useEffect, useState } from "react";
import { signup } from "../../adapters/authAPI";

const useForm = (validateForm:Function)=>{

    const [isSubmitting,setIsSubmitting]=useState(false);
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
                    }
                });   

            }
            else{
                setIsSubmitting(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors]);

    return { formValues, errors, onHandleChange, onHandleSubmit };

};

export default useForm;




