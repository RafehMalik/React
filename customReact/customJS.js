let customRender=(reactElement,container)=>{
    let ele=document.createElement(reactElement.type);
    ele.innerHTML=reactElement.childeren;

    for (const prop in reactElement.props) {
        ele.setAttribute(prop,reactElement.props[prop]);
    }

    container.appendChild(ele);
}


let reactElement={
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childeren: 'click me'
}

let container=document.getElementById('root');

customRender(reactElement,container)