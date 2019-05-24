import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class AccountTable extends Component {	

  constructor(props){
		super(props)
  }
  
  renderTableData() {
    return this.props.accountTransactions.map((transaction, i) => {
       const { id, created_at, amount, transaction_type } = transaction //destructuring
       return (
          <tr id={`transaction_row_${i}`} key={id}>
             <td id={`created_at_${i}`} key={`#{id}_created_at`}>{created_at}</td>
             <td id={`transaction_type_${i}`} key={`#{id}_transaction_type`}>{transaction_type}</td>
             <td id={`transaction_amount_${i}`} key={`#{id}_transaction_amount`}>{this.formatCurrency(amount)}</td>
          </tr>
       )
    })
  }

  formatCurrency(entry) {
    var formatted = new Intl.NumberFormat('en-GB', { 
      style: 'currency', 
      currency: 'GBP' 
      }).format(entry)
    return formatted
  }

  render(){
    return(
      <Table bordered hover>
        <thead>
          <tr>
            <th>Date of Transaction</th>
            <th>Transaction Type</th>
            <th>Amount of Transaction</th>
          </tr>
        </thead>
        <tbody>
          { this.renderTableData()}
          <tr id="balance_row">
            <th></th>
            <th>Balance</th>
            <th id="final_balance">{this.formatCurrency(this.props.bankAccountBalance)}</th>
          </tr>
        </tbody>
      </Table>
    )
  }
}
