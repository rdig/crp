const root = document.getElementById('js');

const box1 = document.createElement('div');
box1.textContent = 'Box';
box1.style.backgroundColor = 'green';
box1.style.width = '200px';
box1.style.height = '200px';

root.appendChild(box1);

const box2 = document.createElement('div');
box2.textContent = 'Changed Box';
box2.style.backgroundColor = 'green';
box2.style.width = '200px';
box2.style.height = '200px';

root.removeChild(box1);
root.appendChild(box2);
