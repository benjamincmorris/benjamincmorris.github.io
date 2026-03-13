const bubbleGroup = document.querySelector(".speech-group")
const bubble = document.querySelector(".speech-bubble")
const speechNode = document.querySelector(".speech-node")
const question = document.querySelector(".speech-question")

const orangeNodes = document.querySelectorAll(".listener-node")   // orange graph
const blueNodes = document.querySelectorAll(".speaker-node")      // blue graph
const orangeEdges = document.querySelectorAll(".orange-line")
const blueEdges = document.querySelectorAll(".blue-line")

/* ---------- initial state ---------- */

function resetNodes(nodes,color){
  nodes.forEach(n=>{
    n.setAttribute("r",7)
    n.setAttribute("fill",color)
    n.setAttribute("fill-opacity",0.35)
    n.style.stroke="none"
  })
}

/* ---------- choose random nodes ---------- */

function pickSubset(nodes){

  const shuffled=[...nodes].sort(()=>Math.random()-0.5)

  const count=Math.floor(Math.random()*3)+2   // 2–4 nodes

  return shuffled.slice(0,count)
}

/* ---------- activate nodes ---------- */

function activateNodes(nodes,color){

  const chosen=pickSubset(nodes)

  chosen.forEach((node,i)=>{

    setTimeout(()=>{

      node.setAttribute("r",9)
      node.style.opacity=1
      node.style.fill=color
      node.style.stroke="none"

    },i*400)

  })

}

/* ---------- uncertain update ---------- */

function uncertainUpdate(nodes,color){

  const chosen=pickSubset(nodes)

  chosen.forEach((node,i)=>{

    setTimeout(()=>{

      node.setAttribute("r",8)
      node.style.opacity=1
      node.style.fill="white"
      node.style.stroke=color
      node.style.strokeWidth=2

    },i*450)

  })

}

/* ---------- bubble ---------- */

function showBubble(color,flip){

  bubble.style.stroke = color
  speechNode.style.fill = color
  speechNode.style.opacity = 1

  bubbleGroup.style.transform = flip ? "scaleX(-1)" : "scaleX(1)"
  bubbleGroup.dataset.flip = flip ? "1" : "0"

  bubbleGroup.style.opacity = 1
}

/* keep question mark readable when bubble flips */
function showQuestion(){

  question.style.opacity = 1
  question.style.fontWeight = "700"
  question.style.fontSize = "28px"

  const flipped = bubbleGroup.dataset.flip === "1"

  question.style.transform = flipped ? "scaleX(-1)" : "scaleX(1)"
  question.setAttribute("x", flipped ? 460 : 520)

}

function hideBubble(){

  bubbleGroup.style.opacity=0
  question.style.opacity=0

}

/* ---------- run update ---------- */

function runUpdate(nodes,color){


  if(uncertain){

    showQuestion()
    uncertainUpdate(nodes,color)

  }else{

    question.style.opacity=0
    activateNodes(nodes,color)

  }

}

function pulseNode(node, color){

  const base = parseFloat(node.getAttribute("r")) || 9

  node.style.fill = color
  node.style.stroke = "none"
  node.style.fillOpacity = 1

  node.setAttribute("r", base + 3)

  setTimeout(()=>{
    node.setAttribute("r", base)
  },220)

}

function ignorancePulse(node,color){

  const base = parseFloat(node.getAttribute("r")) || 9

  node.style.fill = "white"
  node.style.stroke = color
  node.style.strokeWidth = "2"
  node.style.fillOpacity = "1"

  node.setAttribute("r", base + 2)

  setTimeout(()=>{
    node.setAttribute("r", base)
  },260)

}
function propagate(nodes, edges, color, uncertain){

  const nodeList = [...nodes]
  const source = nodeList[Math.floor(Math.random()*nodeList.length)]

  const sx = source.getAttribute("cx")
  const sy = source.getAttribute("cy")

  const neighbors = []

  edges.forEach(e=>{

    const x1=e.getAttribute("x1")
    const y1=e.getAttribute("y1")
    const x2=e.getAttribute("x2")
    const y2=e.getAttribute("y2")

    if(x1===sx && y1===sy){
      const n=nodeList.find(n=>n.getAttribute("cx")===x2 && n.getAttribute("cy")===y2)
      if(n) neighbors.push(n)
    }

    if(x2===sx && y2===sy){
      const n=nodeList.find(n=>n.getAttribute("cx")===x1 && n.getAttribute("cy")===y1)
      if(n) neighbors.push(n)
    }

  })

  const targets = neighbors.slice(0,3)

  if (uncertain) {

    ignorancePulse(source, color)

    setTimeout(()=>{
      targets.forEach((n,i)=>{
        setTimeout(()=>{
          ignorancePulse(n, color)
        }, i * 220)
      })
    },250)

    return
  }

  question.style.opacity = 0

  source.setAttribute("fill-opacity",1)
  pulseNode(source, color)

  setTimeout(()=>{

    targets.forEach(n=>{
      n.setAttribute("fill-opacity",1)
      pulseNode(n, color)
    })

    glowEdges(source,targets,edges)

  },500)

}

function glowEdges(source, neighbors, edges){

  const activeNodes=[source,...neighbors]

  function isActive(x,y){
    return activeNodes.some(n =>
      n.getAttribute("cx")===x &&
      n.getAttribute("cy")===y
    )
  }

  edges.forEach(e=>{

    const x1=e.getAttribute("x1")
    const y1=e.getAttribute("y1")
    const x2=e.getAttribute("x2")
    const y2=e.getAttribute("y2")

    if(isActive(x1,y1) && isActive(x2,y2)){

      e.setAttribute("stroke-opacity",1)
      e.setAttribute("stroke-width",4)

      setTimeout(()=>{
        e.setAttribute("stroke-opacity",0.35)
        e.setAttribute("stroke-width",2)
      },350)

    }

  })

}

/* ---------- conversation loop ---------- */

function rightTurn(){

  const uncertain = Math.random() < 0.2

  showBubble("#f97316",false)

  if(uncertain) showQuestion()
  else question.style.opacity = 0

  setTimeout(()=>{
    propagate(orangeNodes, orangeEdges, "#f97316", uncertain)
  },700)

  setTimeout(()=> hideBubble(),3000)

  setTimeout(()=> leftTurn(),5400)
}

function leftTurn(){

  const uncertain = Math.random() < 0.2

  showBubble("#3b82f6",true)

  if(uncertain) showQuestion()
  else question.style.opacity = 0

  setTimeout(()=>{
    propagate(blueNodes, blueEdges, "#3b82f6", uncertain)
  },700)

  setTimeout(()=> hideBubble(),3000)

  setTimeout(()=> rightTurn(),5400)
}

/* ---------- start ---------- */

resetNodes(orangeNodes,"#f97316")
resetNodes(blueNodes,"#3b82f6")

  setTimeout(()=>{
    rightTurn()
  },500)