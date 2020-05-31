import React from 'react';
import {Box, Typography, Grid, Button, Paper, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {AnimatePresence, motion} from 'framer-motion';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
    visible: { 
        opacity: 1,
        y: "0vh"
     },
    hidden: { opacity: 0, y: "100vh" },
    exit: {
        opacity: 0,
        y: "100vh",
        transition: { duration: 1.5, ...transition }
    }
};


const useStyles = makeStyles({
    root: {
        padding: "30px",
        minHeight: "200px",
        backgroundColor: "white"
    },
    title: {
        marginBottom: "40px",
        color: "white"
    },
    content: {
        marginTop: "40px",
        color: "white"
    }
})

export default function Language(props) {
    const classes = useStyles();
    return (
        <Paper 
        className={classes.root} 
        style={{backgroundColor: props.backgroundColor}}
        elevation={5}
        >
            <Typography variant="h5" className={classes.title}>{props.name}</Typography>
            <Typography className={classes.content}>{props.content}</Typography>
        </Paper>
    )
}