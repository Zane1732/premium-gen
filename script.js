const PASSWORD = "zanethegodcracker";
const RESTOCK_PASSWORD = "restock"; // Password for restocking

const ACCOUNTS = {
    steam: [
        
    ],
    netflix: [
        // Existing accounts
    ],
    vpn: [
        // Existing accounts
    ],
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
        { id: 'patriot_fart', pass: 'darkyyoulikeman' },
        { id: 'misha2630', pass: '0997012508' },
        { id: 'chimborojo', pass: 'nwaeazy-e15011' },
        { id: 'Hun123t', pass: 'vib123z.' },
        { id: 'ghsjjkdaugcnw', pass: '089967Fa' },
        { id: 'issay_sasaki', pass: 'issay123' },
        { id: 'Romen284recim', pass: 'brjrurueirjur' },
        { id: 'rip_r0z3n', pass: '0987654321' },
        { id: 'biffybiggie', pass: 'Kidswj2011' },
        { id: 'Aidenxz_Z', pass: 'AidDenzzzzz' },
        { id: 'aliaahlove', pass: '20130425' },
        { id: 'sloender1', pass: '123456gty,./' },
        { id: 'mjrmarco', pass: '$EqdnpxcA7946$' },
        { id: 'linhBloxfruit2', pass: 'chohaiacc' },
        { id: 'shinlexky', pass: 'SHINLEXKYTHEDEV' },
        { id: 'Zashugammer', pass: '36912345' },
        { id: 'banshee_Smokeyy', pass: 'Bear3200' },
        { id: 'mamaie_gaiming', pass: 'Andreas123@#' },
        { id: 'fabricio_luck12345', pass: '123123123123' },
        { id: 'VzietLam', pass: 'baobaoba' },
        { id: 'CZ3T', pass: '0618068388a' },
        { id: 'oRJ7ma', pass: 'zLRKoObspk' },
        { id: 'monsteryancar', pass: 'MONSTER3162' },
        { id: 'I373X', pass: 'YUHilj()-+AyuhjiKLERi89?9ilkEriK' },
        { id: 'Harpyslayer12', pass: 'kakaguate' },
        { id: 'Raulzera0505', pass: '11466905' },
        { id: 'HoanThietl0o6pz', pass: 'n3b8d2o0' },
        { id: 'xDragonghoten', pass: 'duc1122334455' },
        { id: 'Opratetetete', pass: 'helobnnho' },
        { id: 'akwyfa', pass: 'awwyfa2A@' },
        { id: 'bodx_1', pass: 'athbi-faiez' },
        { id: 'sabri26437', pass: '26437111' },
        { id: 'vasile5998florin', pass: 'ceauceau' },
        { id: 'brunaaparecida2121', pass: 'MIAUGATA' },
        { id: 'manokk9078', pass: 'hgegfydwryy' },
        { id: 'THEBONELESS123425', pass: '1122334455667788' },
        { id: 'justcallme_name', pass: 'ggnamegg123' }
    ],
    games: [
        // Existing accounts
    ],
    valorant: [
        // Existing accounts
    ],
    crunchyroll: [
        // Existing accounts
    ],
    random: [
        // Existing accounts
    ],
    amazon: [   // New category
        // Add accounts here
    ],
    hulu: [     // New category
        // Add accounts here
    ],
    disney: [   // New category
        // Add accounts here
    ],
    spotify: [  // New category
        // Add accounts here
    ]
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
    amazon: ACCOUNTS.amazon.length,  // New category
    hulu: ACCOUNTS.hulu.length,      // New category
    disney: ACCOUNTS.disney.length,  // New category
    spotify: ACCOUNTS.spotify.length // New category
};

let userLastGenerationTime = {};
let isGenerating = false;
let timerInterval;
let regenTimeout;

document.getElementById('toolForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    if (isGenerating) return;

    isGenerating = true;
    document.getElementById('generateButton').style.display = 'none';
    document.getElementById('regenButton').style.display = 'none';

    const passwordInput = document.getElementById('password').value;
    const accountType = document.getElementById('accountType').value;
    const resultDiv = document.getElementById('result');
    const timerDiv = document.getElementById('timer');

    if (passwordInput !== PASSWORD) {
        resultDiv.innerHTML = "<p style='color: red;'>Incorrect password</p>";
        isGenerating = false;
        document.getElementById('generateButton').style.display = 'block';
        return;
    }

    const currentTime = new Date().getTime();
    const lastGenerationTime = userLastGenerationTime[accountType] || 0;

    if (currentTime - lastGenerationTime < 5 * 1000) { // 5 seconds
        const remainingTime = Math.max(0, 5 * 1000 - (currentTime - lastGenerationTime));
        startCountdown(remainingTime);
        isGenerating = false;
        document.getElementById('generateButton').style.display = 'block';
        return;
    }

    userLastGenerationTime[accountType] = currentTime;
    clearInterval(timerInterval); // Clear any existing timer

    if (ACCOUNTS[accountType] && ACCOUNTS[accountType].length > 0) {
        const account = ACCOUNTS[accountType].shift();
        STOCK_COUNT[accountType]--;
        resultDiv.innerHTML = `<p>Generated ${accountType} account: ${account.id}/${account.pass}</p>`;
        updateStockInfo();
        regenTimeout = setTimeout(() => {
            document.getElementById('generateButton').style.display = 'block';
            document.getElementById('regenButton').style.display = 'none';
            isGenerating = false;
        }, 5000); // 5-second slow mode
    } else {
        resultDiv.innerHTML = "<p style='color: red;'>Out of stock. Please contact Zane to restock.</p>";
        isGenerating = false;
        document.getElementById('generateButton').style.display = 'block';
    }
});

document.getElementById('regenButton').addEventListener('click', function() {
    if (!isGenerating) {
        document.getElementById('generateButton').click();
    }
});

document.getElementById('restockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const restockPasswordInput = document.getElementById('restockPassword').value;
    const restockFileInput = document.getElementById('restockFileInput').files[0];

    if (restockPasswordInput !== RESTOCK_PASSWORD) {
        document.getElementById('restockResult').innerHTML = "<p style='color: red;'>Incorrect restock password. Upload failed.</p>";
        return;
    }

    if (!restockFileInput) {
        document.getElementById('restockResult').innerHTML = "<p style='color: red;'>No file selected.</p>";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const contents = e.target.result;
        const lines = contents.split('\n');
        const accountType = document.getElementById('accountType').value;
        const accounts = [];

        for (const line of lines) {
            const [id, pass] = line.split(':');
            if (id && pass) {
                accounts.push({ id: id.trim(), pass: pass.trim() });
            }
        }

        if (accounts.length > 0) {
            ACCOUNTS[accountType] = accounts;
            STOCK_COUNT[accountType] = accounts.length;
            document.getElementById('restockResult').innerHTML = `<p style='color: green;'>Stock updated successfully for ${accountType}.</p>`;
            updateStockInfo();
        } else {
            document.getElementById('restockResult').innerHTML = "<p style='color: red;'>No valid accounts found in the uploaded file.</p>";
        }
    };

    reader.readAsText(restockFileInput);
});

function updateStockInfo() {
    const stockList = document.getElementById('stockList');
    stockList.innerHTML = "";
    for (const [category, count] of Object.entries(STOCK_COUNT)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}: ${count} remaining`;
        stockList.appendChild(listItem);
    }
}

function startCountdown(remainingTime) {
    const timerDiv = document.getElementById('timer');
    let timeLeft = remainingTime;

    function updateTimer() {
        const seconds = Math.floor(timeLeft / 1000);
        timerDiv.innerHTML = `<p style='color: red;'>Please wait ${seconds}s before generating another account.</p>`;
        timeLeft -= 1000;
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            timerDiv.innerHTML = "";
            document.getElementById('generateButton').style.display = 'block';
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}
