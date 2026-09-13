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
// Force-muted autoplay for the looping header video.
// VSCode's preview webview blocks attribute-only autoplay,
// so set muted via JS and call play() once data is ready.
const loopVideo = document.querySelector("video.profile-image");
if (loopVideo) {
  loopVideo.muted = true;
  const tryPlay = () => loopVideo.play().catch(() => {});
  if (loopVideo.readyState >= 2) {
    tryPlay();
  } else {
    loopVideo.addEventListener("canplay", tryPlay, { once: true });
  }
}
