import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function CustomHooks(params) {

    //let url = "https://pokeapi.co/api/v2/pokemon/";
    let url = "https://jsonplaceholder.typicode.com/users";
    let {data, isPending, error} = useFetch(url);

    return (
        <>
            <h3>Hooks Personalizados, lo que tu quieras xdd</h3>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>{JSON.stringify(error)}</h3>            
            <h3>
            <pre style={{whiteSpace: "pre-wrap"}}>
                <code>{JSON.stringify(data)}</code>
            </pre>            
            </h3>
        </>
    );
}