const mongoose = require("mongoose");

main()
	.then(() => console.log("mongoose connected."))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
	first: String,
	last: String,
	addresses: [
		{
			_id: { _id: false },
			street: String,
			city: String,
			state: String,
			country: String,
		},
	],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
	const u = new User({
		first: "Harry",
		last: "Potter",
	});
	u.addresses.push({
		street: "123 Sesame St.",
		city: "New York",
		state: "NY",
		country: "USA",
	});
	const res = await u.save();
	console.log(res);
};

const addAddress = async (id) => {
	const user = await User.findById(id);
	user.addresses.push({
		street: "123 Sesame St.",
		city: "New York",
		state: "NY",
		country: "USA",
	});
	const res = await user.save();
	console.log(res);
};

// makeUser();
addAddress("65b011b5e7d1674bf10b576b");
