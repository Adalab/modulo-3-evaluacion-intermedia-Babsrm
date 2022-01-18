import '../styles/App.scss';
//import { useEffect, useState } from 'react';
//import callToApi from '../services/api';
//import localStorage from '../services/localstorage';

function App() {
	/* Let's do magic! 🦄🦄🦄 */

	const getTitle = (text) => <h1>Adalabers</h1>;

	// api

	//const [data, setData] = useState({});

	/*
  useEffect(() => {
    callToApi().then((response) => {
      data(response);
    });
  }, []);
  */

	// local storage

	//const [name, setName] = useState(localStorage.get('name', ''));
	//const [email, setEmail] = useState(localStorage.get('email', ''));

	//useState(localStorage.get('data', {}).name || '');
	//useState(localStorage.get('data', {}).email || '');

	/*
  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('email', email);
  }, [name, email]);
  */

	/*
  localStorage.set('data', {
    name: name,
    email: email,
  });
  */

	return (
		// HTML ✨

		<div className="app">
			{getTitle()}
			<header>
				<table>
					{/* Fila de cabecera */}
					<thead>
						<tr>
							<th>Columna 1</th>
							<th>Columna 2</th>
							<th>Columna 3</th>
						</tr>
					</thead>
					{/* Fin fila de cabecera */}
					<tbody>
						{/* Primera fila */}
						<tr>
							<td>Columa 1 de la fila 1</td>
							<td>Columa 2 de la fila 1</td>
							<td>Columa 3 de la fila 1</td>
						</tr>
						{/* Segunda fila */}
						<tr>
							<td>Columa 1 de la fila 2</td>
							<td>Columa 2 de la fila 2</td>
							<td>Columa 3 de la fila 2</td>
						</tr>
					</tbody>
				</table>
			</header>
			{/* nueva adalaber */}
			<main>
				<form>
					<h2>Añade un nuevo contacto</h2>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Nombre"
						// onChange={handleChangeName}
						// value={name}
					/>
					<input
						type="text"
						name="tutor"
						id="tutor"
						placeholder="Tutora"
						// onChange={handleChangeLastName}
						// value={lastName}
					/>
					<input
						type="text"
						name="speciality"
						id="speciality"
						placeholder="Especialidad"
						// onChange={handleChangePhone}
						// value={phone}
					/>
					<input
						type="submit"
						value="Añadir una nueva Adalaber"
						// onClick={handleClick}
					/>
				</form>
			</main>
		</div>
	);
}

export default App;
