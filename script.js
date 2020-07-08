//generate a random password
function generate(){
   
    let complexity = document.getElementById("slider").value;


  
   let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*abcdefghijklmnopqrstuvwxyz";
    
   let password = "";


   for( var i = 0; i <= complexity; i++ ){
       password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1 )));

   }

   document.getElementById("display").value = password;


  //adding password to old generated
   document.getElementById("lastPasswords").innerHTML += password + "<br />";
}
//slider code
document.getElementById("length").innerHTML = "Length: 15";

document.getElementById("slider").oninput =function(){
    if (document.getElementById("slider").value > 0 ){
        document.getElementById("length").innerHTML = "Length " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//copy to clipboard
function copyClipboard(){
    document.getElementById("display").select();
    document.execCommand("Copy");

    alert("Password has been copied")
}