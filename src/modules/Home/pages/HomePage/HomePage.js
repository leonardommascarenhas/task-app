import {Component} from 'react'
import {Header} from '../../components/Header'
import {Body} from '../../components/Body'
import {Footer} from '../../components/Footer'

export class HomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        )
    }
}