// // Construire la requete AJAX par defaut (facultatif)
// let ville;

// if ("geolocation" in navigator) {
//     navigator.geolocation.watchPosition((position) => {
//         // console.log(position.coords.latitude);
//         // console.log(position.coords.longitude);
//         let latitude = position.coords.latitude;
//         let longitude = position.coords.longitude;
//         const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=cd0267347384266b264977023b7ccb8f&units=metric";
//         // console.log(url); // Affiche url de l'api
//         let requete = new XMLHttpRequest();
//         requete.open("GET", url);
//         requete.responseType = "json";
//         requete.send();

//         requete.onload = function () {
//             if (requete.readyState === XMLHttpRequest.DONE) {
//                 if (requete.status === 200) {
//                     let reponse = requete.response;
//                     // console.log(reponse); // affiche le fichier json sur la console
//                     let nomDeVille = reponse.name;
//                     let temperature = reponse.main.temp;
//                     // console.log(temperature); // Affiche la temperature qui est dans le fichier json
//                     document.querySelector("#ville").textContent = nomDeVille;
//                     document.querySelector("#temperature_label").textContent = temperature;
//                 }
//             } else {
//                 alert("Une erreur est survenue veuillez reessayer ulterieurement");
//             }
//         };
//     }, error, option);
// }
// else {
//     ville = "Londres"
//     recevoirTemp(ville);
// }

// var option = {
//     enableHighAccuracy: true
// }

// // Detecter le clic du bouton 'changer de ville 
// document.querySelector("#changer").addEventListener("click", () => {
//     ville = prompt("Veuillez choisir une ville");
//     recevoirTemp(ville);
// });

// function error() {
//     // alert("Aucune information n'est disponible");
//     ville = "Londres";
//     recevoirTemp(ville);

// }
// function recevoirTemp(nomDeVille) {
//         const url = "https://api.openweathermap.org/data/2.5/weather?q=" + nomDeVille + "&appid=cd0267347384266b264977023b7ccb8f&units=metric";
//         let requete = new XMLHttpRequest();
//         requete.open("GET", url);
//         requete.responseType = "json";
//         requete.send();
        
//         requete.onload = function () {
//             if (requete.readyState === XMLHttpRequest.DONE) {
//             if (requete.status === 200) {
//                 let reponse = requete.response;
//                // console.log(reponse);
//                let nomDeVille = reponse.name;
//                 let temperature = reponse.main.temp;
//                // console.log(tempALondres);
//                 document.querySelector("#ville").textContent = nomDeVille;
//                 document.querySelector("#temperature_label").textContent = temperature;
//             }
//             } else {
//                  alert("Une erreur est survenue veuillez reessayer ulterieurement");
//             }
//         };
// }


// ******************* CORRECTION **********************

let villeChoisie;

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    (position) => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude +
        "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

      let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
      requete.open("GET", url); // Nous récupérons juste des données
      requete.responseType = "json"; // Nous attendons du JSON
      requete.send(); // Nous envoyons notre requête

      // Dès qu'on reçoit une réponse, cette fonction est executée
      requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
          if (requete.status === 200) {
            let reponse = requete.response;
            // console.log(reponse);
            let temperature = reponse.main.temp;
            let ville = reponse.name;
            // console.log(temperature);
            document.querySelector("#temperature_label").textContent =
              temperature;
            document.querySelector("#ville").textContent = ville;
          } else {
            alert("Un problème est intervenu, merci de revenir plus tard.");
          }
        }
      };
    },
    erreur,
    options
  );

  var options = {
    enableHighAccuracy: true,
  };
} else {
  villeChoisie = "saint-saulve";
  recevoirTemperature(villeChoisie);
}

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
  villeChoisie = prompt("Quelle ville souhaitez-vous voir ?");
  recevoirTemperature(villeChoisie);
});

function erreur() {
  villeChoisie = "Saint-Saulve";
  recevoirTemperature(villeChoisie);
}

function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

  let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
  requete.open("GET", url); // Nous récupérons juste des données
  requete.responseType = "json"; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        // console.log(temperature);
        document.querySelector("#temperature_label").textContent = temperature;
        document.querySelector("#ville").textContent = ville;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}