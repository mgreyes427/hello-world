import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
// import Example1 from './hooks/Example1';
// import Example2 from './hooks/Example2';
// import ComponentWithContext from './hooks/Example3';
// import Example4 from './hooks/Example4';
// import { AllCycles } from './hooks/lifecycle/AllCycles';
// import GreetingStyled from './components/pure/greetingStyled';
// import Clock from './hooks/Exercise456';
// import Father from './components/container/father';
// import ContactList from './components/container/contact_list';
import OptionalRender from './components/pure/optionalRender';
import Rectangle from './components/pure/rectangle';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <Greeting name="Martin"></Greeting> */}
        {/* <GreetingF name="Martin"></GreetingF> */}

        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactList></ContactList> */}

        {/* ? Examples of hooks  */}
        {/* <Example1></Example1> */}
        {/* <Example2></Example2> */}
        {/* <ComponentWithContext></ComponentWithContext> */}
        {/* <Example4 name='Martin'>
          <h3>
            Content of the props.children
            (tooked alwas as props.children var in the child)
          </h3>
        </Example4> */}
        {/* <AllCycles></AllCycles> */}

        {/* ? Exercise 4, 5, 6 */}
        {/* <Clock></Clock> */}

        {/* <GreetingStyled name='Martin'></GreetingStyled> */}
      {/* </header> */}
      
      {/* ? Event manager */}
      {/* <Father></Father> */}

      {/* ? Exercises 7, 8, 9 */}
      {/* <ContactList></ContactList> */}

      {/* Coditional render examples */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Exercies 10, 11, 12 */}
      <Rectangle intervalTimeInSeconds={0.5}></Rectangle>

      {/* Final project */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
