export default function validateForm(formValues: {firstName:string, lastName:string, email:string, password:string}){

    // console.log(formValues);
    console.log('inside validateForm');

    type Errors = {
        firstNameError:string,
        lastNameError:string,
        emailError:string,
        passwordError:string,
    }
    let errors= {} as Errors;

    if(!formValues.firstName){
        errors.firstNameError = "First Name is required";
    }

    if(!formValues.lastName){
        errors.lastNameError = "Last Name is required";
    }

    if(!formValues.email){
        errors.emailError = "Email is required";
    }
    else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(formValues.email)){
        errors.emailError = "Please check email"
    }

    if(!formValues.password){
        errors.passwordError = "Password is required";
    }
    console.log(errors);
    console.log('from validateForm');
    return errors;
};



