(() => {
  const email = document.getElementById("contact-email");
  if (email) {
    const parts = ["mightytran4", "@", "gmail", ".", "com"];
    const addr = parts.join("");
    email.href = "mailto:" + addr;
    email.textContent = addr;
  }
})();
