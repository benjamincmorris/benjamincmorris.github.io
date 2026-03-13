---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


I’m a postdoctoral researcher at Yale, working with Julian Jara-Ettinger in the <a href="https://compdevlab.yale.edu/">Computational Social Cognition Lab</a>.

I study how people build mental models of others in real time, just by listening. My work focuses on how children learn to do this, using subtle conversational cues like delays, disfluencies, and interjections to infer what others know, think, and feel. I use behavioral experiments, corpus analysis, and computational modeling to understand how these inferences unfold.

<div class="epistemic-container">
  <defs>
    <style>
      .blue-fill { fill: #3b82f6; fill-opacity: 0.18; stroke: #3b82f6; stroke-width: 4; stroke-linejoin: round; stroke-linecap: round; }
      .orange-fill { fill: #f97316; fill-opacity: 0.18; stroke: #f97316; stroke-width: 4; stroke-linejoin: round; stroke-linecap: round; }
      .blue-line { stroke: #3b82f6; stroke-width: 2.5; stroke-linecap: round; }
      .orange-line { stroke: #f97316; stroke-width: 2.5; stroke-linecap: round; }
    </style>
  </defs>


  <img src="/assets/images/epistemic_heads.png" class="heads">

  <svg class="network-layer" viewBox="330 -50 350 400">

  <!-- SPEECH BUBBLE -->
<g class="speech-group" transform="translate(0, 0)">

  <path
    class="speech-bubble"
    d="
      M 432 42
      Q 500 -8 568 42
      Q 589 59 573 86
      Q 569 94 558 97
      L 547 101
      L 551 127
      L 524 109
      Q 471 111 432 88
      Q 411 71 432 42
      Z"
    fill="white"
    stroke-width="3"
  />


  <text class="speech-question"
        x="520"
        y="72"
        text-anchor="start"
        font-size="28"
        font-weight="700"
        opacity="0">?</text>

  <circle cx="500" cy="69" r="9" class="speech-node"/>

</g>


<!-- <circle cx="500" cy="69" r="9" fill="#3b82f6" class="speech-node"/> -->

<!-- LEFT NETWORK -->
<g id="left-network" transform="translate(-30,-60)">

<!-- main spine -->
<line class="orange-line" x1="305" y1="90" x2="338" y2="120" stroke="#f97316" stroke-opacity=".35"/>
<line class="orange-line" x1="338" y1="120" x2="308" y2="160" stroke="#f97316" stroke-opacity=".35"/>
<line class="orange-line" x1="308" y1="160" x2="285" y2="190" stroke="#f97316" stroke-opacity=".35"/>

<!-- left branch -->
<line class="orange-line" x1="305" y1="90" x2="270" y2="120" stroke="#f97316" stroke-opacity=".35"/>
<line class="orange-line" x1="270" y1="120" x2="240" y2="150" stroke="#f97316" stroke-opacity=".35"/>
<line class="orange-line" x1="240" y1="150" x2="260" y2="180" stroke="#f97316" stroke-opacity=".35"/>

<!-- right cluster -->
<line class="orange-line" x1="338" y1="120" x2="352" y2="150" stroke="#f97316" stroke-opacity=".35"/>
<line class="orange-line" x1="352" y1="150" x2="330" y2="178" stroke="#f97316" stroke-opacity=".35"/>
<line class="orange-line" x1="330" y1="178" x2="308" y2="160" stroke="#f97316" stroke-opacity=".35"/>

<!-- cross connections -->
<line class="orange-line" x1="270" y1="120" x2="308" y2="160" stroke="#f97316" stroke-opacity=".35"/>
<line class="orange-line" x1="260" y1="180" x2="285" y2="190" stroke="#f97316" stroke-opacity=".35"/>

<!-- nodes -->
<circle class="listener-node" cx="305" cy="90" r="7" fill="#f97316" fill-opacity=".35"/>
<circle class="listener-node" cx="338" cy="120" r="7" fill="#f97316" fill-opacity=".35"/>
<circle class="listener-node" cx="308" cy="160" r="7" fill="#f97316" fill-opacity=".35"/>
<circle class="listener-node" cx="285" cy="190" r="7" fill="#f97316" fill-opacity=".35"/>

<circle class="listener-node" cx="270" cy="120" r="7" fill="#f97316" fill-opacity=".35"/>
<circle class="listener-node" cx="240" cy="150" r="7" fill="#f97316" fill-opacity=".35"/>
<circle class="listener-node" cx="260" cy="180" r="7" fill="#f97316" fill-opacity=".35"/>

<circle class="listener-node" cx="352" cy="150" r="7" fill="#f97316" fill-opacity=".35"/>
<circle class="listener-node" cx="330" cy="178" r="7" fill="#f97316" fill-opacity=".35"/>

</g>

<g id="right-network" transform="translate(50,-60)">

<!-- central triangle -->
<line class="blue-line" x1="695" y1="90" x2="728" y2="120" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="728" y1="120" x2="695" y2="160" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="695" y1="160" x2="660" y2="120" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="660" y1="120" x2="695" y2="90" stroke="#3b82f6" stroke-opacity=".35"/>

<!-- right cluster -->
<line class="blue-line" x1="728" y1="120" x2="748" y2="150" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="748" y1="150" x2="735" y2="178" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="735" y1="178" x2="695" y2="160" stroke="#3b82f6" stroke-opacity=".35"/>

<!-- lower branch -->
<line class="blue-line" x1="695" y1="160" x2="705" y2="195" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="705" y1="195" x2="665" y2="175" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="665" y1="175" x2="695" y2="160" stroke="#3b82f6" stroke-opacity=".35"/>

<!-- side connection -->
<line class="blue-line" x1="660" y1="120" x2="630" y2="145" stroke="#3b82f6" stroke-opacity=".35"/>
<line class="blue-line" x1="630" y1="145" x2="665" y2="175" stroke="#3b82f6" stroke-opacity=".35"/>

<!-- nodes -->
<circle class="speaker-node" cx="695" cy="90" r="7" fill="#3b82f6" fill-opacity=".35"/>
<circle class="speaker-node" cx="728" cy="120" r="7" fill="#3b82f6" fill-opacity=".35"/>
<circle class="speaker-node" cx="695" cy="160" r="7" fill="#3b82f6" fill-opacity=".35"/>
<circle class="speaker-node" cx="660" cy="120" r="7" fill="#3b82f6" fill-opacity=".35"/>

<circle class="speaker-node" cx="748" cy="150" r="7" fill="#3b82f6" fill-opacity=".35"/>
<circle class="speaker-node" cx="735" cy="178" r="7" fill="#3b82f6" fill-opacity=".35"/>

<circle class="speaker-node" cx="705" cy="195" r="7" fill="#3b82f6" fill-opacity=".35"/>
<circle class="speaker-node" cx="665" cy="175" r="7" fill="#3b82f6" fill-opacity=".35"/>
<circle class="speaker-node" cx="630" cy="145" r="7" fill="#3b82f6" fill-opacity=".35"/>

</g>
</svg>
</div>



Prior to joining Yale, I completed my PhD working with Alex Shaw at the <a href="https://www.dibslab.uchicago.edu/">DIBS Lab</a> at University of Chicago, where I also worked with Dan Yurovsky.

**Prior training:**<br>
<span style="display: block; margin-left: 1em;">
PhD in Developmental Psychology, <em>University of Chicago</em><br>
MPhil in Social and Developmental Psychology, <em>University of Cambridge</em><br>
BA in Psychology, <em>Reed College</em>
</span>




<!-- I’m a developmental psychologist studying how we draw rich social meaning from everyday conversation. Currently, I'm a postdoctoral researcher at Yale University, working with Julian Jara-Ettinger at the <a href="https://compdevlab.yale.edu/">Computational Social Cognition Lab</a>.

Every time we talk to someone, we're tasked with reasoning about their mind. Often our key insights come not from _what_ they say, but _how_ they say it. Imagine asking a friend what they think of your new haircut. Sure, their words will matter. But you might learn more about what they really think from the pause before they speak, their puzzled facial expression, or the way they say, “it’s… different.”

In my research, I study how subtle conversational cues — like disfluencies, delays, and surprise — reveal mental processes behind what people say, leading people to draw rich inferences about what others' know, like, and believe. These inferences help us navigate communication, evaluate others, and learn from social interaction. Much of my work focuses on the development of such inferences in early childhood, and how they guide social learning. Methodologically, I rely on behavioral experiments, corpus analyses, and computational modeling to study these inference processes.



Previously, I completed my PhD working with Alex Shaw at the <a href="https://www.dibslab.uchicago.edu/">DIBS Lab</a> at UChicago and Dan Yurovsky at the <a href="https://callab.uchicago.edu/">Communication and Learning Lab</a> at Carnegie Mellon University. -->






<!-- Everyday conversation is a ubiquitous testbed of mental-state reasoning. Broadly, I am interested in how children rely on and exploit social reasoning in conversational contexts. To become smooth conversationalists, young children must learn to extract social information from language to learn about people, and also recruit social information to learn language. In much of my work, I explore how children infer social meaning not from *what* someone says, but from *how* (and especially how quickly) they say it. Methodologically, I rely on behavioral experiments with adults and children, corpus analysis, and computational modeling.
 -->
 <!-- [Computational Social Cognition Lab](https://compdevlab.yale.edu/). -->


<!--- Prior to coming to the University of Chicago, I worked with [Claire Hughes](https://www.cfr.cam.ac.uk/directory/ClaireHughes) at the University of Cambridge and [Jennifer Henderlong Corpus](https://www.reed.edu/psychology/faculty/corpus.html) at Reed College. -->

<!--- Broadly, I am interested in the intersection between language and social cognition across development. My current work explores the language cues that children use to infer others' mental-states, as well as how children adapt their language to a listener's mental-state. Methodologically, I rely on behavioral experiments with adults and children, corpus analysis, and computational modeling. -->