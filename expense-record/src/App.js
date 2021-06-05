import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [items , setItems] = useState([{
    id: 'e1',
    title: 'Pencil',
    amount: 2,
    date: new Date(2021, 2, 1),
  },
  {
    id: 'e2',
    title: 'Book',
    amount: 200,
    date: new Date(2019, 5, 2),
  },
  {
    id: 'e3',
    title: 'sofa',
    amount: 20000,
    date: new Date(2020, 8, 7),
  },
  {
    id: 'e4',
    title: 'Pen',
    amount: 20,
    date: new Date(2021, 4, 11),
  }]);

  const addExpenseHandler = (expense) => {
    setItems((prev_expense) => {
      return [expense,...prev_expense];
    });
  };


  return (
    <div className = 'App'>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={items}/>
    </div>
  );
}

export default App;
