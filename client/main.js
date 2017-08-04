import React from 'react';
import ReactDOM from 'react-dom';
import {meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name:'Lauren',
    score: 99
}, {
    _id: '2',
    name:'Cory',
    score: -1
}, {
    _id: '3',
    name:'Andrew',
    score: -12
}];

// const renderPlayers = function (playersList) {
//     let numbers = [{val: 1}, {val: 2}, {val: 3}];

//     let newNumbers = numbers.map(function (number) {
//         // return number.val - 1;
//         return <p key={number.val}>{number.val}</p>;
//     });
//     console.log(newNumbers);

//     return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>]
// };

// const renderPlayers = function (playersList) {
//     let numbers = [{val: 9}, {val: 2}, {val: 3}, {val: 101}];

//     return numbers.map(function (number) {
//         return <p key={number.val}>Andrew has -12 point(s)</p>;
//     });
// };

const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
};

Meteor.startup(function () {
    let title = 'Score Keep';
    let name = 'Faza'
    let jsx = (
    <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
    </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});