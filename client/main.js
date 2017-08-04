import React from 'react';
import ReactDOM from 'react-dom';
import {meteor} from 'meteor/meteor';

Meteor.startup(function () {
    let name = 'Faza'
    let jsx = <p>Hello {name}!</p>;
    ReactDOM.render(jsx, document.getElementById('app'));
});