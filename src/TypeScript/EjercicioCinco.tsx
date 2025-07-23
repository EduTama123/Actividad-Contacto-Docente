import { useState } from 'react';

export const EjercicioCinco = () => {
    //hook useState para manejar el estado del contador
    const [contador, setContador] = useState<number>(0);

    //funcion para incrementar el contador
    const gestionContador = (num: number): void => {
        //llamar a la funcion setContador para actualizar el estado
        setContador(contador + num);
    }

    return (
        <div>
            <h3>Ejercicio Cinco</h3><br />
            <h4>Arreglos</h4><br />
            <h6>5.	Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)</h6><br />
            <h5>Contador: <small>{contador}</small></h5>
            <button className="btn btn-primary" onClick={() => gestionContador(-5)}>-5</button>&nbsp;
            <button className="btn btn-primary" onClick={() => gestionContador(5)}>+5</button>
        </div>
    )
}
