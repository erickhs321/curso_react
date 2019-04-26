import React from 'react'
import ReactDOM from 'react-dom'
import { CombineReducers, createStore, combineReducers } from 'redux' //métodos criar store (objeto com vários atributos que é controlado por um reducer)
import { Provider } from 'react-redux' //Componente para passar estado para componentes internos

import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
  field: fieldReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue='Teste' />
  </Provider>
, document.getElementById('app'))