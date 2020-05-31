import React from 'react';
import {Box, Typography, Grid, Button, Paper, Tabs, Tab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {AnimatePresence, motion} from 'framer-motion';
import Language from './Language';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
    visible: { 
        opacity: 1,
        y: "0vh"
     },
    hidden: { opacity: 0, y: "100vh" }
};

const skillVariants = {
    visible: {
        opacity: 1,
        x: "0vw",
    },
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    exit: {
        opacity: 0,
        x: "-100vw"
    }
}

const useStyles = makeStyles({
    root: {
        height: "100vh",
        alignContent: "center",
    },
    title: {
        paddingTop: "6vh",
        color: '#1C77C3',
        fontStyle: 'italic',
        marginBottom: "100px",
    },
    skillList: {
        marginTop: "40px",
        marginBottom: "40px"
    }
})

export default function SkillSet() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

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
                    My Skill Set
                </Typography>
            </Box>
            <Grid container alignItems="center" justify="center">
                <Grid md={8}>
                    <Paper>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Front-end" />
                            <Tab label="Back-end" />
                            <Tab label="Others" />
                        </Tabs>
                    </Paper>
                    <Box>
                        {() => {if (value===0) {
                            return (
                                <Grid container justify="center" spacing={5} className={classes.skillList}>
                                    <Grid item xs={12} md={4}>
                                        <Language 
                                        name="HTML&CSS" 
                                        icon="code" 
                                        backgroundColor="orange"
                                        color="orange"
                                        content="Webアプリケーションのフロントエンド部分のコーディングに使用しました。"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Language 
                                        name="React" 
                                        icon={['fab','react']} 
                                        backgroundColor="royalblue"
                                        color=""
                                        content="モダンなJSに触れてみたいと思い勉強しています。このポートフォリオにもReactを使用しました。"
                                        />
                                    </Grid>
                                </Grid>
                                    )
                        }else if (value===1) {
                            return (
                                <Grid container justify="center" spacing={5} className={classes.skillList}>
                                    <Grid item xs={12} md={4}>
                                        <Language 
                                        name="Ruby(Ruby on Rails)" 
                                        backgroundColor="tomato"
                                        color="orange"
                                        content="プログラミングスクールで触れた言語です。アプリのバックエンド部分に利用しています。"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Language 
                                        name="Python" 
                                        backgroundColor="skyblue"
                                        color=""
                                        content="一番最初に触れたプログラミング言語です。Numpy・Pandasなどのライブラリや、Fraskも少し触れたことがあります。"
                                        />
                                    </Grid>
                                </Grid>
                            )
                        }else{
                            return (
                                <Grid container justify="center" spacing={5} className={classes.skillList}>
                                    <Grid item xs={12} md={4}>
                                        <Language 
                                        name="その他" 
                                        backgroundColor="dimgray"
                                        color="orange"
                                        content="（追加予定）"
                                        />
                                    </Grid>
                                </Grid>
                            )
                        }
                        }}
                    </Box>
                            
                        </Grid>
                    </Grid>
                    <Button href="/">Back to Top</Button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}