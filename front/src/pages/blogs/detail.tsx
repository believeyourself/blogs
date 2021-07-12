import React, { useCallback, useState } from "react";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

function BlogDetail (props:any) {
  const [blogContent, setBlogContent] = useState("");
  useCallback(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      setBlogContent(contents.toString());
    };
    reader.read();
  }, [props.url]);
  return <div>
    {md.render(blogContent)}
  </div>;
}

export default BlogDetail;
