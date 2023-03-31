function App() {
  
  return (
  <div className="container text-center">
    <div className="row">
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
  <div className="row">
    <div className="col">
      <input type="checkbox"/>
       </div>
    <div className="col-2 text-start">1 Kg</div>
    <div className="col-5 col-md-6 text-start">Tortillas</div>
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

    <div className="row">
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

    <div className="row">
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