import logo from './logo.svg';

import Header from './components/header.js'
import Left from './components/Left.js'
import Right from './components/Right.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
function App() {
  return (
    <>
        <Header />
        <main>
        <Right />
        <Left />
        <div className=' flex flex-row justify-around '  style={{height:'100%'}}>
        <Main />
        </div>
        
        </main>
        <Footer />
        
    </>
  );
}

export default App;
