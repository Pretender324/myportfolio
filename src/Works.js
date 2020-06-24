import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Box, Typography, Grid, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import Product from './Product';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
    visible: { 
        opacity: 1,
        y: "0vh"
     },
    hidden: { opacity: 0, y: "100vh" },
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
        marginTop: "80px"
    }
})

export default function Works() {
    const classes = useStyles();

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div 
                initial="hidden"
                animate="visible"
                transition={transition}
                variants={variants}
            >
                <div className={classes.root}>
                <Box className={classes.title}>
                    <Typography variant="h3" gutterBottom>
                        My Works
                    </Typography>
                </Box>
                <Box className={classes.content}>
                    <Grid container justify="center">
                        <Grid md={6}>
                            <Product
                                image="portfolio.png" 
                                title="Portfolio"
                                content="このポートフォリオです。"
                                languages={['HTML&CSS', "React"]}
                                contentDetailed="自分自身の紹介のために作成したポートフォリオサイトです。Reactの勉強も兼ねて作成いたしました。デザインには主にMaterial-UIを用いています。"
                                siteLink="https://portfolio-795a2.firebaseapp.com/"
                                gitHubLink="https://github.com/Pretender324/myportfolio"
                                />
                            <Product
                                image="howtoteach.png" 
                                title="How to Teach"
                                content="塾講師のための情報共有サイトです。"
                                languages={['HTML&CSS', "Ruby on Rails", "Heroku"]}
                                contentDetailed="プログラミングスクールで作成したオリジナルプロダクトです。投稿機能・ログイン機能・いいね機能などを実装しています。新米塾講師・家庭教師の参考になるような、先輩講師の経験談が投稿されているサイトです。（詳しくはリンクをクリック！）"
                                siteLink="https://helpforteachers.herokuapp.com/"
                                gitHubLink="https://github.com/Pretender324/HOW_TO_TEACH"
                                />
                            <Product
                                image="howtoteach.png" 
                                title="Swistory (未デプロイ)"
                                content="水泳大会の記録を投稿するサイトです。"
                                languages={['HTML&CSS', "Ruby on Rails", "JavaScript", "jQuery"]}
                                contentDetailed="独自で作ったプロダクトです。投稿機能・ログイン機能のほか、記録の推移を閲覧できる機能なども実装しています。"
                                siteLink=""
                                gitHubLink="https://github.com/Pretender324/swistory"
                                />
                        </Grid>
                    </Grid>
                </Box>
                <Button href="/">Back to Top</Button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}