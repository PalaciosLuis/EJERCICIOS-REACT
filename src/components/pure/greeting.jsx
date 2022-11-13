import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state={

            age:29,

        }

    }
    render() {


        return (

            /*solo un div o comp[onente en unba funcion */
            <div>
                <h1>hola gente {this.props.name}</h1>
                <h2>Tu edad es de : {this.state.age}</h2>
                <div>
                <button onClick={this.cumpleanios}>
                    cumplir anios
                </button>


                </div>

            </div>
            
        );
    }

    cumpleanios=()=>{

       this.setState((prevState)=>(
        {
            age: prevState.age+1
        }
       ))
    }
}

//contenido que le puedo pasar a alguno de orden superior
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
