import '../styles/App.scss';
import { useState , useEffect } from 'react';
// import adalaberList from '../data/adalabers.json';
import callToApi from '../services/api';
//import localStorage from '../services/localstorage';

const App = () => {

	const getTitle = (text) => <h1>Adalabers</h1>;

	// api
	const [name, setName] = useState('');
	const [counselor, setCounselor] = useState('');
	const [speciality, setSpeciality] = useState('');
	const [data, setData] = useState([]);

	// funciones
	const handleChangeName = (ev) => {
		setName(ev.currentTarget.value);
	};
	const handleChangeCounselor = (ev) => {
		setCounselor(ev.currentTarget.value);
	};
	const handleChangeSpeciality = (ev) => {
		setSpeciality(ev.currentTarget.value);
	};
	const handleSubmit = (ev) => {
		ev.preventDefault();
	  const newAdalaber = {
			name: name,
			counselor: counselor,
			speciality: speciality,
		};
		setData([...data, newAdalaber]);
		setName('');
		setCounselor('');
		setSpeciality('');
	};
	/* llamar a la API*/
  useEffect(() => {
    callToApi().then((response) => {
      console.log(response);
      setData(response);
    });
  }, []);
  console.log(data);
	const htmlAdalaber = data
		// .filter(
		//   (oneContact) =>
		//     oneContact.name.toLowerCase().includes(search.toLowerCase()) ||
		//     oneContact.lastname.toLowerCase().includes(search.toLowerCase()))  )
		.map((adalaber, index) => (
			<tr key={index}>
				<td>{adalaber.name}</td>
				<td>{adalaber.counselor}</td>
				<td>{adalaber.speciality}</td>
			</tr>
		));

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
		<div className="app">
			{getTitle()}
			<header>
				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Tutor</th>
							<th>Especialidad</th>
						</tr>
					</thead>
					<tbody>{htmlAdalaber}</tbody>
				</table>
			</header>
			{/* nueva adalaber */}
			<main>
				<form>
					<h2>Añade una Adalaber</h2>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Nombre"
						onChange={handleChangeName}
						value={name}
					/>
					<input
						type="text"
						name="counselor"
						id="counselor"
						placeholder="Tutora"
						onChange={handleChangeCounselor}
						value={counselor}
					/>
					<input
						type="text"
						name="speciality"
						id="speciality"
						placeholder="Especialidad"
						onChange={handleChangeSpeciality}
						value={speciality}
					/>
					<input
						type="submit"
						value="Añadir una nueva Adalaber"
						onClick={handleSubmit}
					/>
				</form>
			</main>
		</div>
	);
}

export default App;
