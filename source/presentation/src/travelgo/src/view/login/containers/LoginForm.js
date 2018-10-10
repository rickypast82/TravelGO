//@flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { type State} from '../../../lib/redux-helper';


type StateProps = {|
|};

const LoginFormContainer = () => { 
    
    return (
       <div> </div>
    )
};
const mapStateToProps = (state:State):StateProps => ({
    
});

const mapDispatchToProps = {

}
export { LoginFormContainer, mapStateToProps };
export default connect(mapStateToProps,mapDispatchToProps)(LoginFormContainer);