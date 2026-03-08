   // Variables: VAR vs LET
   console.log("- Variables (VAR y LET) -");
   var VAR = "VAR";
   let LET = "LET";
   console.log(VAR);
   console.log(LET);
   console.log(window.VAR);
   console.log( window.LET, 'La variable solo funciona en el bloque y no en el global');

   //Ejemplo VAR vs LET
   console.log("- Ejemplo VAR -");
   var musica = "(POP)";
   console.log("Variable fuera del bloque", musica);
   {  
      var musica = "(JAZZ)";
      console.log("Variable dentro del bloque", musica)
   }
   console.log("Variable después del bloque", musica);

   console.log("- Ejemplo LET -");
   let musica2 = "(POP)";
   console.log("Variable fuera del bloque", musica2);
   {  
      let musica2 = "(JAZZ)";
      console.log("Variable dentro del bloque", musica2)
   }
   console.log("Variable después del bloque", musica2);
   
   
   //Constantes (const)
   console.log("- Constantes (const) -");
   const PI = 3.1416;
   console.log(PI);
   /*PI = 3.15 - No se puede cambiar el valor, al intentarlo se nos presentara error*/

   //Ejemplo Const
   console.log("- Ejemplo Const -");
   const objeto = {nombre: "Steven", edad: 15}
   const colores = ["blanco", "negro", "azul"];
   console.log(objeto);
   console.log(colores);
   objeto.correo = "stevenjosu07@gmail.com";
   colores.push("rojo");
   console.log(objeto);
   console.log(colores);


   //Cadenas de Texto (Strings)
   console.log("- Cadenas de texto (Strings) -");
   let merkitayan = "henrikh mkhitaryan";
   console.log("Caracteres del nombre merkitayan", merkitayan.length);

   //Ejemplos de propiedades de cadenas de texto
   console.log("- Ejemplo de metodos de cadenas de texto -");
   let nombre = "Steven";
   let apellido = "Riveros";
   console.log(
      nombre.toUpperCase(), 
      apellido.toLowerCase()
      )   

   //Ejemplo de Concanetación
   console.log("- Ejemplo de concatenación en cadenas de texto -");
   let saludo = "Hi my name is " + nombre + " " + apellido + "."
   console.log(saludo);
   
   //Ejemplo de Interpolición
   console.log("- Ejemplo de intepolición en cadenas de texto -");
   let saludo2 = `Hola nuevamente, mi nombre es ${nombre} ${apellido}.
   Y este
         es
            un 
               salto 
                  de linea`   
   console.log(saludo2);


   //Numeros (Numbers)
   let a = 1.34;
   console.log(a.toFixed(3));
   let b = 7.1263;
   console.log(a + b);
   
 
   //Booleanos (Booleans)
   let verdadero = true;
   let falso = false;
   console.log(verdadero, falso);


   //Funciones 
   function funcionxd() {
      console.log("uno");
      console.log("dos");
      console.log("tres");
   }
   funcionxd()

   //Funciones Editables
   function saludar(nombre, edad) {
   console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);      
   }
   saludar();
   saludar("Jhon", 27);

   //Funciones declaras VS Funciones expresadas
   function funcionDeclarada() {
   console.log("Esta es una función declarada");      
   }
   funcionDeclarada()

   const funcionExpresada = function () {
      console.log("Esto es una función expresada (No podrá ejecutarse antes de ser escrita)");
   } 
   funcionExpresada()

   
   //Arreglos 
    let arreglo = [1, true, "Hi", ["A", "B", "C", [1, 2, 3]]]
   console.log(arreglo);
   console.log(arreglo[3][3][1]);

   let arreglo2 = Array.of("X", "Y", "Z", 9, 8, 7);
   console.log(arreglo2);

   let arreglo3 = Array(10).fill(false);
   console.log(arreglo3);

   //push and pop
   let colors = ["Amarillo", "Azul", "Rojo"];
   console.log(colors);

   colors.push("Negro");
   console.log(colors);

   colors.pop();
   console.log(colors);

   colors.forEach(function (el, index) {
   console.log(`<li id= "${index}"> ${el} </li>}`);      
   })

   //Operadores (+ - * / %) Suma, Resta, Multiplicacion, Division, Modulo 
   console.log("🔹 Operadores (+-*/%)🔹");
   let suma1 = (5 + 5 - 10) *3;
   let suma2 = 5 + (5 - 10) * 3;
   let modulo = 5 % 2;
   console.log(suma1);
   console.log(suma2);
   
   // Operadores relacionales (>, <, >=, <=, ==, ===, !=, !==)
   console.log("🔹 Operadores racionales (>, <, >=, <=, ==, ===, !=, !==)🔹");
   console.log(6 < 7);
   console.log(8 > 8); 
   console.log(8 >= 8); /*Menor o igual*/

   /*
   = 1 Igual es asignación de variable
   == 2 Iguales es comparación de valores
   === 3 Iguales es comparación de tipo de dato y de valor
   */


