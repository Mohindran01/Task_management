import React, { Component } from 'react'
import {Login as LoginComponent} from './style';
import { MenuLink, InputTag, LoginSubmitBtn, TAR } from "./element";
import Router from 'next/router';
 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            message : "",
            user : null,
            email:"",
            password:""

        }
    }
    emailHandler(event){
        let emailValue = event.target.value
        this.setState({email:emailValue})
      }
      passwordHandler(event){
        let passwordValue = event.target.value
        this.setState({password:passwordValue})
      }
      submitUserNameAndPassword(event){
        let {email,password}=this.state
        console.log(email)
        console.log(password)
        this.loginUserInfo({email,password})
      }
      loginUserInfo(response){
        if (response.email=='s.r.mohindran@gmail.com' && response.password=='password'){
            window.open("/welcome","_self");
            
        }
		// window.open("/welcome","_self");
	}
  render() {
    return (
        <LoginComponent>
      
        <div className="white_bg td">					
            {/* <GoogleLogin
                    clientId   = {GOOGLE_LOGIN_CLIENT_ID}
                    buttonText = "Sign in with Google"
                    onSuccess  = {this.responseGoogleSuccess}
                    onFailure  = {this.responseGoogleFail}
                    prompt		 = 'consent'
                    render     = {renderProps => (
                        <div className="ggl_login">
                            <MenuLink onClick={renderProps.onClick} disabled={renderProps.disabled}><em>Login with your dailyhunt account</em></MenuLink>
                        </div>
                    )}
            /> */}
            <div className="login_cred">
             
                 
                    {/* <form id="popup">
                        <fieldset>
                            <legend><h2>Forgot Password?</h2></legend>
                            <div>
                                <p><label>Email:</label></p>								
                                <InputTag type="email" value={this.state.email} style={{marginBottom:"10px"}} onChange={(this.handleOnChange)}/>
                            </div>
                            
                            <TAR>
                                <MenuLink className="frgt_pwd" onClick={this.hideForgotBlock}>No Thanks!</MenuLink>
                                <LoginSubmitBtn style={{minWidth:"140px",padding:"10px 12px"}} onClick={this.sendMail}>Send Email</LoginSubmitBtn>
                            </TAR>
                        </fieldset>
                    </form> */}

                

                <form>
                    <fieldset>
                        <legend>Login with your email id:</legend>
                        <p><label>Email:</label></p>								
                        <InputTag type="email" id="email" name="email" style={{marginBottom:"10px"}} onChange={(event)=>{
                            this.emailHandler(event)
                        }}/>

                        <p><label>Password:</label></p>								
                        <InputTag type="password" style={{marginBottom:"10px"}} onChange={(event)=>{
                            this.passwordHandler(event)
                        }}/>
                        <TAR>
                        {/* <MenuLink className="frgt_pwd" onClick={this.showForgotBlock}>Forgot Password?</MenuLink> */}
                            <LoginSubmitBtn style={{minWidth:"120px",padding:"10px 12px"}} onClick={(event)=>{
                                this.submitUserNameAndPassword(event)
                            }}>Submit</LoginSubmitBtn>
                        </TAR>
                    </fieldset>
                </form>
                    {/* // <form>
                    // 	<fieldset>
                    // 		<legend>Login with your email id</legend>
                    // 		<div>
                    // 			<p><label>Email:</label></p>								
                    // 			<InputTag type="email" value={this.state.email} style={{marginBottom:"10px"}}/>
                    // 		</div>

                    // 		<div>
                    // 			<p><label>Password:</label></p>								
                    // 			<InputTag style={{marginBottom:"10px"}}/>
                    // 		</div>
                            
                    // 		<TAR>
                    // 			<MenuLink className="frgt_pwd" onClick={this.showForgotBlock}>Forgot Password?</MenuLink>
                    // 			<LoginSubmitBtn style={{minWidth:"140px",padding:"10px 12px"}}>Submit</LoginSubmitBtn>
                    // 		</TAR>

                    // 		<div id="popup" style={{display:"none"}}>
                    // 			<p><label>Email:</label></p>								
                    // 			<InputTag type="email" id="email" name="email" style={{marginBottom:"10px"}}/>
                    // 		</div>
                    // 	</fieldset>
                    // </form> */}
                
            </div>
        </div>				
        {/* {message && <div className="msgBox"> { message } </div>} */}
    </LoginComponent>
    )
  }
}
export default Login

