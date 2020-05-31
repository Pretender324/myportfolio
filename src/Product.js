import React from 'react';
import {Box, Typography, Grid, Button, Paper, Modal, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LanguageTag from './LanguageTag';

function getModalStyle() {
    return {
        position: "relative",
        top: "20vh",
        left: "20vw",
        width: "60vw",
        minHeight: "50vh",
        padding: "20px",
        backgroundColor: "white",
        };
}

const useStyles = makeStyles({
    root:{
        padding: "20px",
        marginBottom: "40px",
        cursor: "pointer"
    },
    image: {
        border: "1px solid gray",
        borderRadius: "10px"
        
    },
    content: {
        textAlign: "left"
    },
    option: {
        marginTop: "20px",
        fontSize: "smaller",
        color: "gray"
    },
    modalTitle: {
        textAlign: "center",
        marginBottom: "40px"
    }
})

export default function Product(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Paper className={classes.root} elevation={5} onClick={handleOpen}>
                <Grid container justify="flex-start" spacing={2}>
                    <Grid md={4}>
                        <img src={props.image} alt="Portfolio" width="200" className={classes.image}/>
                    </Grid>
                    <Grid md={1}></Grid>
                    <Grid md={7} className={classes.content}>
                        <Typography variant="h5">{props.title}</Typography>
                        <Typography>{props.content}</Typography>
                        <Typography　className={classes.option}>使用言語・FWなど</Typography>
                        <LanguageTag items={props.languages} />
                    </Grid>
                </Grid>
            </Paper>
            <Modal 
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle}>
                    <Typography variant="h4" className={classes.modalTitle}>{props.title}</Typography>
                    <Grid container justify="flex-start">
                        <Grid md={4}>
                            <img src={props.image} alt="Portfolio" width="250" className={classes.image}/>
                        </Grid>
                        <Grid md={1}></Grid>
                        <Grid md={7} className={classes.content}>
                            
                            <Typography>{props.contentDetailed}</Typography>
                            <Typography　className={classes.option}>サイトURL</Typography>
                            <Link href={props.siteLink}>{props.siteLink}</Link>
                            <Typography　className={classes.option}>GitHub</Typography>
                            <Link href={props.gitHubLink}>{props.gitHubLink}</Link>
                            <Typography　className={classes.option}>使用言語・FWなど</Typography>
                            <LanguageTag items={props.languages} />
                        </Grid>
                    </Grid>
                </div>
            </Modal>
        </div>
    )
}