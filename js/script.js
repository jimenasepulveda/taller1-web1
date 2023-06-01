let opcion;


while(opcion != 0){
  opcion = parseInt(prompt('Ingresa una opcion: \n 1-Ordenar tres números \n 2-Calcular el área de una circunferencia \n 3-Determinar el tipo de triángulo \n 4-Verificar si dos números son amigos \n 5-Calcular el valor de una compra \n 6-Calcular la nota final de un estudiante \n 0-salir'));

  if(opcion===1){
        let numeros =[];
        let cantidad = 3;

        while(numeros.length < cantidad){
            let numero = parseInt(prompt('Ingresa un numero: '));
            numeros.push(numero);
        }
        console.log(`Los numeros ingresados son: ${numeros}`);
        function organizarMenoraMayor(a,b){
            return (a-b)
        }
        console.log(`Los numeros ordenados de menor a mayor son: ${numeros.sort(organizarMenoraMayor)}`);
        console.log(`Los numeros ordenados de mayor a menor son: ${numeros.sort(organizarMenoraMayor).reverse()}`);
    } else if (opcion===2){
        let radio = parseFloat(prompt("digita el radio: "))
        let pi = 3.14;
        function areaCircunferencia (radio){
            return (pi *radio ** 2)
        }
        console.log(`El area de la circunferencia con radio ${radio} es ${areaCircunferencia(radio)}`);
    } else if(opcion===3){
        let lado1 = parseFloat(prompt("Ingresa el valor del lado a: "));
        let lado2 = parseFloat(prompt("Ingresa el valor del lado b: "));
        let lado3 = parseFloat(prompt("Ingresa el valor del lado c: "));

        if(lado1 === lado2 && lado2 === lado3){
            console.log(`El triangulo cuyo lado1 es ${lado1} lado2 es ${lado2} y lado3 es ${lado3} es Equilatero`);
        }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
            console.log(`El triangulo cuyo lado1 es ${lado1} lado2 es ${lado2} y lado3 es ${lado3} es Isosceles `);
        }else{
            console.log(`El triangulo cuyo lado1 es ${lado1} lado2 es ${lado2} y lado3 es ${lado3} es Escaleno`);
        }
    }else if (opcion===4){    
        let num1 = parseInt(prompt("Ingresa el primer un numero: "));
        let num2 = parseInt(prompt("Ingresa el segundo un numero: "));

        let sumaDivisoresNum1 = 0;
        let sumaDivisoresNum2 = 0; 

        for(let i = 1; i < num1; i++){
            if (num1 % i === 0 ){
                sumaDivisoresNum1 += i;
            }
        }

        for(let i = 1; i < num2; i++){
            if (num2 % i === 0 ){
                sumaDivisoresNum2 += i;
            }
        }

        if(sumaDivisoresNum1 === num2 && sumaDivisoresNum2 === num1){
            console.log(`los numeros ${num1} y ${num2} son numeros amigos`);
        }else{
            console.log(`los numeros ${num1} y ${num2} no son numeros amigos`);
        }
    }
}
