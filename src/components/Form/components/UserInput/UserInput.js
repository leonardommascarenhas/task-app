import { Component } from 'react'
import './UserInput.css'

export class UserInput extends Component {
    render() {
        return (
            <>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <input type={this.props.type ? this.props.type : 'text'} placeholder={this.props.placeholder ? this.props.placeholder : this.props.label} name={this.props.name} className={'textInput'}></input>
            </>
        )
    }
}