import React from 'react'
import Header from '../components/Header'

class Main extends React.Component {
    render() {
        const histories = this.props.histories
        console.log(histories)
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>ReactSample</h1>
                </div>
            </div>
        )
    }
}

module.exports = Main
