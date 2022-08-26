arreglo1 = [3, 2, 1, 1, 2, 3, 2, 3, 1]
arreglo2 = [1, 1, 2, 2, 1, 1, 1, 2, 1]

console.log('Arreglo 1 : ['+arreglo1+']')
console.log('Arreglo 2 : ['+arreglo2+']')
console.log('*********************************')


for(i in arreglo1){
    console.log(arreglo1[i]+ '  +  ' + arreglo2[i]+ '  =  '+(arreglo1[i]+arreglo2[i]))
    console.log(arreglo1[i]+ '  *  ' + arreglo2[i]+ '  =  '+(arreglo1[i]*arreglo2[i]))
    console.log('***************************')

}