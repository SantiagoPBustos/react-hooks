import React from 'react';
import './Styles.css'
import './Styles.scss'
import moduleStyles from './Styles.module.css'

export default function styles() {
    return (
        <section className='my-styles'>
            <h2>Stylesss CSS en React!!!!</h2>
            <h3 className='bg-react'>Styles en hoja externa!!</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem",margin:"3rem"}}>Styles en linea!!</h3>

            <h3 className={moduleStyles.error}>Stylesss CSS con modulos en React!!!!</h3>
            <h3 className={moduleStyles.success}>Stylesss CSS con modulos en React!!!!</h3>

            <h3 className='bg-sass'>Stylesss CSS con SASS en React!!!!</h3>
        </section>
    );
}