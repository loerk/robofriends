import React, { Component } from 'react'

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
        }
    }
    //lifecycleMethod which is called when an error arises(like try-catch)
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }
    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        }
        //renders the wrapped elements
        return this.props.children
    }
}

export default ErrorBoundry