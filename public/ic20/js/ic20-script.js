/**
 * 
What does express.json() do, and what would happen to req.body in your POST route without it?
    it parses incoming JSON request bodies and makes the parsed data available on req.body. 
    Without it, req.body in your POST route is undefined.

What is the difference between HTTP status 200 and 201? When would you use each?
    200 means process sucessful or request was sucessful, such as get reuests.
    201 means resource created, such as when a new mission is added.

Your seed missions disappear every time the Docker container restarts. What would you need to add to make them persist?
    you would need to connect to a permanent database. 

If two people in different browser tabs both added missions at the same time, would they both see the same list? Why or why not?
    i honestly dont know, but i think it would be a no, because the missions are not in a database.

 */


// IC20 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

const list = document.getElementById('mission-list');
const form = document.getElementById('mission-form');

async function loadMissions() {
  const res  = await fetch('/ic20/missions');
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(m => {
    const li = document.createElement('li');
    li.innerHTML = `<p class="name">${m.name}</p><p class="dest">${m.destination}</p>`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name        = document.getElementById('mission-name').value.trim();
  const destination = document.getElementById('mission-dest').value.trim();
  await fetch('/ic20/missions', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ name, destination }),
  });
  form.reset();
  loadMissions();
});

