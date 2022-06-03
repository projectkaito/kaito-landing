import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
// import AudioBg from "src/assets/audio/bg.mp3";
import AudioBg from "src/assets/audio/audio.mp3";
import Silence from "src/assets/audio/silence.mp3";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import RecordImg from "src/assets/images/record.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import clsx from "clsx";

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
  record: {
    width: 50,
    position: "relative",
    borderRadius: "360px",
    "&:before": {
      width: 50,
      height: 50,
      zIndex: -1,
      content: '""',
      borderRadius: 360,
      position: "absolute",
      top: 0,
      left: 0,
      background: "rgba(211,22,94,0.2)",
    },
  },
  recordContainer: {
    position: "fixed",
    bottom: 20,
    left: 20,
    zIndex: 5,
  },
  rotate: {
    animation: "$rotate 2s infinite linear",

    "&:before": {
      animation: "$grow 1.2s infinite ease-in-out",
    },
  },
  "@keyframes grow": {
    from: {
      transform: "scale(1)",
      background: "rgba(211,22,94,0.8)",
    },
    to: {
      transform: "scale(1.8)",
      background: "rgba(211,22,94,0)",

      // transform: "rotate(360deg)",
    },
  },
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  icon: {
    color: theme.palette.primary.main,
    position: "absolute",
    top: -8,
    right: -13,
    cursor: "pointer",
  },
}));

interface Props {}
const url = "https://www.youtube.com/watch?v=1DkDrVEK2rc";

const AudioBG: React.FC<Props> = () => {
  const classes = useStyles();
  const ref = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    ref.current?.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    ref.current?.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <div className={classes.recordContainer}>
        <div className={clsx(classes.record, isPlaying && classes.rotate)}>
          <img src={RecordImg} width="100%" height="100%" style={{ borderRadius: 360 }} />
        </div>
        {/* <PlayCircleFilledIcon className={classes.icon} fontSize="large" /> */}
        {isPlaying ? (
          <PauseIcon onClick={handlePause} fontSize="large" className={classes.icon} />
        ) : (
          <PlayArrowIcon onClick={handlePlay} fontSize="large" className={classes.icon} />
        )}
      </div>
      <audio style={{ display: "none" }} src={AudioBg} loop ref={ref} />
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
