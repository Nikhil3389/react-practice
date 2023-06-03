// import logo from "./logo.svg";
// import React, {
//   Component,
//   useDeferredValue,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// import "./App.css";
// import Students from "./components/Students";
// import Profile from "./components/Profile";
// import User from "./components/User";
// adding using state class

// class App extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       data :"Nikhil"
//     }
//   }
//   apple()
//   {
//     this.setState({data:"Kataria"})

//   }

// render()
// {
//   return (
//     <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={() => this.apple()}>Click Me</button>
//     </div>
//   );

// }

// }

// ####################### props apps.js #########################

// function App()
// {
//   return(
//     <div className="App">
//       <h1>Hello</h1>
//       <Students name ={"Nikhil"} email={"abc@gmail.com"}/>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>
//   )
// }
// export default App;

// ############# class props #################
// export default class App extends Component

// {

//   constructor()
//   {
//     super();
//     this.state={
//       name: "NIKHIL"
//     }
//   }
//   render()
//   {
//     return(
//          <div className="App">
//       <h1>Hello</h1>
//       <Students name ={this.state.name}/>
//       <button onClick={() => this.setState({name:"Kataria"})}>Update Name</button>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>

//     )
//   }
// }

// #################### TAKING INPUT AND HIDING ################
// function App()

// {
//   const [data,setData] = useState(null)
//   const [print,setPrint] =  useState(false)
//   function getData(val)
//   {
//     console.log(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return(
//     <div className="App">
//       {
//         print?
//         <h1>Hello</h1>
//         :
//         null
//       }

//       <input type="text" onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print Data</button>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>
//   )
// }
// export default App;
// ##################  Toggle Button ###############
// function App()

// {
//   const [status,setStatus] = useState(false);

//   return(
//     <div className="App">
//       {
//         status ?
//         <h1>Helll0</h1>
//         :
//         null
//       }
//       <button onClick={() => setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }
// export default App;

// ##################### CREATING FORMS ################
// function App()

// {
//   const [name,setName] = useState("")
//   const [tnc,setTnc] =useState(false)
//   const [interest,setInterest] =useState("")
//   function getformData(e)
//   {
//     e.preventDefault()
//     console.log(name,tnc,interest)
//   }
//   return(
//     <div className="App">
//       <h1> Hello</h1>
// <form className='' onSubmit={getformData}>
//   <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10">
//       <input type="email" class="form-control" id="inputEmail3" onChange={(e) =>setName(e.target.value)}/>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//     <div class="col-sm-10">
//       <input type="password" class="form-control" id="inputPassword3"onChange={(e) =>setInterest(e.target.value)}/>
//     </div>
//   </div>
//   <fieldset class="row mb-3">
//     <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
//     <div class="col-sm-10">
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridRadios1">
//           First radio
//         </label>
//       </div>
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridRadios2">
//           Second radio
//         </label>
//       </div>
//       <div class="form-check disabled">
//         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridRadios3">
//           Third disabled radio
//         </label>
//       </div>
//     </div>
//   </fieldset>
//   <div class="row mb-3">
//     <div class="col-sm-10 offset-sm-2">
//       <div class="form-check">
//         <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridCheck1">
//           Example checkbox
//         </label>
//       </div>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>
//     </div>
//   )
// }
// export default App;
// #################### If condition ################
// function App(){

//   useEffect(() =>{
//     console.log("useEffect is working")
//   })
//   function getData(){

//   alert("here is data")
//   }
//   return(

//     <div className="App">
//       <User data={getData}/>
//     </div>
//   )
// }
// export default App

// ###############   REACT JS SEND DATA CHILD TO PARENTS ###############
// function App() {
//   function getData(data) {
//     alert(data);
//   }
//   return (
//     <div className="App">
//       <User alert={getData} />
//     </div>
//   );
// }
// export default App;
// #################### PURE COMPONENT ######################
// class App extends Component{
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//   render()
//   {
//     return (
//       <div className='App'>
//         <h1>Hello</h1>
//         <User count={this.state.count}/>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>
//           Click
//         </button>
//       </div>

//     )
//   }
// }
// export default App;
// ############################ UNCONTROLLED COMPONENTS #########################

// function App() {
//   let refInput = useRef(null);
//   function submitForm(e) {
//     e.preventDefault();
//     console.log("Input 1 :", refInput.current.value);
//     let input3  = document.getElementById('input3').value
//     console.log('input 2 : ' , input3)
//   }
//   return (
//     <div className="App">
//       <h1>Uncontrolled Components</h1>
//       <form onSubmit={submitForm}>
//         <input ref={refInput} type="text" /> <br /> <br />
//         <input id = "input3" type="text" /> <br /> <br />
//         <button> Submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;

// #################################  HOC ########################

// function App() {

//   return (
//     <div className="App">
//     <h1>HOC</h1>
//     <HOCRed cmp={Counter}/>

//     </div>
//   );
// }
// function HOCRed(props){
//   return <h2 style={{backgroundColor:'red' }}> Red : <props.cmp/> </h2>
// }
// function Counter(){
//   const [data,setData] = useState(0)
//   return (
//     <div>
//       <h1>count : {data}</h1>
//       <button onClick={() => setData(data + 1)}> Click</button>
//     </div>
//   );

// }

// export default App;

// ##########################  ROUTING ########################
// import Nav from "./Nav";
// import Navigation from "./Navigation";
// function App() {
//   return (
//     <div className="App">
//       <h1>Dyanmic Programming </h1>
//       <Nav />
//       <Navigation/>
//     </div>
//   );
// }



// export default App;

// ################################## PREVIOUS STATE ####################
// function App() {
//   const [count,setCount] = useState(1)
//   function updateCounter(){
//     for(let i =0;i<5;i++)
//     {
//        setCount((pre) => {
//          return pre + 1;
//        });
//     }
   
//   }
//   return (
//     <div className="App">
//       <h1>Previous State </h1>
//       <h1>{count}</h1>
//       <button onClick={updateCounter}> Update</button>
//     </div>
//   );
// }

// export default App;


// #######################  COMPANY PROJECT ###################
// import { useState } from "react";
// import { useState } from "react";
// import Papa from "papaparse";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// import "./App.css"; // Import your stylesheet

// function App() {
//   const [histogramData, setHistogramData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://www.terriblytinytales.com/test.txt"
//       );
//       const csvData = Papa.parse(response.data).data;

//       // get frequency of each word
//       const freqMap = new Map();
//       csvData.forEach((row) => {
//         row[0].split(" ").forEach((word) => {
//           if (freqMap.has(word)) {
//             freqMap.set(word, freqMap.get(word) + 1);
//           } else {
//             freqMap.set(word, 1);
//           }
//         });
//       });

//       // sort by frequency and get top 20 words
//       const sortedFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
//       const topWords = sortedFreq.slice(0, 20).map((entry) => ({
//         word: entry[0],
//         count: entry[1],
//       }));

//       setHistogramData(topWords);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleExport = () => {
//     const csvString = Papa.unparse(histogramData);
//     const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "histogram.csv";
//     link.click();
//   };

//   return (
//     <div className="container">
//       {" "}

//       <button onClick={fetchData}>Submit</button>
//       {histogramData.length > 0 && (
//         <div className="chart-container">
//           {" "}
//           {/* // Use a chart-container for the chart and button */}
//           <BarChart width={900} height={400} data={histogramData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="word" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="count" fill="#8884d8" />
//           </BarChart>
//           <button onClick={handleExport}>Export</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Papa from "papaparse";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// import "./App.css"; // Import your stylesheet

// function App() {
//   const [histogramData, setHistogramData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://www.terriblytinytales.com/test.txt"
//       );
//       const csvData = Papa.parse(response.data).data;

//       // get frequency of each word
//       const freqMap = new Map();
//       csvData.forEach((row) => {
//         row[0].split(" ").forEach((word) => {
//           if (freqMap.has(word)) {
//             freqMap.set(word, freqMap.get(word) + 1);
//           } else {
//             freqMap.set(word, 1);
//           }
//         });
//       });

//       // sort by frequency and get top 20 words
//       const sortedFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
//       const topWords = sortedFreq.slice(0, 20).map((entry) => ({
//         word: entry[0],
//         count: entry[1],
//       }));

//       setHistogramData(topWords);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleExport = () => {
//     const csvString = Papa.unparse(histogramData);
//     const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "histogram.csv";
//     link.click();
//   };
//  const titleStyle = {
//    fontSize: "48px",
//    fontWeight: "bold",
//    color: "#F44336",
//  };
//   return (
//     <div className="container">
//       {!isSubmitted && <button onClick={fetchData}>Submit</button>}
//       {histogramData.length > 0 && (
//         <div className="chart-container" >
//           <h1 style={titleStyle}>Histogram</h1>
//           {/* <h1> </h1> */}
//           <BarChart
//             width={900}
//             height={400}
//             data={histogramData}
//             animationBegin={0} // set to 0 to start the animation immediately
//             animationDuration={1000} // duration of the animation in milliseconds
//           >
//             <CartesianGrid sxtrokeDasharray="3 3" />
//             <XAxis dataKey="word" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="count" fill="#8884d8" />
//           </BarChart>
//           <button onClick={handleExport}>Export</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import Papa from "papaparse";
// import axios from "axios";
// import "aframe";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// import "./App.css"; // Import your stylesheet
// import NavBar from "./components/Nav";
// import Footer from "./components/Footer";

// function App() {
//   const [histogramData, setHistogramData] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://www.terriblytinytales.com/test.txt"
//       );
//       const csvData = Papa.parse(response.data).data;

//       // get frequency of each word
//       const freqMap = new Map();
//       csvData.forEach((row) => {
//         row[0].split(" ").forEach((word) => {
//           if (freqMap.has(word)) {
//             freqMap.set(word, freqMap.get(word) + 1);
//           } else {
//             freqMap.set(word, 1);
//           }
//         });
//       });

//       // sort by frequency and get top 20 words
//       const sortedFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
//       const topWords = sortedFreq.slice(0, 20).map((entry) => ({
//         word: entry[0],
//         count: entry[1],
//       }));

//       setHistogramData(topWords);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleExport = () => {
//     const csvString = Papa.unparse(histogramData);
//     const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "histogram.csv";
//     link.click();
//   };

//   const chartStyle = {
//     margin: "0 auto",
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="container">
//         {!isSubmitted && <button onClick={fetchData} style={{borderRadius:5}}>Submit</button>}
//         {histogramData.length > 0 && (
//           <div className="chart-container" style={chartStyle}>
//             <h1
//               style={{ fontSize: "48px", fontWeight: "bold", color: "#F44336" }}
//             >
//               Histogram
//             </h1>
//             <BarChart
//               width={900}
//               height={400}
//               data={histogramData}
//               animationBegin={0}
//               animationDuration={1000}
//             >
//               <XAxis dataKey="word" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="count" fill="#8884d8" />
//             </BarChart>
//             <button onClick={handleExport}>Export</button>
//           </div>
//         )}
//         <a-box
//           position="0 1 -5"
//           rotation="0 45 0"
//           color="#4CC3D9"
//           animation="property: rotation; dur: 2000; easing: linear; loop: true; to: 0 405 0"
//         ></a-box>
        
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function handleIncrement() {
//     setCount(count + 1);
//   }

//   function handleDecrement() {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <button id="incrementBtn" onClick={handleIncrement}>
//         +
//       </button>
//       <h1>{count}</h1>
//       <button
//         id="decrementBtn"
//         onClick={handleDecrement}
//         disabled={count === 0}
//       >
//         -
//       </button>
//     </div>
//   );
// }

// export default Counter;

// import React, { useState } from "react";
// import ReactDOM, { createRoot } from "react-dom";

// const rowStyle = {
//   display: "flex",
// };

// const squareStyle = {
//   width: "80px",
//   height: "80px",
//   backgroundColor: "#eddd",
//   margin: "4px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "20px",
//   color: "white",
// };

// const boardStyle = {
//   backgroundColor: "#tee",
//   width: "290px",
//   alignItems: "center",
//   justifyContent: "center",
//   display: "flex",
//   flexDirection: "column",
//   border: "3px solid #eee",
// };

// const containerStyle = {
//   display: "flex",
//   alignItems: "center",
//   flexDirection: "column",
//   marginTop: "15px",
//   marginBottom: "15px",
//   fontWeight: "bold",
//   fontSize: "16px",
// };

// const buttonStyle = {
//   marginTop: "15px",
//   marginBottom: "15px",
//   width: "80px",
//   height: "40px",
//   backgroundColor: "#8acaca",
//   color: "white",
//   fontSize: "16px",
// };

// function Square(props) {
//   return (
//     <div className="square" style={squareStyle} onClick={props.onClick}>
//       {props.value}
//     </div>
//   );
// }

// function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);
//   const [winner, setWinner] = useState(null);

//   function handleClick(i) {
//     if (winner || squares[i]) {
//       return;
//     }
//     const newSquares = squares.slice();
//     newSquares[i] = xIsNext ? "X" : "O";
//     setSquares(newSquares);
//     setXIsNext(!xIsNext);
//     setWinner(calculateWinner(newSquares));
//   }

//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (
//         squares[a] &&
//         squares[a] === squares[b] &&
//         squares[a] === squares[c]
//       ) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

//   function renderSquare(i) {
//     return <Square value={squares[i]} onClick={() => handleClick(i)} />;
//   }

//   function resetBoard() {
//     setSquares(Array(9).fill(null));
//     setXIsNext(true);
//     setWinner(null);
//   }

//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else if (squares.every((square) => square !== null)) {
//     status = "Tie game!";
//   } else {
//     status = `Next player: ${xIsNext ? "X" : "O"}`;
//   }

//   return (
//     <div style={boardStyle}>
//       <div id="statusArea">{status}</div>
//       {renderSquare(0)}
//       {renderSquare(1)}
//       {renderSquare(2)}
//       <div style={rowStyle}>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div style={rowStyle}>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button style={buttonStyle} onClick={() => resetBoard()}>
//         Reset Board
//       </button>
//     </div>
//   );
// }

// function Game() {
//   return (
//     <div className="game-board">
//       <Board />
//     </div>
//   );
// }

// export default Game;
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Game />);


// import { useState } from "react";

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

//  function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = "Go to move #" + move;
//     } else {
//       description = "Go to game start";
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// export default Game;

// import React, { useState } from "react";
// import ReactDOM, { createRoot } from "react-dom";

// const rowStyle = {
//   display: "flex",
// };

// const squareStyle = {
//   width: "60px",
//   height: "60px",
//   backgroundColor: "#ddd",
//   margin: "4px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "20px",
//   color: "white",
// };

// const boardStyle = {
//   backgroundColor: "#eee",
//   width: "280px",
//   alignItems: "center",
//   justifyContent: "center",
//   display: "flex",
//   flexDirection: "column",
//   border: "3px #eee solid",
// };

// const containerStyle = {
//   display: "flex",
//   alignItems: "center",
//   flexDirection: "column",
// };
// const instructionsStyle ={
// marginTop: '5px',
// marginBottom :'5px' ,
// fontweåght: 'bold',
// fontSize :'16px'

// }
// const buttonStyle = {
//   marginTop: "15px",
//   marginBottom: "16px",
//   width: "80px",
//   height: "40px",
//   backgroundColor: "#8acaca",
//   color: "white",
//   fontSize: "16px",
// };

// function Square(props) {
//   return (
//     <div className="square" style={squareStyle} onClick={props.onClick}>
//       {props.value}
//     </div>
//   );
// }

// function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);
//   const [winner, setWinner] = useState(null);

//   function handleClick(i) {
//     if (winner || squares[i]) {
//       return;
//     }
//     const newSquares = squares.slice();
//     newSquares[i] = xIsNext ? "X" : "O";
//     setSquares(newSquares);
//     setXIsNext(!xIsNext);
//     setWinner(calculateWinner(newSquares));
//   }

//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (
//         squares[a] &&
//         squares[a] === squares[b] &&
//         squares[a] === squares[c]
//       ) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

//   function renderSquare(i) {
//     return <Square value={squares[i]} onClick={() => handleClick(i)} />;
//   }

//   function resetBoard() {
//     setSquares(Array(9).fill(null));
//     setXIsNext(true);
//     setWinner(null);
//   }

//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else if (squares.every((square) => square !== null)) {
//     status = "Tie game!";
//   } else {
//     status = `Next player: ${xIsNext ? "X" : "O"}`;
//   }

//   return (
//     <div style={containerStyle}>
//       <div id="statusArea">{status}</div>
      
//       {renderSquare(0)}
//       {renderSquare(1)}
//       {renderSquare(2)}
//       <div style={rowStyle}>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div style={rowStyle}>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button style={buttonStyle} onClick={() => resetBoard()}>
//         Reset Board
//       </button>
//     </div>
//   );
// }

// function Game() {
//   return (
//     <div className="game-board">
//       <Board />
//     </div>
//   );
// }

// export default Game

import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {
  addContactOnServer,
  getAllContacts,
  updateContactOnServer,
  deleteContactOnServer,
} from "./network";
import { Heading, Flex, Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";
import Kmodal from "./components/Kmodal";
import { Link } from "react-router-dom";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [searchData, setSearchData] = useState("");
  const [contacts, setContacts] = useState([
    { id: 1, name: "Nikhil", email: "abc@gmail.com"},
    { id: 2, name: "Nikhi", email: "a@gmail.com"},
    { id: 3, name: "Nikh", email: "b@gmail.com"},
    { id: 4, name: "Nik", email: "c@gmail.com"},



  ]);
  console.log(contacts)
  const [contactId, setContactId] = useState();

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getAllContacts();
      const tempArray = [];

      if (data !== null) {
        Object.entries(data).forEach(([key, value]) => {
          tempArray.push({ id: key, name: value.name, email: value.email });
        });
      }

      setContacts(tempArray);
    };
    fetchContacts();
  }, []);

  const addNewContact =  (name, email) => {
    if (
      contacts.findIndex((contact) => contact.email === email) === -1 &&
      email !== ""
    ) {
    //   const data = await addContactOnServer(name, email);
    //   console.log(data);
      setContacts([...contacts, { name, email
        // id: data.name 
      }]);
  }
  };

  let searchContacts = contacts.filter((contact) =>
    contact.name.includes(searchData)
  );

  const getContactId = (id) => {
    setContactId(id);
  };

  const updateContact = async (name, email, id) => {
    const data = await updateContactOnServer(name, email, id);

    setContacts((prev) => [
      ...contacts.filter((contact) => contact.id !== id),
      { name: data.name, email: data.email, id },
    ]);
  };

  const deleteContact = async (id) => {
    const data = await deleteContactOnServer(id);
    if (data === null) {
      setContacts((prev) => [
        ...contacts.filter((contact) => contact.id !== id),
      ]);
    }
  };
  let selectContact = contacts.find((contact) => contact.id === contactId);

  return (
    <>
      <Kmodal
        isOpen={isOpen}
        title={"Add New Contact"}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ContactForm addNewContact={addNewContact} 
        onClose={onClose}
         />
      </Kmodal>
      <Kmodal
        isOpen={isOpenEdit}
        title={"Update New Contact"}
        onOpen={onOpenEdit}
        onClose={onCloseEdit}
      >
        <ContactForm
          updateContact={updateContact}
          contact={selectContact}
          onClose={onCloseEdit}
        />
      </Kmodal>
      <Box>
        <Flex p="4" justify="center" align="center">
          <Image src="/banner.png" w="150px" h="100px" />
          <Heading as="h1" textTransform="uppercase">
            Contact App
          </Heading>
        </Flex>
        <Box p="4">
          <Button
            bg="purple.700"
            color="white"
            w="full"
            fontSize="xl"
            fontWeight="bold"
            colorScheme="purple"
            onClick={onOpen}
          >
            <AddIcon h="20px" w="20px" mr="4" /> Add Contact
          </Button>
        </Box>
        <Box p="4">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              focusBorderColor="purple.400"
              type="tel"
              placeholder="Search Contact..."
              onChange={(e) => setSearchData(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Box p="4">
          {searchContacts.map((contact) => (
            <ContactCard
              getContactId={getContactId}
              onOpen={onOpenEdit}
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default App;
