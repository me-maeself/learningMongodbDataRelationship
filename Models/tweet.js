const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main()
	.then(() => console.log("mongoose connected."))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new Schema({
	username: String,
	age: Number,
});

const tweetSchema = new Schema({
	text: String,
	likes: Number,
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const newTweet = async () => {
	// const user = new User({
	// 	username: "chickenFan99",
	// 	age: 61,
	// });

	const user = await User.findOne({ username: "chickenFan99" });
	// const tweet1 = new Tweet({
	// 	text: "Omg, I love my chicken family!",
	// 	likes: 0,
	// });

	const tweet2 = new Tweet({
		text: "Bock Bock Bock",
		likes: 99,
	});
	tweet2.user = user;
	user.save();
	tweet2.save();
};

// newTweet();

const findTweet = async () => {
	const t = await Tweet.findOne({ text: "Bock Bock Bock" });
	console.log(t);
	const tw = await t.populate("user", "username");
	console.log(tw);
};

findTweet();
