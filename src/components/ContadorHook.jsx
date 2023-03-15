import React, {useState} from "react";

export default function contadorHooks(props) {
    const [contador, setContador] = useState(0);
    
    const sum = () => setContador(contador + 1);
    const substract = () => setContador(contador - 1);

    return(
        <>
            <h2>Hooks - UseState</h2>
            <nav>
                <button onClick={sum}>+</button>
                <button onClick={substract}>-</button>
            </nav>

            <h3>{props.titulo} = {contador}</h3>
        </>
    );
}    

contadorHooks.defaultProps = {
    titulo: "Contador Hooks titulo",
}