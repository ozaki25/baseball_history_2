import React from 'react'
import _ from 'underscore'
import SelectboxOption from './SelectboxOption'

class Selectbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { collection: props.collection }
    }
    render() {
        const id = this.props.id
        const className = this.props.className
        return (
            <select id={id} className={className} >
              {this.renderOptions()}
            </select>
        )
    }
    renderOptions() {
        return _.map(this.state.collection, (model) => {
            return <SelectboxOption valie={this.props.value(model)} label={this.props.label(model)} />
        })
    }
}

module.exports = Selectbox
