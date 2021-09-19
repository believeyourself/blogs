import { Helmet } from 'react-helmet';

export interface SiteHeaderProps {
  description?: string;
  keywords?: string;
}

export default ({ description, keywords }: SiteHeaderProps) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};
