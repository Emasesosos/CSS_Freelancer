import React, { useState, useEffect } from 'react';
import Portafolio from './Portafolio';

const Portafolios = () => {
    
    console.log('Portafolios');

    const [portafolio, guardarPotafolios] = useState({
        portafolios: {}
    })

    useEffect(() => {
        getDatos();
    }, []);

    const getDatos = async() => {
        await fetch('datos.json')
            .then(respuesta => {
                return respuesta.json();
            })
            .then(datos => {
                guardarPotafolios({
                    portafolios: datos
                })
            })
    };

    return (

        <div className="portafolio contenedor">

            <h2>Mi Portafolio</h2>
            <div className="listado">
                {
                    Object.keys(portafolio.portafolios).map(key => {
                        return <Portafolio
                                    key={key}
                                    portafolio={portafolio.portafolios[key]}
                                />
                    })
                }
            </div>
            
        </div>
    );
}
 
export default Portafolios; 