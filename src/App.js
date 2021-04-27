import React from 'react'
import './App.css'
import Optionfield from './Components/optionfield'
import { BsLockFill } from 'react-icons/bs'
import { BsLock } from 'react-icons/bs'
import Dropdownfield from './Components/dropdownfield'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gender:"",
      orientation:"",
      openToMeet:"",
      displayName:"",
      qualification:"",
      school:"",
      occupation:"",
      nameerror:"",
      schoolerror:"",
      occupationerror:"",
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  validate = () => {
    let nameerror = "";
    let occupationerror = "";
    let schoolerror = "";

    if(!this.state.displayName) {
      nameerror = "*Required";
    }

    if(!this.state.occupation) {
      occupationerror = "*Required"
    }

    if(!this.state.school) {
      schoolerror = "*Required";
    }
    
    if(nameerror || occupationerror || schoolerror) {
      this.setState({
        nameerror: nameerror,
        occupationerror: occupationerror,
        schoolerror: schoolerror,
      })
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    const isValid = this.validate();
    if(isValid) {
    console.log(this.state);
    this.setState({
      gender:"",
      orientation:"",
      openToMeet:"",
      displayName:"",
      qualification:"",
      school:"",
      occupation:"",
      nameerror:"",
      schoolerror:"",
      occupationerror:"",
    })
  } 
    e.preventDefault();
  }

  handleSchoolInput = (value) => {
    this.setState({
      school:value
    })
  }

  handleOccupationInput = (value) => {
    this.setState({
      occupation:value
    })
  }

  render() {
    const options = [
      'Select',
      'A School',
      'B School',
      'C School',
    ];
    const options1 = [
      'Select',
      'Engineer',
      'Architect',
      'Teacher',
      'Doctor',
    ]
    return (
      <div className="container-fluid mt-3 ">
       <p className="para">Fields with "<BsLockFill />" cannot be edited once submitted.</p> 
       <form onSubmit={this.handleSubmit} >
        <label className="row mt-5">
         <div className="col-sm-5">
           <BsLock /> How do you identify yourself?
         </div>
        <div className="col-sm-3">
          <Optionfield  value={"Man"} selected = {this.state.gender === "Man"} onClick={() => 
          this.setState({
            gender:'Man'
          })
          } />
        </div>  
        <div className="col-sm-2">  
           <Optionfield  value={"Woman"} selected = {this.state.gender === "Woman"} onClick={() => 
          this.setState({
            gender:'Woman'
          })
          } />
         </div>
        </label>

        <label className="row mt-4">
         <div className="col-sm-5">
           <BsLock /> Your sexual orientation
         </div>
        <div className="col-sm-3">
          <Optionfield  value={"Heterosexual"} selected = {this.state.orientation === "Heterosexual"} onClick={() => 
          this.setState({
            orientation :'Heterosexual'
          })
          } />
        </div>  
        <div className="col-sm-2">  
           <Optionfield  value={"Bisexual"} selected = {this.state.orientation === "Bisexual"} onClick={() => 
          this.setState({
            orientation :'Bisexual'
          })
          } />
         </div>
        </label>

        <label className="row mt-4">
         <div className="col-sm-5">
           <BsLock /> I am open to meeting
         </div>
        <div className="col-sm-3">
          <Optionfield  value={"Heterosexual Women"} selected = {this.state.openToMeet === "Heterosexual Women"} onClick={() => 
          this.setState({
            openToMeet :'Heterosexual Women'
          })
          } />
        </div>  
        <div className="col-sm-2">  
           <Optionfield  value={"Bisexual Women"} selected = {this.state.openToMeet === "Bisexual Women"} onClick={() => 
          this.setState({
            openToMeet :'Bisexual Women'
          })
          } />
         </div>
         <div className="col-sm-1">  
           <Optionfield  value={"Both"} selected = {this.state.openToMeet === "Both"} onClick={() => 
          this.setState({
            openToMeet :'Both'
          })
          } />
         </div>
        </label>

        <label className="row mt-4">
         <div className="col-sm-5">
           <BsLock /> <b>Display Name</b>
         </div>
        <div className="col-sm-3">
          <input  className="input-group text" type="text" placeholder={ 'Enter' } value={this.state.displayName} onChange={(e) => 
          this.setState({
            displayName : e.target.value
          })
          } />
        </div>
        <div className="col-2">
          <p className="required">{this.state.nameerror}</p>
        </div>  
        </label>

        <p className=" mt-3 para">Recommended: Share a display name that is not your real name.</p>

        <label className="row mt-4">
         <div className="col-sm-5">
           <BsLock /> Education/Qualification
         </div>
        <div className="col-sm-2">
          <Optionfield  value={"High School"} selected = {this.state.qualification === "High School"} onClick={() => 
          this.setState({
            qualification :'High School'
          })
          } />
        </div>  
        <div className="col-sm-2">  
           <Optionfield  value={"Bachelor"} selected = {this.state.qualification === "Bachelor"} onClick={() => 
          this.setState({
            qualification :'Bachelor'
          })
          } />
         </div>
        <div className="col-sm-2">  
           <Optionfield  value={"Master"} selected = {this.state.qualification === "Master"} onClick={() => 
          this.setState({
            qualification :'Master'
          })
          } />
        </div>
        </label>

        <label className="row mt-4">
         <div className="col-sm-5">
           <BsLock /> University/School
         </div>
        <div className="col-sm-3">
          <Dropdownfield options={options} method={this.handleSchoolInput} optionvalue={this.state.school} />
        </div>
        <div className="col-2">
          <p className="required">{this.state.schoolerror}</p>
        </div>  
        </label>

        <label className="row mt-4">
         <div className="col-5">
           <BsLock /> Profession/Occupation
         </div>
        <div className="col-3">
          <Dropdownfield options={options1} method={this.handleOccupationInput} optionvalue={this.state.occupation}/>
        </div>  
        <div className="col-2">
          <p className="required">{this.state.occupationerror}</p>
        </div>
        </label>
        <div className='row mt-4'>
        <div className='col-3'></div>
        <input type='submit' value='Save' 
            className='button col-6' />
        </div>

       </form>
      </div>
  )
  }
}

export default App;
