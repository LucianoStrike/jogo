import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //importamos o useState do React

//adicionamos ação ao MyButton
function MyButton() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Você clicou {count} vezes.
    </button>
  );
}


//funcao sobre
function AboutPage() {
  return (
    <>
      <h1>Sobre</h1>
      <p>Olá.<br />Como vai??</p>
    </>
  );
}

//criando uma lista
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
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


//OPERADOR TERNARIO ?
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
        alt={'Fotografia de ' + user.name}
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
    <div className="corpo">
      <h1>Bem vindo a minha aplicação</h1>
      <Profile/>
      <AboutPage/>
      <ShoppingList/>
      <div>
        <h1>Botões separados</h1>
        <MyButton />
        <MyButton />
        <MyButton />
    </div>
    </div>
  );
}

export default App;
