import React from "react";

// destructure the props
const Person = ({ name, age, image, children }) => {
  return (
    <>
      <article className="user">
        <img src={image} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{age}</p>
        </div>
        {children}
      </article>
    </>
  );
};

// 2nd method
// // pass in props as a parameter
// const Person = (props) => {
//   const { name, age, image } = props.userProp;
//   return (
//     <>
//       <article className="user">
//         <img src={image} alt="" />
//         <div>
//           <h2>{name}</h2>
//           <p>{age}</p>
//         </div>
//       </article>
//     </>
//   );
// };

export default Person;
