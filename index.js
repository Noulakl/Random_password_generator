let letters = [ "A", "B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3",
"4","5","6","7","8","9","!","?","/",".",",","_","-","{",")","}",
"[","]","$","%","£","&","^","@","~",";",",","a", "b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];


let GeneratedEL = document.querySelector("#GeneratedEL");

function generate(){

password = "";

for(let i = 0; i < 15; i ++){
    let RandomPassword = Math.floor(Math.random()*letters.length)
    password += letters[RandomPassword]

}
GeneratedEL.textContent = password

};
