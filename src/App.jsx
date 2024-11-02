
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  
  // const handleSignUpSubmit=data=>{
  //       console.log('sign up data',data);
  //   }


  // const handleUpdateProfile=data=>{
  //      console.log('update profile',data);
  //   }




  return (
    <>
      
      <h1>Form Master</h1>

      <GrandPa></GrandPa>


     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}

     {/* <ReusableForm 
     formTitle={'Sign Up'} 
     handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>Sign up </h2>
          <p>please sign up right now</p>
          
      </div>
     </ReusableForm>

     <ReusableForm 
     formTitle={'Profile update'}
      handleSubmit={handleUpdateProfile}
       submitBtnText='Update'>
        <div>
          <h2>Update profile</h2>
          <p>Always keep your profile update</p>
        </div>
       </ReusableForm> */}
      
    </>
  )
}

export default App
