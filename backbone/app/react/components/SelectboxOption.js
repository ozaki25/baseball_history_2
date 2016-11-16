import React from 'react'

class SelectboxOption extends React.Component {
    render() {
        const value = this.props.value
        const label = this.props.label
        return (
            <option value={value}>{label}</option>
        )
    }
}

module.exports = SelectboxOption
