import { MathJax } from "better-react-mathjax"
import { useState } from "react"
import { usePageContext } from "../hooks/usePageContext"

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditFormulaPageBlock from "./EditFormulaPageBlock";

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

const FormulaPageBlock = (props) =>{
    // modal state controls
    const [open, setOpen] = useState(false)
    const handleEditClick = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const {dispatchPage} = usePageContext()
    const handleDeleteClick= async() =>{
        dispatchPage({type: 'DELETE_PAGE_FORMULA',payload: formula})
    }    
    const handleTitleClick= async() =>{
        formula.showTitle = !title // For later retrieval
        setTitle(!title)
    }

    const [title, setTitle] = useState(true)
    
    const formula = props.formula

    if(props.edit){
    return (
        <div 
            className="FormulaPageBlock"
            id="section-to-print"
            >
            { title && <h4>{formula.name}</h4>}
            <p>
            <MathJax hideUntilTypeset={"every"}
                inline
                dynamic 
            >
                {formula.formula}
            </MathJax>
            </p>
            <span id="no-print" className="material-symbols-rounded span-buttons" onClick={handleDeleteClick}>delete</span> 
            <span id="no-print" className="material-symbols-rounded span-buttons" onClick={handleTitleClick}>Title</span> 
            <span id="no-print" className="material-symbols-rounded span-buttons" onClick={handleEditClick}>edit</span> 

            {/* Edit modal */}
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                <EditFormulaPageBlock id={formula.id} />
                </Box>
            </Modal>
        </div>
    )
}else{
    return(
        <MathJax>
        <div className="FormulaPageBlock">
            { title && <h4>{formula.name}</h4>}
            <p> 
            <MathJax hideUntilTypeset={"every"}
                inline
                dynamic 
            >
                {formula.formula}
            </MathJax></p>
        </div>
        </MathJax>
    )
}
}

export default FormulaPageBlock