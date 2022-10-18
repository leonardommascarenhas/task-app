import { Component } from 'react'
import './Content.css'

export class Content extends Component {
    render() {
        return (
            <div className="contentContainer">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}