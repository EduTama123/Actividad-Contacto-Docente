import { EjercicioCinco } from "./TypeScript/EjercicioCinco";
import { EjercicioCuatro } from "./TypeScript/EjercicioCuatro";
import { EjercicioDos } from "./TypeScript/EjercicioDos";
import { EjercicioTres } from "./TypeScript/EjercicioTres";
import { EjercicioUno } from "./TypeScript/EjercicioUno";

//Componente React
const App = () => {
  return (
    <div>
      <h1>Ejercicios TypeScript - React</h1>
      <hr />
      <EjercicioUno/>
      <hr />
      <EjercicioDos/>
      <hr />
      <EjercicioTres/>
      <hr />
      <EjercicioCuatro/>
      <hr />
      <EjercicioCinco/>
      <hr />
    </div>
  )
}
export default App;