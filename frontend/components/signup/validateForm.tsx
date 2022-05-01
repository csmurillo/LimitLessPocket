export default function validateForm(formValues: {firstName:string, lastName:string, email:string, password:string}){
    type Errors = {
        firstNameError:string,
        lastNameError:string,
        emailError:string,
        passwordError:string,
    }
    let errors= {firstNameError:'',lastNameError:'',emailError:'',passwordError:''} as Errors;

    if(formValues.firstName.length==0){
        errors.firstNameError = "First Name is required";
    }
    if(formValues.lastName.length==0){
        errors.lastNameError = "Last Name is required";
    }
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



