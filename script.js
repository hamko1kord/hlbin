// Text to be displayed line by line
const loveText = document.getElementById('love-text');
const lines = [
    "Helbin, my love for you is endless and true. ❤️",
    "Every moment with you feels like magic. ✨",
    "As if time stops just for us. ⏳",
    "You are my happiness. 😊",
    "The reason I smile every day. 😘",
    "I am yours, completely and forever. 💍",
    "With all my heart. 💖"
];

// List of secret names
const secretNames = ["hlben", "هلبين", "hilbin", "helben", "hlbin", "hilben"];

// Function to display text line by line with typing effect
function displayText() {
    loveText.innerHTML = ""; // Clear any existing text
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            const p = document.createElement('p');
            loveText.appendChild(p);
            let charIndex = 0;

            // Function to type each character with a delay
            function typeChar() {
                if (charIndex < line.length) {
                    p.textContent += line[charIndex];
                    charIndex++;
                    setTimeout(typeChar, 100); // Delay between characters
                }
            }

            typeChar(); // Start typing characters

            lineIndex++;
            setTimeout(typeLine, line.length * 100 + 500); // Delay before next line
        } else {
            // Show the "ترجمة" button after displaying all lines
            document.getElementById("next-btn").style.display = "block";
        }
    }

    typeLine(); // Start typing the first line
}

// Trigger search action after entering the secret name
document.getElementById("search-btn").addEventListener("click", function() {
    const secretName = document.getElementById("secret-name").value.toUpperCase();

    if (secretNames.includes(secretName)) {
        document.querySelector(".main-page").style.display = "none";
        document.querySelector(".loading-page").style.display = "flex";

        setTimeout(function() {
            document.querySelector(".loading-page").style.display = "none";
            document.querySelector(".result-page").style.display = "flex";
            displayText(); // Start displaying the text after the loader
        }, 3000);
    } else {
        alert(" خةلةتة");
    }
});

// When clicking on the next button, show "أحبك" message
document.getElementById("next-btn").addEventListener("click", function() {
    alert("حەشتەدکەم❤️"); // Show the alert with "أحبك"
});
