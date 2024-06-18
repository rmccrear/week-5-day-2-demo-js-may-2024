function complaintChecker() {
  let complaint;
  complaint = prompt("What would you want to complain about/request?");
  complaintParagraph.innerHTML = `Dear Honey, I love you and a appreciate all you do for me. I really wish you would please ${complaint}. It would mean a lot to me!`;
}

complaintButton.onclick = complaintChecker;