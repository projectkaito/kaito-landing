import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RoadmapComp from "./RoadmapComp";
import roadmapData from "./roadmapData";

const useStyles = makeStyles((theme: Theme) => ({
  roadmapHeading: {
    fontFamily: theme.fonts[0],
    marginTop: 30,
  },
}));
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <span
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ width: "100%" }}
      {...other}
    >
      <Box sx={{ width: "100%", display: value === index ? "initial" : "none" }}>{children}</Box>
    </span>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function RoadmapTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(1);
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <AppBar
        elevation={0}
        position="static"
        style={{
          width: "100%",
          background: "#ff000000",
          maxWidth: "500px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Charity" {...a11yProps(0)} />
          <Tab label="Anime Series" {...a11yProps(1)} />
          <Tab label="Token" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        {/* <Typography color="primary" variant="h2" align="center" className={classes.roadmapHeading}>
          CharityRoadmap
        </Typography> */}
        <RoadmapComp bg={roadmapData.charity.bg} data={roadmapData.charity.data} />
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        {/* <Typography color="primary" variant="h2" align="center" className={classes.roadmapHeading}>
          Anime Series Roadmap
        </Typography> */}
        <RoadmapComp bg={roadmapData.anime.bg} data={roadmapData.anime.data} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <RoadmapComp bg={roadmapData.token.bg} data={roadmapData.token.data} />
        {/* <Typography color="primary" variant="h2" align="center" className={classes.roadmapHeading}>
          TokenRoadmap
        </Typography> */}
        {/* <RoadmapToken /> */}
      </TabPanel>
      {/* </SwipeableViews> */}
    </Box>
  );
}
