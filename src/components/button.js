import React from 'react'

class Button extends React.Component{
    constructor(props){
        super()
    }
    
    componentDidMount(){
        console.log('Boton creado')
    }

    render(){
        return (
            <button onClick={this.props.func} className="ui primary button">
                {this.props.text}
            </button>
        )
    }
}

export default Button