import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import { NavBar } from './components';
import { Content, Dashboard } from './section';

const App = <div>
    <Dashboard />
</div>;

const root = document.getElementById("root");
ReactDOM.render(App, root);