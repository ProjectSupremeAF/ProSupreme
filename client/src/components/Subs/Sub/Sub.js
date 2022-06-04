import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";

import { deleteSubs } from '../../../actions/subs';

const Sub = ({sub, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
            <CardMedia className={classes.media} image={sub.selectedFile} title ={sub.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{sub.title}</Typography>
                <Typography variant="h6">{sub.deadline}</Typography>
                <Typography variant="body2">{moment(sub.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(sub._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{sub.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title}  variant="h5" gutterBottom>{sub.subType}</Typography>
                
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteSubs(sub._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
  );
}

export default Sub