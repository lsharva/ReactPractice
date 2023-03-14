
import './App.css';
// import Component01 from './ComponentFolder/Component01';
import LifecycleA from './ComponentFolder/LifecycleA';
import Formcomp from './Formcopm';
import LifecycleB from './ComponentFolder/LifecycleB';
import Listing from './Listing';
import FormBootStrap from './FormBootStrap';
import ListingClass from './ListingClass';
import KeyListing from './ComponentFolder/KeyListing';


function App() {
  return (
    <div className=''>
      <KeyListing/>
      <Listing />
      {/* <LifecycleA/> Call LifeCycleA component */}
      <Formcomp/>
      {/* <LifecycleB/> */}
      {/* <Component01/> */}
      <FormBootStrap/>
      <ListingClass/> 

    </div>  


  
  );
}

export default App;
