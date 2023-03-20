import React from 'react'
import { Container, Button } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate()
  const handleClick = (e) =>{
    e.preventDefault()
    navigate('../home')
  }
  const appTitle = "Formula Factory"
  return (
    <Container>
      <h1>{appTitle}</h1>
      <h3>Are you tired of spending hours formatting and typesetting your math documents by hand? Our app makes it easy to create professional-quality documents in a fraction of the time. With our search-by-formula and drag-and-drop components, you can quickly and easily add equations, figures, and other elements to your documents. Plus, our watermark-free printing option allows you to create polished final versions for presentations or submissions.</h3>

      <Button variant="contained" color="secondary" onClick={handleClick}>Get Started!</Button>

      <h2>{appTitle}: A new way of working with math!</h2>
      <p>
      Introducing {appTitle}, the ultimate online formula editor for students and professionals. With our easy-to-use drag-and-drop interface, you can quickly create and edit math formulas on your desktop or mobile device. But that's not all - our app also features a searchable database of formulas and the ability to print or save your formulas as a PDF for easy reference. Whether you're looking to create cheat sheets for your exams or just need a handy tool for formatting math equations, FormulaFlick has you covered. Try it today and discover how easy math can be.
      </p>
      <p>
      Introducing {appTitle} - the ultimate math page formatting solution for students and professionals! Our innovative platform combines a searchable formula database, drag-and-drop formula editor, and mobile compatibility, all in one easy-to-use interface.
      </p>
      <p>
      With {appTitle}, you can quickly and easily create math pages and cheat sheets that are tailored to your specific needs. Our intuitive drag-and-drop editor allows you to easily add and manipulate complex math formulas, making it perfect for students, educators, and professionals alike.
      </p>
      <p>
      Our platform also includes a searchable formula database, so you can quickly find and insert the formulas you need, without having to look them up online or in a textbook. And with our mobile compatibility, you can create and edit math pages on the go, from any device.
      </p>
      <p>
      Finally, {appTitle} allows you to easily print or export your math pages as PDFs, so you can have them on hand whenever you need them.So why wait? Try {appTitle} today and discover the ultimate math page formatting solution!
      </p>
      <h3>Disclaimer:</h3>
      <p>{appTitle} is still under development, it is in alpha-testing level of functionality, meaning that the user experience is not yet perfect, and that some features are not yet implemented.</p> <h3>More information: <Link to="/faq">FAQ</Link></h3>
      </Container>
  )
}

export default Landing