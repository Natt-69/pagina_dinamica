document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.innerHTML = `<h1>TRUENO</h1>
                     <nav>
                         <ul>
                             <li><a href="#">Musica</a></li>
                             <li><a href="#">Biografia</a></li>
                             <li><a href="#">Giras</a></li>
                         </ul>
                     </nav>`;
  document.body.appendChild(header);

  const main = document.createElement('main');
  document.body.appendChild(main);

  const section = document.createElement('section');
  section.innerHTML = `<h2>El Rey del Freestyle</h2>
                       <p>Mateo Palacios Corazzina, conocido artisticamente como Trueno, es un rapero y freestyler argentino</p>
                       <img src="imagenes/Trueno.jpg" alt="Trueno">
                       <table id="miTabla">
                           <thead>
                               <tr>
                                   <th>Album</th>
                                   <th>Año</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <td>Atrevido</td>
                                   <td>2020</td>
                               </tr>
                               <tr>
                                   <td>Bien o Mal</td>
                                   <td>2022</td>
                               </tr>
                               <tr>
                                   <td>El Ultimo Baile</td>
                                   <td>2023</td>
                               </tr>
                           </tbody>
                       </table>`;
  main.appendChild(section);

  const form = document.createElement('form');
  form.innerHTML = `<label for="email">unete al Club de Fans:</label>
                   <input type="text" id="email" name="email" placeholder="Ingresa tu email">
                   <button type="submit">Suscribirme</button>`;
  main.appendChild(form);

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      if (email == "") {
        alert("Debes ingresar un email!");
      }else{
        alert("¡Gracias por unirte al Club! " + email);
      }
  });


  const lista = document.createElement('ul');
  lista.innerHTML = `<li>Mamichula</li>
                   <li>Dance Crip</li>
                   <li>Ñeri</li>
                   <li>Tranky Funky</li>`;
  main.appendChild(lista);

  const parrafoInteractivo = document.createElement('p');
  parrafoInteractivo.textContent = "¿Listo para escuchar el Trueno?";
  parrafoInteractivo.classList.add("interactive-paragraph");
  parrafoInteractivo.addEventListener('click', () => {
      alert("¡Wacho!");
  });
  main.appendChild(parrafoInteractivo);


  const footer = document.createElement('footer');
  footer.textContent = '© 2024 Trueno';
  document.body.appendChild(footer);
});