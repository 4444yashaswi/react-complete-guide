import Expenses from './components/Expenses'

function App() {
  const items = [
  {
    id: 'e1',
    title: 'Pencil',
    amount: 2,
    date: new Date(2021, 0, 1),
  },
  {
    id: 'e2',
    title: 'Book',
    amount: 200,
    date: new Date(),
  },
  {
    id: 'e3',
    title: 'sofa',
    amount: 20000,
    date: new Date(),
  },
  {
    id: 'e4',
    title: 'Pen',
    amount: 20,
    date: new Date(),
  }
  ];


  return (
    <div>
      <h1>Hello world!</h1>
      <Expenses items={items}/>
    </div>
  );
}

export default App;
