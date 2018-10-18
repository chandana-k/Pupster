import React from "react";

const DiscoverPic = (props) => {
	return(
		<div className="text-center">
			<button className="btn btn-danger" onClick={props.left}>Nope</button>
			<img src={props.pic} alt=""/>
			<button className="btn btn-success" onClick={props.right}>Yessss!</button>
	    <p>
	    	Number of Dogs who Liked You Too: {props.numFriends}
	    </p>
	  </div>);
};

export default DiscoverPic;