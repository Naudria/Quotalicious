import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const QuoteShow = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active"
            onClick={props.onDismiss}>
            <div className="ui standard modal visible active"
             onClick={(e) => e.stopPropagation()}>
                <Modal.Header>{props.author}</Modal.Header>
                <Modal.Content>{props.body}</Modal.Content>
                <Modal.Actions>{props.actions}</Modal.Actions>
            </div>
        </div>,
        document.querySelector('#modal')        
    );
};

export default QuoteShow;