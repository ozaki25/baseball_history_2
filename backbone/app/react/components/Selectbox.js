import React from 'react'
import _ from 'underscore'
import SelectboxOption from './SelectboxOption'

class Selectbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { collection: props.collection }
    }
    render() {
        const className = this.props.className
        const value = this.props.selected
        let onChange = this.props.onChange
        return (
            <select className={className} value={value} onChange={onChange} >
              {this.renderOptions()}
            </select>
        )
    }
    renderOptions() {
        return _.map(this.state.collection, (model, i) => {
            return <SelectboxOption key={i} value={this.props.value(model)} label={this.props.label(model)} />
        })
    }
}

module.exports = Selectbox
