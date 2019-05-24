import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountModal from './AccountModal';

class App extends Component {	
	constructor(props){
		super(props)
		this.state = {
			bankAccount: this.props.bankAccount,
			accountTransactions: this.props.accountTransactions
		}
	}

	render(){
		return(
			<div>
				<AccountModal bankAccount={this.state.bankAccount} accountTransactions={this.state.accountTransactions} />
			</div>
		)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const node = document.getElementById('parameters')
	const account = JSON.parse(node.getAttribute('data-bank-account'))
	const accountTransactions = JSON.parse(node.getAttribute('data-account-transactions'))
	ReactDOM.render(
    <App bankAccount={account} accountTransactions={accountTransactions} />,
    document.getElementById('modal'),
  );
});
