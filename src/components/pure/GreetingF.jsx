import React, { useState } from 'react';
import PropTypes from 'prop-types'

const GreetingF = (props) => {
    //breve introduciion a userstate

    //variable - metodo para actualizarla  - valor inicial
    const [age, setage] = useState(29);

    const cumpleanios = () => {
        setage(age + 1)
    }




    return (
        /*solo un div o comp[onente en unba funcion */
        <div>
            <h1>HOLA {props.name} desde componente funcional</h1>
            <h2>
                Tu edad es de : {age}
            </h2>
            <div>
                <button onClick={cumpleanios}>
                    cumplir anios
                </button>
            </div>

        </div>
    )
}

GreetingF.propTypes = {
    name: PropTypes.string,

}

export default GreetingF

