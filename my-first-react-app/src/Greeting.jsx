import { createElement } from "react";

function Greeting(){
    return createElement(
    'h1',
    {className: 'greeting'},
    'Hey all!'
    );
}

export default Greeting;