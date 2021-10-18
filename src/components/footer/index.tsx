import style from './index.less';
export default () => {
  return (
    <footer className={style.footer}>
      ©2021 farmerlzj 提供技术支持 | 联系我们：farmerlzj@163.com |{' '}
      <a href="https://beian.miit.gov.cn/" target="_blank">
        蜀ICP备2021025378号-1
      </a>
    </footer>
  );
};
