//@flow
import React from 'react';
import { Image} from '../../../gui';

type Props = {|src:string|};

const TravelImage = ({src}:Props) => <Image 
                                        
                                        src={src}
                                        rounded
                                    />
export default TravelImage;