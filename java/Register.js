

 var users=[              //array
    {                    //object
        name:`Mahtab`,
        age:18,
        id:1,
        email:`hafizmahtabafzal@gmail.com`,
        gender:`male`
    }
 ]

localStorage.setItem("users" , JSON.stringify(users))

function Register(){ 
    
let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

let cpassword=document.getElementById("cpassword").value;

let error=document.getElementById("error")

let success=document.getElementById("success")

var psize=password.length

var users=JSON.parse(localStorage.getItem("users")) 

datatake=users.find(user=>user.email==email) 

if( !name || !email || !password || !cpassword){
    error.style.display="block"
    error.innerHTML="Please Enter all fields"
}
else if(psize<=5 || psize>=20){
    error.style.display="block"
    error.innerHTML="Password should be more than 5 & less then 20 characters"
}
else if(password!=cpassword){
    error.style.display="block"
    error.innerHTML="Both Passwords must be same"
}
else if(datatake){
    error.style.display="block"
    error.innerHTML="This Email is already registered"
}

else{
    error.style.display="none"
    success.style.display="block"
    success.innerHTML="You are Registered"

    var id=users.length+1

    newuser={
                id:id,
                name:name,
                email:email,
                password:password
    }

    users.push(newuser)

    localStorage.setItem("users" , JSON.stringify(users))

    setTimeout(function(){
        location.href="login.html"
    }, 1000)

}
}

