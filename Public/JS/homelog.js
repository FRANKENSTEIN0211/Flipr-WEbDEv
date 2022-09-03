function validated()
{
 var username=document.getElementById("email").value;
 var password=document.getElementById("passwd").value;

 if(username=="ee210002085@iiti.ac.in" && password=="VMeet")
 {
    alert("Login successful");
    return false;
 }
 else
 {
    alert("Login failed. Please enter valid username and password");
 }


}