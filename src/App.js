
import './App.css';
// import Component01 from './ComponentFolder/Component01';
import LifecycleA from './ComponentFolder/LifecycleA';
import Formcomp from './Formcopm';
import LifecycleB from './ComponentFolder/LifecycleB';
import Listing from './Listing';
import FormBootStrap from './FormBootStrap';


function App() {
  return (
    <div className=''>
      <Listing />
      {/* <LifecycleA/> Call LifeCycleA component */}
      <Formcomp/>
      {/* <LifecycleB/> */}
      {/* <Component01/> */}
      <FormBootStrap/>
    </div>  


  
  );
}

export default App;
