import React from 'react'
import _ from 'underscore'
import SelectboxOption from './SelectboxOption'

class Selectbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { collection: props.collection }
    }
    render() {
        const ref = this.props._ref
        const className = this.props.className
        return (
            <select ref={ref} className={className} >
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
