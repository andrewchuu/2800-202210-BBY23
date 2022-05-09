const express = require("express");
const session = require("express-session");
const app = express();
const fs = require("fs");
const { JSDOM } = require("jsdom");
const readline = require("readline");

const dbConnection = {
	host: "localhost",
	user: "root",
	password: "",
	database: "bby23db",
	multipleStatements: true,
};

// static path mappings
app.use("/scripts", express.static("public/scripts"));
app.use("/styles", express.static("public/styles"));
app.use("/images", express.static("public/images"));
app.use("/html", express.static("app/html"));
app.use("/text", express.static("app/text"));
app.use("/sql", express.static("app/sql"));

app.use(
	session({
		secret: "extra text that no one will guess",
		name: "codeSessionID",
		resave: false,
		saveUninitialized: true,
	})
);

app.get("/", function (req, res) {
	if (req.session.loggedIn) {
		res.redirect("/dashboard");
	} else {
		let doc = fs.readFileSync("./app/html/login.html", "utf8");
		res.set("Server", "Code Engine");
		res.set("X-Powered-By", "Code");
		res.send(doc);
	}
});

app.get("/dashboard", function (req, res) {
	if (req.session.loggedIn && req.session.admin == 1) {
		let profile = fs.readFileSync("./app/html/admin-dashboard.html", "utf8");
		let profileDOM = new JSDOM(profile);

		profileDOM.window.document.getElementById("profile_name").innerHTML =
			"Welcome back " + req.session.name + ".";
		res.send(profileDOM.serialize());
	} else if (req.session.loggedIn && req.session.admin == 0) {
		let profile = fs.readFileSync("./app/html/user-dashboard.html", "utf8");
		let profileDOM = new JSDOM(profile);

		profileDOM.window.document.getElementById("profile_name").innerHTML =
			"Welcome back " + req.session.name + ".";
		res.send(profileDOM.serialize());
	} else {
		res.redirect("/");
	}
});

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// Log-in
app.post("/login", function (req, res) {
	res.setHeader("Content-Type", "application/json");
	let results = authenticate(
		req.body.email,
		req.body.password,
		function (userRecord) {
			if (userRecord == null) {
				res.send({
					status: "fail",
					msg: "User account not found.",
				});
			} else {
				// authenticate the user, create a session
				req.session.loggedIn = true;
				req.session.email = userRecord.email;
				req.session.name = userRecord.name;
				req.session.password = userRecord.password;
				req.session.admin = userRecord.admin;
				req.session.save(function (err) {});

				res.send({
					status: "success",
					msg: "Logged in.",
				});
			}
		}
	);
});

app.get("/logout", function (req, res) {
	if (req.session) {
		req.session.destroy(function (error) {
			if (error) {
				res.status(400).send("Unable to log out");
			} else {
				res.redirect("/");
			}
		});
	}
});

function authenticate(email, pwd, callback) {
	const mysql = require("mysql2");
	const connection = mysql.createConnection(dbConnection);
	connection.connect();
	connection.query(
		"SELECT * FROM user WHERE email = ? AND password = ?",
		[email, pwd],
		function (error, results, fields) {
			if (error) {
				console.log(error);
			}
			if (results.length > 0) {
				return callback(results[0]);
			} else {
				return callback(null);
			}
		}
	);
}

function init() {
	const mysql = require("mysql2");
	const con = mysql.createConnection({
		host: dbConnection.host,
		user: dbConnection.user,
		password: dbConnection.password,
		multipleStatements: dbConnection.multipleStatements,
	});
	con.connect();

	var rl = readline.createInterface({
		input: fs.createReadStream("./app/sql/db.sql"),
		// input: fs.createReadStream("./app/sql/table.sql"),
		// input: fs.createReadStream("./app/sql/query.sql"),
		terminal: false,
	});

	rl.on("line", function (line) {
		console.log(line);
		con.query(line.toString(), function (err, sets, fields) {
			if (err) console.log(err);
		});
	});

	rl.on("close", function () {
		console.log("Listening on port " + port + "!");
		// con.end();
	});
}

// RUN SERVER
let port = 8000;
app.listen(port, init);
