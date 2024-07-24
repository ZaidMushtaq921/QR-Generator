const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Button submit
const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  // Validate url
  if (url === "") {
    alert("Please enter a URL");
  } else {
    showSpinner();

    // Show spinner for 1 sec
    setTimeout(() => {
      hideSpinner();
      // Redirect to result page with URL and size
      window.location.href = `result.html?url=${encodeURIComponent(url)}&size=${size}`;
    }, 1000);
  }
};

// Show spinner
const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";
};

// Hide spinner
const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
};

form.addEventListener("submit", onGenerateSubmit);
