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

export default App;
