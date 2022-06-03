import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";

import { deletePanels } from '../../../actions/panels';


const Panel = ({panel, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
  return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={panel.selectedFile} title ={panel.groupID}/>
            <div className={classes.overlay}>
                 <Typography className={classes.title}  variant="h5" gutterBottom>{panel.groupID}</Typography>
                <Typography variant="body2">{moment(panel.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(panel._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{panel.moduleID.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title}  variant="h5" gutterBottom>{panel.panelID}</Typography>
                
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePanels(panel._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
  );
}

export default Panel