import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";

import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const ToggleValueGroup = () => {
  const [value, setValue] = React.useState("a");

  const handleChange = (_event, newAlignment) => {
    setValue(newAlignment);
  };
  return (
    <ToggleButtonGroup value={value} exclusive={true} onChange={handleChange}>
      {["a", "b", "c", "d"].map((v) => (
        <ToggleButton value={v} key={v}>
          {v}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const ToggleValueGroupCustom = () => {
  const [value, setValue] = React.useState("a");

  const handleChange = (_event, newAlignment) => {
    setValue(newAlignment);
  };
  return (
    <ToggleButtonGroup
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        gridGap: "50px",
        padding: "10px",
      }}
      value={value}
      exclusive={true}
      onChange={handleChange}
    >
      {["a", "b", "c", "d"].map((v) => (
        <ToggleButton sx={{
          boxShadow:'1px 1px 10px 1px #d4d4d4'
        }} value={v} key={v}>
          {v}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleValueGroup;

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Custom style for Toggle Button Group
        </Typography>
        <ProTip />
        <section>
          <h2>Default ToggleButtonGroup</h2>
          <ToggleValueGroup />
        </section>
        <section>
          <h2>Custom style ToggleButtonGroup</h2>
          <ToggleValueGroupCustom />
        </section>
      </Box>
    </Container>
  );
}
