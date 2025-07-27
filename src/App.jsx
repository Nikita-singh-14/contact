
import './App.css'
import NAvbar from './components/Navbar/NAvbar'
import Contact  from './components/contact/Contact'
import ContactForm from './components/ContactForm/ContactForm'
function App() {
 

  return (<div>
    <NAvbar/>
    <main className='main_container'>
      <Contact/>
      <ContactForm/>
    </main>
    
  </div>
  )
}

export default App
