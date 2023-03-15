import React, {useState, useEffect} from 'react';

export default function scrollEfect(props) {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        //console.log("Moviendo el Scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => {
        window.removeEventListener("scroll", detectarScroll);
        };
    }, [scrollY]);

    useEffect(() => {
        //console.log("Fase de Montaje");
    }, []);

    useEffect(() => {
        //console.log("Fase de Actualización");
    });

    useEffect(() => {
        return () => {
        //console.log("Fase de Desmontaje");
        };
    });

    return(
        <>
            <h2>Hooks Use Effect y su Ciclo de Vida</h2>
        </>
    );
}