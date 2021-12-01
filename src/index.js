// All Style file Import here
import "./scss/style.scss"




// All script file import here
import './js/script.js';


// Custom Funtion
function component() {
    const element = document.createElement("h1");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "Wold!"], " ");

    return element;
}

document.body.appendChild(component());
