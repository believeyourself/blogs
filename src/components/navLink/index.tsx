import { useLocation, useParams } from "umi";

export interface NavLinkProps {
  activeClassName?:string;
  className?:string;
  to:string;
  children:React.ReactDOM | string;
  isActive: (match:any,{pathName}:any) => boolean
}
const NavLink = (props:NavLinkProps) =>{
  const url = useLocation();
  const match = useParams();
  const active = (props.isActive && props.isActive(match,url)) || url.pathname === props.to;
  return <a href={props.to} className={`${props.className} ${active &&  props.activeClassName}`}>
    {props.children}
  </a>
}

export default NavLink;