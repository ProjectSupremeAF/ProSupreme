import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid, Button, AppBar, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input';
import { Link } from 'react-router-dom'
import { getMarking , getMarksBySearch} from '../../actions/marking'
import Marking from '../Marking/Marking'
import FormMarking from '../Form/FormMarking'

import useStyles from './styles';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}


const HomeAdmin = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const searchQuery = query.get('searchQuery');
    
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() =>{
        dispatch(getMarking());
    }, [currentId, dispatch]);

    const searchMarks = () => {
        if(search.trim() || tags){
            dispatch(getMarksBySearch({ search, tags: tags.join(',') }));
            history.push(`/marking/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        }else {
            history.push('/home');
        }
    };

    const handleKeyPress = (e) => {
        if(e.keyCode === 13){
            searchMarks();
        }
    };

    const handleAdd = (tag) => setTags([ ...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return(
        <Grow in>
            <Container maxWidth="xl">
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={7}>
                    <Marking setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField 
                        name="search"
                        variant="outlined"
                        label="Search"
                        onKeyPress={handleKeyPress}
                        fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <ChipInput
                     style={{margin: '10px 0'}}
                     value={tags}
                     onAdd = {handleAdd}
                     onDelete ={handleDelete}
                     label = "Search moduleID"
                     variant="outlined"

                     />
                     <Button onClick={searchMarks} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                </AppBar>
                    <FormMarking currentId={currentId} setCurrentId={setCurrentId}/>
                    <br></br>
                    <Button component={Link} to="/subs" variant="contained" color="secondary" fullWidth>Submissions</Button>
                </Grid>
                
            </Grid>
            </Container>
        </Grow>

    );
    
};

export default HomeAdmin