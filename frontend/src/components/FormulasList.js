import FormulaDisplayBlock from "../components/FormulaDisplayBlock"
import { useFormulasContext } from "../hooks/useFormulasContext"
import {TextField, Select, MenuItem } from "@mui/material"
import {useState } from "react"

const FormulasList = () =>{
    const {formulas} = useFormulasContext()
    const [searchBy , setSearchBy] = useState(0)
    const [filteredSearch, setFilteredSearch] = useState([])

    const handleSearchByChange = (e) => {
        setSearchBy(e.target.value)
        // ToDo: should search again based on new seachBy value
    }
    
    const handleSearchChange = (e) => {
        const searchTerm= e.target.value
        let filteredSearchResults = formulas.filter(formula =>{
            const regex = new RegExp(`^${searchTerm}`, 'i') // i is case insensitive... not sure if I want it that way or not?
            switch(searchBy){
                // name
                case 0 : return regex.test(formula.name)
                // formula -  using includes because regex wasn't working.
                case 1 : return formula.formula.includes(searchTerm)
                // tag
                case 2 : let inTags=false; formula.tags && formula.tags.forEach(tag => {
                    if(regex.test(tag)){inTags=true}
                })
                return inTags
                default : return false
            }
        })

        setFilteredSearch(filteredSearchResults)
    }

    return (
        <div>
        <TextField onChange={handleSearchChange} type="text" label="Search" sx={{width:"60%"}} autoComplete="off"></TextField>
        <Select
            id="search-formulas"
            label="Search by:"
            value={searchBy}
            onChange={handleSearchByChange}
        >
            {/* 3 ways to search */}
            <MenuItem value={0}>Name</MenuItem>
            <MenuItem value={1}>Formula</MenuItem>
            <MenuItem value={2}>Tag</MenuItem>
        </Select>
        <div className="FormulasList">
        <div className="Formulas">
                {filteredSearch && filteredSearch.map((formula)=>(
                    <FormulaDisplayBlock key={formula.id} formula={formula}/>
                ))}
        </div>
        </div>
        </div>
        
    )
}

export default FormulasList