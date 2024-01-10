let Registeid = document.getElementById('Registerid')
let logid = document.getElementById('loginid')
let lgbt = document.getElementById('loginbt');
let registerdata = document.getElementById('registerbt')
lgbt.addEventListener('click' ,function(){
    logid.style.display ="block";
    lgbt.style.backgroundColor="aqua"
    lgbt.style.color="black"
    Registeid.style.display = "none"
    registerdata.style.backgroundColor="#9e9e9e0a";
    registerdata.style.color="aqua";

})

registerdata.addEventListener('click',function(){
    logid.style.display ="none";
    Registeid.style.display = "block"
    registerdata.style.backgroundColor="aqua";
    registerdata.style.color="black";
    lgbt.style.backgroundColor="#9e9e9e0a";
    lgbt.style.color="aqua"
})
