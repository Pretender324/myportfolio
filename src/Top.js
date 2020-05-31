import React from 'react';
import {Box, Link, Typography, Grid, Paper, Button, Modal} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {AnimatePresence, motion} from 'framer-motion';

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

const variants = {
    visible: { 
        opacity: 1,
        y: "0vw"
     },
    hidden: { 
        opacity: 0,
        y: "100vw"
     },
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5
};

const useStyles = makeStyles({
    root: {
    },
    title: {
        position: "relative",
        top: '25vh',
        fontStyle: 'italic',
        color: '#1C77C3',
    },
    menuList: {
        position: 'relative',
        top: "35vh",
    },
    menu: {
        height: 60,
        width: 240,
        marginBottom: 20,
    },
    menuColor1: {
        backgroundColor: "#75dddd",
        color: "#ffffff",
    },
    menuColor2: {
        backgroundColor: "#62a8ac",
        color: "#ffffff",
    },
    menuColor3: {
        backgroundColor: "#21897e",
        color: "#ffffff",
    },
    menuColor4: {
        backgroundColor: "#39a9d8",
        color: "#ffffff",
    },
    modalTitle: {
        textAlign: "center",
        marginBottom: "40px",
        fontStyle: "italic",
        color: "#1c77c3"
    },
    modalContent: {
        textAlign: "center",
        marginTop: "60px"
    }
})

function Top() {
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
        <AnimatePresence>
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={pageTransition}
            variants={variants}
            >
        <div className='Top'>
            <Box className={classes.title}>
                <Typography variant="h1" gutterBottom>
                    Portfolio
                </Typography>
                <Typography variant="h4">
                    Riku Adachi's Portfolio Website
                </Typography>
            </Box>
            <Grid container alignItems="center" justify="center" className={classes.menuList}>
                <Grid item md={6}>
                    <Grid items md={12}>
                        <Grid container justify="center">
                            <Grid items md={4}>
                                <Button href="/aboutme" variant="contained" className={classes.menu + " " + classes.menuColor1}>
                                        About Me
                                </Button>
                            </Grid>
                            <Grid items md={2}></Grid>
                            <Grid items md={4}>
                                <Button href="/skillset" variant="contained" className={classes.menu + " " + classes.menuColor2}>
                                        My Skill Set
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid items md={12}>
                        <Grid container justify="center">
                            <Grid items md={4}>
                                <Button href="/works" variant="contained" className={classes.menu + " " + classes.menuColor3}>
                                        My Works
                                </Button>
                            </Grid>
                            <Grid items md={2}></Grid>
                            <Grid items md={4}>
                                <Button variant="contained" className={classes.menu + " " + classes.menuColor4} onClick={handleOpen}>
                                        Contact
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Modal 
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle}>
                    <Typography variant="h3" className={classes.modalTitle}>Contact</Typography>
                    <Typography className={classes.modalContent}>何かありましたら以下のメールアドレスからご連絡ください</Typography>
                    <Typography className={classes.modalContent}>riku.324.adachi@gmail.com</Typography>
                </div>
            </Modal>
        </div>
        </motion.div>
        </AnimatePresence>
    )
}

export default Top;