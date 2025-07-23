
export const EjercicioTres = () => {
    //ARREGLO
    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    //FUNCION
    const nuevoArreglo = (arreglo: number[]): number[] => {
        return arreglo.map((numero) => numero / 5);
    };
    return (
        <div>
            <h3>Ejercicio Tres</h3><br />
            <h4>Arreglos con función <strong>'Map'</strong></h4><br />
            <h6>3.	Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.</h6><br />
            <p>Arreglo original: [{arreglo.join(", ")}]</p>
            <p>Nuevo arreglo dividido para 5: [{nuevoArreglo(arreglo).join(", ")}]</p>
        </div>
    )
}
