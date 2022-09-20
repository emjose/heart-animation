const container = document.querySelector(".container");
for (let i = 1; i <= 100; i++) {
	const hearts = document.createElement("div");
	hearts.classList.add("heart");
	container.appendChild(hearts);
}

function animateHearts() {
	anime({
		targets: ".heart",
		translateX: function () {
			return anime.random(-700, 700);
		},
		translateY: function () {
			return anime.random(-500, 500);
		},
		rotate: 45,
		scale: function () {
			return anime.random(1, 5);
		},

		easing: "easeInOutBack",
		duration: 3000,
		delay: anime.stagger(10),
		complete: animateHearts,
	});
}

animateHearts();

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/heart-animation/sw.js", {
				scope: "/heart-animation/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3xwRdMH", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
