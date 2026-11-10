/* 
  Reflection Answers:
  /* 
  Reflection Answers:
  1. What does require('dotenv').config() do, and how does process.env.PI_LICENSE in hw9-routes.js get its value even though dotenv is not called there?
    It loads the hidden variables from the .env file so we can use them. It works in the other file because app.js already ran dotenv globally, so process.env is shared across all files.
  
  2. In IC20 your data was submitted with a <form> and e.preventDefault(). In HW9 there is no <form>. What changed? Why doesn't a plain <button> outside a form trigger a page reload?
    Without a form element, clicking a normal button doesn't automatically try to submit anything or refresh the page. We just send the data behind the scenes with fetch() instead.
  
  3. What happens to the case list if the Docker container restarts? Why? What would you need to add to make the data survive a restart?
    All the cases get erased because they're just sitting in temporary memory. To make them stay, we would need to hook up a database.
  
  4. Your POST route returns 400 when suspect is missing. Where does the browser-side code receive that 400? How does response.ok help distinguish a 400 from a 201?
    The fetch response object gets the status code. response.ok lets us check if it was a successful code or an error code like 400 so we know when to show the error message.
*/

// HW9 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

async function loadCredentials() {
  try {
    const response = await fetch('/hw9/credentials');
    const data = await response.json();
    const dl = document.getElementById('credentials');
    dl.innerHTML = '';
    
    Object.entries(data).forEach(([key, value]) => {
      const dt = document.createElement('dt');
      dt.textContent = key;
      const dd = document.createElement('dd');
      dd.textContent = value || 'undefined';
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
  } catch (err) {
    console.error('Failed to load credentials:', err);
  }
}

async function loadCases() {
  try {
    const response = await fetch('/hw9/cases');
    const cases = await response.json();
    const ul = document.getElementById('case-list');
    ul.innerHTML = '';

    if (cases.length === 0) {
      const li = document.createElement('li');
      li.className = 'empty-msg';
      li.textContent = 'No cases filed yet.';
      ul.appendChild(li);
      return;
    }

    cases.forEach(c => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="case-id">Case #${c.id}</div>
        <div class="case-suspect">${escapeHTML(c.suspect)}</div>
        <div class="case-location">Location: ${escapeHTML(c.location)}</div>
        ${c.notes ? `<div class="case-notes">Notes: ${escapeHTML(c.notes)}</div>` : ''}
        <div class="case-ts">${new Date(c.timestamp).toLocaleString()}</div>
      `;
      ul.appendChild(li);
    });
  } catch (err) {
    console.error('Failed to load cases:', err);
  }
}

async function logCase() {
  const suspectInput = document.getElementById('suspect');
  const locationInput = document.getElementById('location');
  const notesInput = document.getElementById('notes');
  const statusMsg = document.getElementById('log-status');

  statusMsg.textContent = '';

  const suspect = suspectInput.value.trim();
  const location = locationInput.value.trim();
  const notes = notesInput.value.trim();

  try {
    const response = await fetch('/hw9/cases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ suspect, location, notes })
    });

    const data = await response.json();

    if (!response.ok) {
      statusMsg.textContent = data.error || 'Failed to file case.';
      return;
    }

    // Clear inputs and refresh case log on success
    suspectInput.value = '';
    locationInput.value = '';
    notesInput.value = '';
    statusMsg.textContent = '';
    loadCases();
  } catch (err) {
    statusMsg.textContent = 'Network error occurred.';
    console.error(err);
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Bind button event listener
document.getElementById('log-btn').addEventListener('click', logCase);

// Initial data load on page startup
loadCredentials();
loadCases();

