(() => {
  const email = document.getElementById("contact-email");
  if (email) {
    const parts = ["mightytran4", "@", "gmail", ".", "com"];
    const addr = parts.join("");
    email.textContent = addr;
    email.href = "#";
    email.style.cursor = "pointer";
    email.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(addr);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = addr;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      email.textContent = "Copied!";
      setTimeout(() => {
        email.textContent = addr;
      }, 1500);
    });
  }

  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
})();
