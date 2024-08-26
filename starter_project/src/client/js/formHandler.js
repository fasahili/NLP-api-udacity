function checkURL(inputText) {
  const regex =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
  console.log("The check URL is:", regex.test(inputText));
  return regex.test(inputText);
}

function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById("article-url").value;

  if (checkURL(formText)) {
    console.log("::: Form Submitted :::");

    fetch("/analyze", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formText }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("The data is:", data);
        document.getElementById("results").innerHTML = `
          <p>Agreement: ${data.agreement}</p>
          <p>Confidence: ${data.confidence}</p>
          <p>Irony: ${data.irony}</p>
        `;
      })
      .catch((error) => console.error("Error:", error));
  } else {
    alert("Invalid URL. Please enter a valid URL.");
  }
}

export { checkURL, handleSubmit };
