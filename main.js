const form = document.getElementById('Formu');
const campA = document.getElementById('campA');
const campB = document.getElementById('campB');

function resultado (campA , campB) {
let resulArrey = (campA < campB);
return resulArrey;
} 
let conf = false

form.addEventListener('submit' ,function(e) {
    
e.preventDefault();

conf = resultado (campA.value,campB.value);
if (conf){
    alert ('Formulario enviado.')
    campA.value = '';
    campB.value = '';
    campA.style.border = '';
}
else if(campA.value == campB.value) {
    alert ('Valores iguais.')
}
else {
    campA.style.border ='1px solid red';
    document.querySelector ('.error_mensagem').style.display = 'block'
}
})
campA.addEventListener ('change', function(e){
    console.log(e.target.value);
    conf = resultado (e.target.value);
    if (conf){
        campA.classList.add ('error');
        document.querySelector ('.error_mensagem').style.display = 'block';
    }
    else {
        campA.classList.remove ('error');
        document.querySelector ('.error_mensagem').style.display = 'none';
    }
})
