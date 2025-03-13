const pvShapes = {
  "pv-modul": `
  <svg width="60.6" height="30.6" id="svg4136" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs id="defs4138">
        <marker orient="auto" refY="0" refX="0" id="Arrow1Mend" style="overflow:visible">
            <path id="path4750" d="m0 0 5-5-17.5 5L5 5Z" style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1" transform="matrix(-.4 0 0 -.4 -4 0)"/>
        </marker>
        <marker orient="auto" refY="0" refX="0" id="Arrow2Mend" style="overflow:visible">
            <path id="path4768" style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.625;stroke-linejoin:round;stroke-opacity:1" d="M8.719 4.034-2.207.016 8.719-4.002c-1.746 2.372-1.736 5.618 0 8.036z" transform="scale(-.6)"/>
        </marker>
        <marker orient="auto" refY="0" refX="0" id="Arrow1Send" style="overflow:visible">
            <path id="path4756" d="m0 0 5-5-17.5 5L5 5Z" style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1" transform="matrix(-.2 0 0 -.2 -1.2 0)"/>
        </marker>
        <marker orient="auto" refY="0" refX="0" id="Arrow1Lstart" style="overflow:visible">
            <path id="path4741" d="m0 0 5-5-17.5 5L5 5Z" style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1" transform="matrix(.8 0 0 .8 10 0)"/>
        </marker>
        <marker orient="auto" refY="0" refX="0" id="Arrow1Lend" style="overflow:visible">
            <path id="path4744" d="m0 0 5-5-17.5 5L5 5Z" style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1" transform="matrix(-.8 0 0 -.8 -10 0)"/>
        </marker>
    </defs>
    <g id="layer1">
        <rect style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.600129;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect4192" width="60" height="30" x=".3" y=".3" ry="0"/>
        <path style="fill:#000000;stroke-width:0.6;stroke-dasharray:none" d="M45.3 15.3 60 .586V30Z" id="path1"/>
    </g>
</svg>
  `,
  // Weitere PV-Module hier...
};

// Exportieren der Shapes
window.shapeLibrary = window.shapeLibrary || {};
window.shapeLibrary.pv = pvShapes;
