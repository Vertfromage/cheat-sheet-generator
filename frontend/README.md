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
- It needs to be prettier... get help with this if I try to make money off it. 
- SNS https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html
- SNS and lambda: https://hevodata.com/learn/sns-lambda/#:~:text=AWS%20Lambda%20and%20Amazon%20SNS%20integrate%2C%20allowing%20you,Lambda%20function%20is%20invoked%20with%20the%20message%20payload.
https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html
https://docs.aws.amazon.com/lambda/latest/dg/with-sns-example.html
- Might be calling get formulas too much

# Completed Term Requirements
- DynamoDB [x]
- Docker and Elastic Instance [x]
- Lambda [x]
- SNS [x] 
- AWS Backup [x]
- VPC Virtual Private Cloud [x]
- Working app to demo [x]
- Recording of demo video [x]


# Completed Features 
- Draggable formula blocks [x]
- Edit formula blocks when on page [x]
- Printable Pages [x]
- Search Formula Blocks by name, formula and tag [x]
- Accounts [x]
- Save Pages to edit more later [x]
- authentication registration/login [x]


# ToDo Base Features
- Only admin should be able to globally delete a formula
- Resize to fit on 1 or 2 pages.
- clear page
- sharable
- Admin report SNS from lambda


# Deluxe Features
- accessible
- allow code snippets too. <code></code>
- Send Alerts to users
- collaboration
- formula keyboard
- download other formats
- if not found in database, return link to wikipedia

# Later
- Login/register with google/github
- make error codes prettier 
- add figures (maybe integrate some python)
- click anywhere on page and add a formula/header/search at that spot
- Paypal integration 

# Much later
- CloudSearch is better for searching, if it gets popular


# Possible names
Cheat Sheet Generator *Best choice for marketing for main use case*
Formula Flick 
Math Flick
Formula Fast Flick
Quick Flick Formula
Formula Swipe
Math Sled
Math Mosaic
Formula Factory *Best choice for general use* 

# similar sites for market research 
https://mathpix.com/
https://www.wiris.com/en/mathtype/
https://www.geogebra.org/notes
https://arachnoid.com/latex/
https://www.wolframalpha.com/
https://products.wolframalpha.com/api
https://www.wolfram.com/products/?source=gws-nav
https://www.facebook.com/MathType
http://mathquill.com/ (shows preview as you type it... I might do that.)
https://cheatography.com/ 


# wolframalpha has a paid api that I could use to make my site more awesome if I have success to begin with.  


# read later maybe
https://stackoverflow.com/questions/57190892/how-to-not-display-navbar-on-specific-pages

# Docker
https://www.geeksforgeeks.org/how-to-dockerize-a-reactjs-app/
https://medium.com/mozilla-club-bbsr/dockerizing-a-mern-stack-web-application-ebf78babf136#:~:text=To%20run%20our%20entire%20application%20together%2C%20i.e%20run,named%20docker-compose.yml.%20Write%20these%20contents%20into%20the%20file.
https://www.cyberciti.biz/faq/how-to-install-docker-on-amazon-linux-2/

# CloudFront
https://aws.amazon.com/cloudfront/getting-started/EC2/