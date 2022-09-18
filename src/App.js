import IpTrack from "./components/IpTrack";
import Map from "./components/Map";
import './App.css'
import { ContextProvider } from "./context/ContextApi";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <IpTrack/>      
        <Map/>
      </ContextProvider>
    </div>
  );
}



export default App;
