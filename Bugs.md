# Bugs
- need to inherit sizing
- saved pages spacing/ordering is off
- print to pdf is going to be hard to implement... need backend process, currently print from browser is okay-ish after figuring out configuration. Not a priority since browser print will work temporarily.
- From documentation: Do: <p>An example is the equation <span>{ "$${num}x^4 = 100$" }</span></p> (expression with math in separate element and expression) Will probably need to automatically move actual math into separate blocks programmatically... right now it's possible for a user to type something like "This is my formula && a+b=c$$" and it will all be in the same element.
- delete and remove title won't work on mobile, need to pull buttons outside of drag or something (could use drag to remove, and add option with title or no when added, that would get rid of annoying buttons entirely)
- formulas shouldn't be deleted from database from FormulaPage, need community page like prof suggested, delete after 5 downvotes, add to search results after 5 upvotes, could also have admin page incase of issue
- need to disable drag while edit modal is open. 
- Printing doesn't show all columns if scaled. 
- Nav bar is making screen not mobile friendly

# Fixed
- version 3 mathjax makes ctrl=p browser print come out fuzzy. Found best configuration. 
- I think mathjax component is somehow in a span, inherited span css was messing up my blocks had to make a new css class to get around it.  
- formulas are going over edge of page
- need to add new formulas at bottom
- tags don't get stored correctly through the form (I was giving the wrong name to the json I was sending back)
- need to save pages
- need an edit button (modal that pops up with form filled out)