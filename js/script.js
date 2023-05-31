let opcion;


while(opcion != 0){
  opcion = parseInt(prompt('Ingresa una opcion: \n 1-Ordenar tres números \n 2-Calcular el área de una circunferencia \n 3-Determinar el tipo de triángulo \n 4-Verificar si dos números son amigos \n 5-Calcular el valor de una compra \n 6-Calcular la nota final de un estudiante \n 0-salir'));

  if(opcion===1){
    let numeros =[];
    let cantidad = 3;

    while(numeros.length < cantidad){
        let numero = parseInt(prompt('Digita un numero'));
        numeros.push(numero);
    }
    console.log(`estos son los numeros ingresados: ${numeros}`)
    function organizarMenoraMayor(a,b){
        return a-b
    }
    console.log(`Los numeros ordenados de menor a mayor son: ${numeros.sort(organizarMenoraMayor)}`)
    console.log(`Los numeros ordenados de mayor a menor son: ${numeros.sort(organizarMenoraMayor).reverse()}`)
    } else if (opcion===2){
        let radio = parseFloat(prompt("digita el radio: "))
        let pi = 3.14;
        function areaCircunferencia (radio){
            return pi*radio**2
        }
        console.log(`El area de la circunferencia con radio ${radio} es ${areaCircunferencia(radio)}`)
    }
}