import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import ChatRoom from './components/ChatRoom';
import Button from './components/Button';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { chatRoom } from './atoms/roomState';
import { useRecoilState } from 'recoil';
import { Container } from './styles/Container';
import ResetCookies from './components/ResetCookies';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useRecoilState(chatRoom)

  const handleSignOut = async () => {
      await signOut(auth)
      cookies.remove('auth-token');
      setIsAuth(false);
      setRoom(null)
  }

  if(!isAuth){
    return (
      <Container>
        <ResetCookies />
        <Auth setIsAuth={setIsAuth} />
      </Container>
    );
  }

  return (
    <Container>
      <ResetCookies />
      <div>
        <ChatRoom />
      </div>
      <button className={'signOut'} onClick={handleSignOut}>signOut</button>
    </Container>
  )
  
}

export default App;
