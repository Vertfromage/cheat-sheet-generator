import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import FormulasList from "./FormulasList"
import FormulaForm from "./FormulaForm"

function TabPanel(props) {
    const { children, value, index} = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 3 }} display="flex" justifyContent="center">
            {children}
          </Box>
        )}
      </div>
    );
  }

export default function FormulaControls() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Formula List" />
        <Tab label="Add Formula" />
        <Tab label="Info" />
      </Tabs>

      <TabPanel value={value} index={0}>
         <FormulasList/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormulaForm/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Developed by Crystal Parker
        </TabPanel>
    </Box>
  )
}