import React, { Component } from 'react'
class Register extends Component {
  constructor () {
    super();
    this.state={
fullname:'',
email:'',
password:'',
city:[],
phonenumber:'',
female:'',
male:'',
dob:''
    }
  }
  onFullname=(e)=>{
  this.setState({
    fullname:e.target.value
})
  }
  onemail=(e)=>{
    this.setState({
      email:e.target.value
  })
    }
    onpassword=(e)=>{
      this.setState({
        password:e.target.value
    })
      }
      onphoneNumber=(e)=>{
        this.setState({
          phonenumber:e.target.value
      })
        }
        ondateofBirth=(e)=>{
          this.setState({
            dob:e.target.value
        })
          }
          ongender=(e)=>{
            this.setState({
              gender:e.target.value
          })
            }

            onSubmitchange=()=>{
               this.setState({
            books:[
                ...this.state.books,
                {
                  fullname:this.state.fullname,
                  email:this.state.email,
                  password:this.state.password,
                  city:[...this.state.city],
                  phonenumber:this.state.phonenumber,
                  male:this.state.male,
                  female:this.state.female,
                  dob:this.state.dob
                }
            ]
        },()=>{
            this.setState({
              fullname:'',
              email:'',
              password:'',
              city:[],
              phonenumber:'',
              male:'',
              female:'',
              dob:''
            })
        })
            }
  render () {
    return (
      <div>
        
          <div class='form'>
            <form action='' method='GET'>
             
                <h2>Register</h2>
                <div class='columnone'>
                  <label>Full Name</label><br/>
                  <input type='text' name='fullname' value={this.state.fullname} /><br/>
                  <label>Email Address</label><br/>
                  <input type='email' name='email' value={this.state.email}/><br/>
                  <label> Password</label><br/>
                  <input type='password' name='password' value={this.state.password}/><br/>
                  <select class="city">
                    <option value='Andhra Pradesh'>Select your own city</option>
                    <option value='Andhra Pradesh'>Andhra Pradesh</option>
                    <option value='Andhra Pradesh'>Telangana</option>
                    <option value='Andhra Pradesh'>Assam</option>
                    <option value='Andhra Pradesh'>Arunachalpradesh</option>
                  </select>
                </div>
                <div class='columntwo'>
                  Date of Birth<br/>
                  <input type='text' name='dateofbirth' value={this.state.dob} />
                  <br/>
                  Phone Number<br/>
                  <input type='phonenumber' name='phonenumber' value={this.state.phonenumber} />
                  <br />
                  <textarea rows='4' cols='50'>
                    Tell Me About yourself
                  </textarea>
                  <br />
                  Male
                  <input type='radio' value='male' name='gender' value={this.state.male}/>
                  Female
                  <input type='radio' value='female' name='gender' value={this.state.female}/>
                </div>
            
        </form>
        
              </div>
              <div class="checkbox">
              <input type="checkbox" name="fullname" />I want to receive email about updates to website<br/>
        <button onClick={this.onSubmitChange}>Register</button> 
        </div>
            
          </div>
          
              
        
    )
  }
}
export default Register
