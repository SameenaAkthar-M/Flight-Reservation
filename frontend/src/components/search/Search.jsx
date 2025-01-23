import './search.css'

const Search = () => {
  return (
    <div className='flight-searchbar'>
    <div className='booking-grid'>
      </div>
      <div className="grid-item top-items">
      <div className='tickets'>Book your Tickets
        <div className='radio-group'>
          <label htmlFor="one-way">
            <input type="radio" value="oneway" id='one-way' checked/>
            <span>Oneway</span>
          </label>
          <label htmlFor="round-trip">
            <input type="radio" value="roundtrip" id='round-trip'/>
            <span>Round Trip</span>
          </label>
          <label htmlFor="multi-city">
            <input type="radio" value="roundtrip" id='multi-city'/>
            <span>Multi City</span>
          </label>
        </div>
      </div>

      <div className="grid-item">
        <label htmlFor="from">From</label>
        <input type="text" id="from" placeholder='Search by place'/>
      </div>

      <div className="grid-item">
        <label htmlFor="to">To</label>
        <input type="text" id='to' placeholder='Search by place'/>
      </div>

      <div className="grid-item">
        <label htmlFor="departure">Departure</label>
        <input type="text" id='departure' value='24 Jan Friday'/>
      </div>

      <div className="grid-item">
        <label htmlFor="return">Return</label>
        <input type="date" id="return" value='Save more Add return'/>
      </div>

      <div className="grid-item">
        <label for="travelers">Travellers + Special Fares</label>
        <input type="text" id="travelers" value="1 Passenger"/>
      </div>
      <div className="grid-item"><button class="search-btn">Search</button></div>
    </div>
    </div>
  )
}

export default Search