import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";

import { deleteMarking } from "../../../actions/marking";

const Marks = ({marks, setCurrentId}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={marks.selectedFile} title ={marks.moduleName}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{marks.moduleName}</Typography>
                <Typography variant="h6">{marks.lecinCharge}</Typography>
                <Typography variant="body2">{moment(marks.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(marks._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{marks.moduleID.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title}  variant="h5" gutterBottom>{marks.attribute1}</Typography>
                <Typography className={classes.title}  variant="h5" gutterBottom>{marks.attribute2}</Typography>
                <Typography className={classes.title}  variant="h5" gutterBottom>{marks.attribute3}</Typography>
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteMarking(marks._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Marks;