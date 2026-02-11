function  login (){


    var
     email=document.getElementById("email").value;

     password=document.getElementById("password").value;

     error=document.getElementById("error")

     success=document.getElementById("success")



     var users=JSON.parse(localStorage.getItem(`users`))
        
     var user=users.find(user=>user.email==email)


     if( !email || !password ){
    error.style.display="block"
    error.innerHTML="Both fields are Required"
    }

    else if(!user){
    error.style.display="block"
    error.innerHTML=`This email ${email} is not Registered`
    }

    else if(user.password!=password){
    error.style.display="block"
    error.innerHTML=`Wrong Password`
    }

    else{

        var loggeduser={ 
            name:user.name,
            email:email,
            password:password,
            logged:true
        }



    var user_=localStorage.setItem(`is_user_logged` , JSON.stringify(loggeduser))

     setTimeout(function(){
             location.href="Amazon.html"
     },1000)
    }
}

function logout(){
    localStorage.removeItem(`is_user_logged`);
    location.href = "login.html";
}



