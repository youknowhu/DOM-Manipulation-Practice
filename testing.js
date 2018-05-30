const targetDiv = document.getElementById('target');
makeNodeTree(['div', 'section', 'span', 'p'], targetDiv);


function makeNodeTree(elementsArray, node) {
  let i = elementsArray.length - 1;
  let inner = `<${elementsArray[i]}> Done! </${elementsArray[i]}>`
  i--;

  while (i >= 0) {
    inner = `<${elementsArray[i]}> ${inner} </${elementsArray[i]}>`
    i--;
  }

  node.innerHTML = inner;
  return node;
}
