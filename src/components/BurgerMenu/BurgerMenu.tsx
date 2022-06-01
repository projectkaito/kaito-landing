import React from "react";
import { Theme, List, ListItem, useTheme, Drawer, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Burger from "react-css-burger";
import clsx from "clsx";
import { scrollIntoView } from "src/utils";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  burgerContainer: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    justifyContent: "flex-end",
    paddingRight: 20,
    zIndex: 999999,
  },
  link: {
    color: "white",
    // borderBottom: `1px solid rgba(255,255,255,0.2)`,
  },
  text: {
    fontSize: "2rem",
    letterSpacing: 2,
    fontFamily: theme.fonts[0],
  },
}));

interface Props {
  links: string[][];
}

type Anchor = "top" | "left" | "bottom" | "right";

const BurgerMenu: React.FC<Props> = ({ links }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent | undefined | {}) => {
      setState({ ...state, [anchor]: open });
    };

  const handleLinkClick = async (id: string) => {
    toggleDrawer("top", false)(undefined);
    scrollIntoView(id);
  };

  return (
    <div className={classes.root}>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        PaperProps={{
          style: { width: "100%", minHeight: "100vh", background: "rgba(14,4,28,0.2)", backdropFilter: "blur(10px)" },
        }}

        // sx={{ width:  'auto' }}
        // role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        {/* <IconButton color="primary" style={{ background: "red" }}> */}
        {/* </IconButton> */}
        <div className={classes.burgerContainer}>
          <Burger
            onClick={toggleDrawer("top", false)}
            active={state.top}
            burger="slider"
            color={theme.palette.primary.main}
            hoverOpacity={0.8}
            scale={1.2}
          />
        </div>
        <div className="center" style={{ height: "90vh" }}>
          <List>
            {links.map(([name, path]) => (
              <ListItem button key={path} onClick={() => handleLinkClick(path)} className={classes.link}>
                <ListItemText disableTypography className={clsx("center", classes.text)} primary={name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className={classes.burgerContainer}>
        <Burger
          onClick={toggleDrawer("top", true)}
          active={state.top}
          burger="slider"
          color={theme.palette.primary.main}
          hoverOpacity={0.8}
          scale={1.2}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
