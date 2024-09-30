// TransactionList.js
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const TransactionList = () => {
	const { deleteTransaction, transactions } = useContext(GlobalContext);
	return (
		<div>
			<ul className="list-group mt-3">
				{transactions.map(transaction => (
					<li key={transaction.id}
						className={`list-group-item d-flex 
									justify-content-between
									align-items-center 
									${transaction.type === 'expense' ?
									'text-danger' : 'text-success'}`}>
						<div>
							<h4>{transaction.description}  {transaction.type === 'expense' ? "Dépense" : "Revenu"} {transaction.amount}&euro;</h4>
							<small className="text-muted">{transaction.date}</small>
						</div>
						<div>
							<button className="btn btn-danger"
									onClick={() => deleteTransaction(transaction.id)}>
								Supprimer
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TransactionList
