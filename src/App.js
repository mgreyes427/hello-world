import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Martin"></Greeting> */}
        {/* <GreetingF name="Martin"></GreetingF> */}

        {/* <TaskListComponent></TaskListComponent> */}
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
