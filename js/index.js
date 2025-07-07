var QutBtn = document.getElementById("QutBtn");
var randomQut = document.getElementById("randomQut");

var cartona = [
"Patience is trusting Allah’s plan, even when you don’t understand it.",
"Allah is with those who are patient. He never leaves them alone.",
"Patience in times of hardship brings blessings you cannot imagine",
"When life gets tough, remember Allah is testing your patience for a bigger reward",
"Be patient, for Allah’s timing is always perfect.",
"Patience is a key to success. Trust Allah’s wisdom.",
"Hardships make you strong, and patience makes you wise.",
"Allah loves those who patiently endure, knowing He is in control",
"Be patient. Every storm will pass with Allah’s mercy",
"Patience is the light that guides you through the darkest moments",
"With patience comes great reward from Allah, far beyond what you can see",
"“Be patient in what you cannot control; Allah knows best.”",
"Hard times teach us patience, and patience brings us closer to Allah.”",
"“True strength is found in patience, not in anger.”",
"“Allah hears your silent prayers, so be patient with His answers.”",
"Patience is not just waiting but trusting that Allah will bring you better.",
"The more you are tested, the more your patience shines before Allah"
];

QutBtn.addEventListener("click", function () {
    randomQut.classList.replace("d-none", "d-block");
    randomQut.innerHTML = "hello";
    randomQut.style.color="#05383E";
    var outQut = Math.floor(Math.random() * cartona.length);
    randomQut.innerHTML = cartona[outQut ];
});
