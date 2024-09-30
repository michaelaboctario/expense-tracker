// AddTransaction.js
'use client'
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	const currentDate = new Date;
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState(0);
	const [date, setDate] = useState('');
	const [type, setType] = useState('expense'); // Default to expense
	const { transactions, addTransaction } = useContext(GlobalContext);
  
	//console.log(GlobalContext);
	//console.log(addTransaction);
	console.log(date);
	const handleAddTransaction = () => {
		const newTransaction = {
				id: transactions.length + 1,
				description,
				amount, 
				type,
				date
			}
		addTransaction(newTransaction);
		setAmount('');
		setDate('');
		setDescription('');
		setType('expense');
	}
	
	return (
		<>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Description"
					/* value={description} */
					onChange={e => setDescription(e.target.value)}
				/>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="mb-3">
						<input
							type="number"
							className="form-control"
							placeholder="Total"
							/* value={amount} */
							onChange={e => setAmount(e.target.value)}
						/>
					</div>
				</div>
				<div className="col-md-4">
					<div className="mb-3">
						<input
							type="date"
							className="form-control"
							placeholder="MM/DD/YYYY"
							/* value={date} */
							onChange={e => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div className="col-md-4">
					<div className="mb-3">
						<select className="form-select"
								/* value={type}  */
								onChange={e => setType(e.target.value)}>
							<option value="expense">Dépense</option>
							<option value="income">Revenu</option>
						</select>
					</div>
				</div>
			</div>
			<div className="row">

				<div className="col-md-6">
					<button className="btn btn-primary"
							onClick={handleAddTransaction}>
						Ajouter Transaction
					</button>
				</div>
			</div>
	 	</>
	)
}

export default AddTransaction
