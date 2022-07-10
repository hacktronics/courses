function dragStart(ev) {
  ev.dataTransfer.effectAllowed='move';
  ev.dataTransfer.setData("ID", ev.target.getAttribute('id'));
  ev.dataTransfer.setDragImage(ev.target,50,50);
  return true;
}

// these functions prevents default behavior of browser
function dragEnter(ev) {
  event.preventDefault();
  return true;
}

function dragOver(ev) {
  event.preventDefault();
}

// function defined for when drop element on target
function dragDrop(ev) {
  const data = ev.dataTransfer.getData("ID");
  const target = document.getElementById("dropCodeBlocks");
  target.appendChild(document.getElementById(data));
  ev.stopPropagation();
  return false;
}

function onCodeCheck(ev, answer) {
  ev.stopPropagation();
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.style.display = "none";
  const codeBlocks = document.getElementById("dropCodeBlocks");
  const codeBlocksArray = codeBlocks.children;
  let code = [];
  for (let i = 0; i < codeBlocksArray.length; i++) {
    code.push(codeBlocksArray[i].getAttribute('id'));
  };
  const codeString = code.join(',');
  if(codeString === answer) {
    window.parent.postMessage('GoodJob', '*')
  } else {
    window.parent.postMessage('Oops', '*')
  }
}