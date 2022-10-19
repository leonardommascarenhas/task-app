import {Component} from 'react'

export class Section extends Component {
    render() {
        return (
            <section>
                {this.props.children}
            </section>
        )
    }
}