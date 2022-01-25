import NavLink from '../navLink';
import style from './index.less';
export default () => {
  return (
    <footer className={style.footer}>
      <p>
        ©2021 farmerlzj 提供技术支持 | {' '}
        <a href="https://beian.miit.gov.cn/" rel="nofollow" target="_blank">
          蜀ICP备2021025378号-1
        </a>
      </p>
      <p>
        <NavLink to="/aboutUs">
          关于我们
        </NavLink> | {' '}
         联系我们：farmerlzj@163.com

      </p>
    </footer>
  );
};
