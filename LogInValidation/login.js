function validate(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if(username.value=="admin" && password.value=="user"){
     alert("login successfully");
     return true;
    }else if(username.value==""||password.value==""){
      alert("username/password cannot be blank");
      return false;
    }
   else{
       alert("login failed");
       return false;

   }
}