import { Keyboard } from '../keyboard/keyboard';
import { Display } from '../display/display';

function App() {
  return (
    // <div className="App">Challenge 202301-W06CH03-Santiago-Phone-Redus</div>
    <div className="container">
      <Display></Display>
      <main className="phone">
        <Keyboard></Keyboard>
      </main>
    </div>
  );
}

export default App;
