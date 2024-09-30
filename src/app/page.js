// page.js
'use client';
import React, { useState } from 'react';
import { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTransaction from './components/AddTransaction';
import Header from  './components/Header';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

const ExpenseTracker = () => {
	
	return (
		<GlobalProvider >
			<div className="container bg-light mt-5 p-5 
						border border-dark col-md-8">
            		<Header />
			      <AddTransaction />
 			      <TransactionList />
			</div>
		</GlobalProvider>
		
	);
};

export default ExpenseTracker;
