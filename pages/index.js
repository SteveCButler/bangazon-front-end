import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { checkUser, signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import RegisterForm from '../components/RegisterForm';

function Home(updateUser) {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  }, []);

  const onUpdate = () => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  };

  return (
    <>
      { authUser?.uid === user.uid ? (
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <Link passHref href="/userProfile">
            <Button variant="light" className="bg-transparent fs-2 border-0 ">Hello {user.fbUser.displayName}!</Button>
          </Link>
          <p>Your Bio: {user.bio}</p>
          <p>Click the button below to logout!</p>
          <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      ) : (<RegisterForm user={user} updateUser={updateUser} onUpdate={onUpdate} />)}
    </>
  );
}

export default Home;
