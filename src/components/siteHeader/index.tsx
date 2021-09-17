import { Helmet } from "react-helmet";

export interface SiteHeaderProps {
  description?:string;
  keywords?:string;
}

export default ({description,keywords}:SiteHeaderProps)=>{
  return <Helmet>
      <meta name="description" content={description || "前端网，免费前端优质资源、教程"} />
      <meta name="keywords" content={keywords||"HTML,CSS,JavaScript,React,Vue,NodeJs,前端,免费,教程,源码,开源项目"} />
      <meta name="robots" content="nofollow" />
      {
        process.env.REACT_APP_ENV === "production" && 
        <script src="https://hm.baidu.com/hm.js?926fb44514b1d81a809cb5380bf10511">
        </script>
      }
  </Helmet>
}