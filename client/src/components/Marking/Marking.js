import React from "react";
import {useSelector} from 'react-redux';
import Marks from './Marks/Marks'

import useStyles from './styles';

const Marking = () =>{
    const marking = useSelector((state) => state.marking);
    const classes = useStyles();

    console.log(marking);
    
    return(
        <>
            <h1 >Marking</h1>
            <Marks/>
            <Marks />
        </>
        
    );
}

export default Marking;