
const parent = React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        React.createElement('h1',{id:'heading'},'HELLO REACT APP')
    ),
)


const element = React.createElement('h1', {id:'heading1',class:'heading1'} , 'React is javascript libeary')
ReactDOM.render(element, document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(element)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render([parent,element])


// ?What is JSX
// JSX serves as a syntax extension to JavaScript, facilitating the 
// combination of HTML structures with JavaScript code within React 
// files.