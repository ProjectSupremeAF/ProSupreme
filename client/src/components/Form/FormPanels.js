import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import useStyles from './styles';

import { createPanel, updatePanels } from "../../actions/panels";


const FormPanels = ({currentId, setCurrentId}) => {

    const [panelsData, setPanelsData] = useState({
        groupID: '',
        panelID: '',
        moduleID: '',
        selectedFile: ''
    });

    const panel = useSelector((state) => currentId ? state.panels.find((m)=> m._id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(panel) setPanelsData(panel);

    }, [panel])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePanels(currentId, panelsData));
        }else{
            dispatch(createPanel(panelsData));
        }

        clear();

    }

    const clear = () =>{
        setCurrentId(null);
        setPanelsData({groupID:'', panelID:'', moduleID:'', selectedFile:''});
    }

  return (
    <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Updating' : 'Creating'} Allocate Panels</Typography>
                <TextField 
                    name="groupID" 
                    variant="outlined" 
                    label="Group ID" 
                    fullWidth
                    value={panelsData.groupID}
                    onChange={(e) => setPanelsData({ ...panelsData, groupID: e.target.value })}
                />
                
                <TextField 
                    name="panelID" 
                    variant="outlined" 
                    label="Panel ID" 
                    fullWidth
                    value={panelsData.panelID}
                    onChange={(e) => setPanelsData({ ...panelsData, panelID: e.target.value })}
                />

                <TextField 
                    name="moduleID" 
                    variant="outlined" 
                    label="Module ID" 
                    fullWidth
                    value={panelsData.moduleID}
                    onChange={(e) => setPanelsData({ ...panelsData, moduleID: e.target.value })}
                />
                
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple ={false}
                        onDone={({base64}) => setPanelsData({ ...panelsData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size ="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size ="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
  );
}

export default FormPanels