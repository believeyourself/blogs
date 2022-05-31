import { useLocation, useParams } from 'umi';

export interface NavLinkProps {
  activeClassName?: string;
  className?: string;
  to: string;
  children: any;
  exact?: boolean;
  onClick?: () => void;
  isActive?: (match: any, { pathName }: any) => boolean;
  [key: string]: any;
}
const NavLink = (props: NavLinkProps) => {
  const {
    activeClassName,
    className,
    to,
    exact,
    children,
    onClick,
    isActive,
    ...restProps
  } = props;
  const host = process.env.SITE_DOMAIN;
  const url = useLocation();
  const match = useParams();
  const active =
    (props.isActive && props.isActive(match, url)) ||
    (!exact && url.pathname.startsWith(props.to)) ||
    (exact && url.pathname === props.to);
  return (
    <a
      {...restProps}
      href={host + to}
      onClick={onClick}
      className={`${className} ${active && activeClassName}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
