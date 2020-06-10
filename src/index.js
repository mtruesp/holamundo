//Importado de librerias, modulos y componentes
import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

//Renderizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)