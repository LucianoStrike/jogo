import logo from './logo.svg';
import './App.css';


function MyButtom(){
  return (
    <button>Clica-me</button>
  )

}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {
  return (
    <div>
      <h1>Bem vindo a minha aplicação</h1>
      <MyButtom/>
      <img className="avatar" />

      <h1> {user.name} </h1>
      <img className="avatar" src={user.imageUrl} />

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
    </div>
  );
}

function Sobre() {
  return (
    <>
      <h1>Sobre</h1>
      <p>Olá<br />Como tu estás?</p>
    </>
  );
}

export default App;
