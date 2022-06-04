import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";

import { deleteCustomers } from '../../../actions/customers';



const Customer = ({customer, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

  return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={customer.selectedFile} title ={customer.cusName}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{customer.cusName}</Typography>
                <Typography variant="h6">{customer.cusEmail}</Typography>
                <Typography variant="body2">{moment(customer.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(customer._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            
            <CardContent>
                <Typography className={classes.title}  variant="h5" gutterBottom>{customer.cusRole}</Typography>
                
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteCustomers(customer._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
  );
}

export default Customer