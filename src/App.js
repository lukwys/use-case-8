import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/UserForm';
import { UserList } from './components/usersList';

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
