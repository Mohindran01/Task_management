import styled from "styled-components";

// create LHS & RHS
const LHS = styled.div`float:left;`;
const RHS = styled.div`float:right;`;

const MenuLink = styled.a`
    cursor:pointer;
`;
const InputTag = styled.input`
    width:100%;padding:10px;font-size:14px;color:#5f5f5f;border:1px solid #e0dcdc;text-transform:lowercase;
    :focus{border-color:#5f5f5f;outline:none}
`;
const Btn = styled(MenuLink)`
    padding:10px;min-width:175px;border-radius:4px;text-transform:capitalize;display:inline-block;font-size:16px;text-align:center;cursor:pointer;
    margin:${props => props.margin};
    width:${props => props.width};
`;
const LoginSubmitBtn = styled(Btn)`
    background-color:#427DC1;color:#fff;border:1px solid #427DC1;
`;

// TAR
const TAR =styled.div`
    text-align:right;
`;
const MainWrp = styled.section`
    margin:90px 100px 40px 90px;padding-top:40px;
`;
// row
const Row= styled.section`
    margin-bottom:30px;
    padding-top:40px;
`;
// create h2
const H2 = styled.h2`
font-size:22px;color:#3A3A3A;border-left:6px solid #D95423;padding-left:10px;margin-bottom:10px;text-transform:uppercase;margin-left:25px;float:left;
`;

const H3 = styled.h3`
    color:#5F5F5F;font-size:16px;font-weight:bold;text-transform:uppercase;margin-top:10px;margin-left:1px;
    ${LHS}{
        margin-top:20px;
    }
`;
const FlagBtn = styled(MenuLink)`
    display:block;border-radius:4px;padding:6px 15px;text-transform:capitalize;color:#fff;text-align:center;cursor:default;
`;
const FlagBtnActive = styled(FlagBtn)`
    background-color:#5AAB00;
`;
const SelectTag = styled.select`
    width:100%;padding:10px;font-size:14px;color:#5f5f5f;background-color:#fff;padding:10px 0;border:1px solid #e0dcdc;
    :focus{border-color:#5f5f5f;outline:none}
`;

const GridTable = styled.div`
overflow:hidden;overflow-x:auto;padding-bottom:10px;
    table{width:100%;border-collapse:collapse;
        tr,td,th{border:0.5px solid #D3D3D3;}
        tr:hover{background-color:#f5f5f5}
        tr{
            td,th{padding:8px;font-size:15px;text-align:left;min-width:140px;max-width:140px;word-break:break-all;}
            th{font-weight:bold;color:#000;}
            td{color:#5F5F5F;vertical-align:top;}
            td.dataDate span,td.dataDate em{display:block;}
            td{
                .projectDetails{color:#5F5F5F;font-size:15px;min-width:200px}                
                {
                    li{margin-right:10px;border:1px solid #DDDDDD;border-radius:3px;display:inline-block;}
                    li:last-child{margin-right:0px;}
                }
                .party_logo,.candidate_logo{width:80px;height:80px;border-radius:99%;margin:0 auto;
                    img{width:100%;height:100%;border-radius:99%;}
                }
            }
        }
    }
`;


export{LHS,RHS,TAR,InputTag,LoginSubmitBtn,MainWrp,Row,MenuLink,H2,H3,FlagBtnActive,SelectTag,GridTable};