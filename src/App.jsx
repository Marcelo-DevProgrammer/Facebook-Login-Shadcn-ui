import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

function App() {
  return (
    <main className="w-screen h-screen bg-gray-facebook flex items-center justify-center flex-col md:flex-row">
      <div className="w-580 pr-8 text-center md:text-left">
        <h1 className="text-blue-facebook font-bold text-5xl">facebook</h1>
        <h2 className="text-3xl text-black">O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
      </div>
      
      <Card  className="bg-white p-4 w-380 rounded-md flex justify-center items-center flex-col shadow-lg mt-4">    
        <Input type="email" placeholder="Email ou Telefone" className="input-facebook"/>
        <Input type="password" placeholder="Senha" className="input-facebook"/>
        <Button className="h-12 w-full bg-blue-facebook rounded-md text-white">Entrar</Button>
        <a className="text-blue-facebook cursor-pointer mt-4">Esqueceu a senha?</a>
        <hr className="w-full m-4 border-gray-300 border-1"/>
        <Button className="h-12 bg-green-facebook rounded-md text-white px-4">Criar uma nova conta</Button>
      </Card>
      
    </main>
  )
}

export default App;
