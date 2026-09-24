/* TravelMe — hand-drawn city skylines.
   Each entry returns SVG markup for a 1200 x 340 box, drawn bottom-anchored.
   Three depth layers: far (hazy), mid, near (solid silhouette). */

window.TM_SKYLINES = {

  paris: `
  <g class="sl-far">
    <rect x="0" y="252" width="140" height="88"/><rect x="150" y="268" width="90" height="72"/>
    <rect x="392" y="258" width="120" height="82"/><rect x="530" y="272" width="80" height="68"/>
    <rect x="760" y="262" width="110" height="78"/><rect x="884" y="276" width="70" height="64"/>
    <rect x="1096" y="256" width="104" height="84"/>
  </g>
  <g class="sl-mid">
    <!-- Arc de Triomphe -->
    <path d="M60 340V232h96v108h-22v-58a26 26 0 0 0-52 0v58Z"/>
    <rect x="54" y="222" width="108" height="12"/>
    <!-- Notre-Dame -->
    <rect x="608" y="236" width="30" height="104"/><rect x="654" y="236" width="30" height="104"/>
    <rect x="602" y="226" width="42" height="12"/><rect x="648" y="226" width="42" height="12"/>
    <path d="M638 340v-62h16v62Z"/><path d="M646 214l10 14h-20Z"/>
    <!-- Sacre-Coeur on the butte -->
    <path d="M934 340c0-46 18-70 46-70s46 24 46 70Z"/>
    <path d="M980 244c14 0 24 14 24 34h-48c0-20 10-34 24-34Z"/>
    <rect x="976" y="226" width="8" height="20"/>
    <path d="M1030 340c0-30 12-46 30-46s30 16 30 46Z"/>
    <path d="M918 340c0-26 10-40 26-40v40Z"/>
  </g>
  <g class="sl-near">
    <!-- Eiffel Tower -->
    <path d="M232 340c30-58 52-104 58-146h20c-6 42-28 88-58 146Zm136 0c-30-58-52-104-58-146h-20c6 42 28 88 58 146Z"/>
    <path d="M290 194h20l4-72h-28Z"/>
    <path d="M296 122h8l4-58h-16Z"/>
    <rect x="296" y="42" width="8" height="24"/>
    <rect x="262" y="186" width="76" height="12"/>
    <rect x="278" y="114" width="44" height="10"/>
    <path d="M246 268h108v10H246Z"/>
    <path d="M254 288c14-20 36-32 46-32s32 12 46 32Z"/>
    <!-- Haussmann rooftops -->
    <g>
      <path d="M0 340v-48l14-14h96l14 14v48Z"/>
      <path d="M140 340v-40l12-12h84l12 12v40Z"/>
      <path d="M372 340v-52l14-12h104l14 12v52Z"/>
      <path d="M510 340v-42l12-12h92l12 12v42Z"/>
      <path d="M700 340v-46l14-12h100l14 12v46Z"/>
      <path d="M836 340v-38l12-10h76l12 10v38Z"/>
      <path d="M1096 340v-50l14-12h90v62Z"/>
    </g>
    <g class="sl-window">
      <rect x="24" y="300" width="7" height="14"/><rect x="46" y="300" width="7" height="14"/><rect x="68" y="300" width="7" height="14"/>
      <rect x="398" y="304" width="7" height="14"/><rect x="420" y="304" width="7" height="14"/><rect x="442" y="304" width="7" height="14"/>
      <rect x="722" y="306" width="7" height="14"/><rect x="744" y="306" width="7" height="14"/><rect x="766" y="306" width="7" height="14"/>
      <rect x="1118" y="306" width="7" height="14"/><rect x="1140" y="306" width="7" height="14"/>
    </g>
  </g>`,

  nyc: `
  <g class="sl-far">
    <rect x="0" y="200" width="70" height="140"/><rect x="80" y="232" width="56" height="108"/>
    <rect x="148" y="176" width="48" height="164"/><rect x="286" y="206" width="66" height="134"/>
    <rect x="470" y="188" width="54" height="152"/><rect x="640" y="214" width="72" height="126"/>
    <rect x="830" y="196" width="60" height="144"/><rect x="1010" y="222" width="70" height="118"/>
    <rect x="1120" y="186" width="80" height="154"/>
  </g>
  <g class="sl-mid">
    <rect x="60" y="248" width="80" height="92"/><rect x="220" y="238" width="58" height="102"/>
    <rect x="352" y="262" width="46" height="78"/><rect x="600" y="252" width="44" height="88"/>
    <rect x="712" y="234" width="64" height="106"/><rect x="900" y="246" width="52" height="94"/>
    <rect x="968" y="268" width="44" height="72"/>
    <!-- water towers -->
    <path d="M86 248v-16h28v16Z"/><path d="M92 232l14-12 14 12Z" transform="translate(-8 0)"/>
    <path d="M918 246v-14h22v14Z"/><path d="M918 232l11-10 11 10Z"/>
  </g>
  <g class="sl-near">
    <!-- One World Trade -->
    <path d="M150 340V150l44-14v204Z"/>
    <rect x="170" y="86" width="5" height="52"/>
    <!-- Empire State -->
    <rect x="378" y="188" width="70" height="152"/>
    <rect x="364" y="228" width="98" height="112"/>
    <rect x="350" y="268" width="126" height="72"/>
    <rect x="392" y="150" width="42" height="42"/>
    <rect x="404" y="120" width="18" height="34"/>
    <rect x="410" y="78" width="6" height="44"/>
    <!-- Chrysler -->
    <rect x="530" y="212" width="56" height="128"/>
    <path d="M530 212h56l-8-26h-40Z"/><path d="M538 186h40l-7-22h-26Z"/><path d="M545 164h26l-6-20h-14Z"/>
    <rect x="556" y="106" width="4" height="40"/>
    <!-- Flatiron -->
    <path d="M776 340V212l64 18v110Z"/>
    <!-- mid-rise wall -->
    <rect x="0" y="290" width="150" height="50"/><rect x="200" y="298" width="150" height="42"/>
    <rect x="466" y="286" width="60" height="54"/><rect x="596" y="294" width="176" height="46"/>
    <rect x="850" y="282" width="120" height="58"/><rect x="1000" y="292" width="200" height="48"/>
    <g class="sl-window">
      <rect x="392" y="248" width="8" height="12"/><rect x="412" y="248" width="8" height="12"/><rect x="432" y="248" width="8" height="12"/>
      <rect x="392" y="272" width="8" height="12"/><rect x="432" y="272" width="8" height="12"/>
      <rect x="544" y="240" width="8" height="12"/><rect x="564" y="240" width="8" height="12"/>
      <rect x="164" y="200" width="8" height="12"/><rect x="180" y="196" width="8" height="12"/>
      <rect x="1040" y="310" width="8" height="12"/><rect x="1062" y="310" width="8" height="12"/><rect x="1084" y="310" width="8" height="12"/>
    </g>
  </g>`,

  tokyo: `
  <g class="sl-far">
    <rect x="30" y="214" width="58" height="126"/><rect x="104" y="240" width="72" height="100"/>
    <rect x="360" y="226" width="64" height="114"/><rect x="452" y="204" width="50" height="136"/>
    <rect x="700" y="232" width="78" height="108"/><rect x="800" y="210" width="46" height="130"/>
    <rect x="1000" y="238" width="66" height="102"/><rect x="1090" y="218" width="58" height="122"/>
  </g>
  <g class="sl-mid">
    <!-- pagoda -->
    <path d="M78 340v-34h84v34Z"/>
    <path d="M62 306l58-20 58 20Z"/><path d="M74 286v-26h72v26Z"/>
    <path d="M60 260l60-22 60 22Z"/><path d="M84 238v-22h72v22Z"/>
    <path d="M70 216l50-20 50 20Z"/><rect x="117" y="170" width="6" height="28"/>
    <!-- cocoon tower -->
    <path d="M596 340c-16-62-16-118 0-162 10-28 30-28 40 0 16 44 16 100 0 162Z"/>
    <!-- office blocks -->
    <rect x="452" y="256" width="60" height="84"/><rect x="524" y="240" width="48" height="100"/>
    <rect x="680" y="252" width="56" height="88"/><rect x="960" y="244" width="52" height="96"/>
  </g>
  <g class="sl-near">
    <!-- Tokyo Tower -->
    <path d="M214 340c26-56 42-104 46-148h28c4 44 20 92 46 148h-26c-20-48-32-88-34-124h-0c-2 36-14 76-34 124Z"/>
    <path d="M258 192h28l3-42h-34Z"/>
    <rect x="266" y="96" width="12" height="56"/>
    <rect x="240" y="186" width="64" height="12"/>
    <rect x="254" y="144" width="36" height="9"/>
    <rect x="268" y="66" width="8" height="32"/>
    <!-- Skytree -->
    <path d="M876 340c6-76 14-140 20-186h16c6 46 14 110 20 186h-20c-4-66-8-110-8-132-2 22-6 66-10 132Z"/>
    <ellipse cx="904" cy="148" rx="30" ry="11"/>
    <ellipse cx="904" cy="104" rx="20" ry="8"/>
    <rect x="901" y="38" width="6" height="62"/>
    <!-- torii -->
    <path d="M1108 340v-58h10v58Zm52 0v-58h10v58Z"/>
    <rect x="1094" y="268" width="90" height="9"/>
    <path d="M1088 260h102l-6 8h-90Z"/>
    <rect x="1102" y="286" width="74" height="7"/>
    <!-- street level -->
    <rect x="0" y="292" width="200" height="48"/><rect x="214" y="300" width="160" height="40"/>
    <rect x="390" y="288" width="190" height="52"/><rect x="600" y="298" width="240" height="42"/>
    <rect x="860" y="304" width="120" height="36"/><rect x="990" y="292" width="210" height="48"/>
    <g class="sl-window">
      <rect x="600" y="272" width="10" height="10"/><rect x="620" y="272" width="10" height="10"/>
      <rect x="600" y="248" width="10" height="10"/><rect x="620" y="248" width="10" height="10"/>
      <rect x="470" y="272" width="9" height="11"/><rect x="488" y="272" width="9" height="11"/>
      <rect x="978" y="262" width="9" height="11"/><rect x="994" y="262" width="9" height="11"/>
      <rect x="40" y="310" width="9" height="12"/><rect x="60" y="310" width="9" height="12"/><rect x="80" y="310" width="9" height="12"/>
    </g>
  </g>`,

  london: `
  <g class="sl-far">
    <rect x="60" y="244" width="70" height="96"/><rect x="330" y="232" width="52" height="108"/>
    <rect x="520" y="248" width="80" height="92"/><rect x="740" y="224" width="46" height="116"/>
    <rect x="1000" y="240" width="64" height="100"/><rect x="1130" y="252" width="70" height="88"/>
  </g>
  <g class="sl-mid">
    <!-- London Eye -->
    <g class="sl-eye">
      <circle cx="430" cy="196" r="78" fill="none" stroke-width="7"/>
      <circle cx="430" cy="196" r="66" fill="none" stroke-width="2"/>
      <path d="M430 118v156M352 196h156M375 141l110 110M485 141L375 251" fill="none" stroke-width="2"/>
      <path d="M414 340l16-146 16 146Z" stroke="none"/>
    </g>
    <!-- Parliament roofline -->
    <rect x="150" y="272" width="180" height="68"/>
    <path d="M150 272h180l-90-22Z"/>
    <rect x="286" y="238" width="26" height="36"/><path d="M286 238l13-24 13 24Z"/>
    <!-- Gherkin -->
    <path d="M948 340c-14-52-14-96 0-124 8-16 22-16 30 0 14 28 14 72 0 124Z"/>
    <path d="M960 208l3-14 3 14Z"/>
  </g>
  <g class="sl-near">
    <!-- Big Ben -->
    <rect x="86" y="164" width="46" height="176"/>
    <rect x="80" y="152" width="58" height="14"/>
    <circle cx="109" cy="196" r="15" class="sl-clock"/>
    <path d="M86 152l23-46 23 46Z"/>
    <rect x="106" y="86" width="6" height="22"/>
    <!-- St Paul's -->
    <path d="M598 340v-72h92v72Z"/>
    <path d="M610 268c0-36 15-58 34-58s34 22 34 58Z"/>
    <path d="M630 210c0-14 6-22 14-22s14 8 14 22Z"/>
    <rect x="641" y="170" width="6" height="20"/>
    <rect x="586" y="300" width="116" height="40"/>
    <!-- The Shard -->
    <path d="M806 340L840 96l34 244Z"/>
    <path d="M840 96l2-34 2 34Z"/>
    <!-- Tower Bridge -->
    <rect x="1042" y="220" width="34" height="120"/><rect x="1134" y="220" width="34" height="120"/>
    <path d="M1042 220l17-30 17 30Z"/><path d="M1134 220l17-30 17 30Z"/>
    <rect x="1076" y="238" width="58" height="12"/><rect x="1076" y="276" width="58" height="9"/>
    <rect x="1000" y="302" width="200" height="12"/>
    <!-- terraces -->
    <rect x="0" y="286" width="86" height="54"/><rect x="140" y="296" width="20" height="44"/>
    <rect x="348" y="296" width="80" height="44"/><rect x="450" y="302" width="130" height="38"/>
    <rect x="700" y="290" width="100" height="50"/><rect x="880" y="298" width="150" height="42"/>
    <g class="sl-window">
      <rect x="16" y="304" width="8" height="12"/><rect x="36" y="304" width="8" height="12"/><rect x="56" y="304" width="8" height="12"/>
      <rect x="716" y="306" width="8" height="12"/><rect x="738" y="306" width="8" height="12"/>
      <rect x="908" y="312" width="8" height="12"/><rect x="930" y="312" width="8" height="12"/><rect x="952" y="312" width="8" height="12"/>
    </g>
  </g>`,

  rome: `
  <g class="sl-far">
    <rect x="0" y="266" width="120" height="74"/><rect x="330" y="258" width="90" height="82"/>
    <rect x="560" y="270" width="80" height="70"/><rect x="920" y="262" width="96" height="78"/>
    <!-- aqueduct -->
    <g class="sl-arcade">
      <rect x="1030" y="248" width="170" height="16"/>
      <path d="M1040 340v-56a16 16 0 0 1 32 0v56Zm52 0v-56a16 16 0 0 1 32 0v56Zm52 0v-56a16 16 0 0 1 32 0v56Z"/>
    </g>
  </g>
  <g class="sl-mid">
    <!-- Pantheon -->
    <path d="M406 340v-56h108v56Z"/>
    <path d="M416 284c0-30 19-48 44-48s44 18 44 48Z"/>
    <path d="M396 236h128l-64-30Z"/>
    <rect x="404" y="236" width="10" height="48"/><rect x="426" y="236" width="10" height="48"/>
    <rect x="484" y="236" width="10" height="48"/><rect x="506" y="236" width="10" height="48"/>
    <!-- umbrella pines -->
    <g class="sl-pine">
      <rect x="862" y="250" width="9" height="90"/>
      <path d="M810 254c8-30 30-46 57-46s49 16 57 46c-28-12-86-12-114 0Z"/>
      <rect x="1152" y="268" width="8" height="72"/>
      <path d="M1112 272c6-24 24-38 44-38s38 14 44 38c-22-10-66-10-88 0Z"/>
    </g>
  </g>
  <g class="sl-near">
    <!-- Colosseum: solid ring, arcade openings lit from within -->
    <path d="M96 340v-84a112 44 0 0 1 224 0v84Z"/>
    <g class="sl-arch">
      <path d="M118 300v-26a12 12 0 0 1 24 0v26Zm40 0v-30a12 12 0 0 1 24 0v30Zm40 0v-31a12 12 0 0 1 24 0v31Zm40 0v-30a12 12 0 0 1 24 0v30Zm40 0v-26a12 12 0 0 1 24 0v26Z"/>
      <path d="M126 258v-18a10 10 0 0 1 20 0v18Zm38 0v-22a10 10 0 0 1 20 0v22Zm38 0v-24a10 10 0 0 1 20 0v24Zm38 0v-22a10 10 0 0 1 20 0v22Zm38 0v-18a10 10 0 0 1 20 0v18Z"/>
    </g>
    <!-- St Peter's -->
    <path d="M636 340v-64h180v64Z"/>
    <path d="M676 276c0-52 22-84 50-84s50 32 50 84Z"/>
    <path d="M708 196c0-18 8-30 18-30s18 12 18 30Z"/>
    <rect x="723" y="152" width="6" height="18"/>
    <path d="M640 276h32v64h-32Z"/><path d="M780 276h32v64h-32Z"/>
    <rect x="600" y="300" width="252" height="10"/>
    <!-- rooftops -->
    <rect x="0" y="300" width="96" height="40"/><rect x="330" y="304" width="76" height="36"/>
    <rect x="520" y="308" width="120" height="32"/><rect x="852" y="298" width="180" height="42"/>
    <g class="sl-window">
      <rect x="20" y="314" width="8" height="12"/><rect x="42" y="314" width="8" height="12"/>
      <rect x="880" y="312" width="8" height="12"/><rect x="902" y="312" width="8" height="12"/><rect x="924" y="312" width="8" height="12"/>
    </g>
  </g>`,

  barcelona: `
  <g class="sl-far">
    <rect x="0" y="252" width="110" height="88"/><rect x="430" y="246" width="74" height="94"/>
    <rect x="560" y="262" width="90" height="78"/><rect x="900" y="250" width="68" height="90"/>
    <path d="M60 246c0-30 22-48 52-48s52 18 52 48Z"/>
  </g>
  <g class="sl-mid">
    <!-- Torre Glories -->
    <path d="M660 340c-12-58-12-110 0-142 6-18 20-18 26 0 12 32 12 84 0 142Z"/>
    <!-- Casa Batllo roofline -->
    <path d="M800 340v-70c14-14 28-6 40-16s26-16 44-6v92Z"/>
    <path d="M806 264c16-16 34-4 48-14s28-12 44 0" fill="none" stroke-width="6"/>
    <!-- palms -->
    <g class="sl-palm">
      <rect x="1040" y="252" width="7" height="88"/>
      <path d="M1044 252c-22-14-38-12-50 4 18-4 30-2 38 6-16 2-26 10-30 24 14-12 26-16 36-12-8 10-10 22-6 34 6-16 12-24 20-26 6 6 10 16 12 28 4-16 2-28-4-36 12-2 22 2 32 12-4-16-14-24-28-28 10-6 24-6 40 2-12-18-30-22-52-8Z"/>
      <rect x="1140" y="268" width="6" height="72"/>
      <path d="M1143 268c-18-12-32-10-42 4 15-4 25-2 32 5-13 2-22 8-25 20 12-10 22-13 30-10-7 9-9 19-5 29 5-14 10-20 17-22 5 5 8 13 10 24 3-14 2-24-3-31 10-2 18 2 27 10-4-13-12-20-24-24 8-5 20-5 34 2-10-15-25-19-44-7Z"/>
    </g>
  </g>
  <g class="sl-near">
    <!-- Sagrada Familia -->
    <g>
      <path d="M196 340V186c0-22 6-40 12-40s12 18 12 40v154Z"/>
      <path d="M228 340V156c0-26 7-46 14-46s14 20 14 46v184Z"/>
      <path d="M264 340V120c0-30 8-52 16-52s16 22 16 52v220Z"/>
      <path d="M304 340V148c0-26 7-46 14-46s14 20 14 46v192Z"/>
      <path d="M340 340V178c0-22 6-40 12-40s12 18 12 40v162Z"/>
      <path d="M376 340V202c0-18 5-32 10-32s10 14 10 32v138Z"/>
    </g>
    <path d="M186 340v-84h224v84Z"/>
    <g class="sl-cross" stroke-width="4">
      <path d="M208 146v-16M202 136h12"/><path d="M242 110v-18M235 99h14"/>
      <path d="M280 68v-22M272 56h16"/><path d="M318 102v-18M311 91h14"/>
      <path d="M352 138v-16M346 128h12"/>
    </g>
    <!-- blocks & beach huts -->
    <rect x="0" y="292" width="180" height="48"/><rect x="410" y="288" width="160" height="52"/>
    <rect x="590" y="300" width="60" height="40"/><rect x="700" y="296" width="96" height="44"/>
    <rect x="890" y="302" width="140" height="38"/><rect x="1050" y="310" width="150" height="30"/>
    <g class="sl-window">
      <rect x="24" y="308" width="8" height="12"/><rect x="46" y="308" width="8" height="12"/><rect x="68" y="308" width="8" height="12"/>
      <rect x="430" y="304" width="8" height="12"/><rect x="452" y="304" width="8" height="12"/><rect x="474" y="304" width="8" height="12"/>
      <rect x="716" y="312" width="8" height="12"/><rect x="738" y="312" width="8" height="12"/>
    </g>
  </g>`,

  lisbon: `
  <g class="sl-far">
    <rect x="600" y="264" width="90" height="76"/><rect x="720" y="252" width="70" height="88"/>
    <rect x="860" y="268" width="96" height="72"/>
    <path d="M980 270c0-26 18-42 44-42s44 16 44 42Z"/>
  </g>
  <g class="sl-mid">
    <!-- Ponte 25 de Abril -->
    <g class="sl-bridge">
      <rect x="86" y="160" width="16" height="150"/><rect x="266" y="160" width="16" height="150"/>
      <rect x="80" y="196" width="28" height="9"/><rect x="260" y="196" width="28" height="9"/>
      <rect x="0" y="288" width="420" height="10"/>
      <path d="M0 250C40 250 70 200 94 170c24 30 54 80 94 80h-0c40 0 70-50 94-80 24 30 54 80 94 80" fill="none" stroke-width="5"/>
      <g stroke-width="2">
        <path d="M120 288V210M150 288V238M180 288V254M212 288V254M242 288V238M300 288V214M330 288V244M360 288V262"/>
      </g>
    </g>
    <!-- Cristo Rei -->
    <rect x="1128" y="230" width="26" height="74"/>
    <rect x="1136" y="186" width="10" height="46"/>
    <rect x="1120" y="200" width="42" height="7"/>
    <path d="M1136 186a5 5 0 0 1 10 0Z"/>
  </g>
  <g class="sl-near">
    <!-- castle walls -->
    <g>
      <rect x="440" y="238" width="180" height="102"/>
      <rect x="432" y="212" width="34" height="128"/><rect x="594" y="212" width="34" height="128"/>
      <path d="M432 212h34v-12h-10v-8h-14v8h-10Z"/><path d="M594 212h34v-12h-10v-8h-14v8h-10Z"/>
      <g class="sl-cut"><rect x="440" y="226" width="12" height="12"/><rect x="464" y="226" width="12" height="12"/>
      <rect x="488" y="226" width="12" height="12"/><rect x="512" y="226" width="12" height="12"/>
      <rect x="536" y="226" width="12" height="12"/><rect x="560" y="226" width="12" height="12"/><rect x="584" y="226" width="12" height="12"/></g>
    </g>
    <!-- Santa Justa lift -->
    <rect x="770" y="176" width="40" height="164"/>
    <path d="M770 176h40l-20-22Z"/>
    <g class="sl-cut"><rect x="778" y="196" width="10" height="16"/><rect x="794" y="196" width="10" height="16"/>
    <rect x="778" y="224" width="10" height="16"/><rect x="794" y="224" width="10" height="16"/></g>
    <!-- tiled houses climbing the hill -->
    <g>
      <path d="M0 340v-60h80v60Z"/><path d="M-4 280l44-24 44 24Z"/>
      <path d="M86 340v-76h76v76Z"/><path d="M82 264l42-22 42 22Z"/>
      <path d="M168 340v-64h70v64Z"/><path d="M164 276l39-20 39 20Z"/>
      <path d="M646 340v-72h84v72Z"/><path d="M642 268l46-24 46 24Z"/>
      <path d="M824 340v-66h78v66Z"/><path d="M820 274l43-22 43 22Z"/>
      <path d="M908 340v-78h86v78Z"/><path d="M904 262l47-24 47 24Z"/>
      <path d="M1000 340v-62h74v62Z"/><path d="M996 278l41-22 41 22Z"/>
    </g>
    <g class="sl-window">
      <rect x="20" y="296" width="9" height="14"/><rect x="50" y="296" width="9" height="14"/>
      <rect x="104" y="282" width="9" height="14"/><rect x="134" y="282" width="9" height="14"/>
      <rect x="664" y="288" width="9" height="14"/><rect x="694" y="288" width="9" height="14"/>
      <rect x="926" y="282" width="9" height="14"/><rect x="956" y="282" width="9" height="14"/>
      <rect x="1018" y="296" width="9" height="14"/><rect x="1046" y="296" width="9" height="14"/>
    </g>
  </g>`,

  amsterdam: `
  <g class="sl-far">
    <rect x="40" y="258" width="90" height="82"/><rect x="520" y="250" width="70" height="90"/>
    <rect x="880" y="262" width="88" height="78"/>
    <path d="M1000 264c0-24 16-40 38-40s38 16 38 40Z"/>
  </g>
  <g class="sl-mid">
    <!-- Westerkerk tower -->
    <rect x="308" y="182" width="44" height="158"/>
    <path d="M304 182h52l-26-26Z"/>
    <rect x="316" y="132" width="28" height="26"/>
    <path d="M314 132h32l-16-26Z"/>
    <rect x="327" y="84" width="6" height="24"/>
    <path d="M323 84a7 7 0 0 1 14 0Z"/>
    <!-- Montelbaanstoren -->
    <rect x="744" y="216" width="30" height="124"/>
    <path d="M740 216h38l-19-22Z"/>
    <rect x="753" y="166" width="6" height="30"/>
    <!-- windmill -->
    <g class="sl-mill">
      <path d="M1076 340l14-92h30l14 92Z"/>
      <path d="M1084 248h42l-21-22Z"/>
      <g stroke-width="6" fill="none">
        <path d="M1105 226 1040 176M1105 226l65 50M1105 226l-50 66M1105 226l50-66"/>
      </g>
      <circle cx="1105" cy="226" r="6" stroke="none"/>
    </g>
  </g>
  <g class="sl-near">
    <!-- canal houses: step, bell, neck, spout gables -->
    <g>
      <path d="M0 340v-92h52v92Z"/><path d="M0 248h52v-10H42v-10H32v-10H20v10H10v10H0Z"/>
      <path d="M60 340v-104h48v104Z"/><path d="M60 236c0-26 10-38 24-38s24 12 24 38Z"/>
      <path d="M116 340v-88h46v88Z"/><path d="M116 252h46l-23-24Z"/>
      <path d="M170 340v-100h50v100Z"/><path d="M170 240h50v-12h-12v-12h-14v12h-12v12h-12Z"/>
      <path d="M228 340v-84h44v84Z"/><path d="M228 256c0-22 8-32 22-32s22 10 22 32Z"/>
      <path d="M360 340v-96h50v96Z"/><path d="M360 244h50l-25-26Z"/>
      <path d="M418 340v-108h46v108Z"/><path d="M418 232h46v-12h-11v-12h-13v12h-11v12h-11Z"/>
      <path d="M472 340v-88h48v88Z"/><path d="M472 252c0-24 9-36 24-36s24 12 24 36Z"/>
      <path d="M598 340v-100h46v100Z"/><path d="M598 240h46l-23-24Z"/>
      <path d="M652 340v-92h50v92Z"/><path d="M652 248h50v-12h-12v-12h-14v12h-12v12h-12Z"/>
      <path d="M710 340v-86h34v86Z"/><path d="M710 254c0-20 7-30 17-30s17 10 17 30Z"/>
      <path d="M786 340v-98h48v98Z"/><path d="M786 242h48l-24-26Z"/>
      <path d="M842 340v-90h44v90Z"/><path d="M842 250h44v-12h-11v-12h-13v12h-11v12h-9Z"/>
      <path d="M896 340v-84h46v84Z"/><path d="M896 256c0-22 8-34 23-34s23 12 23 34Z"/>
      <path d="M950 340v-96h44v96Z"/><path d="M950 244h44l-22-24Z"/>
      <path d="M1000 340v-88h42v88Z"/><path d="M1000 252h42v-12h-10v-12h-13v12h-10v12h-9Z"/>
    </g>
    <!-- canal bridge -->
    <g class="sl-bridge2">
      <rect x="1150" y="300" width="50" height="10"/>
      <path d="M1150 340v-30a14 14 0 0 1 28 0v30Z" class="sl-cut"/>
    </g>
    <g class="sl-window">
      <rect x="16" y="272" width="8" height="13"/><rect x="34" y="272" width="8" height="13"/>
      <rect x="76" y="262" width="8" height="13"/><rect x="94" y="262" width="8" height="13"/>
      <rect x="184" y="266" width="8" height="13"/><rect x="202" y="266" width="8" height="13"/>
      <rect x="376" y="270" width="8" height="13"/><rect x="394" y="270" width="8" height="13"/>
      <rect x="614" y="266" width="8" height="13"/><rect x="632" y="266" width="8" height="13"/>
      <rect x="802" y="268" width="8" height="13"/><rect x="820" y="268" width="8" height="13"/>
      <rect x="966" y="268" width="8" height="13"/><rect x="984" y="268" width="8" height="13"/>
    </g>
  </g>`
,

  /* ---- archetypes: used by cities without a bespoke drawing ---- */

  modern: `
  <g class="sl-far">
    <rect x="20" y="210" width="60" height="130"/><rect x="100" y="240" width="70" height="100"/>
    <rect x="300" y="190" width="54" height="150"/><rect x="420" y="225" width="66" height="115"/>
    <rect x="700" y="205" width="58" height="135"/><rect x="800" y="235" width="74" height="105"/>
    <rect x="1000" y="215" width="62" height="125"/><rect x="1110" y="245" width="80" height="95"/>
  </g>
  <g class="sl-mid">
    <rect x="80" y="255" width="80" height="85"/><rect x="238" y="232" width="56" height="108"/>
    <rect x="370" y="250" width="48" height="90"/><rect x="616" y="238" width="60" height="102"/>
    <rect x="762" y="255" width="50" height="85"/><rect x="930" y="228" width="58" height="112"/>
    <rect x="1064" y="252" width="46" height="88"/>
    <rect x="258" y="212" width="4" height="22"/><rect x="954" y="206" width="4" height="24"/>
  </g>
  <g class="sl-near">
    <!-- supertall -->
    <path d="M516 340 534 132 540 60 546 132 564 340Z"/>
    <rect x="538" y="20" width="4" height="42"/>
    <!-- stepped tower -->
    <rect x="180" y="178" width="56" height="162"/>
    <rect x="166" y="222" width="84" height="118"/>
    <rect x="194" y="146" width="28" height="34"/>
    <!-- tapered slab -->
    <path d="M652 340 666 168h34l14 172Z"/>
    <!-- round-topped tower -->
    <path d="M858 340V206a31 31 0 0 1 62 0v134Z"/>
    <!-- angled-top tower -->
    <path d="M996 340V212l58-28v156Z"/>
    <!-- podium wall -->
    <rect x="0" y="294" width="170" height="46"/><rect x="250" y="300" width="130" height="40"/>
    <rect x="400" y="288" width="110" height="52"/><rect x="580" y="298" width="66" height="42"/>
    <rect x="726" y="292" width="126" height="48"/><rect x="930" y="300" width="60" height="40"/>
    <rect x="1060" y="290" width="140" height="50"/>
    <g class="sl-window">
      <rect x="196" y="200" width="8" height="12"/><rect x="214" y="200" width="8" height="12"/>
      <rect x="196" y="240" width="8" height="12"/><rect x="214" y="240" width="8" height="12"/><rect x="232" y="240" width="8" height="12"/>
      <rect x="532" y="180" width="7" height="11"/><rect x="544" y="180" width="7" height="11"/>
      <rect x="530" y="228" width="7" height="11"/><rect x="546" y="228" width="7" height="11"/>
      <rect x="672" y="210" width="8" height="12"/><rect x="690" y="210" width="8" height="12"/>
      <rect x="874" y="242" width="8" height="12"/><rect x="896" y="242" width="8" height="12"/>
      <rect x="1012" y="240" width="8" height="12"/><rect x="1032" y="240" width="8" height="12"/>
      <rect x="30" y="310" width="8" height="12"/><rect x="52" y="310" width="8" height="12"/><rect x="74" y="310" width="8" height="12"/>
      <rect x="1090" y="308" width="8" height="12"/><rect x="1112" y="308" width="8" height="12"/>
    </g>
  </g>`,

  'euro-old': `
  <g class="sl-far">
    <rect x="60" y="256" width="96" height="84"/><rect x="390" y="248" width="80" height="92"/>
    <rect x="860" y="252" width="90" height="88"/><rect x="1020" y="262" width="76" height="78"/>
    <path d="M196 256c0-26 16-42 38-42s38 16 38 42Z"/>
  </g>
  <g class="sl-mid">
    <!-- domed church -->
    <path d="M690 340v-72h118v72Z"/>
    <path d="M702 268c0-42 24-66 47-66s47 24 47 66Z"/>
    <path d="M734 202c0-16 7-26 15-26s15 10 15 26Z"/>
    <rect x="746" y="164" width="6" height="16"/>
    <!-- bridge -->
    <g class="sl-arcade">
      <rect x="980" y="290" width="220" height="12"/>
      <path d="M992 340v-30a17 17 0 0 1 34 0v30Zm56 0v-30a17 17 0 0 1 34 0v30Zm56 0v-30a17 17 0 0 1 34 0v30Z" class="sl-cut"/>
    </g>
    <!-- small spire -->
    <rect x="452" y="236" width="24" height="104"/>
    <path d="M448 236l16-42 16 42Z"/>
  </g>
  <g class="sl-near">
    <!-- cathedral -->
    <path d="M296 340V166h66v174Z"/>
    <path d="M292 166l37-96 37 96Z"/>
    <g class="sl-cross" stroke-width="4"><path d="M329 70V52M321 60h16"/></g>
    <rect x="362" y="242" width="86" height="98"/>
    <path d="M356 242l49-28 49 28Z"/>
    <g class="sl-cut"><rect x="308" y="212" width="12" height="26"/><rect x="336" y="212" width="12" height="26"/>
      <rect x="380" y="272" width="12" height="22"/><rect x="404" y="272" width="12" height="22"/><rect x="428" y="272" width="12" height="22"/></g>
    <!-- clock tower -->
    <rect x="520" y="172" width="46" height="168"/>
    <path d="M514 172l29-40 29 40Z"/>
    <circle class="sl-clock" cx="543" cy="210" r="14"/>
    <rect x="540" y="118" width="6" height="18"/>
    <!-- tiled roofs -->
    <g>
      <path d="M0 340v-58l42-26 42 26v58Z"/>
      <path d="M92 340v-46l36-22 36 22v46Z"/>
      <path d="M170 340v-54l40-24 40 24v54Z"/>
      <path d="M596 340v-50l40-24 40 24v50Z"/>
      <path d="M684 340v-42l34-20 34 20v42Z"/>
      <path d="M828 340v-56l42-26 42 26v56Z"/>
      <path d="M920 340v-44l36-22 36 22v44Z"/>
    </g>
    <g class="sl-window">
      <rect x="26" y="300" width="9" height="14"/><rect x="50" y="300" width="9" height="14"/>
      <rect x="110" y="308" width="9" height="14"/><rect x="134" y="308" width="9" height="14"/>
      <rect x="614" y="306" width="9" height="14"/><rect x="640" y="306" width="9" height="14"/>
      <rect x="846" y="300" width="9" height="14"/><rect x="872" y="300" width="9" height="14"/>
      <rect x="938" y="310" width="9" height="14"/><rect x="962" y="310" width="9" height="14"/>
    </g>
  </g>`,

  domes: `
  <g class="sl-far">
    <rect x="30" y="262" width="110" height="78"/><rect x="250" y="254" width="86" height="86"/>
    <rect x="900" y="258" width="100" height="82"/><rect x="1100" y="266" width="100" height="74"/>
    <path d="M160 262c0-30 20-48 44-48s44 18 44 48Z"/>
  </g>
  <g class="sl-mid">
    <!-- secondary mosque -->
    <path d="M160 340v-56h132v56Z"/>
    <path d="M182 284c0-40 20-62 44-62s44 22 44 62Z"/>
    <rect x="223" y="196" width="6" height="28"/>
    <rect x="146" y="188" width="12" height="152"/><path d="M141 188l11-30 11 30Z"/>
    <rect x="294" y="188" width="12" height="152"/><path d="M289 188l11-30 11 30Z"/>
    <!-- palms -->
    <g class="sl-palm">
      <rect x="1044" y="262" width="7" height="78"/>
      <path d="M1048 262c-20-13-35-11-46 4 17-4 28-2 35 6-15 2-24 9-28 22 13-11 24-15 33-11-7 9-9 20-5 31 5-15 11-22 18-24 6 5 9 15 11 26 4-15 2-26-4-33 11-2 20 2 29 11-4-15-13-22-26-26 9-5 22-5 37 2-11-17-28-20-48-8Z"/>
    </g>
  </g>
  <g class="sl-near">
    <!-- great mosque -->
    <path d="M476 340v-92h248v92Z"/>
    <path d="M520 248c0-72 36-114 80-114s80 42 80 114Z"/>
    <path d="M482 248c0-42 20-66 46-66s46 24 46 66Z"/>
    <path d="M626 248c0-42 20-66 46-66s46 24 46 66Z"/>
    <path d="M592 134c0-18 3-30 8-30s8 12 8 30Z"/>
    <rect x="597" y="88" width="6" height="20"/>
    <!-- minarets -->
    <rect x="436" y="96" width="18" height="244"/>
    <path d="M430 96l15-40 15 40Z"/>
    <rect x="428" y="152" width="34" height="8"/><rect x="428" y="200" width="34" height="8"/>
    <rect x="746" y="96" width="18" height="244"/>
    <path d="M740 96l15-40 15 40Z"/>
    <rect x="738" y="152" width="34" height="8"/><rect x="738" y="200" width="34" height="8"/>
    <!-- low town -->
    <rect x="0" y="292" width="180" height="48"/><rect x="200" y="300" width="150" height="40"/>
    <rect x="360" y="296" width="100" height="44"/><rect x="740" y="298" width="150" height="42"/>
    <rect x="900" y="288" width="130" height="52"/><rect x="1060" y="300" width="140" height="40"/>
    <g class="sl-cut">
      <path d="M40 340v-26a12 12 0 0 1 24 0v26Zm60 0v-26a12 12 0 0 1 24 0v26Z"/>
      <path d="M930 340v-24a11 11 0 0 1 22 0v24Zm50 0v-24a11 11 0 0 1 22 0v24Z"/>
    </g>
    <g class="sl-window">
      <rect x="230" y="314" width="9" height="13"/><rect x="254" y="314" width="9" height="13"/>
      <rect x="770" y="312" width="9" height="13"/><rect x="794" y="312" width="9" height="13"/>
      <rect x="1090" y="314" width="9" height="13"/><rect x="1114" y="314" width="9" height="13"/>
    </g>
  </g>`,

  'asia-temple': `
  <g class="sl-far">
    <rect x="40" y="248" width="80" height="92"/><rect x="380" y="240" width="70" height="100"/>
    <rect x="860" y="236" width="76" height="104"/><rect x="1080" y="250" width="90" height="90"/>
  </g>
  <g class="sl-mid">
    <!-- chedi / prang -->
    <path d="M880 340c4-64 12-118 20-150h12c8 32 16 86 20 150Z"/>
    <path d="M894 190c2-26 6-44 12-44s10 18 12 44Z"/>
    <rect x="903" y="118" width="6" height="32"/>
    <path d="M846 340v-40h108v40Z"/>
    <!-- small pavilion -->
    <path d="M300 340v-40h96v40Z"/>
    <path d="M286 300q62-16 124 0Z"/>
    <path d="M294 284v-22h80v22Z"/>
    <path d="M282 262q66-18 104 0Z"/>
    <rect x="331" y="228" width="6" height="22"/>
  </g>
  <g class="sl-near">
    <!-- tiered temple -->
    <path d="M500 340v-54h200v54Z"/>
    <path d="M470 286q130-30 260 0c-26-26-66-40-130-40s-104 14-130 40Z"/>
    <path d="M512 246v-38h176v38Z"/>
    <path d="M486 208q114-28 228 0c-24-24-58-36-114-36s-90 12-114 36Z"/>
    <path d="M534 172v-34h132v34Z"/>
    <path d="M510 138q90-24 180 0c-20-20-48-30-90-30s-70 10-90 30Z"/>
    <path d="M590 108c0-22 4-38 10-38s10 16 10 38Z"/>
    <rect x="597" y="52" width="6" height="22"/>
    <!-- gate posts -->
    <rect x="432" y="250" width="16" height="90"/><path d="M426 250l14-24 14 24Z"/>
    <rect x="752" y="250" width="16" height="90"/><path d="M746 250l14-24 14 24Z"/>
    <!-- shophouses -->
    <g>
      <path d="M0 340v-62h78v62Z"/><path d="M-6 278q42-18 90 0Z"/>
      <path d="M86 340v-54h70v54Z"/><path d="M80 286q41-16 82 0Z"/>
      <path d="M170 340v-58h74v58Z"/><path d="M164 282q43-17 86 0Z"/>
      <path d="M980 340v-58h76v58Z"/><path d="M974 282q44-17 88 0Z"/>
      <path d="M1064 340v-52h72v52Z"/><path d="M1058 288q42-16 84 0Z"/>
      <path d="M1144 340v-60h56v60Z"/>
    </g>
    <g class="sl-window">
      <rect x="18" y="298" width="9" height="14"/><rect x="44" y="298" width="9" height="14"/>
      <rect x="188" y="302" width="9" height="14"/><rect x="214" y="302" width="9" height="14"/>
      <rect x="998" y="302" width="9" height="14"/><rect x="1024" y="302" width="9" height="14"/>
      <rect x="560" y="306" width="10" height="14"/><rect x="590" y="306" width="10" height="14"/><rect x="620" y="306" width="10" height="14"/>
    </g>
  </g>`,

  coastal: `
  <g class="sl-far">
    <path d="M0 340V196l120-118 104 122 70-52 96 96v96Z"/>
    <path d="M760 340V236l104-86 88 104 62-44 96 82v48Z"/>
  </g>
  <g class="sl-mid">
    <path d="M300 340V244l96-74 88 96v74Z"/>
    <!-- lighthouse -->
    <path d="M1108 340l6-84h22l6 84Z"/>
    <rect x="1110" y="240" width="30" height="16"/>
    <path d="M1112 240l13-22 13 22Z"/>
    <!-- pier -->
    <g class="sl-arcade">
      <rect x="520" y="300" width="230" height="8"/>
      <rect x="532" y="308" width="6" height="32"/><rect x="578" y="308" width="6" height="32"/>
      <rect x="624" y="308" width="6" height="32"/><rect x="670" y="308" width="6" height="32"/>
      <rect x="716" y="308" width="6" height="32"/>
    </g>
    <!-- sailboat -->
    <path d="M846 300l30-76 6 76Z"/>
    <path d="M888 300l-2-58 26 58Z"/>
    <path d="M836 300h92l-14 16h-64Z"/>
  </g>
  <g class="sl-near">
    <!-- palms -->
    <g class="sl-palm">
      <rect x="150" y="246" width="8" height="94"/>
      <path d="M154 246c-24-15-42-13-55 5 20-5 33-3 42 7-18 2-29 11-33 26 15-13 28-17 40-13-9 10-11 24-7 37 7-17 13-26 22-28 7 6 11 17 13 30 4-17 2-30-4-39 13-2 24 2 35 13-5-17-15-26-31-30 11-6 26-6 44 2-13-20-33-24-58-9Z"/>
      <rect x="248" y="266" width="7" height="74"/>
      <path d="M251 266c-20-12-35-11-46 4 17-4 28-2 35 6-15 2-24 8-27 21 12-10 23-14 33-11-8 9-10 20-6 31 6-14 11-21 18-23 6 5 9 14 11 25 3-14 1-25-4-32 11-2 19 2 29 11-4-14-13-21-26-25 9-5 21-5 36 2-11-16-27-20-45-6Z"/>
      <rect x="1010" y="258" width="8" height="82"/>
      <path d="M1014 258c-22-14-39-12-51 5 19-5 31-3 39 6-17 2-27 10-31 24 14-12 26-16 37-12-8 9-10 22-6 34 6-16 12-24 20-26 6 6 10 16 12 28 4-16 2-28-4-36 12-2 22 2 33 12-5-16-14-24-29-28 10-6 24-6 41 2-12-18-31-22-54-8Z"/>
    </g>
    <!-- waterfront low-rise -->
    <g>
      <path d="M0 340v-60h96v60Z"/><path d="M-4 280l50-24 50 24Z"/>
      <path d="M180 340v-52h84v52Z"/><path d="M176 288l46-22 46 22Z"/>
      <path d="M276 340v-64h90v64Z"/><path d="M272 276l47-24 47 24Z"/>
      <path d="M382 340v-48h76v48Z"/>
      <path d="M760 340v-58h92v58Z"/><path d="M756 282l48-24 48 24Z"/>
      <path d="M862 340v-50h80v50Z"/>
      <path d="M1040 340v-62h88v62Z"/><path d="M1036 278l46-24 46 24Z"/>
      <path d="M1140 340v-46h60v46Z"/>
    </g>
    <g class="sl-window">
      <rect x="20" y="300" width="9" height="14"/><rect x="46" y="300" width="9" height="14"/><rect x="72" y="300" width="9" height="14"/>
      <rect x="296" y="296" width="9" height="14"/><rect x="322" y="296" width="9" height="14"/>
      <rect x="780" y="300" width="9" height="14"/><rect x="806" y="300" width="9" height="14"/>
      <rect x="1060" y="298" width="9" height="14"/><rect x="1086" y="298" width="9" height="14"/>
    </g>
  </g>`,

  latin: `
  <g class="sl-far">
    <path d="M0 340V244l140-96 120 112 90-58 110 100v38Z"/>
    <rect x="900" y="258" width="90" height="82"/><rect x="1080" y="248" width="100" height="92"/>
  </g>
  <g class="sl-mid">
    <!-- hillside houses -->
    <rect x="120" y="262" width="54" height="78"/><rect x="186" y="248" width="46" height="92"/>
    <rect x="244" y="270" width="58" height="70"/>
    <rect x="960" y="266" width="64" height="74"/><rect x="1036" y="254" width="50" height="86"/>
    <!-- arcade -->
    <g class="sl-arcade">
      <rect x="740" y="272" width="200" height="12"/>
      <path d="M752 340v-44a16 16 0 0 1 32 0v44Zm52 0v-44a16 16 0 0 1 32 0v44Zm52 0v-44a16 16 0 0 1 32 0v44Z" class="sl-cut"/>
    </g>
  </g>
  <g class="sl-near">
    <!-- colonial cathedral -->
    <path d="M430 340v-96h280v96Z"/>
    <path d="M430 244h280l-140-56Z"/>
    <rect x="404" y="164" width="60" height="176"/>
    <rect x="676" y="164" width="60" height="176"/>
    <path d="M400 164h68l-34-30Z"/><path d="M672 164h68l-34-30Z"/>
    <path d="M418 134c0-18 7-30 16-30s16 12 16 30Z"/>
    <path d="M690 134c0-18 7-30 16-30s16 12 16 30Z"/>
    <g class="sl-cross" stroke-width="4"><path d="M434 104V88M426 96h16"/><path d="M706 104V88M698 96h16"/></g>
    <path d="M556 188c0-20 7-34 14-34s14 14 14 34Z"/>
    <g class="sl-cut">
      <rect x="424" y="206" width="18" height="30"/><rect x="696" y="206" width="18" height="30"/>
      <path d="M548 340v-46a22 22 0 0 1 44 0v46Z"/>
    </g>
    <!-- low blocks -->
    <rect x="0" y="288" width="140" height="52"/><rect x="156" y="296" width="120" height="44"/>
    <rect x="290" y="290" width="120" height="50"/><rect x="724" y="298" width="120" height="42"/>
    <rect x="860" y="288" width="130" height="52"/><rect x="1006" y="296" width="194" height="44"/>
    <g class="sl-window">
      <rect x="22" y="304" width="9" height="14"/><rect x="48" y="304" width="9" height="14"/><rect x="74" y="304" width="9" height="14"/>
      <rect x="310" y="306" width="9" height="14"/><rect x="336" y="306" width="9" height="14"/>
      <rect x="880" y="304" width="9" height="14"/><rect x="906" y="304" width="9" height="14"/>
      <rect x="1030" y="312" width="9" height="14"/><rect x="1056" y="312" width="9" height="14"/>
    </g>
  </g>`,

  harbour: `
  <g class="sl-far">
    <rect x="40" y="224" width="56" height="116"/><rect x="110" y="250" width="66" height="90"/>
    <rect x="196" y="210" width="48" height="130"/><rect x="262" y="244" width="60" height="96"/>
    <rect x="1080" y="236" width="56" height="104"/><rect x="1148" y="258" width="52" height="82"/>
  </g>
  <g class="sl-mid">
    <rect x="96" y="262" width="50" height="78"/><rect x="240" y="256" width="44" height="84"/>
    <rect x="318" y="238" width="52" height="102"/>
    <rect x="340" y="214" width="6" height="26"/>
    <rect x="1012" y="252" width="58" height="88"/>
  </g>
  <g class="sl-near">
    <!-- arch bridge -->
    <g>
      <rect x="440" y="238" width="38" height="102"/><rect x="700" y="238" width="38" height="102"/>
      <path d="M430 262h58v-14h-58Z"/><path d="M690 262h58v-14h-58Z"/>
      <path d="M420 292c30-72 90-108 170-108s140 36 170 108h-22c-28-58-80-88-148-88s-120 30-148 88Z"/>
      <rect x="404" y="286" width="370" height="12"/>
      <g stroke-width="3" fill="none">
        <path d="M500 286v-46M540 286v-62M580 286v-72M620 286v-72M660 286v-62M700 286v-46"/>
      </g>
    </g>
    <!-- opera shells -->
    <g>
      <path d="M820 340c0-64 30-108 66-108 26 0 40 26 40 62v46Z"/>
      <path d="M868 340c0-56 28-96 60-96 24 0 36 24 36 56v40Z"/>
      <path d="M918 340c0-48 24-82 52-82 20 0 32 20 32 48v34Z"/>
      <path d="M800 340v-22h220v22Z"/>
    </g>
    <!-- podium / foreshore -->
    <rect x="0" y="300" width="400" height="40"/><rect x="1040" y="296" width="160" height="44"/>
    <g class="sl-window">
      <rect x="120" y="278" width="8" height="12"/><rect x="138" y="278" width="8" height="12"/>
      <rect x="332" y="262" width="8" height="12"/><rect x="350" y="262" width="8" height="12"/>
      <rect x="1060" y="310" width="8" height="12"/><rect x="1082" y="310" width="8" height="12"/>
      <rect x="30" y="312" width="8" height="12"/><rect x="52" y="312" width="8" height="12"/><rect x="74" y="312" width="8" height="12"/>
    </g>
  </g>`

};
