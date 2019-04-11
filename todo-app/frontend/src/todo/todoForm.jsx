import React from 'react'
import Grid from '../main/grid'
import IconButton from '../template/iconButton'

export default props => {
  const keyHandler = (e) => {
    switch (e.key) {
      case 'Enter':
        e.shiftKey ? props.handleSearch() : props.handleAdd()
        break;
      case 'Escape':
        props.handleClear()
      default:
        break;
    }
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input id="description" className='form-control'
            placeholder='Adicionar uma tarefa'
            value={props.description}
            onChange={props.handleChange}
            onKeyUp={keyHandler}
            />
      </Grid>
      <Grid cols='12 3 2'>
        <IconButton style='primary' icon='plus'
          onClick={props.handleAdd} >
        </IconButton>
        <IconButton style='info' icon='search'
          onClick={props.handleSearch}>
        </IconButton>
        <IconButton style='default' icon='close'
          onClick={props.handleClear}>
        </IconButton>
      </Grid>
    </div>
  )
}