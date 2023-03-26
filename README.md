# Project: .Scribe (Google Books)

Link https://stanleyy7.github.io/googlebooks/

![scribeDisplay](https://user-images.githubusercontent.com/119549394/215255692-92979a46-a5e0-4601-8e6c-2588d6846d7c.png)

<img width="250" src="https://github.com/StanleyY7/googlebooks/actions/workflows/main.yml/badge.svg"/>

## Outline
The main aim of this project was to utilise our existing knowledge of HTML, CSS and Javascript and to build upon it by using newly acquired skills (React framework, Vite, use of Async, fetch and await) to create a responsive website which allows the user to search for a book via their input and to have it outputted as well. 

### Design
Below are the website designs/wireframes I created in Canva for the initial view of the website, and then when the user presses either the search icon or enter. As well I created a design for any modals too. 

![frontCover](https://user-images.githubusercontent.com/119549394/213914153-d6b5daa6-0b97-4cc4-884b-1dc7c8b45e71.png)
![WireframeDesign for  Scribe (2)](https://user-images.githubusercontent.com/119549394/213914193-024509d3-3a50-4dbf-b44f-106db9e06099.png)

### My Version

![scribeMain](https://user-images.githubusercontent.com/119549394/214832163-cecc8879-5694-4638-b7e7-c65ffeecddd5.PNG)
![myVersion](https://user-images.githubusercontent.com/119549394/215605330-3f0b8055-b0a2-4ad1-a680-7d025b08f4e8.PNG)
![myVersionModal](https://user-images.githubusercontent.com/119549394/215605343-1673bcfc-f0ad-4669-8fc5-06f8380359b4.PNG)

## MVP   

The main requirements for this project were:

- A Header section introducing the page
- A Form containing a text input and a submit / search button
- An output displayed on a grid. 

More specifically the grid of books should: 

- When the submit button is clicked it needs to request books from the Google books API using the input value as the query string
- The books that are received should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- Async/await is to be used for the request code, NOT .then

#### Bonus Features

- Added Jest tests.

## Summary

I met the above requirements by first creating a website wireframe/design, then I worked on the MVP requirements. I then worked on media queries for the website layout itself. After that I then added bonus features such as a modal opening upon clicking of a card and did the appropriate media queries for that as well. The main challenges experienced were managing state (figuring out which state to use and where, making the use of state concise where possible) and media queries for different components (as media queries can overlap/overwrite for the same component).

## Tech Stack

- HTML
- CSS/SCSS
- Javascript
- React
- Vite
