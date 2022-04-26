import React from "react";
import Marks from './Marks/Marks'

import useStyles from './styles';
const Marking = () =>{
    const classes = useStyles();
    return(
        <>
            <h1 >Marking</h1>
            <Marks/>
            <Marks />
        </>
        
    );
}

export default Marking;