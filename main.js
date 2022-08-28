let btn = document.getElementById('btn');
let output = document.getElementById('output');
let caption = 
[
    '"It\'s not the diamonds. It\'s not the pearls. I\'m that girl.” — “I\’m That Girl”',
    '“Comfortable in my skin. Cozy with who I am.” — “Cozy”',
    '“You hate me \'cause you want me.” — “Cozy”',
    '“I\'m one of one. I\'m number one. I\'m the only one.” — “Alien Superstar”',
    '“Category: bad bitch.” — “Alien Superstar”',
    '“Unapologetic when we f*ck up the night.” — “Cuff It”',
    '“Only double lines we cross is dollar signs.” — “Energy”',
    '“Look around, it\'s me and my crew.” — “Energy”',
    '“You won\'t break my soul.” — “Break My Soul”',
    '“It should cost a billion to look this good.” — "Pure/Honey"',
    '“I wanna house you and make you take my name.” — "Summer Renaissance"',
];

btn.addEventListener('click', function(){
    let randomCaption = caption[Math.floor(Math.random() * caption.length)]
    output.innerHTML = randomCaption;
})