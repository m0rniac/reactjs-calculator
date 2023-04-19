import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"
import App from "./App";


/* [Corpus; DOM Rendering] */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.Fragment>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </React.Fragment>
);