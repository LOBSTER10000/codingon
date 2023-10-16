import ColorMessage from './component/ColorMessage';
import ButtonPractice from './component/ButtonPractice';
function App() {
  return (
    <div className="App">
      <ColorMessage color="blue">안녕하세요</ColorMessage>
      <ColorMessage color="red">리액트 연습 중입니다</ColorMessage>
      <ButtonPractice />
    </div>
  );
}

export default App;
