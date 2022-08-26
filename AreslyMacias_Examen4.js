function generaraleatorio(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}
class Persona {
    nombre;
    apellido;
    edad;
  
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;  
        this.edad = edad;
    }
    
    getDetalles(){
      console.log("Nombre: "+ this.nombre + "Apellido: "+this.apellido)
      console.log("Edad: "+this.edad)
    }
  
}
class Empleado extends Persona{
    tipo;
    constructor(nombre,apellido,edad,tipo){
        super(nombre,apellido,edad);
        this.tipo=tipo;
    }
    getDetalles(){
        console.log("Nombre: "+ this.nombre + "Apellido: "+this.apellido)
        console.log("Edad: "+this.edad)
        console.log("Tipo de empleado: "+this.tipo)
    }
}
class Nomina{
    arreglo=[]
    constructor(arreglo){
        this.arreglo=arreglo;      
    }

    calcularNomina(){
        for(let i in this.arreglo){
            var valor =  generaraleatorio(5,15);
            if(this.arreglo[i].tipo=="C"){
                var pago = 500 * valor
                var descuento = (pago*13)/100
                var total = pago - descuento
                console.log(this.arreglo[i].nombre+' '+this.arreglo[i].apellido+' de '+ this.arreglo[i].edad + ' años    - '+this.arreglo[i].tipo +' pertenece a Empleado de Confianza con un sueldo de $'+ total + ' por '+valor+ ' dias trabajados')
            }
            else if(this.arreglo[i].tipo=="S"){
                var pago = 250 * valor
                var descuento = (pago*10)/100
                var total = pago - descuento
                console.log(this.arreglo[i].nombre+' '+this.arreglo[i].apellido+' de '+ this.arreglo[i].edad + ' años    - '+this.arreglo[i].tipo +' pertenece a Empleado de Sindicato con un sueldo de $'+ total + ' por '+valor+ ' dias trabajados')
                 
            }


        }


    }



    
}

var empleados =[]
var ar1 = new Empleado("Maria", "Carvajal", 33,"C")
var ar2 = new Empleado("Juan", "Almeira", 23,"C")
var ar3 = new Empleado("Dulce", "Salguero", 42,"S")
empleados.push(ar1,ar2,ar3)

var arnomina = new Nomina(empleados)
arnomina.calcularNomina();


