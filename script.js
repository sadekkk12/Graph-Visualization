document.querySelectorAll("circle").forEach((circle) => circle.addEventListener("mousedown", clickedNode));

let inEdge = null;
let outEdge = null;
function clickedNode(event) {
  const circle = event.target;
  const entireSVG = document.querySelector("#graph");

  entireSVG.addEventListener("mousemove", moveNode);
  entireSVG.addEventListener("mouseup", releaseNode);

  function moveNode(moveEvent) {
    const svgRect = entireSVG.getBoundingClientRect();
    const mouseX = moveEvent.clientX - svgRect.x;
    const mouseY = moveEvent.clientY - svgRect.y;

    circle.setAttribute("cx", mouseX);
    circle.setAttribute("cy", mouseY);

    inEdge.setAttribute("x2", mouseX);
    inEdge.setAttribute("y2", mouseY);
    outEdge.setAttribute("x1", mouseX);
    outEdge.setAttribute("y1", mouseY);
  }

  switch (circle.id) {
    case "node1":
      inEdge = document.querySelector("#edgeD");
      outEdge = document.querySelector("#edgeA");
      break;
    case "node2":
      inEdge = document.querySelector("#edgeA");
      outEdge = document.querySelector("#edgeB");
      break;

    case "node3":
      inEdge = document.querySelector("#edgeB");
      outEdge = document.querySelector("#edgeC");
      break;

    case "node4":
      inEdge = document.querySelector("#edgeC");
      outEdge = document.querySelector("#edgeD");
      break;
  }

  function releaseNode() {
    entireSVG.removeEventListener("mousemove", moveNode);
    entireSVG.removeEventListener("mouseup", releaseNode);
  }
}
