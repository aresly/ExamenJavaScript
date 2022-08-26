/*Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta
que las horas ordinarias (40 primeras horas de trabajo) se pagan a 265.00 USD la hora. A
partir de la hora 41, se pagan a 350.00 USD la hora. Tomando en cuenta que un trabajador
acumulo en la semana, 53 horas, el programa debe mostrar el monto a pagar por las horas
ordinarias y el monto a pagar por las horas extra*/

let horas = 53
let monto =0


if(horas>40){
    let horasextras = horas - 40
    console.log('El total a pagar por horas laborales normal (40hrs) es de: '+ (40*265))
    monto = horasextras * 350   
    console.log('El total a pagar por horas Extras'+ horasextras+' hrs es de: '+monto)
}else{
    monto = horas * 265
    console.log('El total a pagar por horas laborales normal (40hrs) es de: '+ monto)
    
} 

