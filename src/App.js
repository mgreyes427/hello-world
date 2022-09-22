import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/contact_list';
import Example1 from './hooks/Example1';
import Example2 from './hooks/Example2';
import ComponentWithContext from './hooks/Example3';
import Example4 from './hooks/Example4';
import { AllCycles } from './hooks/lifecycle/AllCycles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Martin"></Greeting> */}
        {/* <GreetingF name="Martin"></GreetingF> */}

        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactList></ContactList> */}

        {/* <Example1></Example1> */}
        {/* <Example2></Example2> */}
        {/* <ComponentWithContext></ComponentWithContext> */}
        {/* <Example4 name='Martin'>
          <h3>
            Content of the props.children
            (tooked alwas as props.children var in the child)
          </h3>
        </Example4> */}
        <AllCycles></AllCycles>
      </header>
    </div>
  );
}

export default App;
