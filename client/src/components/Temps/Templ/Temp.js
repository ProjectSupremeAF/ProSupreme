import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";

import { deleteTemps } from '../../../actions/temps';



const Temp = ({temp, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
            <CardMedia className={classes.media} image={temp.selectedFile1} title ={temp.title1}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{temp.title1}</Typography>
                
                <Typography variant="body2">{moment(temp.createdAt1).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(temp._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{temp.tags1.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                
                
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteTemps(temp._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
  );
}

export default Temp