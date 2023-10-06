import LifeCycleFunc from './LifeCycleFunc';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
function App() {
  return (
    <div className="App">
      {/* {함수형 컴포넌트에서 useRef를 이용해서 Dom요소에 직접 접근} */}
      <RefSample1 />
      <hr />

      {/* {함수형 컴포넌트에서 ; useRef()로 로컬변수 사용} */}
      <RefSample2 />

      <hr />

      {/* {클래스형 컴포넌트로 useRef사용} */}
      <RefSample3 />

      <hr />

      <RefSample4 />

      <hr />

      <LifeCycleFunc />
    </div>
  );
}

export default App;
