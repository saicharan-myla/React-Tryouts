
import useEffect from 'react';

const Left = ()=> {
    return (
        <div className= "Left">
            <p> Hi, my name is </p>
            <p className="Welcome">Sai Charan Reddy.</p>
            <p className ="Welcome">I build things for the web</p>
            I am a software engineer specializing in building awesome digital products. Currently I am focused on building an end-to-end messaging platform.

        </div>
    )
}

// useEffect 

useEffect = (()=> {

}, []);


console.log(useState());
console.log("5");

//Gave up on right and left concept 
// const Right = ()=> {
//     return (
//         <ul className= "Right">
//             <li>Experience</li>
//         </ul>
//     )
// }


const Body = () => {
    return (
        <div className="Content">
       <Left/>
        {/* <Right/> */}
        </div>
    );
};

export default Body;