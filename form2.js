function welcome()
{
   
    let x = localStorage.getItem('email')
    document.getElementById("welcome").innerHTML += x.split("@")[0]+" !";
    let department=localStorage.getItem('department')
    document.getElementById('deprt').innerHTML+=department;
    let gender=localStorage.getItem('gender')
    document.getElementById('gender').innerHTML+=gender;
}
welcome()
function logout()
{
    localStorage.clear();
    window.location.href="form.html"
}