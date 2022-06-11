import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const loginOut = () => {
        setIsAuth(false);
        localStorage.setItem('auth', false)

    }
    return (
        <div className='navbar'>
            <MyButton onClick={loginOut}>Exit</MyButton>
            <div className='navbar__links'>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
}
export default Navbar;
