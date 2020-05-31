import React from 'react';
import {Box, Typography, Grid, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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

const backVariants = {
    exit: { x: "100vh", opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0, ...transition } }
};

const useStyles = makeStyles({
    root: {
        height: "100vh",
        alignContent: "center",
    },
    title: {
        paddingTop: "6vh",
        color: '#1C77C3',
        fontStyle: 'italic',
    },
    content: {
        margin: "100px auto 100px",
        height: "50vh",
        width: "60vw",
        borderRadius: "20px",
    },
    text: {
        textAlign: "left",
        color: "#28273c"
    }

})

function AboutMe() {
    const classes = useStyles();
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition}
                variants={variants}
                >
            <div className={classes.root}>
                <Box className={classes.title}>
                    <Typography variant="h3" gutterBottom>
                        About Me
                    </Typography>
                </Box>
                <Box className={classes.content}>
                    <Grid container>
                        <Grid md={6}>
                            <img src="/myPhoto.jpg" alt="my photo" width="250px" />
                        </Grid>
                        <Grid md={6}>
                            <Typography className={classes.text}>大学2年生のRiku Adachiです。</Typography>
                            <Typography className={classes.text}>東京大学教養学部文科二類に属しています。</Typography>
                            <br />
                            <Typography className={classes.text}>大学では運動会水泳部に所属していて、週6日で朝練しています。専門は個人メドレーと背泳ぎです。</Typography>
                            <br />
                            <Typography className={classes.text}>趣味は競技プログラミングです。（AtCoder: 727）</Typography>
                            <br />
                            <Typography className={classes.text}>もともとパソコンを触るのが好きで、大学に入ってからPythonを勉強し始めたのがプログラミングを始めたきっかけです。</Typography>
                            <Typography className={classes.text}>そして、プログラミングで何かを作るということに興味が湧き、スクールに通ってRuby on Railsを学びました。</Typography>
                            <br />
                            <Typography className={classes.text}>実務は未経験ですが、この先も新しいものを学び続けたいと思っています。</Typography>
                        </Grid>

                    </Grid>
                </Box>
                <motion.div variants={backVariants}>
                    <Button href="/">Back to Top</Button>
                </motion.div>
            </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AboutMe