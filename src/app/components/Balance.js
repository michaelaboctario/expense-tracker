// AddTransaction.js
import React,  {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const totalIncome = transactions
	  .filter( transaction => transaction.type == 'income')
	  .reduce((acc, transaction) => (acc += Number(transaction.amount)), 0); 

	const totalExpense = transactions
	  .filter( transaction => transaction.type == 'expense')
	  .reduce((acc, transaction) => (acc += Number(transaction.amount)), 0);   
	
	const balance = totalIncome - totalExpense;
	
	return (
			<>
			<div className="row mt-3 mb-4">
				<div className="text-center" >
						<h3>Solde <b className="text-dark"> {balance.toFixed(2)}&euro;</b>
						</h3>
					</div>
			</div>
				<div className="row m-3">
					<div className="col-md text-center">
						<p className="h3">Revenu <span className="text-success"> {totalIncome.toFixed(2)}&euro;</span></p>
					</div>
					<div className="col-md text-center">
						<h3>Dépense <span className="text-muted"> {totalExpense.toFixed(2)}&euro;</span></h3>
					</div>
				</div> 
		</>
	)
}

export default Balance
