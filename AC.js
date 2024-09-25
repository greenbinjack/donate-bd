/**
 * toggling between donation and history tabs
 *
 */

function donation_will_be_showed() {
  let thakbe = document.getElementById("donateTab");
  let jabe = document.getElementById("historyTab");
  thakbe.classList.remove("hidden");
  jabe.classList.add("hidden");

  let donateBtn = document.getElementById("donateBtn");
  donateBtn.classList.add("bg-[#B4F461]");
  let historyBtn = document.getElementById("historyBtn");
  historyBtn.classList.remove("bg-[#B4F461]");

  let thakbe2 = document.getElementById("footerr");
  thakbe2.classList.add("hidden");
}

function history_will_be_showed() {
  let jabe = document.getElementById("donateTab");
  let thakbe = document.getElementById("historyTab");
  thakbe.classList.remove("hidden");
  jabe.classList.add("hidden");

  let donateBtn = document.getElementById("donateBtn");
  donateBtn.classList.remove("bg-[#B4F461]");
  let historyBtn = document.getElementById("historyBtn");
  historyBtn.classList.add("bg-[#B4F461]");

  let jabe2 = document.getElementById("footerr");
  jabe2.classList.add("hidden");
}

/**
 * creating history section tabs
 *
 */

let bank = 69420;
let balance = document.getElementById("balance");
balance.innerText = `${bank} BDT`;
let c_one = 0,
  d_one = document.getElementById("c_one");
let c_two = 0,
  d_two = document.getElementById("c_two");
let c_three = 0,
  d_three = document.getElementById("c_three");

function create_new_tab(donate_amount, event_name) {
  let historySec = document.getElementById("historyTab");
  let parentDiv = document.createElement("div");
  parentDiv.classList.add(
    "border-2",
    "rounded-lg",
    "p-4",
    "space-y-4",
    "w-[75%]",
    "mx-auto"
  );

  let h2 = document.createElement("h2");
  h2.classList.add("font-bold");
  h2.innerText = `${donate_amount} taka is donated  for ${event_name}`;

  let p = document.createElement("p");
  p.classList.add("font-light");
  const current_time = new Date();
  p.innerText = `${current_time}`;

  parentDiv.appendChild(h2);
  parentDiv.appendChild(p);
  historySec.insertBefore(parentDiv, historySec.firstChild);
}

/**
 * checking constraints for donation amount and calculation part
 *
 */

function calculation(whichOne) {
  let val;
  
  if (whichOne === 1) {
    val = parseInt(document.getElementById("noakhali").value);
    if (isNaN(val) || val > bank || val < 0) {
      alert("Invalid transaction");
    } else {
      let name = document.getElementById ('noakhali_event_name').innerText;
      bank -= val;
      c_one += val;
      balance.innerText = `${bank} BDT`;
      d_one.innerText = `${c_one} BDT`;
      create_new_tab(val, name);
      modal.showModal();
    }
  }
  else if (whichOne === 2) {
    val = parseInt(document.getElementById("feni").value);
    if (isNaN(val) || val > bank || val < 0) {
      alert("Invalid transaction");
    } else {
      let name = document.getElementById ('feni_event_name').innerText;
      bank -= val;
      c_two += val;
      balance.innerText = `${bank} BDT`;
      d_two.innerText = `${c_two} BDT`;
      create_new_tab(val, name);
      modal.showModal();
    }
  }
  else if (whichOne === 3) {
    val = parseInt(document.getElementById("quota").value);
    if (isNaN(val) || val > bank || val < 0) {
      alert("Invalid transaction");
    } else {
      let name = document.getElementById ('quota_event_name').innerText;
      bank -= val;
      c_three += val;
      balance.innerText = `${bank} BDT`;
      d_three.innerText = `${c_three} BDT`;
      create_new_tab(val, name);
      modal.showModal();
    }
  }
}
