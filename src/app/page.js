// page.js
'use client';
import React, { useState } from 'react';
import { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTransaction from './components/AddTransaction';
import Header from  './components/Header';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';
import Balance from './components/Balance';
import Container from './components/Container';

const ExpenseTracker = () => {
	
	return (
		<GlobalProvider >
			<Container>
            	<Header />
			    <Balance />
				<AddTransaction />
 			    <TransactionList />
			</Container>
		</GlobalProvider>
		
	);
};

export default ExpenseTracker;
