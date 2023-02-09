# Not sure if I need this anymore saving incase I want it for something

    // temporary testing
    let test1 =  {
            name : "inline",
            formula : String.raw`$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$`
        }
    let test2 = {
            name : "display",
            formula : String.raw`$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$`
        }
    let test3 =   {
            name : "Invisible paranthesis",
            formula : String.raw`$$\left.x^2\right\rvert_3^5 = 5^2-3^2$$`
        }

        <MathJax>
        <div className="home">
            <h2>Home</h2>
            <h3>Test 1</h3>
            <p>{test1.name +" "+ test1.formula}</p>
            <h3>{test2.name + test2.formula}</h3>
            <h3>{test3.name + test3.formula}</h3>
        </div>
        </MathJax>