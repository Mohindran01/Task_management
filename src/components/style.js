import styled from 'styled-components';
import {LHS,RHS} from "./element"

const Login = styled.div`
display:table;width:100%;height:100%;position:absolute;top:0;left:0;
    .td{display:table-cell;vertical-align:middle;width:50%;}
    .blue_bg{background:#427DC1;
       
    }

    .white_bg{background:#FFFFFF;
        .ggl_login,.login_cred{width:360px;margin:0 auto;}
        .login_cred{margin-top:25px;}
        .ggl_login{
            a{display:inline-block;padding:13px 20px;box-shadow:0 0px 2px 0 rgba(0,0,0,0.50);border-radius:4px;cursor:pointer;
                          }
        }
        .login_cred{
            fieldset{margin:2px;padding:10px 12px;border:1px solid #D3D3D3;border-radius:4px;
                legend,p{font-size:14px;color:#5F5F5F;}
                legend{padding:0px 4px;
                    h2{font-weight:bold;}
                }
                p{margin-bottom:10px;}
                .frgt_pwd_msg p{text-align:center;}
                .frgt_pwd{color:#337ab7;font-size:12px;display:inline-block;float:left;padding: 14px 0;}
            }
        }
    }
    .msgBox{position:absolute;bottom:20px;left:calc(50% - 125px);padding:14px 16px;background:#1C1C1C;color:#FAFAFA;border-radius:4px;box-shadow:0 0 4px 1px rgba(0,0,0,0.30);font-size:16px;}
`;
// Main Div
const MainDiv = styled.div`
.noBdr{border-top:1px solid transparent !important;border-bottom:1px solid transparent !important}
.sidebar-toggle{width:66px;height:60px;background-color:#1D2029;background-repeat:no-repeat;background-position:center;position:fixed;top:0;left:0;z-index:9999}

.sidebar-mini.sidebar-collapse{
    .menu_icn{background-image:url("../static/images/icn_menu.svg");}
}
.sidebar-mini.sidebar-collapse{
    .main-sidebar{-webkit-transform:translate(0, 0);-ms-transform:translate(0, 0);-o-transform:translate(0, 0);transform:translate(0, 0);width:66px !important;}
    .sidebar-menu{
        li{
            a{
                .td{
                    span{display:none;-webkit-transform: translateZ(0);}
                }
            }
        }
    }
    .content-wrapper{margin-left:66px;}
    .overlay{width:66px}
}
.showPopup .pop{width:100%}
.showPopup .pop .popupHolder{-webkit-transition:-webkit-transform .3s ease-in-out,width .3s ease-in-out;-moz-transition:-moz-transform .3s ease-in-out,width .3s ease-in-out;-o-transition:-o-transform .3s ease-in-out,width .3s ease-in-out;transition:transform .3s ease-in-out,width .3s ease-in-out;width:50%}

.lowerCaseNone{text-transform:capitalize;}
`;



const ContainerWrp = styled.section`
padding:10px;border:1px solid #D3D3D3;border-radius:4px;background-color:#fff;margin:0px 15px;
    {
        .wd25,.wd33,.wd50{display:inline-block;float:left;
            .textHolder{border:1px solid #D3D3D3;border-radius:4px;padding:10px;width:calc(100% - 20px);background-color:#fff;min-height:90px;
                .title{margin-bottom:10px;font-size:14px;color:#5F5F5F;text-transform:capitalize;}  
            }
        }
        .star{color:rgba(255,0,0,1);font-size:14px;}
    }
    .tab{overflow:hidden;border-bottom:1px solid #ccc;
        button{background-color:#fff;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:0.3s;font-size:18px;color:#ABABAB;font-weight:normal;text-transform:uppercase;border-bottom:4px solid transparent;
            :hover{border-bottom:4px solid #D95423;color:#D95423;}            
        }
        button.active{border-bottom:4px solid #D95423;color:#D95423;}
    }    
    .tabcontent{display:none;padding:10px 0px;}
    .para_list_style{display:list-item;list-style:disc;margin-left:15px;font-size:14px;color:#5F5F5F;margin-bottom:10px;}
`;

const WelcomeUl = styled.ul`
    li{width:24%;display:inline-block;margin-right:1%;margin-bottom:10px;
        a{border:1px solid #D3D3D3;padding-top: 50px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 5px;
            .td{display:table-cell;vertical-align:middle;
                p{padding-left:10px;font-size:15px;color:#5F5F5F;}
            }
            .td.WD60{width:66px;height:60px;background:#1F2432;}
        }
        a:hover,a.active{
            .td{
                .create_role{background-image:url("../static/images/icn_create_role_hover.svg");}
                .create_project{background-image:url("../static/images/icn_create_project_hover.svg");}
                .create_user{background-image:url("../static/images/icn_create_user_hover.svg");}
                .user_project{background-image:url("../static/images/icn_user_project_details_hover.svg");}
                .json_converter{background-image:url("../static/images/icn_json_converter_hover.svg");}
                .json_schema{background-image:url("../static/images/icn_json_schema_hover.svg");}
                .localization_string{background-image:url("../static/images/icn_localization_string_api_hover.svg");}
                .static_file_upd{background-image:url("../static/images/icn_static_file_updater_hover.svg");}
                .redis_caching{background-image:url("../static/images/icn_redis_caching_hover.svg");}
                .h2i_icon{background-image:url("../static/images/icn_h2i_hover.svg");}
                .com_score{background-image:url("../static/images/icn_comscore_hover.svg");}
                .logout{background-image:url("../static/images/icn_logout_hover.svg");}
            }
        
    }
`;
// Module Icons
const ModuleIcon = styled.div`
    width:66px;height:60px;background-repeat:no-repeat;background-position:center;
`;
const CreateRoleIcn = styled(ModuleIcon)`
    background-image:url("../static/images/icn_create_role.svg");
`;


const AsideBar = styled.section`
.overlay{position:fixed;width:100%;height:100%;top:0;left:0;background:rgb(0,0,0,0.5);z-index:999}
.main-sidebar{position:fixed;top:0;left:0;bottom:0;padding-top:60px;min-height:100%;width:286px;-webkit-transition:-webkit-transform .3s ease-in-out,width .3s ease-in-out;-moz-transition:-moz-transform .3s ease-in-out,width .3s ease-in-out;-o-transition:-o-transform .3s ease-in-out,width .3s ease-in-out;transition:transform .3s ease-in-out,width .3s ease-in-out;background-color:#272B35;z-index:1;overflow-y:auto}
.sidebar{padding-bottom:10px;
    .sidebar-menu{white-space:nowrap;overflow:hidden;
        li{
            a{display:table;width:100%;background:#272B35;
                .td{display:table-cell;vertical-align:middle;
                    .sidebar-menu-icn{width:66px;height:60px;background-repeat:no-repeat;background-position:center;}                    
                    span{padding-left:10px;font-size:15px;color:#5F5F5F;}
                }
                .td.WD60{width:66px;height:60px}
            }
            a:hover,a.active{background:#1F2432;
                .td{
                    .sidebar-menu-icn{width:66px;height:60px;background-repeat:no-repeat;background-position:center;}
                    .create_role{background-image:url("../static/images/icn_create_role_hover.svg");}
                    .create_project{background-image:url("../static/images/icn_create_project_hover.svg");}
                    .create_user{background-image:url("../static/images/icn_create_user_hover.svg");}
                    .user_project{background-image:url("../static/images/icn_user_project_details_hover.svg");}
                    .json_converter{background-image:url("../static/images/icn_json_converter_hover.svg");}
                    .json_schema{background-image:url("../static/images/icn_json_schema_hover.svg");}
                    .localization_string{background-image:url("../static/images/icn_localization_string_api_hover.svg");}
                    .static_file_upd{background-image:url("../static/images/icn_static_file_updater_hover.svg");}
                    .redis_caching{background-image:url("../static/images/icn_redis_caching_hover.svg");}
                    .h2i_icon{background-image:url("../static/images/icn_h2i_hover.svg");}
                    .com_score{background-image:url("../static/images/icn_comscore_hover.svg");}
                    .logout{background-image:url("../static/images/icn_logout_hover.svg");}
                    span{color:#FFFFFF;}
                }
            }
        }
    }
}
 
`;


// top header bar
const TopHeader = styled.header`
position:fixed;top:0;left:5;width:100%;z-index:999;background:rgb(255, 255, 255);box-shadow:0 -1px 4px 0 rgba(0,0,0,0.50);
    nav{padding:10px 20px 10px 10px;margin-left:66px;
        ul{
            li{
                .lucretia_logo,.profile{display:table;width:100%;
                    .td{display:table-cell;vertical-align:middle;}
                    .logo{width:40px;height:40px;background:#fff;box-shadow:0 0 4px 0 rgba(0,0,0,0.20);border-radius:99%;
                        img{width:60%;height:60%;margin:0 auto;display:block}                        
                    }
                    span{font-size:22px;color:#6F6F6F;padding-left:6px}
                }
                .profile{
                    .td.WD38{width:38px}
                    .profile_img{width:38px;height:38px;border-radius:99%;position:relative;
                        img{width:100%;height:100%;border-radius:99%}
                        em{width:14px;height:14px;background:#FF0000;border:3px solid #FFFFFF;border-radius:99%;position:absolute;bottom:0px;left:0px}
                    }
                    span{font-size:14px;color:#6F6F6F;padding:0px 15px 0px 6px;display:block}
                    .profile_arrow_down{background-image:url("../static/images/profile_icn_down.svg");background-position:right center;background-repeat:no-repeat;background-size:10px;}
                    .profile_arrow_up{background-image:url("../static/images/profile_icn_up.svg");color:#000;}
                } 
            }
            .profile-popover{padding:5px 20px;background:#fff;border-radius:10px;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.2);position:absolute;top:50px;right:-5px;display:none;
                ul{
                    li{
                        a{padding:10px 0;border-bottom:1px solid #d8d8d8;font-size:14px;color:#6F6F6F}
                        a.btn_logout{background:url("../static/images/logout.svg") no-repeat left center;padding-left:26px;}
                    }
                    li:last-child a{border:none;}
                }
            }
        }
    }

`;

export {Login,MainDiv,ContainerWrp,WelcomeUl,CreateRoleIcn,AsideBar,TopHeader};