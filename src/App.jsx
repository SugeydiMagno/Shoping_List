import { useState } from "react"

function App() {

const[itemChecked,setItemChecked]=useState({
  first: false,
  second: false,
  third: false,
})

const handleItemChecked = (e) => {
  //if (itemChecked[e.target.name]){
  //setItemChecked({
  //    itemChecked,
  //    [e.target.name]: false,
  // });
  //}else {
  //  setItemChecked({
  //    itemChecked,
  //  [e.target.name]: false,
  //});
  //}
  setItemChecked ({
    ...itemChecked,
    [e.target.name]:!itemChecked[e.target.name]
    })
}
  
  return (
  <div className="container text-center">
    <div className="row mt-4">
      <div className="col text-start">
    <h1>Shopping List</h1>
    <hr />
  </div>
  <div className="col text-end">
    <button type="button" className="btn btn-outline-primary">
      <i className="bi bi-plus-circle"></i>
    </button>
  </div>
  </div>

  <div className="row mt-4">
    <div className="col">
      <input 
      checked={itemChecked.first}
      name="first"
      onClick={(e) => handleItemChecked(e)}
      type="checkbox" 
      />
      </div>
    <div className="col-2 text-start">
      { 
        //itemChecked.first && <del>1 Kg</del>
      }
      { 
        //itemChecked.first && "1 Kg"
      }
      {
        itemChecked.first ? <del>1 Kg</del>: "1 Kg"
      }

    </div>
    <div className="col-5 col-md-6 text-start"
      style={{textDecoration: itemChecked.first && "line-through"}}
      >Tortillas
    </div>
    <div className="col-4 col-md-3 btn-group btn-group-sm">
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-pencil-square"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-files"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-trash2-fill"></i>
      </button></div>
      </div>

     
    <div className="row mt-4">
    <div className="col">
    <input type="checkbox"/>
       </div>
    <div className="col-2 text-start">1 lt</div>
    <div className="col-5 col-md-6 text-start">Aceite</div>
    <div className="col-4 col-md-3 btn-group btn-group-sm">
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-pencil-square"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-files"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-trash2-fill"></i>
      </button></div>
      </div>

    <div className="row mt-4">
    <div className="col">
    <input type="checkbox"/>
       </div>
    <div className="col-2 text-start">3 lts</div>
    <div className="col-5 col-md-6 text-start">Redresco de Cola</div>
    <div className="col-4 col-md-3 btn-group btn-group-sm">
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-pencil-square"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-files"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i class="bi bi-trash2-fill"></i>
      </button></div>
      </div>
      
    </div>



  )
}

export default App
