// AddTransaction.js
import React from 'react'

const Balance = () => {
	return (
			<div className="col-md-4 offset-md-4 text-center">
				<div className="row mt-3">
					<div className="text-center" >
						<h3>Solde <b className="text-dark"> {balance.toFixed(2)}&euro;</b>
						</h3>
					</div>
				</div>
				<div className="row d-flex justify-content-between align-items-center">
					<div className="col-md-4">
						<h3>Revenu <span className="text-success"> {totalIncome.toFixed(2)}&euro;</span>
						</h3>
					</div>
					<div className="col-md-4">
						<h3>Dépense <span className="text-success"> {totalExpense.toFixed(2)}&euro;</span>
						</h3>
					</div>
				</div>

			</div>
	)
}

export default Balance
