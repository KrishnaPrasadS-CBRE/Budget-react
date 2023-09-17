import { Container, Segment, Grid } from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalanceAndIncomeAndExpenses from "./components/DisplayBalanceAndIncomeAndExpenses";
import AllTransactions from "./components/AllTransactions";

function App() {
  return (
    <Container>
      {/* Header */}
      <MainHeader title="Budget" type="h1" />
      <DisplayBalanceAndIncomeAndExpenses size="small" label="Your Balance:" value="2250.34"/>
      {/* Segment1 */}
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalanceAndIncomeAndExpenses size="tiny" color="green" align="left" label="Income:" value="1,184" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalanceAndIncomeAndExpenses size="tiny" color="red" align="left" label="Expenses:" value="884" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      {/* Header */}
      <MainHeader title="History" type="h3" />
      {/* Segment2*/}
      <AllTransactions label="Something else" value="$10.23K" isExpense/>
      {/* Segment3*/}
      <AllTransactions label="Something" value="$1090.34" />
      {/* Segment4*/}
      <AllTransactions label="Something" value="$10K" isExpense/>      
      {/* Header */}
      <MainHeader title="Add new transactions" type="h3" />
      {/* Form */}
      <NewEntryForm />
    </Container>
  );
}

export default App;
