// @ts-nocheck
export default function render(parentElm, block) {
  parentElm.appendChild(block.getContent());
  block.dispatchComponentDidMount();

  return parentElm;
} 