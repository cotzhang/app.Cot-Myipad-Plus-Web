	let fs = {
		readFileSync: async function(filename) {
			await localforage.getItem(filename)
				.then((val) => {
					return val;
				}).catch((err) => {
					return err;
				});
		},
		writeFileSync: async function(title, msg) {
			await localforage.setItem(title, msg)
				.then(() => {
					return true;
				}).catch((err) => {
					return false;
				});

		}
	}