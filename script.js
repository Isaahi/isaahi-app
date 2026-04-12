function search() {
    let q = document.getElementById("searchBox").value;
    let results = document.getElementById("results");

    results.innerHTML = `
        <a href="https://en.wikipedia.org/wiki/${q}" target="_blank">Wikipedia</a><br>
        <a href="https://www.youtube.com/results?search_query=${q}" target="_blank">YouTube</a>
    `;
}
