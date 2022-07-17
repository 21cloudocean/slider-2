function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check"${selection}", no such element exists`);
}
export default getElement;
