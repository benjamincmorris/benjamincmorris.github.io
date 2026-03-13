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

  bubble.style.stroke=color
  speechNode.style.fill=color
  speechNode.style.opacity=1

  if(flip){
    bubbleGroup.style.transform="scaleX(-1)"
  }else{
    bubbleGroup.style.transform="scaleX(1)"
  }

  bubbleGroup.style.opacity=1
}

/* keep question mark readable when bubble flips */

function showQuestion(){

  question.style.opacity=1
  question.style.fontWeight="700"
  question.style.fontSize="28px"

  question.style.transform="scaleX(1)"   // cancel bubble flip

}

function hideBubble(){

  bubbleGroup.style.opacity=0
  question.style.opacity=0

}

/* ---------- run update ---------- */

function runUpdate(nodes,color){

  const uncertain=Math.random()<0.2   // rare

  if(uncertain){

    showQuestion()
    uncertainUpdate(nodes,color)

  }else{

    question.style.opacity=0
    activateNodes(nodes,color)

  }

}

function propagate(nodes, edges, color){

  const uncertain = Math.random() < 0.18   // ~1 in 5 turns

  const nodeList = [...nodes]
  const source = nodeList[Math.floor(Math.random()*nodeList.length)]

  const sx = source.getAttribute("cx")
  const sy = source.getAttribute("cy")

  // uncertain case
  if(uncertain){

    showQuestion()

    source.setAttribute("r",9)
    source.setAttribute("fill","white")
    source.setAttribute("stroke",color)
    source.setAttribute("stroke-width",2)
    source.setAttribute("fill-opacity",1)

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

    neighbors.slice(0,2).forEach(n=>{
      n.setAttribute("fill","white")
      n.setAttribute("stroke",color)
      n.setAttribute("stroke-width",2)
      n.setAttribute("fill-opacity",1)
    })

    return
  }

  // normal propagation
  question.style.opacity = 0

  source.setAttribute("r",10)
  source.setAttribute("fill-opacity",1)

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

  setTimeout(()=>{

    targets.forEach(n=>{
      n.setAttribute("r",9)
      n.setAttribute("fill-opacity",1)
    })

    glowEdges(source,targets,edges)

  },500)

}

function glowEdges(source,neighbors,edges){

  const activeNodes=[source,...neighbors]

  edges.forEach(e=>{

    const x1=e.getAttribute("x1")
    const y1=e.getAttribute("y1")
    const x2=e.getAttribute("x2")
    const y2=e.getAttribute("y2")

    const touches=activeNodes.some(n=>{
      const cx=n.getAttribute("cx")
      const cy=n.getAttribute("cy")

      return(
        (cx===x1 && cy===y1) ||
        (cx===x2 && cy===y2)
      )
    })

    if(touches){

      e.setAttribute("stroke-width",4)
      e.setAttribute("stroke-opacity",1)

      setTimeout(()=>{
        e.setAttribute("stroke-width",2)
        e.setAttribute("stroke-opacity",0.35)
      },350)

    }

  })

}

/* ---------- conversation loop ---------- */

function rightTurn(){   // orange speaking

  showBubble("#f97316",false)

  setTimeout(()=>{
    propagate(orangeNodes, orangeEdges, "#f97316")
    // runUpdate(orangeNodes,"#f97316")
  },700)

  setTimeout(()=>{
    hideBubble()
  },3000)

  setTimeout(()=>{
    leftTurn()
  },5400)

}

function leftTurn(){    // blue speaking

  showBubble("#3b82f6",true)

  setTimeout(()=>{
      propagate(blueNodes, blueEdges, "#3b82f6")
    // runUpdate(blueNodes,"#3b82f6")
  },700)

  setTimeout(()=>{
    hideBubble()
  },3000)

  setTimeout(()=>{
    rightTurn()
  },5400)

}

/* ---------- start ---------- */

resetNodes(orangeNodes,"#f97316")
resetNodes(blueNodes,"#3b82f6")

rightTurn()