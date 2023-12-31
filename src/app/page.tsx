import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import "./styles/home.scss"

export default function Home() {
  return ( 
    <main className="container">
      <Header/>
      <Experience/>
            <div className="infos">
              <h3>Languages</h3>
                <div className="languages-info">
                  <span>🇺🇸 EN - Tecnical</span>
                  <span>🇧🇷 PT-BR - Native Speaker</span>
                </div>
              <h3>Education</h3>
                <div className="educational-info">
                  <span>🎓</span>
                  <span>Degree in Information Systems - UNITPAC Araguaína - TO</span>
               </div>
            </div>
        <div className="buttons">
          <div className="social">
            
          </div>
          <button>contacte me</button>
        </div>

    </main>
  )
}
