import { Keyboard } from '../keyboard/keyboard';
import { Display } from '../display/display';
import { Actions } from '../actions/actions';

function App() {
  return (
    <div className="container">
      <Display></Display>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}

export default App;
