import { Link } from 'react-router-dom'
import hero_img from '../images/hero_img.png'

const Home = () => {
  return <div className='container'>
    <img src={hero_img} alt='Welcome to phonebook' width='500px' />
    <h1 style={{ margin: '40px 0' }}>Welcome to your phonebook assistant!</h1>
    <p style={{ margin: '5px 0' }}>To use your personal domain, please <Link style={{ color: 'inherit' }} to='/login'>sign in</Link></p>
    <p style={{ margin: '5px 0' }}>If you haven't got an account, please <Link style={{ color: 'inherit' }} to='/register'>sign up</Link></p>
  </div>
}

export default Home