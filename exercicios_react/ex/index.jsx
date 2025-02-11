import React from 'react'
import ReactDOM from 'react-dom'
import { CombineReducers, createStore, combineReducers } from 'redux' //métodos criar store (objeto com vários atributos que é controlado por um reducer)
import { Provider } from 'react-redux' //Componente para passar estado para componentes internos
import counterReducer from './counterReducer'
import Counter from './counter'

const reducers = combineReducers({
  counter: counterReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>
, document.getElementById('app'))