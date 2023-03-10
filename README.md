# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty



### Links

- Live Site URL: [Live Demo](https://url-shortener-o.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React.js


### What I Learned
- Accessibility tags : aria-expanded, aria-label, aria-live, aria-describedby

```jsx
    <button className='menu' aria-label='menu' aria-expanded={navOpen} onClick={()=>{
      setNavOpen(!navOpen)
    }}><img src={menuIcon} alt="" /></button>

```




## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/Master-Osaro)
- Twitter - [@iyoha_osaro](https://twitter.com/iyoha_osaro)
- Github - [@Master-Osaro](https://github.com/Master-Osaro/)

**Had fun building!** 🚀