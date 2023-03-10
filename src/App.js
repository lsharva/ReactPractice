
import './App.css';
// import Component01 from './ComponentFolder/Component01';
import LifecycleA from './ComponentFolder/LifecycleA';
import Formcomp from './Formcopm';
import LifecycleB from './ComponentFolder/LifecycleB';

function App() {
  return (
    <div className=''>
      <LifecycleA/> {/*Call LifeCycleA component*/}
      <Formcomp/>
      <LifecycleB/>
      {/* <Component01/> */}
    </div>  


  
  );
}

export default App;
