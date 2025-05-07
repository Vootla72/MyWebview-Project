import React, { useState } from "react";
import { dummyData } from "./constants";
import { CommentBoxComponent } from "./CommentBoxComponent";

export const CommentBoxContainer = () => {
  const [data, setData] = useState(dummyData);

  return (
    <div style={{margin:10,  flexDirection:'column'}}>
    <CommentBoxComponent  comment={""} children={data}/>

  </div>

  )

  return (
    <>
      <div>container</div>
      {dummyData?.map((ele) => {
        return (
          <div style={{margin:10, display:'flex', flexDirection:'column'}}>
            <CommentBoxComponent key={ele.id} comment={ele.comment} children={ele.children}/>

          </div>
        );
      })}
    </>
  );
};
