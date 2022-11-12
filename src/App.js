import { Container,Header,Statistic,Segment,Grid,Icon,Form,Button } from "semantic-ui-react";
import './App.css';

function App() {
  return (
    <Container>
      {/* Header */}
        <Header as="h1" size=''>Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2250.34</Statistic.Value>
      </Statistic>
      {/* Segment1 */}
        <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                <Statistic.Label style={{textAlign:"left"}}>Income:</Statistic.Label>
                <Statistic.Value>1,184</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column><Statistic size="tiny" color="red">
                <Statistic.Label style={{textAlign:"left"}}>Expenses:</Statistic.Label>
                <Statistic.Value>884</Statistic.Value>
                </Statistic>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      {/* Header */}
        <Header as='h3'>History</Header>
      {/* Segment2*/}
        <Segment color="red" textAlign="center">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">Something else</Grid.Column>
              <Grid.Column width={3} textAlign="right">$10.23K</Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered/>
                <Icon name="trash" bordered/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      {/* Segment3*/}
        <Segment color="green" textAlign="center">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">Something</Grid.Column>
              <Grid.Column width={3} textAlign="right">$1090.34</Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered/>
                <Icon name="trash" bordered/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      {/* Segment4*/}
        <Segment color="red" textAlign="center">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">Something</Grid.Column>
              <Grid.Column width={3} textAlign="right">$10K</Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered/>
                <Icon name="trash" bordered/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      {/* Header */}
        <Header as='h3'>Add new transactions</Header>
        {/* Form */}
        <Form unstackable>
          <Form.Group>
            <Form.Input icon='tags' width={12} label='Description' placeholder="new shiny thing"/>
            <Form.Input icon='dollar' iconPosition="left" width={4} label='Value' placeholder="100.00"/>
          </Form.Group>
        </Form>
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>OK</Button>
        </Button.Group>
    </Container>
  );
}

export default App;
