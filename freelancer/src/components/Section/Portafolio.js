import React from 'react';
import uno from './../../img/1.jpg';
import dos from './../../img/2.jpg';
import tres from './../../img/3.jpg';
import cuatro from './../../img/4.jpg';
import cinco from './../../img/5.jpg';
import seis from './../../img/6.jpg';
import siete from './../../img/7.jpg';
import ocho from './../../img/8.jpg';

const Portafolio = (props) => {

    console.log(props);

    const { id, desc, nombre } = props.portafolio;
    const imagen = [ '', uno, dos, tres, cuatro, cinco, seis, siete, ocho ];

    return (
        <div className="elemento">
            <img src={imagen[id]} alt={`${imagen[id]}`}/>
            <div className="contenido">
                <h3>{nombre}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
}
 
export default Portafolio;