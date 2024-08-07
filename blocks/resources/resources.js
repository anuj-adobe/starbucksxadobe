export default async function decorate(block) {
  // Get the first div and add a class to it for styling
  const imageContainer = block.querySelector('div > div:first-child');
  imageContainer.classList.add('resources-image');

  // Get the second div and add a class to it for styling the heading
  const headingContainer = block.querySelector('div > div:nth-child(2)');
  headingContainer.classList.add('resources-heading');

  // Wrap the image and heading in a single container for row display
  const rowContainer = document.createElement('div');
  rowContainer.classList.add('resources-row');
  rowContainer.appendChild(imageContainer);
  rowContainer.appendChild(headingContainer);

  block.insertBefore(rowContainer, block.firstChild);

  // Get the third div and add a class to it for styling the links
  const linksContainer = block.querySelector('ul');
  linksContainer.classList.add('resources-links');

  // Add specific classes to the list items for styling
  const listItems = linksContainer.querySelectorAll('li');
  listItems.forEach((item) => {
    item.classList.add('resources-link-item');

    // Add the arrow image before the link text
    const arrowIcon = document.createElement('img');
    arrowIcon.src = '/icons/rightArrow.png'; // Replace with the correct path to your arrow icon
    arrowIcon.alt = 'Arrow Icon';
    arrowIcon.classList.add('arrow-icon');
    item.insertBefore(arrowIcon, item.firstChild);
  });
}
