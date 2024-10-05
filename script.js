const jsonData = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Description for item 1.',
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Description for item 2.',
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'Description for item 3.',
  },
];

const content = document.getElementById('content');

jsonData.forEach((item) => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');

  const title = document.createElement('h2');
  title.textContent = item.title;

  const description = document.createElement('p');
  description.textContent = item.description;

  itemDiv.appendChild(title);
  itemDiv.appendChild(description);
  content.appendChild(itemDiv);
});
