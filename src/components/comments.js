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

    componentWillUnmount(){
        console.log('Componente borrado')
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