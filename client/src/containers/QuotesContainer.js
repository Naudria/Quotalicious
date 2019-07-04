import React, { Component } from 'react'
import AllQuotes from '../components/AllQuotes';
import QuoteDetail from '../components/QuoteDetail'
import Header from '../components/Header'
import { Divider, Container } from 'semantic-ui-react'

class QuotesContainer extends Component {
   

    render() {
        return (
            <Container style={{ marginTop: '30px' }}>
                <Header />
                <Divider />
                    <AllQuotes /> 
            </Container>
        );
    }
}


export default QuotesContainer