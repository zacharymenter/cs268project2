import React from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;
var WorkspaceInformation;
var renderer;
var context;
var position;

function createStaff(staves) {
    position = 410;

    WorkspaceInformation = {
        canvas: document.getElementById("staff"),
        canvasWidth: window.innerWidth,
        canvasHeight: 120
    };
    document.getElementById("staff").style.visibility = "visible";
    document.getElementById("button").disabled = true;    

    renderer = new VF.Renderer(
        WorkspaceInformation.canvas,
        VF.Renderer.Backends.CANVAS
    );

    renderer.resize(WorkspaceInformation.canvasWidth, WorkspaceInformation.canvasHeight);

    context = renderer.getContext();

    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    const stave = new VF.Stave(10, 0, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();
    staves[0] = stave;
}

function addBar(staves) {
    const stave = new VF.Stave(position, 0, 400)
    stave.setContext(context).draw();
    position = position + 400;
    staves.push(stave);
}

export function Staff(props) {
    return (
        <div className="staff-block">
            <canvas id="staff"></canvas>
            <button id="button" onClick={() => createStaff(props.staves)}>Create Staff</button>
            <button onClick={() => addBar(props.staves)}>Add Bar</button>
        </div>
    )
}