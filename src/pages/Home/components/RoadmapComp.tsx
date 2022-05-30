import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Theme, Typography } from "@mui/material";
import rocketImage from "src/assets/images/rocketImage.png";
import roadmap from "src/assets/images/roadmap.png";
import boy from "src/assets/images/boy.png";
import crown from "src/assets/images/crown.png";
import music11 from "src/assets/images/music11.png";
import RoadmapContent from "./RoadmapContent";
import roadmapData, { Roadmap } from "./roadmapData";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "94px",
    position: "relative",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    maxWidth: 700,
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      flexFlow: "row",
      overflowY: "auto",
      maxWidth: "100%",
      background: `none`,
      paddingBottom: 120,
    },
  },

  boxesContainer: {
    display: "none",
    position: "absolute",
    bottom: 0,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "flex-end",
      gap: 5,
    },
  },
  boxWrapper: {
    display: "flex",
    flexFlow: "column",
    gap: 5,
  },
  box: {
    width: 50,
    height: 50,
    background: "white",
  },
  img: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

interface Props {
  bg: string;
  data: Roadmap[];
}

const RoadmapComp: React.FC<Props> = ({ bg, data }) => {
  const classes = useStyles();
  console.log(roadmapData);
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <img src={bg} alt="" className={classes.img} style={{ width: "80%", margin: "auto", paddingTop: 150 }} />
        {data.map((item, i) => (
          <RoadmapContent
            key={i}
            position={item.title}
            description={item.description}
            x={item.x}
            y={item.y}
            image={item.image}
            imageDirection={item.imageDirection}
            imageTransform={item.imageTransform}
          />
        ))}
        <div className={classes.boxesContainer}>
          <div className={classes.boxWrapper}>
            <div className={classes.box} />
          </div>
          <div className={classes.boxWrapper}>
            <div className={classes.box} />
          </div>
          <div className={classes.boxWrapper}>
            <div className={classes.box} />
            <div className={classes.box} />
          </div>
          {new Array(data.length - 1).fill(undefined).map((item, i) => (
            <>
              <div className={classes.boxWrapper}>
                <div className={classes.box} />
              </div>
              <div className={classes.boxWrapper}>
                <div className={classes.box} />
              </div>
              <div className={classes.boxWrapper}>
                <div className={classes.box} />
              </div>
              <div className={classes.boxWrapper}>
                <div className={classes.box} />
              </div>
              <div className={classes.boxWrapper}>
                <div className={classes.box} />
                <div className={classes.box} />
              </div>
            </>
          ))}
          <div className={classes.boxWrapper}>
            <div className={classes.box} />
          </div>
          <div className={classes.boxWrapper}>
            <div className={classes.box} />
          </div>
        </div>
        {/* <img src={RoadMapWhole} style={{ marginTop: "215px" }} alt="roadmap" className={classes.roadmapImage} /> */}
      </div>
    </Container>
  );
};

export default RoadmapComp;
