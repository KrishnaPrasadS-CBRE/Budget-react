import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function AllTransactions({ label, value, isExpense=false }) {
    return (
        <Segment color={isExpense ? "red" : "green"} textAlign="center">
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{label}</Grid.Column>
                    <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered />
                        <Icon name="trash" bordered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default AllTransactions