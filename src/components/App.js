import React from 'react'

import Regards from './regards'

//Creacion de componente
//Componentes funcionales
// const App = () => {
//     return <div></div>
// }
// function App2(){
//     return <div></div>
// }

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Fernando',
            lastName: 'Mendoza'
        }
    }

    changeState(objectName){
        this.setState(objectName)
    }

    render(){
        return (
            <div>
                <Regards objectName={this.state} />
                <button onClick={() => this.changeState({name: 'Fernando', lastName: 'Mendoza'})}>Ferando</button>
                <button onClick={() => this.changeState({name: 'Manuel', lastName: 'Trujillo'})}>Manuel</button>
                <button onClick={() => this.changeState({name: 'Luis', lastName: 'Rosas'})}>Luis</button>
            </div>
        )
    }
}

export default App