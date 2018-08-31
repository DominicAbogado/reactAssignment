import React from "react";
import "./FriendCard.css";

// class FriendCard extends React.Component{
//   click(){
//     alert("Click worked")
//   }

  

//   render(props){
//     return (
//           <div className="card">
//             <div className="img-container">
//               <img alt={props.name} src={props.image} />
//             </div>
//             <div className="content">
//               <ul>
//                 <li>
//                   <strong>Name:</strong> {props.name}
//                 </li>
//               </ul>
//             </div>
//           </div>
//     )
//   }


// }

const FriendCard = props => (
  <div className="card" onClick={props.rearrange}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
