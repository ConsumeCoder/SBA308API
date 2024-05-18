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
    console.error("Error fetching the image:", error);
    document.getElementById("quote").textContent =
      "Failed to fetch a quote. Please try again.";
  }
}
fetch(jikanapiURL)
  .then((response) => response.blob())
  .then((blob) => {
    let animeimageUrl = URL.createObjectURL(blob);
    document.body.style.backgroundImage = "url(" + imageUrl + ")";
  })
  .catch((error) => console.error(error));
