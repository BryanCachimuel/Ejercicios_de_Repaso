let tiempo = 10
let contador = 0
let contando = false

suspender()

function temporizar(){
    let temporizando = tiempo - contador
    contando = temporizando > 0

    if(contador%2 == 0){
        select_id("frente").innerHTML = temporizando
    }else{
        select_id("atras").innerHTML = temporizando
    }
    style("moneda").transform = `rotateY(${180 * contador}deg)`
    if(contando){
        contador++
        setTimeout(() => {
            temporizar()
        }, 1000);
    }else{
        suspender()
    }
}

function suspender() {
    contador = 0
    select_id("frente").innerHTML = `<i class="fas fa-stopwatch"></i>`
    select_id("atras").innerHTML = `<i class="fas fa-stopwatch"></i>`
}


async function tomarTiempo(){
    const {value: tiempo_input} = await swal.fire({
        title:"Temporizador",
        input:"number",
        inputValue:10,
        showCancelButton:true
    })
    if(!tiempo_input){
        return
    }
    tiempo = tiempo_input
    if(!contando){
        temporizar()
    }
}

function select_id(id){
    return document.getElementById(id)
}

function style(id){
    return select_id(id).style
}