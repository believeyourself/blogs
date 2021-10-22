import { useLocation, useParams } from 'umi';

export interface NavLinkProps {
  activeClassName?: string;
  className?: string;
  to: string;
  children: any;
  onClick?: () => void;
  isActive?: (match: any, { pathName }: any) => boolean;
  [key: string]: any;
}
const NavLink = (props: NavLinkProps) => {
  const {
    activeClassName,
    className,
    to,
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
    url.pathname.startsWith(props.to);
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
