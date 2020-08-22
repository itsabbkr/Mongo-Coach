const Student = require("../app/student");
const assert = require("assert");

// All delete test

describe("Delete test", () => {
	let deleter;
	beforeEach((done) => {
		deleter = new Student({
			name: "Deleter",
		});
		deleter.save().then(() => done());
	});

	it("Delete a user: Deleter", (done) => {
		Student.findByIdAndDelete(deleter._id).then(() =>
			Student.findOne({ name: "Dadiq" }).then((student) => {
				assert(student === null);
				done();
			})
		);
	});
});
