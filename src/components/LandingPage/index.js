import './index.css'
import NavBar from '../NavBar'

const LandingPage=()=>{
    return (
        <div className='bg-container'>
            <NavBar />
            <h1 className='main-heading'>When Innovation <br/>
              Meets <span className='heading-span'>Investment</span>
            </h1>
            <p className='para'>Empowering Trading Through Advanced Technology </p>
            <button className='openapp-button' type='button' >Open app</button>
            <h1 className='features-heading'>Our Features</h1>
        </div>
    )
}

export default LandingPage