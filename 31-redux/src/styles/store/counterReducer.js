const initialState = {
  number: 50,
};

// reducer : 액션의 타입에 따라 변화하는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + 1 };
    case 'MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
