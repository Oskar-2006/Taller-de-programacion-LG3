//pedir info al usuario
nombre_completo= prompt("Ingrese su nombre completo");
edad= parseInt(prompt("Ingrese su edad"));
validarusuario (edadusuario);
tipo_Documento= prompt("Ingrese su tipo de documento");
nuemro_Documento= parseInt(prompt("Ingrese su numero de documento"));

//informacion salarial
salario= parseFloat(prompt("Ingrese su salario"));
comisiones= parseInt(prompt("Ingrese el valor total de sus comisiones"));
total_horas= parseInt(prompt("Ingrese el total de horas extras trabajadas en el mes"));
nivel_riesgo= parseInt(prompt("Ingrese su nivel de riesgo (1-5)"));


//Ingreso de informacion basica
let nombre_completo=""; 
let edad=0;
let tipo_Documento="";
let nuemro_Documento=0;

//ingreso informacion salarial
let salario=0;
let comisiones=0;
let total_horas=0;
let nivel_riesgo=0;


//calculo obligaciones laborales
let calculo_ibc= salario_total * (salario + comisiones + total_horas);
let auxilio_transporte= salario_min_legal ? subsidio_transporte : 0;
let salud_ibc= calculo_ibc * salud;
let pension_ibc= salud + solidaridad_pensional * calculo_ibc;

//Valores y tarifas Colombia 2026
const salario_min_legal="1750905";
const salario_min_integral="22761765";
const subsidio_transporte="249095";
const valor_tributario="5237"; 

//tarifas de arl (ibc)
const salario_total= 0.70;
const salud= 0.04;
const pension= 0.04;
const solidaridad_pensional= 0.01;
const riesgo=[{nombre: "Bajo", valor: 0.522},
    {nombre: "Medio", valor: 1.044},
    {nombre: "Alto", valor: 2.436},
    {nombre: "Muy Alto", valor: 4.350},
    {nombre: "Extremo", valor: 6.960}
];

//resultados
let salario=0;
let cotizacion_ibc=0;
let Formula= salario + auxilio_transporte + comisiones + total_horas; 
let deducibles= salud + pension + solidaridad_pensional + arl + retencion_fuente;
let total= cotizacion_ibc - deducibles;

//calculos de los datos 
function calcularPorcentaje (base, porcentaje) {
    let resultados = base * porcentaje 
    return resultados;
}



//validacion de perfil

function validarusuario (edadusuario) { 

    console.log("dentro de la funcion validarusuario");
    if (edad<18) {
        alert=("no se pueden calcular las prestaciones de ley, no puede continuar");
    }

    else if (edad>=18 && edad<=25) {
        alert=("se clasifica como usuario por cotizante, no puede continuar");
    }

    else if (edad>=25 && edad<=60) {
        alert=("Solo se va a calcular el pago de la penseion");
    }

    edad>=60 ? pension : false ; //Puede continuar con el siguiente proceso
}

//Oskar Alejandro Bohorquez Vallejo 1032678512