// function Buttonn(props){
//     const buttonStyle = {
//         color : props.color,
//         fontSize: props.fontSize + 'px'
//     };

//     return (
//         <button style={buttonStyle}>{props.text}</button>
//     );
// }

// function Buttonn({text, color, fontSize}){ //props destructing
//     const buttonStyle = {
//         color : color,
//         fontSize: fontSize + 'px'
//     };

//     return (
//         <button style={buttonStyle}>{text}</button>
//     );
// }

// export default function Button(){
//     return(
//         <div>
//             <Buttonn text="dont click me!" color="blue" fontSize={10}/>
//             <Buttonn text="dont bother clicking me!" color="red" fontSize={15}/>
//             <Buttonn text="click me!" color="green" fontSize={20}/>
//         </div>
//     );
// }

// function Buttonn({ text = "Click Me!", color = "blue", fontSize = 12 }) { // default props
//     const buttonStyle = {
//       color: color,
//       fontSize: fontSize + "px"
//     };

//     return <button style={buttonStyle}>{text}</button>;
//   }

//   export default function Button() {
//     return (
//       <div>
//         <Buttonn />
//         <Buttonn text="Don't Click Me!" color="red" />
//         <Buttonn fontSize={20} />
//       </div>
//     );
//   }

// function Buttonn({text, color, fontSize}){
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize + 'px'
//     };

//     return <button style={buttonStyle}>{text}</button>
// };

//     Buttonn.defaultProps = {
//         color: "blue",
//         fontSize: 10,
//         text: "Click me"
//     };

// export default function Button(){
//     return (
//         <div>
//             <Buttonn />
//             <Buttonn text="Dont Click me" color="Red"/>
//             <Buttonn fontSize={12}/>
//         </div>
//     )
// }


//// FUNCTION AS PROPS

function Buttonn({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function Button() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Buttonn handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
    </div>
  );
}
