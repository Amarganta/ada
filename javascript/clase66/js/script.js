
// false;
// null = false;
// undefined = false;
// NaN = false;
// 0 = false;
// '' = false;

// Si no es ninguno de esos valores, la conidción siempre va 
// a ser true.


let salud;
let felicidad = asignacionInicial(1, 11);
let limpieza = asignacionInicial(1, 11);
let energia = asignacionInicial(1, 11);

const asignacionInicial = (val1, val2) => {
    return Math.random(salud) * (11 - 1) + 1
}
