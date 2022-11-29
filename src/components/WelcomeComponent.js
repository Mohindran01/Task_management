import React, { Component } from 'react'

import {MenuLink, MainWrp, H2, H3, Row} from './element'

import {MainDiv, ContainerWrp, WelcomeUl, ModuleIcon, CreateRoleIcn, CreateProjIcn, CreateUserIcn, UserProjIcn, JsonConvIcn, JsonSchemaIcn, LocStringIcn, StaticFileIcn, RedisCachIcn, H2iIcn, ComScoreIcn, LogoutIcn} from './style';
import { GridTable,InputTag,SelectTag,FlagBtnActive } from './element';
import AsideWrp from './asideComp';
import HeaderWrp from './headerCompUl';

const sideBarToggle = () => {
	var element = document.getElementById("mainDiv");
   	element.classList.toggle("sidebar-collapse");

   	var htmlTag = document.getElementsByTagName("html")[0];
   	htmlTag.classList.toggle("overFlowHide");
}
 class WelcomeComponent extends Component {

  render() {
    return (
        <MainDiv>
        <div className="sidebar-mini sidebar-collapse" id="mainDiv">
            <MenuLink className="sidebar-toggle menu_icn" onClick={() => sideBarToggle()}></MenuLink>
            <HeaderWrp name="" />
            <AsideWrp title = ""/>
            
            <MainWrp>
            <H2>Welcome !</H2>
                <ContainerWrp>
                    {/* <H3>Modules</H3> */}
                    <Row style={{marginBottom:"0px"}}>
                        <WelcomeUl>
                            {/* {props.user.user && props.user.user.userRole.roleName === DESIGNATION_SA && */}
                            <li>
                                <MenuLink href={"createDesignation?ts=" + Date.now()}>
                                    <div className="td WD60">
                                        <CreateRoleIcn className="create_role"></CreateRoleIcn>
                                    </div>
                                    <div className="td"><p>Dashboard</p></div>
                                </MenuLink>
                            </li>
                            {/* } */}
                            
                            
                        </WelcomeUl>
                    </Row>
                </ContainerWrp>
                <GridTable>
								<table className="overFlowTable">
									<thead> 
										<tr>
											
											<th>Name</th> 

											<th style={{width:"100px"}}>Status</th>
											{/* <th style={{width:"120px"}}>Action</th> */}
										</tr>
									</thead>
									<tbody>
									
												<tr >
												
														<td className="dataName"><InputTag name = "editRoleName"/></td>
													<td>
{/* 																
																		<SelectTag className = "tickerType" name="editRoleIsActive" >
																				<option key = '1' value = {true}>Active</option>
																				<option key = '0' value = {false}>Inactive</option>
																		</SelectTag> */}
																	 <FlagBtnActive>active</FlagBtnActive> 
																
														</td>
													
												</tr>

																		
									</tbody>
								</table>
							</GridTable>
            </MainWrp>
        </div>
    </MainDiv>
    )
  }
}
export default WelcomeComponent