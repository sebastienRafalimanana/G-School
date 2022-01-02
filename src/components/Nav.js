import {NavLink} from 'react-router-dom';
import '../style/Nav.css'

//fonction de traitement des images assets
/*
function importAll(r){
  let images = {};
  r.keys().forEach((item, i) => {
    images[item.replace('./','')]=r(item);
  });
  return images
}

// importation des tous les images en une seul importation
let images = importAll(require.context('./assets/image',false,/\.png/));
console.log(images);

console.log(images);


*/

const Nav = ()=>{
  return(
    <>
    <nav className='nav'>
      <div> Année scolaire 2021-2022</div>
      <div>
        <ul>
          <li><NavLink  className='links' to="/"><img src={process.env.PUBLIC_URL+'./assets/image/DashBoard.png'} width="35px" alt='Tableau de bord'/> <span>Tableau de bord</span> </NavLink></li>
          <li><NavLink  className='links' to="/Inscription"><img src={process.env.PUBLIC_URL+'./assets/image/inscription.png'} width="35px" alt='dash'/><span>Inscription</span></NavLink></li>
          <li><NavLink  className='links' to="/Reinscription"><img src={process.env.PUBLIC_URL+'./assets/image/reinscription.png'} width="35px" alt='Reinscription'/><span>Reinscription</span></NavLink></li>
          <li><NavLink  className='links' to="/Eleves"><img src={process.env.PUBLIC_URL+'./assets/image/Eleve.png'} width="35px" alt='Elèves'/><span>Elèves</span></NavLink></li>
          <li><NavLink  className='links' to="/Ecolages"><img src={process.env.PUBLIC_URL+'./assets/image/ecolage.png'} width="35px" alt='Ecolages'/><span>Ecolages</span></NavLink></li>
          <li><NavLink  className='links' to="/Renumeration"><img src={process.env.PUBLIC_URL+'./assets/image/renumeration.png'} width="35px" alt='Rénumérations'/><span>Rénumérations</span></NavLink></li>
          <li><NavLink  className='links' to="/Cotisation"><img src={process.env.PUBLIC_URL+'./assets/image/cotisation.png'} width="35px" alt='Divers cotisation'/><span>Divers cotisation</span></NavLink></li>
          <li><NavLink  className='links' to="/Rappel"><img src={process.env.PUBLIC_URL+'./assets/image/rappel.png'} width="35px" alt='Rappel'/><span>Rappel d'écolage</span></NavLink></li>
          <li><NavLink  className='links' to="/Logements"><img src={process.env.PUBLIC_URL+'./assets/image/logement.png'} width="35px" alt='Logements'/><span>Logements</span></NavLink></li>
          <li><NavLink  className='links' to="/Journal"><img src={process.env.PUBLIC_URL+'./assets/image/journal.png'} width="35px" alt='Journal'/><span>Journal</span></NavLink></li>
        </ul>
      </div>
      <div className="bottom_config">
        <p><img src={process.env.PUBLIC_URL+'./assets/image/LogOut.png'} width="40px" alt='LogOut'/></p>
        <p><img src={process.env.PUBLIC_URL+'./assets/image/Settings.png'} width="40px" alt='Setting'/></p>
      </div>
    </nav>
    
    </>

  )
}

export default Nav;
