'use strict';


const MessageHistory = ({ list }) => {
    let Types = [];

    if (list.length === 0) {
        return null;
    };

    list.forEach(message => {
        switch (message.type) {
            case 'response':
                Types.push(Response)
                break;
            case 'message':
                 Types.push(Message)
                break;
            default:
                Types.push(Typing)
                break;
        }
    });
 
    const Messages = Types.map((Messg, i) => (
        <Messg key={list[i].id} from={list[i].from} message={list[i]}></Messg>
    ));

    return <ul>{Messages}</ul>;
};


MessageHistory.defaultProps = {
    list: []
};