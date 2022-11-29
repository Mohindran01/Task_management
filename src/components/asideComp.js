import React from 'react';

import { MenuLink } from "./element";
import {AsideBar, CreateRoleIcn, } from './style';


const AsideWrp = function ({title, user}) {
	return(		
		<AsideBar>
		<div className="overlay">
			<aside className="main-sidebar">
				<section className="sidebar">
					<ul className="sidebar-menu">
						{/* {user && user.userRole.roleName === DESIGNATION_SA && */}
						<li>					
							<MenuLink href={"dashboard?ts=" + Date.now()} className={title=="Create Designation"?"active":""}>
								<div className="td">
									<span>Dashboard</span>
								</div>
								<div className="td WD60">
									<CreateRoleIcn title="Create Designation" className="create_role"></CreateRoleIcn>
								</div>						
							</MenuLink>
						</li>
                        {/* } */}

						
					</ul>
				</section>
			</aside>
			</div>
		</AsideBar>		
	)
}

export default AsideWrp;