import Addrecipe from "./components/Addrecipe.jsx"

function App(){
  let detail=[{
title:'food',
ingredients:'rice',
title:'biriyani',
imageUrl:'url'
  }
  ]
 return (
  <>
  <Addrecipe title={detail.title}/>
  </>
 )
}

export default App
