//@flow
import styled from 'styled-components'
import { SMALL_SIZE, type SizeTravelWidget } from '../constants'

type Props = {
    imageSize:SizeTravelWidget
}

const SMALL_WIDTH = 25;
const MEDIUM_WIDTH = 45;

export const getWidth = (size:SizeTravelWidget) =>{
    return size === SMALL_SIZE ? SMALL_WIDTH : MEDIUM_WIDTH;
}

const TravelImage = styled.img`
    width: ${(props:Props) => getWidth(props.imageSize) + 'em'};
`;

export default TravelImage;