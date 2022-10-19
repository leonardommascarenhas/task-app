import {Component} from 'react'
import {Content} from '../../../../components/Content'
import {Section} from '../../../../components/Section'
import {Form} from '../../../../components/Form'
import {SendButton} from '../../../../components/Form/components/SendButton'
import {UserInput} from '../../../../components/Form/components/UserInput'

export class Body extends Component {
    render() {
        return (
            <div>
                <Content>
                    <Section>
                        <Form name={'UserInfo'}>
                            <UserInput label={'Name'} name={'name'} />
                            <UserInput label={'Last Name'} name={'lastName'} />
                            <UserInput label={'Email'} type={'email'} name={'email'} />
                            <SendButton />
                        </Form>
                    </Section>
                    <Section>
                        <Form name={'Experience'}>
                            <UserInput label={'School Name'} name={'schoolName'} />
                            <UserInput label={'Title Of Study'} name={'titleOfStudy'} />
                            <UserInput label={'Date Of Study'} name={'dateOfStudy'} />
                            <SendButton />
                        </Form>
                    </Section>
                    <Section>
                        <Form name={'PracticalExperience'}>
                            <UserInput label={'Company Name'} name={'companyName'} />
                            <UserInput label={'Position Title'} name={'positionTitle'} />
                            <UserInput label={'Main Task'} name={'mainTask'} />
                            <UserInput label={'Initial Date'} placeholder={'yyyy'} name={'initialDate'} />
                            <UserInput label={'End Date'} placeholder={'yyyy'} name={'endDate'} />
                            <SendButton />
                        </Form>
                    </Section>
                </Content>
            </div>
        )
    }
}