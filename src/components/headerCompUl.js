import React, { Component } from 'react';
import { MenuLink } from "./element";
import {TopHeader} from './style';



// const isBrowser = process.browser;
// const logoutFunction = () => {
// 	console.log("inside logout function")
// 	var logout_clicked = document.getElementById("profile-popover");
// 	var profile_arrow = document.getElementById("profile_arrow");
// 	if(logout_clicked.style.display === "block"){
// 		logout_clicked.style.display = "none";
// 		profile_arrow.classList.remove("profile_arrow_up");
// 	}else{
// 		logout_clicked.style.display = "block";
// 		profile_arrow.classList.add("profile_arrow_up");
// 	}
// }


class HeaderWrp extends Component{
	constructor(props){
		super(props)
		this.state ={
			notificationData:"",
			loginToken:this.props.loginToken
		}
		this.idleTimer = null
            this.handleOnIdle = this.handleOnIdle.bind(this)
    }

	handleOnIdle (event) {
		console.log('user is idle', event)
		console.log('last active', this.idleTimer.getLastActiveTime())
		
	}
	

	async componentDidMount(){
		// let notificationData = !this.props.notificationComponent && await fetchNotificationData(this.state.loginToken,1)
        //  this.setState({notificationData:notificationData})
	}
   
	render(){
		let name = this.props && this.props.name
		let imageUrl = this.props && this.props.imageUrl
		let notiData = this.props.notiData
		let notificationData = this.state && this.state.notificationData
		let data = this.props.data
		let str = notiData || data || notificationData;
		let count= str && str.unreadNotifications;
		return(
			<TopHeader>
			{/* <IdleTimer ref={ref=>{this.idleTimer=ref}} timeout={3600000} onIdle={this.handleOnIdle}/> */}
			<nav>
				<ul className="clearfix">
					<li className="LHS">
						<MenuLink href={"welcome?ts=" + Date.now()} className="lucretia_logo">
							<div className="td logo" >
								<img src="static/images/logo.png"/>
							</div>
							<span className="td">Dashboard</span>
						</MenuLink>
					</li>
					<li className="RHS" style={{position:"relative"}}>
						<MenuLink className="profile" >
							<div className="td WD38">
								<div className="profile_img">
									<img src={imageUrl}/>
									{count>0 && <em></em>}
								</div>
							</div>
							<div className="td">
								<span id="profile_arrow" className="profile_arrow_down">{name}</span>
							</div>
						</MenuLink>
						<div className="profile-popover" id="profile-popover">
							<ul>
								<li>
									{/* {isBrowser && <GoogleLogout
										clientId={GOOGLE_LOGIN_CLIENT_ID}
										buttonText="Logout"
										onLogoutSuccess={logoutUser}
										render={(renderProps) => (
											<MenuLink className="btn_logout"  onClick= {renderProps.onClick}>Logout</MenuLink>
										)}
									/>} */}
									<MenuLink className="btn_logout"  >Logout</MenuLink>
								</li>
								<li>
									<MenuLink href="notification">Notifications</MenuLink>		
								</li>
							</ul>							
						</div>
					</li>
				</ul>
			</nav>
		</TopHeader>
		)
	}
}



// const HeaderWrp = function ({name, imageUrl, notificationData, data, notiData=false}) {
// 	let str = notiData || data || notificationData;
// 	let count= str && str.unreadNotifications;
// 	console.log("glcid",GOOGLE_LOGIN_CLIENT_ID)
// 	return(
// 		<TopHeader>
// 			<nav>
// 				<ul className="clearfix">
// 					<li className="LHS">
// 						<MenuLink href={"welcome?ts=" + Date.now()} className="lucretia_logo">
// 							<div className="td logo" >
// 								<img src="static/images/logo.png"/>
// 							</div>
// 							<span className="td">Lucretia</span>
// 						</MenuLink>
// 					</li>
// 					<li className="RHS" style={{position:"relative"}}>
// 						<MenuLink className="profile" onClick={() => logoutFunction()}>
// 							<div className="td WD38">
// 								<div className="profile_img">
// 									<img src={imageUrl}/>
// 									{count>0 && <em></em>}
// 								</div>
// 							</div>
// 							<div className="td">
// 								<span id="profile_arrow" className="profile_arrow_down">{name}</span>
// 							</div>
// 						</MenuLink>
// 						<div className="profile-popover" id="profile-popover">
// 							<ul>
// 								<li>
// 									{/* {isBrowser && <GoogleLogout
// 										clientId={GOOGLE_LOGIN_CLIENT_ID}
// 										buttonText="Logout"
// 										onLogoutSuccess={logoutUser}
// 										render={(renderProps) => (
// 											<MenuLink className="btn_logout"  onClick= {renderProps.onClick}>Logout</MenuLink>
// 										)}
// 									/>} */}
// 									<MenuLink className="btn_logout"  onClick= {logoutUser}>Logout</MenuLink>
// 								</li>
// 								<li>
// 									<MenuLink href="notification">Notifications</MenuLink>		
// 								</li>
// 							</ul>							
// 						</div>
// 					</li>
// 				</ul>
// 			</nav>
// 		</TopHeader>
// 	)
// }

export default HeaderWrp;