import React, { useCallback, useState } from "react";

export const CommentBoxComponent = ({ children, comment }) => {
  const [data, setData] = useState(children);

  // console.log("data out", data)

  const [val, setVal] = useState("");
  const handleOnChange = (e, id) => {
    console.log("****", e.target.value, id);

    setVal(e.target.value);
  };

  const onReplyClick = useCallback(
    (id) => {
      console.log("val in", val);
      // setData((ele)=> {
      //     console.log(ele. id, "ele ((((")
      //     if(ele.id==id){
      //         console.log("id in", id)

      //         return (
      //             [...data, {"children":[{
      //                 id:Date.now(),
      //                 comment: val,
      //                 children:[]
      //             }]}]
      //                 )

      //     }

      // })

      setData((ele) => {
        console.log(ele, "&&&&", id);

        const filteredItem = ele.filter((element, index) => element.id == id);

        return [
          ...data,
          {
            ...filteredItem,
            children: [
              ...children,
              {
                id: Date.now(),
                comment: val,
                children: [],
              },
            ],
          },
        ];
      });

      console.log("children id", children);
    },
    [children, val, data]
  );
  // console.log("children in component", Children)
  return (
    <>
      <div>{comment}</div>

      {Array.isArray(data) && data.length > 0 ? (
        <>
          {/* <input
             type="text"
             onChange={(e)=>handleOnChange(e)}
             value={val}
             />
             <button onClick ={()=> onReplyClick(ele.id)}>Reply</button> */}

          {data.map((ele) => (
            <div key={ele.id}>
              <input
                type="text"
                onChange={(e) => handleOnChange(e, ele.id)}
                value={val}
              />
              <button onClick={() => onReplyClick(ele.id)}>Reply</button>
              <div
                style={{
                  flexDirection: "column",
                  margin: 10,
                  border: "2px solid black",
                }}
              >
                <CommentBoxComponent
                  key={ele.id}
                  comment={ele.comment}
                  children={ele.children}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>{comment}</div>
      )}
    </>
  );
};
