const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

const initialState = {
  money: 0,
};

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { money: state.money };
    case WITHDRAW:
      return { money: state.money };
    default:
      return state;
  }
};

export default moneyReducer;
