// async function abcd(){
//     await fetch(`https://randomuser.me/api/`)
// }

async function fetchData() {
    const raw = await fetch('https://randomuser.me/api/');
    const ans = await raw.json();
    console.log(ans);
}
fetchData(); 