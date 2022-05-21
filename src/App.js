import logo from './logo.svg';
import './App.css';


//vamos criar um componente
function MyButton() {
  return (
    <button>Clica me</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

//usar IF
/*
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function AdminPanel() {
  return (
    <p>Admin Panel</p>
  );
}

function LoginForm() {
  return (
    <p>Login Form</p>
  );
}
export default function Profile() {
  let content;
  let isLoggedIn = false;
if (isLoggedIn) {
  content = <AdminPanel/>;
} else {
  content = <LoginForm/>;
}
  return (
    <>
      {content}
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}         */


//OPERADOR TERNARIO
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function AdminPanel() {
  return (
    <p>Admin Panel</p>
  );
}

function LoginForm() {
  return (
    <p>Login Form</p>
  );
}
function Profile() {
  let content;
  let isLoggedIn = true;
  return (
    <>
      {
        isLoggedIn ? <AdminPanel/> : <LoginForm/>
      }
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}




function App() {
  return (
    <div>
      <h1>Bem vindo a minha aplicação</h1>
      <MyButton />
      <Profile/>
      <AboutPage/>
    </div>
  );
}

export default App;
