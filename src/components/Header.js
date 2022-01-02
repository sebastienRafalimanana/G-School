import React, { useState, useEffect }
from 'react'
import '../style/Header.css';

const Head = () => {

    var date = new Date();
    var jours = ["Dimanche", "Lundi", "Mardi", "Jeudi", "Mercredi", "Jeudi", "Samedi"];
    var mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mey", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];

    const [H, setHeur] = useState(date.getHours());
    const [M, setMinutes] = useState(date.getMinutes());


    useEffect(() => {
        window.setInterval(() => {
            date = new Date();
            setMinutes(date.getMinutes());
            setHeur(date.getHours());
        }, 1000)
    }, [H, M])

    return (
      <>
        <header className = "head" >
        <div > G - School < /div>
           <div className = "dateTimer" > { H <= 9 ? "0" + H : H }: { M <= 9 ? "0" + M : M } { jours[date.getDay()] } { date.getDate() <= 9 ? "0" + date.getDate() : date.getDate() } { mois[date.getMonth()] } < /div>
            <div className = "profil" >
        <p> Rafalimanana </p>
         <p> < img src = { process.env.PUBLIC_URL + './assets/image/photos.jpg' } alt = 'profil' / > </p>
          </div>
         </header>
         </>
    );
}

export default Head;
