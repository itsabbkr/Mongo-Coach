const mongoose = require("mongoose", { useUnifiedTopology: true });
mongoose.set("useUnifiedTopology", true);

const Schema = mongoose.Schema;

const StudentSchema = Schema({
	name: String,
});

const Student = mongoose.model("student", StudentSchema);

//Export
module.exports = Student;
