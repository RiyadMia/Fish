const lodebuddyes = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddts(data))
}
lodebuddyes();
const displayBuddts = data => {
    const buddys = data.results;
    console.log(data.results)
    const buddyDiv = document.getElementById('buddys')
    for (const buddy of buddys) {
        // console.log(buddy.email)
        console.log(buddy.name.first, buddy.name.last)
        const p = document.createElement('p');
        // p.innerText = buddy.email;
        p.innerText = `Name: ${buddy.name.title}${buddy.name.first} ${buddy.name.last} email:${buddy.email}`;
        buddyDiv.appendChild(p)
    }
}