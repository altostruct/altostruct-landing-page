import React from "react";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";

function Blog() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="mt-24">
        <Content>
          <h1>Kunskapsbank</h1>
          <div className="mt-10">
            <div className="h-32">asd</div>
            <div className="h-32">asd</div>
            <div className="h-32">asd</div>
            <div className="h-32">asd</div>
            <div className="h-32">asd</div>
          </div>
        </Content>
      </div>
    </div>
  );
}
export default Blog;
