import SiteHeader from '@/components/siteHeader';
import { useParams } from 'umi';
// import {useState} from "react";
// import { Document, Page,pdfjs } from 'react-pdf';
// import {Spin,Pagination} from "antd";
// import styles from "./style.less";

export default () => {
  const { path } = useParams<{ path: string }>();
  const name = path.split('.')[0];

  // pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

  // const [numPages, setNumPages] = useState(0);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }:any) {
  //   setNumPages(numPages);
  // }
  // return <>
  //         <SiteHeader
  //           title={name}
  //           keywords={`${name},前端开发`}
  //           description={`${name},前端开发`}
  //         />
  //         <Document
  //           className={styles.pdf}
  //           file={`/static/ebooks/${path}`}
  //           loading={<div className={styles.loading}><Spin size="large" /></div>}
  //           onLoadSuccess={onDocumentLoadSuccess}
  //         >
  //           <Page pageNumber={pageNumber} />
  //         </Document>
  //         <Pagination
  //           total={numPages}
  //           pageSize={1}
  //           onChange={
  //             (page)=>{
  //               setPageNumber(page);
  //             }
  //           }
  //         />
  //       </>;

  return (
    <>
      <SiteHeader
        title={name}
        keywords={`${name},前端开发`}
        description={`${name},前端开发`}
      >
        <title>{path.split('.')[0]}</title>
      </SiteHeader>
      <embed
        src={`http://cloud.qianduan.shop/${path}`}
        type="application/pdf"
        style={{ width: '100vw', height: '100vh' }}
      ></embed>
    </>
  );
};
