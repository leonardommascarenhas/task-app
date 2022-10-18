import { Component } from 'react'

import './Form.css'

export class Form extends Component {
    render() {
        return (
            <form className={"form"} name={this.props.name}>
                {this.props.children}
            </form>
        )
    }
}