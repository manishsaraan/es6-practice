//passing resolve and reject in promise
			//resolve for succes and reject for error
			const p = new Promise( (resolve, reject) => {
			setTimeout( () => {
			//to show where error is happening
				reject(Error('error is not cool'));
			}, 1000);

			});

			p
			.then( data => {
				console.log(data)
			})
			.catch( error => { console.error(error)});