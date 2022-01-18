import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { css, cx } from "@emotion/css";

import { HandleAbility } from "./HandleAbility";
import { HandlePokemonStat } from "./HandlePokemonStat";
import { HandleMoves } from "./HandleMoves";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs(data) {
  const [datamaster, setDatamaster] = React.useState(data.data);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className={css`
        align-items: center;

        background-color: #ffbf5e;
        border-radius: 12px;
        width: -webkit-fill-available;
      `}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          className={css`
          display: flex;
          justify-content: center;
          font-size: 12px;
        `}
          onChange={handleChange}
          aria-label="simple tabs example"
          
          
       
        >
          <Tab  label="Pokemon Ability" {...a11yProps(0)} />
          <Tab label="Pokemon Move" {...a11yProps(1)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container>
          {data !== "" ? <HandleAbility data={datamaster.abilities} /> : ""}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <HandleMoves data={datamaster.moves} />
        </Grid>
      </TabPanel>
     
    </div>
  );
}
