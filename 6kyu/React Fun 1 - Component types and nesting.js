// React is "A JavaScript library for building user interfaces". It's become a popular option amongst JavaScript frameworks and now it's supported in Codewars!
const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
class Hello extends React.Component {
    render() {
        return <h1>Hello</h1>;    
    }
}
class World extends React.Component {
    render() {
        return <h2>World!</h2>;    
    }
}

class Greet extends React.Component {
    render() {
        return <div><Hello/><World/></div>;    
    }
}