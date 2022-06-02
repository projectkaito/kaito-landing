import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import AudioBg from "src/assets/audio/bg.mp3";
import ReactAudioPlayer from "react-audio-player";

// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "react-jinke-music-player/assets/index.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    top: 10,
    left: 10,
    display: "flex",
    alignItems: "flex-end",
    height: 50,
    gap: 5,
  },
  bar: {
    width: 5,
    height: 40,
    background: "red",
    borderTopLeftRadius: 360,
    borderTopRightRadius: 360,
    animation: "$move 1s infinite ease-in-out alternate",
  },
  "@keyframes move": {
    from: {
      height: 5,
    },
    to: {
      height: 40,
    },
  },
}));

interface Props {}

const options = {};

const AudioBG: React.FC<Props> = () => {
  const classes = useStyles();
  const ref = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    // var audio = new Audio(AudioBg);
    // audio.play();
    ref?.current?.play();
    window.addEventListener("scroll", () => ref?.current?.play());
  }, [ref]);

  return (
    <>
      {/* <ReactJkMusicPlayer {...options} /> */}
      <ReactAudioPlayer src={AudioBg} autoPlay={true} controls={false} />
      <audio ref={ref} autoPlay loop src={AudioBg} />
      <div className={classes.root}>
        {/* <div className={classes.bar}></div>
      <div className={classes.bar} style={{ animationDelay: "1", animationDuration: "1" }}></div>
      <div className={classes.bar} style={{ animationDelay: "0.5", animationDuration: "0.5" }}></div>
      <div className={classes.bar} style={{ animationDelay: "0.4", animationDuration: "0.7" }}></div>
    <div className={classes.bar} style={{ animationDelay: "0.7" }}></div> */}
      </div>
    </>
  );
};

export default AudioBG;
