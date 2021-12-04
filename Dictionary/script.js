async function showMeaning(param) {
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + param);
    let data = await response.json();
    return data;
}
async function showUserData() {
    let word = document.getElementById('searchBox');
    let fetchedData = await showMeaning(word.value);
    document.getElementById("disp").innerHTML = fetchedData[0].meanings[0].definitions[0].definition;
}