import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Actions() {
  const numbers = useSelector((state: RootState) => state.phone);
  return (
    <div className="actions">
      <span className="number">{numbers}</span>
      <button className="call">Call</button>

      <button className="hang active">Hang</button>
    </div>
  );
}
