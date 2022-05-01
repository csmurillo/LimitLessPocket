export default function validateForm(formValues: {email:string, password:string}){
    type Errors = {
        emailError:string,
        passwordError:string,
    }
    let errors = {emailError:'',passwordError:''} as Errors;
    if(formValues.email.length==0){
        errors.emailError = "Email is required";
    }
    else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(formValues.email)){
        errors.emailError = "Please check email"
    }
    if(formValues.password.length==0){
        errors.passwordError = "Password is required";
    }
    return errors;
};


