import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import useStyles from './styles';
import { createTemp, updateTemps } from "../../actions/temps";

const FormTemps = ({currentId, setCurrentId}) => {

    const [tempsData, setTempsData] = useState({
        title1:'',
        tags1:'',
        selectedFile1:''
    });

    const temp = useSelector((state) => currentId ? state.temps.find((m)=> m._id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(temp) setTempsData(temp);

    }, [temp])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateTemps(currentId, tempsData));
        }else{
            dispatch(createTemp(tempsData));
        }

        clear();

    }

    const clear = () =>{
        setCurrentId(null);
        setTempsData({title1:'', tags1:'', selectedFile1:''});
    }

  return (
    <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Updating' : 'Creating'} Templates</Typography>
                <TextField 
                    name="title1" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={tempsData.title1}
                    onChange={(e) => setTempsData({ ...tempsData, title1: e.target.value })}
                />
                
                <TextField 
                    name="tags1" 
                    variant="outlined" 
                    label="Tag" 
                    fullWidth
                    value={tempsData.tags1}
                    onChange={(e) => setTempsData({ ...tempsData, tags1: e.target.value })}
                />
                
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple ={false}
                        onDone={({base64}) => setTempsData({ ...tempsData, selectedFile1: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size ="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size ="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
  );
}

export default FormTemps