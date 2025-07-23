
export const EjercicioDos = () => {

    //ARREGLO
    const numeros: number[] = [2, 4, 6, 8, 10];
    //FUNCION
    const sumarElementos = (arreglo: number[]): number => {
        let suma = 0;
        for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[i];
        }
        return suma;
    };
    return (
        <div>
            <h3>Ejercicio Dos</h3><br />
            <h4>Arreglos</h4><br />
            <h6>2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo.</h6><br />
            <p>Arreglo: [{numeros.join(", ")}]</p>
            <span>La suma de los elementos es: {sumarElementos(numeros)}</span>
        </div>
    )
}
