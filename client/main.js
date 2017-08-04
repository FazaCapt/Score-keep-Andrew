import React from 'react';
import ReactDOM from 'react-dom';
import {meteor} from 'meteor/meteor';

Meteor.startup(function () {
    // title -> Account settings
    let title = 'Account Settings';
    let name = 'Faza'
    let jsx = (
    <div>
        {/* Render h1 tag with title var as text */}
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
    </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});