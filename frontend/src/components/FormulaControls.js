import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import FormulaForm from "./FormulaForm";
import FormulasList from "./FormulasList";

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
          <div>
          <p>Add your MathJax math inside $...$ or \(...\) for inline and $$...$$ or \[...\]for block.</p><p>If you want a set of formulas then for a newline use \\</p><p>Here is a good <a href='https://matheducators.meta.stackexchange.com/questions/93/mathjax-basic-tutorial-and-quick-reference' target="_blank"  rel="noreferrer">MathJax quick start guide</a>   </p>
        <p>Fun Tool to find symbols:<a href="http://detexify.kirelabs.org/classify.html"target="_blank"  rel="noreferrer">Detexify</a></p>
          </div>
        
        </TabPanel>
    </Box>
  )
}