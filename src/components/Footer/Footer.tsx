/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { CSSProperties } from "react";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "src/assets/logos/logo.png";
import Instagram from "src/assets/images/icons/instagram.png";
import Twitter from "src/assets/images/icons/twitter.png";
import Opensea from "src/assets/images/icons/opensea.png";
import { INSTAGRAM, TWITTER } from "src/config/constants";
import BusinessIcon from "@mui/icons-material/Business";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    // maxHeight: 1920,
    // background: "radial-gradient(ellipse at 50% 130%, rgba(50, 0, 26, 0.5) 15%, rgba(2, 0, 36, 0.5) 100%)",
    backgroundAttachment: "fixed",
    // background: "radial-gradient(ellipse at 50% 100%, rgba(50,0,26,1) 29%, rgba(2,0,36,1) 100%)",
  },
  socialsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: 300,
    margin: "auto",
    marginTop: "10%",
    "& a:hover": {
      transform: "scale(1.1)",
    },
  },
  canvas: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    zIndex: -1,
    opacity: 0.7,
  },
}));

interface Props {
  style?: CSSProperties;
  id?: string;
}

const Footer: React.FC<Props> = ({ style, id }) => {
  const classes = useStyles();
  const ref = React.useRef<HTMLCanvasElement>(null);

  const startAnimate = React.useCallback(() => {
    if (!ref.current) return;
    let c = ref.current;
    var ctx = c.getContext("2d");
    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    var matrix: string | string[] =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops: number[] = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++) drops[x] = 1;
    //drawing the characters
    function draw() {
      if (!ctx) return;
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#f4427d"; //green text
      ctx.font = font_size + "px arial";
      //looping over drops
      for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
      }
    }
    return draw;
  }, [ref]);

  React.useEffect(() => {
    let draw = startAnimate();
    let int = setInterval(draw!, 35);
    return () => {
      clearInterval(int);
    };
  }, [startAnimate]);

  return (
    <div className={classes.root} style={style} id={id}>
      <canvas ref={ref} className={classes.canvas}></canvas>
      <div className="center" style={{ height: "100%", pointerEvents: "all" }}>
        <div style={{ width: "100%" }}>
          <div className="center">
            <img src={logo} alt="Kaito" />
          </div>
          <div className={classes.socialsContainer}>
            {/* <a href="#" target="_blank">
              <img src={Facebook} alt="facebook" />
            </a> */}
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <img src={Instagram} alt="instagram" />
            </a>
            <a href={TWITTER} target="_blank" rel="noreferrer">
              <img src={Twitter} alt="twitter" />
            </a>
            {/* <a href="#" target="_blank" rel="noreferrer">
              <img src={Youtube} alt="youtube" />
            </a> */}
            <a href="#" target="_blank" rel="noreferrer">
              <img src={Opensea} alt="opensea" />
            </a>
          </div>
          <Typography color="secondary" align="center" style={{ marginTop: 50 }}>
            © Project Kaito 2022 | All Rights Reserved
          </Typography>
          <Typography color="secondary" align="center" style={{ marginTop: 5 }}>
            <BusinessIcon fontSize="small" style={{ transform: "translate(-5px,3px)" }} /> 584 Castro Street #3041 San
            Francisco, CA 94114
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
