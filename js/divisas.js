// const inputBarra = document.querySelector('#amount');
// let cantidadIngresada = inputBarra.value;

// const monedaOrigen = document.querySelector('#from');
// console.log(monedaOrigen.value);

// const monedaFinal = document.querySelector('#to');
// console.log(monedaFinal.value);

// const cambioOrigen = document.querySelector('#from')
//console.log(cambioOrigen);
// cambioOrigen.addEventListener('change', (evento) => {
//     cambiosEnLasMonedas(evento)
// });

// const cambioFinal = document.querySelector('#to');
// cambioFinal.addEventListener('change', (evento) => {
//     cambiosEnLasMonedas(evento);
// })

// function cambiosEnLasMonedas (evento) {
//     const monedaOrigen = document.querySelector('#from');
//     console.log(monedaOrigen.value);

//     const monedaFinal = document.querySelector('#to');
//     console.log(monedaFinal.value); 
// }

const btnConvertir = document.querySelector('#convert-btn');

// btnConvertir.addEventListener('click', (evento) => {
//     console.log('saludos');
// });

btnConvertir.addEventListener('click', convertirMoneda);

function convertirMoneda(evento) {

    const inputBarra = document.querySelector('#amount');
    let cantidadIngresada = parseFloat(inputBarra.value);
    console.log(cantidadIngresada);
    let cantidadConvertida = 0;

    const espacionConversion = document.querySelector('#result-container')

    const monedaFinal = document.querySelector('#to');
    const cambioFinal = document.querySelector('#to');
    const monedaOrigen = document.querySelector('#from');
    const cambioOrigen = document.querySelector('#from');

    cambioFinal.addEventListener('change', (evento) => {
        const monedaOrigen = document.querySelector('#from');
        console.log(monedaOrigen.value);

        const monedaFinal = document.querySelector('#to');
        console.log(monedaFinal.value); 
    })

    cambioOrigen.addEventListener('change', (evento) => {
        const monedaOrigen = document.querySelector('#from');
        console.log(monedaOrigen.value);

        const monedaFinal = document.querySelector('#to');
        console.log(monedaFinal.value); 
    })

    if(monedaOrigen.value === 'usd'){
        //console.log('saludos');
        switch(monedaFinal.value){
            case 'usd':
                cantidadConvertida = cantidadIngresada * 1;
                espacionConversion.innerHTML = `$ ${cantidadIngresada} equivale a $ ${cantidadConvertida.toFixed(2)}`;
            break;

            case 'eur':
                cantidadConvertida = cantidadIngresada * 0.92;
                espacionConversion.innerHTML = `$ ${cantidadIngresada} equivale a EUR ${cantidadConvertida.toFixed(2)}`;

            break;

            case 'gbp':
                cantidadConvertida = cantidadIngresada * 0.79;
                espacionConversion.innerHTML = `$ ${cantidadIngresada} equivale a GBP ${cantidadConvertida.toFixed(2)}`;
            break;
        }
    }
    
    if(monedaOrigen.value === 'eur'){

        switch(monedaFinal.value){
            case 'usd':
                cantidadConvertida = cantidadIngresada * 1.08;
                espacionConversion.innerHTML = `EUR ${cantidadIngresada} equivale a $ ${cantidadConvertida.toFixed(2)}`;
            break;

            case 'eur':
                cantidadConvertida = cantidadIngresada * 1;
                espacionConversion.innerHTML = `EUR ${cantidadIngresada} equivale a EUR ${cantidadConvertida.toFixed(2)}`;
            break;

            case 'gbp':
                cantidadConvertida = cantidadIngresada * 0.86;
                espacionConversion.innerHTML = `EUR ${cantidadIngresada} equivale a GBP ${cantidadConvertida.toFixed(2)}`;
            break;
        }

    }

    if(monedaOrigen.value === 'gbp'){

        switch(monedaFinal.value){
            case 'usd':
                cantidadConvertida = cantidadIngresada * 1.26;
                espacionConversion.innerHTML = `GBP ${cantidadIngresada} equivale a $ ${cantidadConvertida.toFixed(2)}`;
            break;

            case 'eur':
                cantidadConvertida = cantidadIngresada * 1.17;
                espacionConversion.innerHTML = `GBP ${cantidadIngresada} equivale a EUR ${cantidadConvertida.toFixed(2)}`;
            break;

            case 'gbp':
                cantidadConvertida = cantidadIngresada * 1;
                espacionConversion.innerHTML = `GBP ${cantidadIngresada} equivale a GBP ${cantidadConvertida.toFixed(2)}`;
            break;
        }

    }

    

}