
export const EjercicioCuatro = () => {
    //INTERFACE
    interface Alumno {
        name: string;
        edad: number;
        calificacion: number;
    }
    //ARREGLO DE OBJETOS
    const alumnos: Alumno[] = [
        {
            name: "Viviana",
            edad: 19,
            calificacion: 10,
        },
        {
            name: "Wendy",
            edad: 20,
            calificacion: 8,
        },
        {
            name: "Gerson",
            edad: 18,
            calificacion: 9,
        }
    ];
    //FUNCION CALCULAR EL PROMEDIO
    const calcularPromedio = (alumnos: Alumno[]): number => {
        // Sumar todas las calificaciones
        let sumaCalificaciones = 0;

        // Recorremos el arreglo con for
        for (let i = 0; i < alumnos.length; i++) {
            sumaCalificaciones += alumnos[i].calificacion;
        }

        // Calcular el promedio
        const promedio = sumaCalificaciones / alumnos.length;

        // Redondear a 2 decimales
        return parseFloat(promedio.toFixed(2));
    }

    return (
        <div>
            <h3>Ejercicio Cuatro</h3><br />
            <h4>Arreglos con Objetos</h4><br />
            <h6>4.	Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.</h6><br />
            <p>Arreglo de objetos original:
                <code>
                    <pre>
                        {JSON.stringify(alumnos, null, 2)}
                    </pre>
                </code>
            </p>
            <p>El promedio de los alumnos es: {calcularPromedio(alumnos)}</p>
        </div>
    )
}
