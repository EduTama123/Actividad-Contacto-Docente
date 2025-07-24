
export const EjercicioUno = () => {
    //FUNCION PARA CALCULAR EL AREA DEL CUADRADO
    const areaCuadrado=(lado: number): number=>{
        return lado*lado;
    }
    return (
    <div>
        <h3>Ejercicio Uno</h3><br />
        <h4>Funciones</h4><br />
        <h6>1.	Crear una función con parámetros que permita calcular el área de un cuadrado</h6><br />
        <span>El área de un cuadrado de lado 100 es: {areaCuadrado(100)}</span>
    </div>
  )
}
