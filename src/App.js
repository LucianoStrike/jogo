import logo from './logo.svg';
import './App.css';


function MyButtom(){
  return (
    <button>Clica-me</button>
  )

}

function App() {
  return (
    <div>
      <h1>Bem vindo a minha aplicação</h1>
      <MyButtom/>
      <MyButtom/>
      <MyButtom/>
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
