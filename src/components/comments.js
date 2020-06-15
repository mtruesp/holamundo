import React from 'react'
import { date } from 'faker'

class Comments extends React.Component{
    constructor(props){
        super()
        this.state = {
            userAvatar: props.userAvatar,
            name: props.name,
            date: props.date,
            comment: props.comment
        }
    }

    componentWillMount(){
        console.log('Antes del renderizado')
    }

    componentDidMount(){
        console.log('Despues del renderizado')
    }

    componentWillReceiveProps(nextProps){
        console.log('Recibir props', nextProps)
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componente se va a actualizar', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componente se actualizo', prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('Componente se va a desmontar')
    }



    render(){
        return(
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar">
                        <img src={this.state.userAvatar} alt="Imagen de usuario"/>
                    </a>
                    <div className="content">
                        <a className="author">{this.state.name}</a>
                        <div className="metadata">
                            <div className="date">{this.state.date}</div>
                        </div>
                        <div className="text">
                            {this.state.comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments