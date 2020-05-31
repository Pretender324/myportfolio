import React from 'react';
import {Box, Typography, Grid, Button, Paper, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: "2px 4px",
        marginTop: "2px",
        marginRight: "5px",
        display: "inline-block",
        borderRadius: "4px",
        backgroundColor: "#62a8ac",
        fontSize: "smaller",
        color: "white"
    }
})

export default function LanguageTag(props) {
    const classes = useStyles();
    const languages = props.items;

    return (
        <div>
            {languages.map((language) => {
                return (
                    <p className={classes.root}>{language}</p>
                )
            })}
        </div>
    )
}