import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  contentWrapper: {
    // background: "rgba(0,0,0,0.4)",
    // borderRadius: 16,
    // backdropFilter: "blur(10px)",
    // boxShadow: "0px 2px 10px 5px rgba(0,0,0,0.4)",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px !important",
      position: "relative !important",
      top: "auto !important",
      left: "auto !important",
      marginTop: "0px !important",
    },
  },
  position: {
    color: theme.palette.primary.main,
    fontWeight: 800,
    fontFamily: theme.fonts[0],
  },
  content: {
    width: "275px",
    display: "grid",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr !important",
      gridTemplateRows: "1fr 1fr !important",
      "& img": {
        maxHeight: 100,
      },
    },
  },
  description: {
    fontWeight: 400,
  },
}));

interface Props {
  x?: number;
  y?: number;
  image?: string;
  rank?: string | number;
  position?: string;
  description?: string;
  style?: React.CSSProperties | undefined;
  className?: string;
  imageDirection?: "left" | "right";
  imageTransform?: string;
}

const RoadmapContent: React.FC<Props> = ({
  x,
  y,
  style,
  image,
  rank,
  position,
  description,
  className,
  imageDirection = "left",
  imageTransform = "",
}) => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        position: "absolute",
        top: `${y}%`,
        left: `${x}%`,
        ...style,
      }}
      className={clsx(classes.contentWrapper, className)}
    >
      <div
        className={classes.content}
        style={{ gridTemplateColumns: imageDirection === "right" ? "1fr 80px" : "80px 1fr" }}
      >
        {imageDirection === "left" && (
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain", transform: imageTransform }}
          />
        )}
        <div>
          <Typography variant="h4" align="center">
            {rank}
          </Typography>
          <Typography variant="h4" className={classes.position} align="center">
            {position}
          </Typography>
          <Typography className={classes.description} align="center">
            {description}
          </Typography>
        </div>
        {imageDirection === "right" && (
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain", transform: imageTransform }}
          />
        )}
      </div>
    </div>
  );
};

export default RoadmapContent;
