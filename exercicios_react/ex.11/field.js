import React, { Component } from 'react'
import { connect } from 'react-redux' //função responsável por conectar o mundo do react e o mundo do redux
import { bindActionCreators } from 'redux' //ligar ações criadas com os dispatchers
import { changeValue } from './fieldActions'

class Field extends Component {

  render() {
    return (
      <div>
        <label>{ this.props.value }</label><br />
        <input onChange={this.props.changeValue} value={this.props.value} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    value: state.field.value
  }
} //mapear store pra propriedades dos componentes

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Field) //decorator(passando field e retornando o mesmo componente com propriedades)