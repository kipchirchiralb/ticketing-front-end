//Write a function validateEmail(email) that takes an email address email and returns true if it is a valid email address format, false otherwise.


// no spaces
// one @ -- middle
// 
let my = "albert@eldohub.co.ke"
function validate(email){
    if(typeof email !== "string"){
        console.log("invalid email");
        return false
    }else if(email.includes(" ") || email.includes("-")){
        console.log("Emails can not have - or space");
        return false
    }else if(email.split("@").length !== 2){
        console.log("Emails have  one @ symbol");
        return false
    }else{
        console.log("valid email");
        return true
    }

}
validate(67)
validate("alber @eldohu.co.ke")
validate("reply@eldo@hub.co.ke")
validate("reply@eldohub.co.ke")


// regExp option -- RegExp is a  pattern-matching language intergrated in many programming languages