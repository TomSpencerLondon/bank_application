import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './modal.css';
import { updateAccount } from '../utils/requests';
import AccountTable from './AccountTable';


export default class AccountModal extends Component {	
	constructor(props, context){
    super(props, context)
    this.handleModal = this.handleModal.bind(this);

		this.state = {
			show: false,
			amount: '0',
			transactionType: 'deposit',
      bankAccountId: this.props.bankAccount.id,
      accountTransactions: this.props.accountTransactions,
      bankAccountBalance: this.props.bankAccount.balance
    }
  };
    handleModal() {
      this.setState({
          show: !this.state.show
      });
    };
				
		editAccount(amount, transactionType, bankAccountId) {
      this.handleModal();
			updateAccount(amount, transactionType, bankAccountId)
				.done((response) => {
          this.setState({
            bankAccountBalance: response.balance,
            accountTransactions: response.account_transactions
          })
        })
        .fail(() => this.setState({ error: {}, loading: false }));
		};

		handleInputChange(event){
			this.setState({
				[event.target.name]: event.target.value
			})
		}

    render(){
			return(
        <div>
          <Container>
            <Button color="primary" onClick={this.handleModal}>Open Modal</Button>
            <Modal className="modal-dialog" fade="false" show={this.state.show}>
              <Modal.Header tag="h4">
                New Transaction
                <hr></hr>
                <Form>
                  <Row>
                    <Col md={6}>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control placeholder="0" name='amount' onChange={this.handleInputChange.bind(this)} />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Transaction Type</Form.Label>
                        <Form.Control as="select" name='transactionType' onChange={this.handleInputChange.bind(this)}>
                            <option>withdraw</option>
                            <option>deposit</option>
                        </Form.Control>
                    </Col>
                  </Row>
                </Form>
              </Modal.Header>
              <Modal.Footer>
                <Button color="danger" onClick={this.handleModal}>Cancel</Button>
                <Button color="primary" onClick={() => this.editAccount(this.state.amount, this.state.transactionType, this.state.bankAccountId)}>Save</Button>
              </Modal.Footer>
            </Modal>
				  </Container>
          <br></br>
          <AccountTable accountTransactions={this.state.accountTransactions} bankAccountBalance={this.state.bankAccountBalance} />
        </div>
      )
    }
}