import { useDispatch, useSelector } from 'react-redux';
import App5 from '../App5';

export const BoxContainer = () => {
  const money = useSelector((state) => state.bank.money);
  const dispatch = useDispatch();
  return (
    <div>
      <App5 money={money} DEPOSIT />
    </div>
  );
};
