import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    submitButton: {
        margin: theme.spacing(1, 0),
    },
  
}));

const FeedbackForm =  (props) => {
    const classes = useStyles();

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl variant="filled" fullWidth={true}>
                <Typography className={classes.submitButton} align="left" variant="h5">
                    <Icon color="primary">
                        <FeedbackIcon/> 
                    </Icon>
                    Yaya Games Feedback
                </Typography>
                <Typography paragraph={true}>
                    Yaya Games lets you sebd suggestions about our web page. We welcome problem reports, feature ideas and general comments.
                </Typography>
                <TextField
                    label="Start by a brief description:"
                    multiline
                    rows={4}
                    variant="outlined"/>
            </FormControl>
            <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                fullWidth={true}
                className={classes.submitButton}>
                Send
            </Button>
        </form>
    );
}

export default FeedbackForm;