const apiURL = "https://animechan.vercel.app/api/random";

async function getAnimeQuote() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Nani !?");
    }
    const data = await response.json();
    displayQuote(data);
  } catch (error) {
    console.error("Error fetching the quote:", error);
    document.getElementById("quote").textContent =
      "Failed to fetch a quote. Please try again.";
  }
}

function displayQuote(quoteData) {
  const quoteDiv = document.getElementById("quote");
  quoteDiv.textContent = `"${quoteData.quote}" - ${quoteData.character} (${quoteData.anime})`;
}

document.getElementById("new-quote").addEventListener("click", getAnimeQuote);

// Fetch an initial quote on page load
getAnimeQuote();
