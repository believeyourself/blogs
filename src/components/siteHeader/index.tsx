import { Helmet } from 'react-helmet';

export interface SiteHeaderProps {
  description?: string;
  keywords?: string;
  children?:any
}

export default ({ description, keywords,children }: SiteHeaderProps) => {
  return (
    <Helmet>
      {
         description && <meta name="description" content={description} />
      }
      {
        keywords && <meta name="keywords" content={keywords} />
      }
      {children}
    </Helmet>
  );
};
