# YOUR PROJECT TITLE

Playstation History Web Application

#### Video Demo: <https://www.youtube.com/watch?v=Of1YhzlAG50>

#### Description:

What the project is:
The project is a web application built with React using a variety of languages learnt on the CS50x course. I wanted to push myself further than what was learnt on the course. React was difficult to get my head around as it was very different to Flask which was the only framework taught on the course. I used Typescript which was is an extension of Javascript. I used some Javascript, HTML and CSS that were all included within CS50x. The web app is a single web page that renders differnet content depending on which link it clicked.

Each file does:
React creates an abundence of files to ensure that a web application runs correctly, I did not have to adjust a lot of these files. I added more than 40 images to the site all stored in an assets folder. I had a data.ts file that contained javascript objects for filling out the card components that populated to different arrays.

The bulk of the page was seperated into different components:
The navigation bar, this did not change other than on hover for asthetic purposes. The nav bar was made with bootstrap and then adjusted to suit my needs. It had a playstation logo image which when clicked displayed the home content in the mainwindow component (more on that in a minute). The other three links in the nav bar when clicked showed their corresponding content in the mainwindow component.

Specific content was broken down into card components, these components contained an image of the item, title and description. At the bottom of each card was a link to an external website.

The main window was used as a container to hold the populating cards.

The final component was a footer that was very simple.

For CSS I used some more than basic concepts such as Flexbox and Grid, this ensured that the website was responsive.

Following research I decided to use React Vite as a lightweight and good option for a simple web application (this was the common advice online).
