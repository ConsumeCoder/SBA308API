const jikanapiURL = "https://api.jikan.moe/v4/anime/{id}/pictures";

async function getAnimeBGP() {
  try {
    const response = await fetch(jikanapiURL);
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
