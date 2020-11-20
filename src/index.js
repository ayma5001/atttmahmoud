import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/



class Mahmoud extends React.Component {
  constructor (props){
      super(props);
      this.state = {userName:'',
      age:null,
      mail:''
  };   
  }

  verifAge =(event) => {
  let val = event.target.value;
  let nam=event.target.name;
  if(nam ==="age"){
  if(!Number(val) && val !==''){
      alert('you must enter a number in this field');
  }
  }
  this.setState({[nam]: val});
  }



  eventChange = (event) => {
      this.setState ({userName: event.target.value});
      
  }

  ageChange = (event) => {
      this.setState ({age: event.target.value});
      
  }

  mailChange = (event) => {
      this.setState ({mail : event.target.value});

  }

  submitHandler=(event) => {
      event.preventDefault(); 
         /* alert("si vous appuyez sur OK, \n Vous soumettez vos informations et vous ne pouvez pas modifier !");
      */
      alert('مرحبا بكم في فضاء الفحص الفنّي حسب الموعد');
      
  }

  render (){
      return (
         <form onSubmit={this.submitHandler} >
          
          <h1> Hello {this.state.userName} , your age is {this.state.age } and  your mail is {this.state.mail}</h1>
          
        

          <p>Enter your Name : </p>
          <input type='text' name="name" onChange = {this.eventChange} />
        

          <p>Enter your Age :</p>
          <input type="text"  name="age"  onChange = {this.verifAge} />
          

          <p>Enter your mail : </p>
          <input type= "Email" name="mail" onChange ={this.mailChange} />

          <br/>
          <br/>
          <input type="Submit" class="button" value="Suivant"/>
          
          </form>
      );
  }
}
ReactDOM.render(<Mahmoud />,document.getElementById('root'));