import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import useStyles from './styles';

import { createCustomer, updateCustomers } from "../../actions/customers";

const FormCus = ({currentId, setCurrentId}) => {

    const [cusData, setCusData] = useState({
        cusName: '',
        cusRole: '',
        cusEmail: '',
        selectedFile: ''
    });

    const customer = useSelector((state) => currentId ? state.customers.find((m)=> m._id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(customer) setCusData(customer);

    }, [customer])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateCustomers(currentId, cusData));
        }else{
            dispatch(createCustomer(cusData));
        }

        clear();

    }

    const clear = () =>{
        setCurrentId(null);
        setCusData({
        cusName: '',
        cusRole: '',
        cusEmail: '',
        selectedFile: ''});
    }
  return (
    <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Updating' : 'Creating'} Users</Typography>
                <TextField 
                    name="cusName" 
                    variant="outlined" 
                    label="Name" 
                    fullWidth
                    value={cusData.cusName}
                    onChange={(e) => setCusData({ ...cusData, cusName: e.target.value })}
                />
                <TextField 
                    name="cusRole" 
                    variant="outlined" 
                    label="Role" 
                    fullWidth
                    value={cusData.cusRole}
                    onChange={(e) => setCusData({ ...cusData, cusRole: e.target.value })}
                />
                <TextField 
                    name="cusEmail" 
                    variant="outlined" 
                    label="Email" 
                    fullWidth
                    value={cusData.cusEmail}
                    onChange={(e) => setCusData({ ...cusData, cusEmail: e.target.value })}
                />
                
                
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple ={false}
                        onDone={({base64}) => setCusData({ ...cusData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size ="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size ="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
  );
}

export default FormCus