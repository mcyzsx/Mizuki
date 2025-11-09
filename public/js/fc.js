// public/js/fc.js
(() => {
	function initFriendCircle(retries = 10) {
		const root = document.getElementById("friend-circle-lite-root");
		if (!root) {
			if (retries > 0) {
				setTimeout(() => initFriendCircle(retries - 1), 100);
				return;
			}
		}

		Promise.all([
			import("/src/assets/styles/fc.css"),
			import("/src/plugins/friendCircle.ts"),
		])
			.then(([, { FriendCircle }]) => {
				const lite = new FriendCircle();
				lite.init({
					private_api_url: "https://fc.kemeow.top/",
					page_turning_number: 10,
					error_img:
						"https://cravatar.cn/avatar/57d8260dfb55501c37dde588e7c3852c",
				});
				lite.load();
			})
			.catch((err) => console.error("[FriendCircle] 加载失败:", err));
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initFriendCircle);
	} else {
		initFriendCircle();
	}
})();