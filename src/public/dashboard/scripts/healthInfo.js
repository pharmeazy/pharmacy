const endpoint = 'http://localhost:3000/dashboard/healthInfo';

function healthInfoData(){

	axios.get(endpoint)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
}
