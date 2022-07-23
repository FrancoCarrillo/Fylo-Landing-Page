const input = document.querySelector('#grupo__correo');

const expresiones =
{
    correo: /^[a-zA-Z0-9-._]+@[a-z]+\.[a-z]+$/
}
const campos =
{
    correo: false,
}


const validarFormulario = (e)=>
{
    switch (e.target.name)
    {
        case "correo":
            validarCampo(expresiones.correo,"correo",e.target);
        break;
    }
}

const validarCampo = (expresion,name,input)=>
{
    if(expresion.test(input.value))
    {
        input.classList.remove("wrong-email");
        document.querySelector(`.input-email p`).classList.remove('invalid-email');
        document.querySelector(`.input-email p`).classList.add('valid-email');
        document.querySelector(`.send-email`).removeAttribute("disabled")
        campos[name] = true;
    }
    else
    {
        input.classList.add("wrong-email");
        document.querySelector(`.input-email p`).classList.add('invalid-email');
        document.querySelector(`.input-email p`).classList.remove('valid-email');
        document.querySelector(`.send-email`).setAttribute("disabled", "")
        campos[name] = false;
    }
}


input.addEventListener("keyup", validarFormulario);
input.addEventListener("blur", validarFormulario);



