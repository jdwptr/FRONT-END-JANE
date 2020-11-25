import React from 'react'

class Footer extends React.Component {
    render () {
        return (
            // <h4>Buatan Jane @2020</h4>

            // PROPS
            <div>
                <h4>{this.props.nama}</h4>
                <h4>{this.props.usia}</h4>
            </div>
        )
    }
}

export default Footer