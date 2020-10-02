import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FormGroup, 
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import store from '../../store'

import { task } from './actions'

const bot_list = ({ data }) => {
  return (
    <div className="bot_list">
      <FormGroup>
        {data.map(item => <Item
          key={item.id}
          item={item}
         />)}
      </FormGroup>
    </div>
  )
}

class Item extends Component {
  constructor() {
    super()

    this.dispatch = store.dispatch
    this.onHandleClick = this.onHandleClick.bind(this)
  }

  onHandleClick() {
    const { id } = this.props.item

    this.dispatch(task(id))
  }

  render() {
    const { item } = this.props
    const { checked, name } = item

    return <FormControlLabel
      control={
        <Checkbox
        onClick={this.onHandleClick}
        checked={checked}
        name={name}/>
      }
      label={name}
    />
  }
}

const mapStateToProps = state => ({
  data: state.bot_list
})

export default connect(
  mapStateToProps
)(bot_list)
