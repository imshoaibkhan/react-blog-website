import { Link } from "react-router-dom"

const Missing = () => {
    return (
      <main className="Missing">
          <h2>Page not found</h2>
            <p>Well, that's disappointing</p>
            <Link to="/"> visit Our Homepage</Link>
      </main>
    )
  }
  
  export default Missing