
let emailid=document.getElementById("emailid");
let pwd3=document.getElementById("pwd3");
let errormail=document.getElementById("errormail");
let errorpass=document.getElementById("errorpass");


function loginvalidate() {
    if(emailid.value.trim()=="" || pwd3.value.trim()=="" ) {
        alert("Fields cannot be empty");
        return false;
        
    }
    
    
    else if(pwd3.value.length<8){
        alert("Password is too short");
        return false;
    }
    
    else{
        // email validation
        let regexp=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
        if(regexp.test(emailid.value)){
            errormail.innerHTML="Valid Mail Id";
            errormail.style.color="green";
           
                let strongreg= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
                if(strongreg.test(pwd3.value)){  
             return true;
            }
            else{
                errorpass.innerHTML="Password not Strong Enough";
                errorpass.style.color="red";
                return false;
            }
        }
             
         
        
        else{
            errormail.innerHTML="Invalid Mail ID";
            errormail.style.color="red";
            return false;
        
        }
        
       
    }
}
