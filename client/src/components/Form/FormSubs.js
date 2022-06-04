import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import useStyles from './styles';
import { createSub, updateSubs } from "../../actions/subs";

const FormSubs = ({currentId, setCurrentId}) => {

    const [subsData, setSubsData] = useState({
        title:'',
        subType:'',
        deadline:'',
        tags:'',
        selectedFile:''
    });

    const sub = useSelector((state) => currentId ? state.subs.find((m)=> m._id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(sub) setSubsData(sub);

    }, [sub])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateSubs(currentId, subsData));
        }else{
            dispatch(createSub(subsData));
        }

        clear();

    }

    const clear = () =>{
        setCurrentId(null);
        setSubsData({title:'', subType:'', deadline:'', tags:'', selectedFile:''});
    }
  return (
    <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Updating' : 'Creating'} Submissions</Typography>
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={subsData.title}
                    onChange={(e) => setSubsData({ ...subsData, title: e.target.value })}
                />
                <TextField 
                    name="subType" 
                    variant="outlined" 
                    label="Submission Type" 
                    fullWidth
                    value={subsData.subType}
                    onChange={(e) => setSubsData({ ...subsData, subType: e.target.value })}
                />
                <TextField 
                    name="deadline" 
                    variant="outlined" 
                    label="Deadline" 
                    fullWidth
                    value={subsData.deadline}
                    onChange={(e) => setSubsData({ ...subsData, deadline: e.target.value })}
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tag" 
                    fullWidth
                    value={subsData.tags}
                    onChange={(e) => setSubsData({ ...subsData, tags: e.target.value })}
                />
                
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple ={false}
                        onDone={({base64}) => setSubsData({ ...subsData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size ="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size ="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
  );
}

export default FormSubs