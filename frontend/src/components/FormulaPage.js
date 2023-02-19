import { Button } from "@mui/material";
import FormulaPageBlock from "./FormulaPageBlock"
import { useState, useEffect } from "react"
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import _ from "lodash";

//Stylesheets for react-grid-layout 
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"
import { usePageContext } from "../hooks/usePageContext";

const FormulasPage = () =>{
    const {formulas, dispatchPage} = usePageContext()
 
    const [edit, setEdit] = useState(true)
    const [lastClickedDiv, setLastClickedDiv] = useState('')
   // const [layouts, setLayouts] = useState({})

    const handleButtonClick = (e) => {
        e.preventDefault()
        setEdit(!edit)
    }

    const onLayoutChange=(layout, layouts)=> {
      console.log(lastClickedDiv)
      console.log(layout)
      
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
     <div>
     <Button variant="outlined" onClick={handleButtonClick}>Edit {edit ? 'OFF': 'ON'}</Button>
      <ResponsiveGridLayout
        className="layout"
        // layout={layout}
        rowHeight={30}
        width={window.innerWidth || document.documentElement.clientWidth}
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
      </div> 
    )
  }

  export default FormulasPage
