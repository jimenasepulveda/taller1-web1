let opcion;
let opcion1=0;
let opcion2=0;
let opcion3=0;
let opcion4=0;
let opcion5=0;
let opcion6=0;

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
    }else if (opcion===5){
        let descuento = 0;
        let compra = parseFloat(prompt("Ingresa el valor de la compra: "));
        let cantidad = parseInt(prompt("Ingresa la cantidad de la compra: "));

        let valorTotal = cantidad * compra
        let iva = valorTotal*0.19

        if(valorTotal > 500000){
            iva = 0;
            if(valorTotal > 1000000){
                descuento = valorTotal * 0.10;
            }
        }
        console.log(`el valor total de la compra sin iva y sin descuentos es de: $${valorTotal}`);
        console.log(`el valor del iva es de: $${iva}`);
        console.log(`el valor del descuesto es de: $${descuento}`);
        console.log(`El valor de la compra mas el iva menos el descuento es de ${valorTotal+iva-descuento}`);
    }else if (opcion===6){
        let nota1=parseFloat(prompt("Ingresa la primera nota del estudiante: "));
        let nota2=parseFloat(prompt("Ingresa la segunda nota del estudiante: "));
        let nota3=parseFloat(prompt("Ingresa la tercera nota del estudiante: "));
        let nota4=parseFloat(prompt("Ingresa la cuarta nota del estudiante: "));

        if (nota4 === 5){
            if(nota1 <= 4){
                nota1++;
            }
            if(nota2 <= 4){
                nota2++;
            }
            if(nota3 <= 4){
                nota3++;
            }
        }
        let notaFinal= nota1*0.10 + nota2*0.20 + nota3*0.30 + nota4*0.40;
        if(notaFinal > 3.5){
            console.log(`El estudinte gano la materia`);
        }else{
            console.log(`El estudinte perdio la materia`);
        }
    }
}
