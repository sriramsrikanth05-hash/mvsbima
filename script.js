const WHATSAPP = "916301545182";

document.getElementById("year").textContent = new Date().getFullYear();

// Call-back form: opens WhatsApp with the customer's details filled in
const form = document.getElementById("callback-form");
const msg = form.querySelector(".form-msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  const { name, phone, type } = form.elements;
  const nameOk = name.value.trim() !== "";
  const phoneOk = phone.checkValidity() && phone.value !== "";
  name.classList.toggle("invalid", !nameOk);
  phone.classList.toggle("invalid", !phoneOk);

  msg.className = "form-msg";
  if (!nameOk || !phoneOk) {
    msg.textContent = "Please enter your name and a valid 10-digit mobile number.";
    msg.classList.add("err");
    return;
  }

  const text = `Hi MVS Bima, please call me back.\n\nName: ${name.value.trim()}\nMobile: ${phone.value}\nInsurance: ${type.value}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  msg.textContent = "Opening WhatsApp so you can send us your details…";
  msg.classList.add("ok");
});

// Only allow digits in the mobile field
form.elements.phone.addEventListener("input", e => {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
});
