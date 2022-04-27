import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Marks = ({marks}) =>{
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={marks.selectedFile} title ={marks.moduleName}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{marks.lecinCharge}</Typography>
                <Typography variant="body2">{moment(marks.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            
            <CardContent>
                <Typography className={classes.title}  variant="h5" gutterBottom>{marks.moduleID}</Typography>
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Marks;