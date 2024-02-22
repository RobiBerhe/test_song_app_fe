// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import styled from "@emotion/styled"
// import Song from "./features/song/Song"
// import Sidebar from "./layout/Sidebar";
import { MainContent } from "./layout/MainContent";
// import Button from "./components/Button";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// const Container = styled.div({
//   // padding:"16px",
//   boxSizing: 'border-box',
//   borderRadius: "4px",
//   position: "relative",
//   margin: "0 auto",
//   width: "85%",
//   backgroundColor: "#f0f5f5",
//   display: 'flex', //added later
//   flexGrow: 1
// });

function App() {
  return (
    <>
      {/* <Sidebar />
      <Container>
        <Song />
      </Container> */}
      <MainContent/>
    </>
  )
}


export default App
