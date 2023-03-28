import { Link } from 'react-router-dom';
import error_img from '../images/Error.jpg'

const ErrorPage = () => {
  return (
    <div className='container'>
      <h2>Something goes wrong... Ceep calm & try one more time!</h2>
      <img
        src={error_img}
        alt="404"
        width='900px'
        style={{
          margin: '20px'
        }}
      />
      <Link to="/">Back to safety!</Link>
    </div>
  );
};

export default ErrorPage;