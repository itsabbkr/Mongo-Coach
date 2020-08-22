const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });
	mongoose.connection
		.once("open", () => {
			done();
		})
		.on("error", (error) => console.log("Error Occured: ", error));
});

beforeEach("Drop Collection", (done) => {
	mongoose.connection.collections.students.drop(() => {
		done();
	});
});
