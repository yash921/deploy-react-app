import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
  }
  

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://demo2211087.mockable.io/mock",{
  method: "POST",
  headers: {'Content-Type':'application/json'}
  }
)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json.companies,
					DataisLoaded: true
				});
			})
	}
	render() {
    const { DataisLoaded, items } = this.state;
    
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetched data from the api </h1> {
				items.map((item, idx) => (
				<ol key={idx}> 
					Name: { item.name } &nbsp;
          Email: { item.email } &nbsp;
          Status: { item.status }
				</ol>
				))
			}
		</div>
	);
}
}

export default App;
