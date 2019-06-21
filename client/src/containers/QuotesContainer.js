import React, { Component } from 'react'
import AllQuotes from '../components/AllQuotes';
import QuoteDetail from '../components/QuoteDetail'
import Header from '../components/Header'
import { Grid, Divider, Container, Ref, Sticky, Rail } from 'semantic-ui-react'

class QuotesContainer extends Component {
    constructor(props) {
        super(props);
        this.contextRef = React.createRef();
    }

    render() {
        return (
            <Container style={{ marginTop: '30px' }}>
                <Header />
                <Divider />
                    <Grid columns={2} stackable padded>
                        <Grid.Column width={10}>
                            <AllQuotes />
                            </Grid.Column>
                            <Grid.Column width={1}>
                            <Ref innerRef={this.contextRef}>
                            <Rail position="right">
                            <Sticky context={this.contextRef} offset={100}>
                                <QuoteDetail />
                            </Sticky>
                            </Rail>
                            </Ref>
                        </Grid.Column>
                    </Grid>
            </Container>
        );
    }
}


export default QuotesContainer