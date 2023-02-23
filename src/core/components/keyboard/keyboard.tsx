import { useDispatch } from 'react-redux';
import * as ac from '../../reducer/phone.actions.creator';
import { AppDispatch } from '../../store/store';

export function Keyboard() {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (number: string) => {
    dispatch(ac.clickCreator(number));
  };

  const handleDelete = () => {
    dispatch(ac.deleteCreator());
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <button className="key" onClick={() => handleClick('1')}>
            1
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('2')}>
            2
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('3')}>
            3
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('4')}>
            4
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('5')}>
            5
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('6')}>
            6
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('7')}>
            7
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('8')}>
            8
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('9')}>
            9
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClick('0')}>
            0
          </button>
        </li>
        <li>
          <button className="key big" onClick={() => handleDelete()}>
            delete
          </button>
        </li>
      </ol>
    </div>
  );
}
