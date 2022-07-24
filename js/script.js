const input = document.querySelector('#grupo__correo');
const input_cta = document.querySelector('#input__correo');

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
    console.log(input.id)
    if(expresion.test(input.value))
    {
        input.classList.remove("wrong-email");
        if(input.id == "input__correo"){
            document.querySelector(`#input-email p`).classList.remove('invalid-email');
            document.querySelector(`#input-email p`).classList.add('valid-email');
            document.querySelector(`.send-email-cta`).removeAttribute("disabled")
        }
        else{
            document.querySelector(`.input-email p`).classList.remove('invalid-email');
            document.querySelector(`.input-email p`).classList.add('valid-email');
            document.querySelector(`.send-email`).removeAttribute("disabled")
        }
        campos[name] = true;
    }
    else
    {
        input.classList.add("wrong-email");
        if(input.id == "input__correo"){
            document.querySelector(`#input-email p`).classList.add('invalid-email');
            document.querySelector(`#input-email p`).classList.remove('valid-email');
            document.querySelector(`.send-email-cta`).setAttribute("disabled", "")
        }
        else{
            document.querySelector(`input-email p`).classList.add('invalid-email');
            document.querySelector(`input-email p`).classList.remove('valid-email');
            document.querySelector(`.send-email`).setAttribute("disabled", "")
        }

        campos[name] = false;
    }
}


input.addEventListener("keyup", validarFormulario);
input.addEventListener("blur", validarFormulario);

input_cta.addEventListener("keyup", validarFormulario);
input_cta.addEventListener("blur", validarFormulario);



