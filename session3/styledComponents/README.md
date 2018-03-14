# Styled components examples

This repo consist of simple excersises to explore the features and capabilities of styled-components. Before looking at the answers try consulting the [docs](https://www.styled-components.com/docs).

## Excercises

### Separate a component in presentational and container.

File to edit: `src/App.js`

Right now App.js contains a single App component that is in charge of both the logic and the styling. Separate this component in presentational and container components.

### Inject global css.
Files to edit: `src/index.js, src/App.css`

File to create: `src/global.js`

We want to add a new font-face to the project BUT we are migrating from normal css to styled components.

Create a `global.js` file to add our new font `SoberanaSans` and import global.js on index.js.

Make sure to use this new font on the existing css file to verify the inject is working.

```
nav {
   font-family:'SoberanaSans';
   font-size:17px;
   ...
   }
```

The font file can be found in the `feat/ex-2-inject-global` branch as `src/fonts/soberanasans-regular-webfont.ttf`

### Move style from classNames to styled-components.
Files to edit: `src/App.js, src/global.js`

Files to create: `src/style.js`

It's time to stop using that old css file aproach. Remove the `src/App.css` import and move the styles from simple boring css to your own styled components.

Tip: the `keyframes` can be moved to the global (`global.js`) inject.

### Style the react router Link  component && Use props to change the component behaviour.
Files to edit: `src/App.js, src/style.js`

When rendering the Links pass a prop to indicate which link is active depending on the current state.


```
<Link selected={selected} to={url}>

```


Use `styled()` method to style the existing Link react router compoment and  change its color when the prop selected is present.

The answer for each excercise can be found in the different branches of the project. 





### Answers

For example if you wanted to se how to style the link compoment you could do: 

```
$ git co feat/ex-4-props-and-extend
```
