function openTab(evt, tabName) {
  if (tabName === "resume") {
    // Open resume.pdf in a new tab
    window.open("resume.pdf", "_blank");
    return;
  }

  // Hide all tab contents
  let contents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // Remove "active" class from all tabs
  let tabs = document.getElementsByClassName("tablink");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show selected tab and set active button
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
