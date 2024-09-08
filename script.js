<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PREMIUM ACCOUNTS GEN BY ZANE</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>PREMIUM ACCOUNTS GEN BY ZANE</h1>
        <p>If you have any issues, you can contact me on Discord: <strong>zane_ox0</strong></p>

        <form id="toolForm">
            <label for="password">Enter Password:</label>
            <input type="password" id="password" required>

            <label for="accountType">Select Account Type:</label>
            <select id="accountType" required>
                <option value="steam">Steam Accounts</option>
                <option value="netflix">Netflix Accounts</option>
                <option value="vpn">VPN Accounts</option>
                <option value="roblox">Roblox Accounts</option>
                <option value="games">Games Accounts</option>
                <option value="valorant">Valorant Accounts</option>
                <option value="crunchyroll">Crunchyroll Accounts</option>
                <option value="random">Random Account</option>
            </select>

            <button type="submit" id="generateButton">Generate Account</button>
            <button type="button" id="regenButton" style="display: none;">Regenerate</button>
        </form>

        <div class="result" id="result"></div>

        <div class="timer" id="timer"></div> <!-- Countdown timer display -->

        <div class="stock-info" id="stockInfo">
            <h2>Stock Information</h2>
            <ul id="stockList">
                <!-- Stock counts will be dynamically updated here -->
            </ul>
        </div>

        <div class="restock" id="restockSection">
            <h2>Restock Section</h2>
            <form id="restockForm">
                <label for="restockPassword">Enter Restock Password:</label>
                <input type="password" id="restockPassword" required>
                
                <label for="restockFileInput">Upload Restock File:</label>
                <input type="file" id="restockFileInput" accept=".txt">
                
                <button type="submit" id="restockButton">Upload Accounts</button>
            </form>
            <div id="restockResult" class="result"></div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
