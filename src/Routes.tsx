import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "src/pages/Home/Home";
import Navbar from "src/components/Navbar/Navbar";
import NotFound from "src/pages/NotFound/NotFound";
import { makeStyles } from "@mui/styles";
// import backgroundImage from "src/assets/images/gif.webm";
// import backgroundImage from "src/assets/images/bg.gif";
import { Theme } from "@mui/material";
import Animation from "src/assets/images/gif.webm";
import AudioBG from "./components/AudioBG/AudioBG";

const useStyle = makeStyles((theme: Theme) => ({
  mainContainer: {
    //  display: "grid", gridTemplateRows: "min-content 1fr min-content"
    // height: "500vh",

    position: "relative",

    // "&:before": {
    //   content: '""',
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   height: "100%",
    //   width: "100%",
    //   background: "rgb(30 0 33 / 61%)",

    // },
  },
  img: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    // background: `url(${backgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPositionY: "bottom",
    position: "absolute",
    zIndex: -2,
    [theme.breakpoints.down("lg")]: {
      backgroundPositionX: "71%",
    },
  },
  vid: {
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
    objectPosition: "70%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  },
}));

interface Props {}

const Routes: React.FC<Props> = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const classes = useStyle();

  const [scrollPosition, setScrollposition] = React.useState(0);

  React.useEffect(() => {
    function updatePosition() {
      setScrollposition(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div className={classes.mainContainer} style={{}}>
      {/* <div className={classes.img}></div> */}
      <video ref={videoRef} autoPlay={true} loop={true} src={Animation} muted className={classes.vid} />
      <AudioBG />
      <Switch>
        <Route
          path="/"
          element={
            <>
              <div
                style={{
                  background: scrollPosition <= 50 ? "" : "#00000085",
                  // background: scrollPosition <= 10 ? "" :  scrollPosition > 10 ? "" : "#00000085",
                  transition: "background 0.5s ease-out",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                }}
              ></div>
              <div style={{ height: "calc(50vh - 70px)" }} />
              <Navbar />
              <div style={{ height: "calc(50vh - 70px)" }} />
              <Home />
            </>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default Routes;
