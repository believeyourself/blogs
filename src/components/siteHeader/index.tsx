import { Helmet } from 'react-helmet';

export interface SiteHeaderProps {
  title: string;
  description: string;
  keywords: string;
  children?: any;
}

export default ({
  title,
  description,
  keywords,
  children,
}: SiteHeaderProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {children}
    </Helmet>
  );
};
