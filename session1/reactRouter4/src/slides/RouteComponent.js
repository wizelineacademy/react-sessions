import React from 'react';
import {
  routeComponentChildren,
  routeComponentComponent,
  routeComponentPassProps,
  routeComponentRender,
  routeLocationObject,
} from '../images';

const RouteComponent = () => (
  <div className="slide-container">
    <h1>Route component (#step2-route-component)</h1>
    <h3>- The Route component</h3>
    <p>The <strong>Route</strong> component is the main building block of React Router. </p>

    <h3>- Render props</h3>
    <p><strong>component</strong></p>
    <p>
      A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component (created using React.createElement).
      That means if you provide an inline function to the component prop, you would create a new component every render
    </p>
    <img src={routeComponentComponent} />
    <p><strong>render</strong></p>
    <p>
      This is similar to component, but is useful for inline rendering and passing extra props to the element.
      This allows for convenient inline rendering and wrapping without the undesired remounting explained above.
    </p>
    <img src={routeComponentRender} />
    <p><strong>children</strong></p>
    <p>
      A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location.
    </p>
    <img src={routeComponentChildren} />
    <h3>- Passed props</h3>
    <img src={routeComponentPassProps} />
    <p>match: A match object contains information about how a <strong>Route path</strong> matched the URL</p>
    <p>location: Locations represent where the app is now, where you want it to go, or even where it was</p>
    <p>history: he history object is mutable. Therefore it is recommended to access the location from the render props of <strong>Route</strong>, not from history.location.</p>
  </div>
);

export default RouteComponent;
