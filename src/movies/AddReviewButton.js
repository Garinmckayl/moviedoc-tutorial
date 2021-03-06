import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
    button: {
        marginTop: '1em'
    }
};

const AddReviewButton = ({ classes, record }) => (
    <Button
        className={classes.button}
        variant="raised"
        component={Link}
        to={`/reviews/create?movie_id=${record.id}`}
        label="Add a review"
        title="Add a review"
    >
        <ChatBubbleIcon />
    </Button>
);

export default withStyles(styles)(AddReviewButton);
