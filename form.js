function display()
{
    let email=document.getElementById("email");
    let password=document.getElementById("password")
    let cpassword=document.getElementById("cpassword")
    localStorage.setItem('email',email.value)
    let department=document.getElementById("Department")
    localStorage.setItem('department',department.value)
   let genders = document.getElementsByName('gender');
   console.log(genders)
let gender;
for(var i = 0; i < genders.length; i++){
    if(genders[i].checked){
        gender = genders[i].value;
    }
}
    localStorage.setItem('gender',gender)
    
}
function validateform()
{
    let password=document.getElementById("password")
    let cpassword=document.getElementById("cpassword")
    let genders = document.getElementsByName('gender');
    let c=0;
    const term=/^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)).{8,}$/
    if(!term.test(password.value))
    {
        
    alert(`Password should be 
at least one upper case  letter
at least one lower case  letter
at least one digit
at least one special character
minimum eight in length`)
    return false}
    else{
        if(password.value!==cpassword.value)
        {
            alert("Password doesn't match")
            return false
        }
    for(var i = 0; i < genders.length; i++){
    if(genders[i].checked){
        c=1;
        break;
    }
    
}
if(c==0)
{
    alert("Must select gender")
    return false;
}
        return true
    }


}
