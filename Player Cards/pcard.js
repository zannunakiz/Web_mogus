const filter = document.getElementById('filter')
const playerCards = document.getElementById('player-cards')

const players = [
    {
        Name: "Mogus Man",
        Number: 1,
        Role: "Crewmates",
        Nicknames: "Shapeshifter God"
    },
    {
        Name: "Mogus Queen",
        Number: 2,
        Role: "Impostor",
        Nicknames: "The Deceiver"
    },
    {
        Name: "Mogus Kid",
        Number: 3,
        Role: "Neutral",
        Nicknames: null
    },
    {
        Name: "Mogus Prince",
        Number: 4,
        Role: "Crewmates",
        Nicknames: "The Guardian"
    },
    {
        Name: "Mogus Warrior",
        Number: 5,
        Role: "Impostor",
        Nicknames: "Night Stalker"
    },
    {
        Name: "Mogus Wizard",
        Number: 6,
        Role: "Neutral",
        Nicknames: "The Enigma"
    },
    {
        Name: "Mogus Rogue",
        Number: 7,
        Role: "Crewmates",
        Nicknames: null
    },
    {
        Name: "Mogus Ninja",
        Number: 8,
        Role: "Impostor",
        Nicknames: "Shadow Stealth"
    },
    {
        Name: "Mogus Knight",
        Number: 9,
        Role: "Neutral",
        Nicknames: "The Sentinel"
    },
    {
        Name: "Mogus Sage",
        Number: 10,
        Role: "Crewmates",
        Nicknames: "Wise One"
    },
    {
        Name: "Mogus Assassin",
        Number: 11,
        Role: "Impostor",
        Nicknames: "Silent Killer"
    },
    {
        Name: "Mogus Guardian",
        Number: 12,
        Role: "Neutral",
        Nicknames: null
    },
    {
        Name: "Mogus Hero",
        Number: 13,
        Role: "Crewmates",
        Nicknames: "Champion"
    },
    {
        Name: "Mogus Villain",
        Number: 14,
        Role: "Impostor",
        Nicknames: "Dark Master"
    },
    {
        Name: "Mogus Mystic",
        Number: 15,
        Role: "Neutral",
        Nicknames: "Enigmatic One"
    },
    {
        Name: "Mogus Sage",
        Number: 16,
        Role: "Crewmates",
        Nicknames: "Elder Sage"
    }
];

Object.freeze(players);

const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr.map((
        {Name, Number, Role, Nicknames})=>
        `
        <div class="card">
        <h2>${Name}</h2>
        <p>Number: ${Number}</p>
        <p>Role: ${Role}</p>
        <p>Nicknames: ${Nicknames !== null ? Nicknames : "N/A"}</p>
        </div>
        `
    
    ).join("")
};


filter.addEventListener('change', (mogus) => {
    playerCards.innerHTML = '';
    switch (mogus.target.value){
        case 'crewmate':
            setPlayerCards(players.filter((player) => player.Role === "Crewmates"));
            break;
        case 'impostor':
            setPlayerCards(players.filter((player) => player.Role === "Impostor"));
            break;
        case 'neutral':
            setPlayerCards(players.filter((player) => player.Role === "Neutral"));
            break;
        case 'nicknames':
            setPlayerCards(players.filter((player) => player.Nicknames !== null));
            break;   

        default:
            setPlayerCards(players);


    }




})


