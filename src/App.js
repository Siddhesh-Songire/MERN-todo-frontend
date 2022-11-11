function App() {
	return (
		<div className="App">
			<h1>Welcome, Siddhesh</h1>
			<h4>Your tasks</h4>

			<div className="todos">
				<div className="todo">
					<div className="checkbox"></div>

					<div className="text">Get the bread</div>

					<div className="delete-todo">x</div>
				</div>

				<div className="todo">
					<div className="checkbox"></div>

					<div className="text">Order food</div>

					<div className="delete-todo">x</div>
				</div>

				<div className="todo is-complete">
					<div className="checkbox"></div>

					<div className="text">Go to gym</div>

					<div className="delete-todo">x</div>
				</div>

			</div>
		</div>
	);
}

export default App;
