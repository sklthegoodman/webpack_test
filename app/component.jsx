/**
 * Created by wrynnsun on 15/12/1.
 */
'use strict';
var React = require('react');
var Hello = React.createClass({
    render:function(){
        return (
            <h1>
                Hello World
                <span>让他们来</span>
            </h1>
        );
    }
});

module.exports = Hello;