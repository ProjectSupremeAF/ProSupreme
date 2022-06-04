import React from 'react'
import { Container, Grow, Grid, Card, CardActions, CardContent, CardMedia, Button} from '@material-ui/core'
import useStyles from './styles';
import { Link } from 'react-router-dom';
import students from '../../images/students.jpg';
import staff from '../../images/staff.jpg';


const Landing = () => {
    const classes = useStyles();

  return (
    <Grow in>
            <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={5}>
                  <Card className={classes.card}>
                      <CardMedia className={classes.media} image={students}  />
                        <div className={classes.overlay}>
                            
                        </div>
                        <div className={classes.overlay2}>
                            
                        </div>
                        <div className={classes.details}>
                          <Button component={Link} to="/" variant="contained" color="primary" fullWidth>SignIn Student</Button>  
                        </div>
                      <CardContent>
                          
                          
                      </CardContent>
                      <CardActions className={classes.cardActions}>
                          
                      </CardActions>
                  </Card>
                    
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className={classes.card}>
                          <CardMedia className={classes.media} image={staff}  />
                            <div className={classes.overlay}>
                                
                            </div>
                            <div className={classes.overlay2}>
                                
                            </div>
                            <div className={classes.details}>
                              <Button component={Link} to="/" variant="contained" color="primary" fullWidth>SignIn Staff</Button>  
                            </div>
                          <CardContent>
                              
                              
                          </CardContent>
                          <CardActions className={classes.cardActions}>
                              
                          </CardActions>
                      </Card>
                </Grid>
                
            </Grid>
          </Container>
        </Grow>
  )
}

export default Landing