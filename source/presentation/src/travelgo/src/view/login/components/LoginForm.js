//@flow
import React from 'react';
import { Form, FormInput, FormCheckbox, Button } from '../../../gui';

const LoginForm = () => {
    return (
        <Form size='large'>

            <FormInput
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Indirizzo E-mail'
            />
            <FormInput
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
            />
            <Button fluid >Login</Button>
            <FormCheckbox label='Ricorda password' />

        </Form>
    )
}

export default LoginForm;