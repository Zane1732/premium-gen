const PASSWORD = "zanethegodcracker";
const RESTOCK_PASSWORD = "restock"; // Password for restocking

const ACCOUNTS = {
    steam: [],
    netflix: [],
    vpn: [],
    roblox: [
        { id: 'thejourneyofarker', pass: 'R1cardoQiu20081986' },
        { id: 'karinaytvy9', pass: 'sdfghjjkkkk' },
        { id: 'Rizkartz', pass: 'Riotz123' },
        { id: 'tsisko2010', pass: 'Mariami14' },
        { id: 'Concakngong', pass: '11223344556677' },
        { id: 'pietrorozario', pass: 'gladi21l' },
        { id: 'Mugisama8596', pass: 'ducduong0803' },
        { id: 'GuisseppeGamer', pass: 'guisseppe0606' },
        { id: 'fruitgrindy', pass: 'Ryanchen' },
        { id: 'chuvawuba', pass: 'Wolf2006' },
        { id: 'Itzstonefan', pass: 'makiuki1' },
        // Remove duplicates and ensure this list is clean
    ],
    games: [],
    valorant: [
        { id: 'StokarkO', pass: 'nuttertools88' },
        { id: 'Heatzy246', pass: 'Hajzlety_123' },
        // Other accounts
    ],
    crunchyroll: [],
    random: [],
    amazon: [],
    hulu: [],
    disney: [],
    spotify: []
};

const STOCK_COUNT = {
    steam: ACCOUNTS.steam.length,
    netflix: ACCOUNTS.netflix.length,
    vpn: ACCOUNTS.vpn.length,
    roblox: ACCOUNTS.roblox.length,
    games: ACCOUNTS.games.length,
    valorant: ACCOUNTS.valorant.length,
    crunchyroll: ACCOUNTS.crunchyroll.length,
    random: ACCOUNTS.random.length,
    amazon: ACCOUNTS.amazon.length,
    hulu: ACCOUNTS.hulu.length,
    disney: ACCOUNTS.disney.length,
    spotify: ACCOUNTS.spotify.length
};

let userLastGenerationTime = {};
let isGenerating = false;
let timerInterval;

document.getElementById('toolForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (isGenerating) return;

    const passwordInput = document.getElementById('password').value;
    const accountType = document.getElementById('accountType').value;
    const resultDiv = document.getElementById('result');
    const timerDiv = document.getElementById('timer');

    if (passwordInput !== PASSWORD) {
        resultDiv.innerHTML = "<p style='color: red;'>Incorrect password</p>";
        return;
    }

    const currentTime = new Date().getTime();
    const lastGenerationTime = userLastGenerationTime[accountType] || 0;

    if (currentTime - lastGenerationTime < 5 * 1000) { // 5-second slow mode
        const remainingTime = Math.max(0, 5 * 1000 - (currentTime - lastGenerationTime));
        startCountdown(remainingTime);
        return;
    }

    userLastGenerationTime[accountType] = currentTime;
    clearInterval(timerInterval);

    const accounts = ACCOUNTS[accountType];
    if (accounts.length === 0) {
        resultDiv.innerHTML = `<p>No accounts available for ${accountType}.</p>`;
        return;
    }

    const randomAccount = accounts[Math.floor(Math.random() * accounts.length)];
    resultDiv.innerHTML = `<p>Generated account: ${randomAccount.id}:${randomAccount.pass}</p>`;

    // Start slow mode countdown for 5 seconds
    startCountdown(5000);
});

function startCountdown(duration) {
    const timerDiv = document.getElementById('timer');
    let remainingTime = duration / 1000;

    timerInterval = setInterval(() => {
        timerDiv.textContent = `Wait ${remainingTime} seconds...`;
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timerInterval);
            document.getElementById('generateButton').style.display = 'block';
            timerDiv.textContent = '';
        }
    }, 1000);
}
