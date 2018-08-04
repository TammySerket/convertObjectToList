convertObjectToList = (obj) => {
    let objAListar= Object.keys(obj); //Se crea variable con objeto contructor
    let array2=[]; //Se declara un array vacio para contener los otros arrays
    for (let i=0; i<objAListar.length;i++){ //se itera dentro del array
      array2.push([objAListar[i], obj[objAListar[i]]]); //Se realiza funcion push para insertar los arrays
    }
    return array2;
    }
//ejemplo
let objeto = {
    nombre: 'Carl Sagan',
    edad: 62,
    hobbie: 'El Cosmos'
  };
  
let result= convertObjectToList (objeto);
console.log(result);