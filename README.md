<p align="center">
  <img src="https://arbletur.sirv.com/gifs/portfolio2018.gif" alt="Demo" width="600" height="427">
</p>

## About The Project
This portfolio was developed back in 2018 and is *no longer* hosted anywhere. 

If you want to see it live, feel free to download the source code [here](https://github.com/stevendelro/2018-portfolio "link to source code on github"), Just `npm install` the packages and run `npm run build`. Then pop open another terminal and run `npm run start`. It'll be running on `localhost:3000`.

Otherwise, here's [a link to a quick video](https://arbletur.sirv.com/gifs/portfolio2018.mp4 "link to a sample demo of my old portfolio") if the gif doesn't cut it.

## What motivated me to make this?

It was late 2018 and I just finished the main curriculum of my coding bootcamp. 

The next step was to build a portfolio. 

I was given the direction that I shouldn't spend too much time working on it, as creating a portfolio for most bootcamp students can tend to become a huge time consumer. The main point was to display the projects that you've created.

With this in mind, I began looking for some kind of template that I could use in order to quickly throw something together. Every template that I found and attempted to implement needed its CSS modified for it to satisfy my needs. 

This led me down the path of trying to get a better grasp of CSS.

I ended up taking a Udemy course by Jonas Schmedtmann called: [Advanced CSS and Sass](https://www.udemy.com/course/advanced-css-and-sass/ "link to a udemy course on css"): Flexbox, Grid, Animations and More. The course was entirely written with HTML5 and CSS3, with absolutely *zero* Javascript.

I completed the entire course, which exposed me to a ton of web design paradigms like [BEM architecture](https://www.smashingmagazine.com/2018/06/bem-for-beginners/ "link to learn more about BEM architecture") and Sass related concepts including nested rules, variables, mixins, selector inheritance, etc. As you progressed through the course, Jonas would walk you through how to build something, but everything was left unfinished. 

I ended up completing nearly every unfinished feature on my own. I dove deeply into media queries and responsive design. I also fixed every single *"one-off"* issue that I encountered. These small issues weren't addressed in the course, but I'm pretty nit-picky and couldn't let the tiny stuff slide. I also had a ton of fun learning about color theory and modern web design principles.

After the course, I decided that *instead* of using the skills that I just learned to slightly modify some existing  wordpress theme or template, why not convert the entire HTML/CSS codebase into a React project? 

## The last 10% is always the hardest

I had put so much into the code that it seemed like this was a better idea. So, I did just that. I ran into a bunch of webpack issues along the way, so I ended up taking an entire webpack tutorial in order to straighten all those issues out. 

Well, the end product was horribly slow. I needed to learn how to optimize it. After some digging around on [Frontend Masters](https://frontendmasters.com), I finished a course by Brian Holt that taught me how to implement Preact. It was still slow, but I learned a lot more than I set out to and the end product was decent.

## Funny Story

I posted a video of me walking through the project on Instagram and it somehow blew up. In a single night, I racked in over *6000+ likes*. But, along with those likes, came the hate.

So many people commented on that post calling me a fraud and all I did was switch out the colors and images from Jonas's popular Udemy course. I mean, I don't blame them. It look like that's all I did, but if anyone actually compared my code to the code that Jonas had taught us in the course, you would see an incredible difference.

- I refactored the entire project from plain HTML and CSS, to a self made React app.
- I configured my own webpack and backend. (I didn't even use create-react-app).
- I swapped out React for Preact.
- The project details were 100% designed by me. The course left that feature unfinished.
- I had to learn on my own how to implement SVGs in a diy React app.
- I figured out the hosting on my own. I bought my own domain, and spun up a Unbuntu server over on Digital Ocean. I got my own SSL certificate with Let's Encrypt. There weren't any "one-click" set ups for diy React apps back then.

Anyway, I blew it off. I can't expect "the masses" to dive any deeper than seeing the surface layer of anything on social media.

### Built With

* [Preact](https://preactjs.com/)
* [Sass](https://sass-lang.com/)
* [Sendgrid](https://sendgrid.com)
* [Axios](https://github.com/axios/axios)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)


### Acknowledgements
* [Jonas Schmedtmann's CSS Course](https://www.udemy.com/course/advanced-css-and-sass/)
* [Brian Holt @ Frontend Masters](https://frontendmasters.comteachers/brian-holt/)
