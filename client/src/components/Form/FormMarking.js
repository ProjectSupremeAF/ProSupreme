import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import {createMark} from '../../actions/marking';
const Form = () =>{

    const [markingData, setMarkingData] = useState({
        moduleName:'',
        moduleID:'',
        lecinCharge:'',
        attribute1:'',
        attribute2:'',
        attribute3:'',
        selectedFile:''
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createMark(markingData));

    }

    const clear = () =>{

    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating Marking Scheme</Typography>
                <TextField 
                    name="moduleName" 
                    variant="outlined" 
                    label="Module Name" 
                    fullWidth
                    value={markingData.moduleName}
                    onChange={(e) => setMarkingData({ ...markingData, moduleName: e.target.value })}
                />
                <TextField 
                    name="moduleID" 
                    variant="outlined" 
                    label="Module ID" 
                    fullWidth
                    value={markingData.moduleID}
                    onChange={(e) => setMarkingData({ ...markingData, moduleID: e.target.value })}
                />
                <TextField 
                    name="lecinCharge" 
                    variant="outlined" 
                    label="Lecture In Charge" 
                    fullWidth
                    value={markingData.lecinCharge}
                    onChange={(e) => setMarkingData({ ...markingData, lecinCharge: e.target.value })}
                />
                <TextField 
                    name="attribute1" 
                    variant="outlined" 
                    label="Attribute 1" 
                    fullWidth
                    value={markingData.attribute1}
                    onChange={(e) => setMarkingData({ ...markingData, attribute1: e.target.value })}
                />
                <TextField 
                    name="attribute2" 
                    variant="outlined" 
                    label="Attribute 2" 
                    fullWidth
                    value={markingData.attribute2}
                    onChange={(e) => setMarkingData({ ...markingData, attribute2: e.target.value })}
                />
                <TextField 
                    name="attribute3" 
                    variant="outlined" 
                    label="Attribute 3" 
                    fullWidth
                    value={markingData.attribute3}
                    onChange={(e) => setMarkingData({ ...markingData, attribute3: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple ={false}
                        onDone={({base64}) => setMarkingData({ ...markingData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size ="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size ="small" onCLick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
    );
}

export default Form;