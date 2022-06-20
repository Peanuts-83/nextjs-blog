---
title: 'Mflix - Fullstack project'
date: '2022-06-20'
tech: 'NextJS'
---

[![Mflix Homepage](/images/mflix/mflix.png)](https://mflix-git-main-peanuts-83.vercel.app/)
[Test the app live here](https://mflix-git-main-peanuts-83.vercel.app/)

The objective of this project is to create an application "from scratch" providing ratings and reviews on cinema movies, using API self-made routes implemented with aggregate mongo's requests.

## Figma

([Project's UI on Figma](https://www.figma.com/file/rl6YRZXP9g5gljMydsDjgg/Mflix))
Quick development of the application's UI design, its functionalities (form fields to address request, sort fields...), and the articulation of responsive elements.

## React

Classical base components are used, with special components required from NextJS (_app.js & layout.js). The use of Style with Sass requires modules, because of the way NextJS manages style as an object.

Some UI elements such as double range bar required some specific CSS/JS work around, masking original elements to reshape them the right way...

You can use the "Show request build" button to see the request adressed to mongo server being shaped live!

## NextJS - API routes

API routes are defined in the same project. A default route (index) can be defined, and a more specific route can be built with specific arguments to query.

## Atlas MongoDB service

Mongo gives access to a free online database service called Atlas, provided with some data collections to be used for experimentation.

### [The Github repo](https://github.com/Peanuts-83/mflix)

*... still got to work on it, a bunch of functionalitites are to be done and the code is not clean and perfectly commented, this project is still at work.*
