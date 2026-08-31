import { ORT } from "../router.js";

(async () => {
    const user = await ORT.loadUser();

    document.getElementById("user-name").innerText = user?.name ?? "Gast";
    document.getElementById("user-level").innerText = user?.level ?? "-";
    document.getElementById("user-status").innerText = user?.status ?? "unknown";
})();
