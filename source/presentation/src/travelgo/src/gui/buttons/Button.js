//@flow
import React ,{ type Node }from 'react';
import { Button as ButtonSemanticUI} from 'semantic-ui-react';
import styled from 'styled-components';

type ButtonProps = {
    backgroundColor?:string,
    children?:Node,
    fluid?:boolean,
    label?:string,
    size?:|'mini'|'tiny'|'small'|'medium'|'large'|'big'|'huge'|'massive',
    textColor?:string,
}

const ButtonCustom = styled(ButtonSemanticUI)`
    background-color: ${(props:ButtonProps) => props.backgroundColor } !important;
    color: ${(props:ButtonProps) => props.textColor } !important;
`
const Button = ({backgroundColor='#041468',textColor='#d1d0cf',fluid=false,size='small',children}:ButtonProps) => (
    <ButtonCustom
        backgroundColor={backgroundColor} 
        fluid={fluid} 
        size={size}
        textColor={textColor} 
        > {children}
        </ButtonCustom>
    )

export default Button;