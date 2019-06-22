var arreglo1=[];
var num;


function menuP()
{
  do{
    var menu=parseInt(prompt(
        `INGRESE LA OPCION REQUERIDA:
        1. Ingresar elementos
        2. Mostrar elementos
        3. Ordenar
        4. Mayor y menor elemento
        5. Salir
        `))

    

       
       switch (menu) {
        case 1:
            num=parseInt(prompt("Ingresar el numero de elementos del arreglo"));
            ingresardatos(arreglo1,num);   
          break;
        case 2:
                console.log(arreglo1);
          break;
        case 3:
            var a=parseInt(prompt(
                `Ingrese el metodo de ordenamiento
                1. Burbuja
                2. Seleccion
                `))
            if (a==1)
            {
                burbuja(arreglo1,num);
            }
            else if(a==2)
            {
                seleccion(arreglo1,num);
            }
            else
            {
                console.log("OPCION INCORRECTA");
            }
          break;
        case 4:
                var b=parseInt(prompt(
                    `
                    1. Elemento menor
                    2. Elemento mayor
                    `))
                if(b==1)
                {
                    var menor=arreglo1[0];
                    for(var i = 0; i < num; i++){
                        if (arreglo1[i] < menor)
                        {
                            menor = arreglo1[i];
                        }
                    }
                    console.log("ELEMENTO MENOR => "+menor);
                    
                }
                else if(b==2)
                {
                    var mayor=arreglo1[0];
                    for(var i = 0; i < num; i++){
                        if (arreglo1[i] > mayor)
                        {
                            mayor = arreglo1[i];
                        }
                    }
                    console.log("ELEMENTO MAYOR => "+mayor);
                }
                else
                {
                    console.log("OPCION INCORRECTA");
                }
          break;

        default:
            console.log("OPCION INCORRECTA")          
          break;
      }}while(menu!=5);
        
    
}

function ingresardatos(arreglo,n){
    for(var i=0;i<n;i++){
        var datos=parseInt(prompt("Ingresar elemento"));
        arreglo[i]=datos;
    }   
}

function mostrar(arreglo,n){
    for(var i=0;i<n;i++){        
        console.log(arreglo[i]);
    }   
}

function burbuja(arreglo,n){
    var i,k,aux;
    for(k=0;k<n;k++){
        for(i=0;i<(n-k);i++){
            if(arreglo[i]>arreglo[i+1]){
                aux=arreglo[i];
                arreglo[i]=arreglo[i+1];
                arreglo[i+1]=aux;
            }
        }
    }
}

function seleccion(arreglo,n){
    var i,k,aux;
    for(i=0;i<n;i++){
        for(j=(i+1);j<n;j++){            
            if(arreglo[i]>arreglo[j]){
                aux=arreglo[i];
                arreglo[i]=arreglo[j];
                arreglo[j]=aux;
            }
        }
    }     
}
menuP();