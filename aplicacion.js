const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name"); //se le coloca un . 
const $b = document.querySelector(".blog");//cambiar # por .
const $l = document.querySelector(".location");

//para usar await es necesario utilizar async antes de fuction por la estructura se la sintaxis.
const displayUser= async (username) => {
  $n.textContent = "cargando...";

  const response = await fetch(`${usersEndpoint}/${username}`);
  //convertir a JSON para que lo pueda leer 
  const reponseJson = await response.json();
  console.log(reponseJson);// cambiar a responseJson para mostrar en consola.
  $n.textContent ='${reponseJson.name}';
  $b.textContent = '${reponseJson.blog}';
  $l.textContent = '${reponseJson.location}';
};

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;//acomplete el codigo con ;
}

displayUser("stolinski").catch(handleError);