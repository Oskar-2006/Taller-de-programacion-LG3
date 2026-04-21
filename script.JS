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
let Formula=0;

//calculos de los datos 
function calcularPorcentaje (base, porcentaje) {
    let resultados = base * porcentaje 
    return resultados;
}

//validacion de perfil
if (edad<18) {
    //no se pueden calcular las 
}

else if (edad>=18 && edad<=25) {
    //se clasifica como usuario por cotizante, no puede continuar
}

else if (edad>=25 && edad<=60) {
    //Solo se va a calcular el pago de la penseion 
}

edad>=60 ? pension : false ; //Puede continuar con el siguiente proceso


