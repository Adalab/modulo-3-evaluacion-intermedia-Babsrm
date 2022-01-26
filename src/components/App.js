import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

const App = () => {
	const getTitle = (text) => <h1>Adalabers</h1>;

	const [name, setName] = useState('');
	const [counselor, setCounselor] = useState('');
	const [speciality, setSpeciality] = useState('');
	const [data, setData] = useState([]);

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

	useEffect(() => {
		callToApi().then((response) => {
			setData(response);
		});
	}, []);
	const htmlAdalaber = data.map((adalaber, index) => (
		<tr key={index}>
			<td>{adalaber.name}</td>
			<td>{adalaber.counselor}</td>
			<td>{adalaber.speciality}</td>
		</tr>
	));

	return (
		<div className="app">
			<header>
				{getTitle()}
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
};

export default App;
