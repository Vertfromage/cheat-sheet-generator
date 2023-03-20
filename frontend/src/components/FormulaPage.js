import { Button } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import FormulaPageBlock from "./FormulaPageBlock";

// context
import { useUserContext } from "../hooks/useUserContext"
import { usePageContext } from "../hooks/usePageContext";
//Stylesheets for react-grid-layout 
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Container } from "@mui/system";
import SavePage from "./SavePage";


// Style for modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px'
}


const FormulasPage = () =>{
    const {formulas} = usePageContext()
    // console.log(formulas)
 
    const [edit, setEdit] = useState(true)
    const [lastClickedDiv, setLastClickedDiv] = useState('')
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const {user} = useUserContext()
    const [paid, setPaid] = useState(false)
   // const [layouts, setLayouts] = useState({})

   // Can make a different printing experience depending if they pay - 
   // need to add button to pay and save user state 

    const handleEditButtonClick = (e) => {
        e.preventDefault()
        setEdit(!edit)
    }

    const handlePrintButtonClick = (e) => {
      e.preventDefault()
      window.print()
  }

  const handlePayClick = (e) =>{
    e.preventDefault()
    setPaid(!paid)
  }

  const handleSaveButtonClick = (e) =>{
    e.preventDefault()
    setOpen(true)
  }

    const onLayoutChange=(layout, layouts)=> {
      
      try{
        if(lastClickedDiv){
          //https://lodash.com/docs/4.17.15#pick
          let updateGridObj = _.pick(layout.find(x=>x.i === lastClickedDiv), ['w','h','x','y','i'])
          formulas.find(x => x.id === lastClickedDiv).gridObj = updateGridObj
        }
        
      }catch{
        console.log("Missing gridObj")
      }
      
    }

    const handleLastClick = (e) =>{
      try{
        let val = e.currentTarget.id
        setLastClickedDiv(val)
    }catch{
      console.log("oops")
    }
  }

  
      
    
    return (
     <div id="'responsiveGridLayout'">
      <div id="only-on-print">
        {
          // To show depending on if payment was received
          paid ? true : <div><img src={require('../media/img/leap.png')}></img><div className="footer">Made with FormulaFactory.com</div><div className="header">Made with FormulaFactory.com</div></div>
        }
        
      </div>
      <div id="no-print">
     <Button variant="outlined" onClick={handleEditButtonClick}>Edit {edit ? 'OFF': 'ON'}</Button>
     <Button variant="outlined" onClick={handlePrintButtonClick}>Print</Button>
     <Button variant="outlined" onClick={handleSaveButtonClick} >Save</Button>
     <Button variant="outlined" onClick={handlePayClick} >{paid? "No Pay": "Pay"}</Button>
     </div>
      <ResponsiveGridLayout
        className="layout"
        // layout={layout}
        rowHeight={30}
        width={window.innerWidth*.95 || document.documentElement.clientWidth*.95}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onLayoutChange={(layout, layouts) =>
          onLayoutChange(layout, layouts)
        }
      >
      {/* data-grid tells the react-grid where each div goes */}
        {formulas && formulas.map((formula)=>(
                    <div id={formula.id} onClick={handleLastClick} key={formula.id} data-grid={formula.gridObj} >{<FormulaPageBlock key={formula.id} formula={formula} edit={edit}/>}</div>
                ))}
      </ResponsiveGridLayout>

      {/* Save modal */}
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                  <SavePage/>                  
                </Box>
            </Modal>
      </div> 
    )
  }

  export default FormulasPage
