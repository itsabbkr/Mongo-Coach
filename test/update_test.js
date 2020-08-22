const Student = require("../app/student");
const assert = require("assert");

// All update test
describe("Update test", () => {
	let updater;
	beforeEach((done) => {
		updater = new Student({
			name: "updater",
		});
		updater.save().then(() => {
			done();
		});
	});
	it("Updates a user: Updater", (done) => {
		updater.set("name", "Downgrader");
		updater
			.save()
			.then(() => Student.find({}))
			.then((students) => {
				assert(students[0].name === "Downgrader");
				done();
			});
	});
});
