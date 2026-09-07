(() => {
  const email = document.getElementById("contact-email");
  if (email) {
    const parts = ["mightytran4", "@", "gmail", ".", "com"];
    const addr = parts.join("");
    email.href = "mailto:" + addr;
    email.textContent = addr;
  }
})();
document.querySelectorAll('a[href^="http"]').forEach((a) => {
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});
