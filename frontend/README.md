# Draggable grid library
https://github.com/react-grid-layout/react-grid-layout
https://react-grid-layout.github.io/react-grid-layout/examples/0-showcase.html
https://isamatov.com/react-grid-layout-tutorial/
https://www.makeuseof.com/react-drag-and-drop-components/

npm install react-grid-layout

# Mathjax

https://github.com/fast-reflexes/better-react-mathjax 
https://www.npmjs.com/package/better-react-mathjax
Don't forget config:
https://codesandbox.io/s/better-react-mathjax-example-latex-optimal-8nn9n?file=/src/App.js:106-339

npm install better-react-mathjax


# MERN stack tutorial 
 https://youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE

# Might use for hash
https://www.npmjs.com/package/bcryptjs

# Re-read for idea how to implement secure sessions
https://blog.devgenius.io/mern-auth-with-session-part-3-register-login-form-with-auth-af4a1f314dd1

Tutorial (Probably too complex for this project): https://netninja.dev/p/node-js-authentication 

# tags? Probably implemented this poorly
https://stackoverflow.com/questions/50081983/searching-on-array-items-on-a-dynamodb-table

# NOTES
- Won't need get all, just search by name... but get all is good for testing drag/drop
- Edit should be a modal, you should only be able to edit on page, or ones you created... might need another variable for 'creator' and page ones should be different
- shortcut to remove unused imports alt shift O 
- users should be able to add formulas and save pages on their mobile during class to later edit and print from a bigger screen.
- Users should be able to have their own set of formulas saved for quick reference.  
- Could divide formulas by subject and get from database by subject and then search locally. That way we could have Calculus, Physics, Basic Math, Statistics, Computer Science... could be good... overlap though...
- Should try to prevent overlap in database... maybe? If name + formula are the same don't add it? Maybe add new tags to existing duplicate if necessary 
- pages should be separate database probably

# Completed Features 
- Draggable formula blocks [x]
- Edit formula blocks when on page [x]
- Printable Pages [x]
- Search Formula Blocks by name, formula and tag [x]


# ToDo Base Features
- Only admin should be able to globally delete a formula
- Resize to fit on 1 or 2 pages.
- allow code snippets too. <code></code>
- Accounts
- Save Pages to edit more later
- clear page
- sharable
- accessible

# Deluxe Features
- Send Alerts to users
- collaboration
- formula keyboard
- download other formats
- if not found in database, return link to wikipedia

# Later
- authentication registration/login
- make error codes prettier 
- add figures (maybe integrate some python)
- click anywhere on page and add a formula/header/search at that spot

# Much later
- CloudSearch is better for searching, if it gets popular


# Possible names
Cheat Sheet Generator
Formula Flick
Math Flick
Formula Fast Flick
Quick Flick Formula
Flick Your Formulas
Formula Swipe
Math Sled
Math Mosaic
Formula Fart
Formula Factory

# similar sites
https://mathpix.com/
https://www.wiris.com/en/mathtype/
https://www.geogebra.org/notes
https://arachnoid.com/latex/
https://www.wolframalpha.com/
https://products.wolframalpha.com/api
https://www.wolfram.com/products/?source=gws-nav
https://www.facebook.com/MathType


# wolframalpha has a paid api that I could use to make my site more awesome if I have success to begin with.  