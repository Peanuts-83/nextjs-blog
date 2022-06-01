---
title: 'React-CRA migration to NextJS #1'
date: '2022-05-14'
tech: 'React'
---

*In my NextJS framework learning goal, I decided to convert a React application (Create-React-App) into a NextJS application.*

You will tell me that it should not be very complicated, both relying on the same language, the same technology. Certainly, but NextJS including the back-end in addition to the front-end, with API routes and requests to the mongoDB server, the matter is not as easy as it seems!

My first step was to properly configure the Redux store and put the UI imports (styles) back in place. The CSS is actually managed in a particular way, with a global style that applies to **_app.js** in a classic way, and the other styles that are managed as objects whose properties are called as follows:

```javascript
import style from 'styles/compStyle.css'
...
<div classname={style.class}>
```

Obviously, I wanted to go too fast, and I took the opportunity to modify all the links which now require an **"a" tag** in the **"Link" tag** to work.
I took it badly, because this error cost me an afternoon of bug research that I attributed to the store, [see my previous post...](frustration)

I then advanced with difficulty in configuring the **login/logout** function. A blog post by [Jason Watmore](https://jasonwatmore.com/post/2021/08/04/next-js-11-jwt-authentication-tutorial-with-example-app#login-jsx) describes in detail the implementation of this function by wrapping it around the application.

So I had to extract this functionality from my store where it was, to then come and link it to the store and thus retain global access to the user's properties.

*The complete architecture of the application had to be reviewed, in order to take into consideration the routing by files of the 'pages' directory.*

Some parts of the old app that I wanted to keep required me to make significant changes to Jason's code, such as the form checkers.

**One interesting trick I learned** is to create an index.js file in the utilities folders such as 'helpers' or 'services' directories which just exports the exported functions of all the files in the directory. **You can then call any exported function by simply calling the directory in question**.

```javascript
// From index.js
export * from './myFile.js'
```

```javascript
// You don't have to specify any file...
import { function } from 'dirName'
```

Another trick is the creation of a **jsconfig.js** file which allows you to define a starting point for the paths called in imports. **We can then import from the root of the defined project**, without having paths with extension type "../../../directory"

```javascript
{
    "compilerOptions": {
        "baseUrl": "."
    }
}
```

```javascript
// from ./pages/api/authenticate.js
import { function } from 'helpers'
// instead of
import { function } from '../../helpers'
```

The project is therefore progressing, but **there is still a lot to do**:
+ Terminate access to application pages (especially the Transactions page)
+ Put back in place the UX - interactivity
+ Switch from mocked data to remote data
