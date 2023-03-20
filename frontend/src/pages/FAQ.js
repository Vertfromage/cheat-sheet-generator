import { Container } from '@mui/system';
import React from 'react';


const FAQ = () => {
  return (
    <Container>
     <h2>⭐ FAQ ⭐</h2>
     <h3>⭐ How do I make sure the forumulas I add are formatted correctly? ⭐</h3>
     <p>You can either search for a formula already in the database and drag it onto your page, or you can add a formula using the form, if you use the form. To make sure it's formatted correctly you can add your MathJax math inside $...$ for inline or $$...$$ for block, alternatively you can also use \(...\) for inline and \[...\] for block. Here is a good <a href='https://matheducators.meta.stackexchange.com/questions/93/mathjax-basic-tutorial-and-quick-reference' target="_blank">MathJax quick start guide</a> </p>
     <h3>⭐ What can I do with this app? ⭐</h3>
     <b><p>You can:</p></b>
      <ol>
        <li>Use on mobile or desktop.</li>
        <li>Add formulas to database using form.</li>
        <li>Drag formulas onto your page.</li>
        <li>Move formula blocks around on your page</li>
        <li>Adjust how much space a formula takes up on your page.</li>
        <li>Edit formulas on page without changing base formula in database.</li>
        <li>Print a copy or print to PDF using built in browser tools.</li>
        <li>Search formulas by name, formula and tag</li>
        <li>User Accounts</li>
        <li>Saving pages to database by user.</li>
      </ol>
     
     <h3>⭐ What features are you still working on? ⭐</h3>
     <ol>
        <li>Share pages</li>
        <li>Collaborate</li>
        <li>Community verification of formulas </li>
        <li>Input formula with button style keyboard</li>
        <li>Include correctly formatted code blocks</li>
        <li>Include figures and charts</li>
        <li>Headings</li>
        <li>Fonts, styling</li>
        <li>Export to different formats</li>
        <li>Math keyboard buttons, for users that don't want to use MathJax directly</li>
        <li>Open Formula Page as flashcard stack</li>
        <li>Making it profitable: freemium business model</li>
      </ol>
      <h3>⭐ Bugs ⭐</h3>
      <h4>I found a bug what should I do?</h4>
      <p>Tell me. I'm happy to add more bugs to my bug list.</p>
      <h4>When I try to print content is cut off?</h4>
      <p>This happened to me once, I had zoomed into 200 in the print options by accident.</p>
      <h3>Suggestions</h3>
      <p>Yes please.</p>
    </Container>
  )
}

export default FAQ