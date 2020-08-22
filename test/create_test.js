const Student = require("../app/student");
const assert = require("assert");

describe("Create records", () => {
	it("create a user in DB", () => {
		// assert(!true);
		const asa = new Student({
			name: "Abubakar",
		});
		asa
			.save()
			.then(() => {
				assert(!asa.isNew);
			})
			.catch((error) => {
				console.log(error);
			});
	});
});
