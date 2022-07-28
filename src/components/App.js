import React, {useState, useEffect}from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchPlaneteers = async () => {
      let req = await fetch('http://localhost:8003/planeteers')
      let res = await req.json()
      setPlaneteers(res)
    }
    console.log(planeteers)
    fetchPlaneteers()
  }, [])

  const displayedPlaneteers = planeteers.filter((planeteer) => {
    return planeteer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Header />
      <SearchBar  searchTerm={searchTerm}  setSearchTerm={setSearchTerm}/>
      <RandomButton />
      <PlaneteersContainer planeteers={displayedPlaneteers}/>
    </div>
  );
}

export default App;
