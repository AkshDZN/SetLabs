
let lineIndex = 2;

function newLine() {
  const lineDiv = document.createElement("div");
  lineDiv.className = "line"; 
  lineDiv.id = "l" + lineIndex;
  document.querySelector('.lines').appendChild(lineDiv);

  const lineIndexDiv = document.createElement("div");
  lineIndexDiv.className = "lineIndex";
  lineIndexDiv.innerHTML = lineIndex;
  const lineId = "l" + lineIndex;
  document.getElementById(lineId).appendChild(lineIndexDiv);

  const lineInput = document.createElement("input");
  lineInput.className = "code";
  lineInput.type = "text";
  document.getElementById(lineId).appendChild(lineInput);

  lineInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      console.log("Enter");
      newLine();
    }

    if (event.key === "Backspace") {
      console.log("Backspace");
    }
  });

  lineIndex++;
}

let codeLines = document.querySelectorAll('.code');

for (const codeLine of codeLines) {
  codeLine.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Enter");
        newLine();
    }

    if (event.key === "Backspace") {
        console.log("Backspace");  
    }
  });
}

