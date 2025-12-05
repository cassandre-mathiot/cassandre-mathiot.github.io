document.getElementById("sendEmail").addEventListener("click", function () {
  const subject = encodeURIComponent(document.getElementById("subject").value);
  const bodyRaw = document.getElementById("body").value;
  const body = encodeURIComponent(bodyRaw.replace(/\n/g, "\r\n"));

  const email = "mathiot.cass@gmail.com";
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  const emailLink = document.getElementById("emailLink");
  emailLink.href = mailtoLink;
  emailLink.click();
});
