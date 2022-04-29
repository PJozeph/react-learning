import './App.css';
import Card from './components/Card';

import ExpenseItem from './components/ExpenseItem';

const expenses = [
  { title: 'foo', amount: 12, date: new Date(2020, 5, 12) },
]

const App = () => {
  return (
    <Card className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} />
    </Card>
  );
}

export default App;
