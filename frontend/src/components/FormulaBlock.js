const FormulaBlock = ({ formula }) =>{
    // console.log(formula)
    return (
        <div className="FormulaBlock">
            <h4>{formula.name}</h4>
            <p> {formula.formula}</p>
            <p>{formula.tags ? "Tags: "+ formula.tags.toString() : ""}</p>
            <p>{new Date(formula.createdAt).toDateString()}</p>
        </div>
    )
}

export default FormulaBlock