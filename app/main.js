/**
 * Created by wrynnsun on 15/12/1.
 */
'use strict';
var Hello = require('./component.jsx');
var React = require('react')
var ReactDom = require('react-dom');

//

ReactDom.render((
    <Hello></Hello>
),document.getElementById('app'));