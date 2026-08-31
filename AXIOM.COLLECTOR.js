// ======================================================
// AXIOM.COLLECTOR.js — EVO-Ring + AXIOM + PIPELINE + ENERGY
// ======================================================

import { buildAxiomPipelineMatrix } from "./sli.sys";
import { EnergieAxiomPipeline } from "./energie.js";
import { ZOOG } from "./ZOOG.js";
import { DRUUCK } from "./DRUUCK.js";

// EVO-Ring Segment
function evoRingSegment(axiom, pipe){
  return `${axiom}::${pipe}`;
}

// EVO-Pyramide Layer
function evoPyramid(axiom){
  const [axis, layer] = axiom.split("-");
  return {
    axis,
    layer,
    pyramidKey: `${axis}_${layer}_PYRA`
  };
}

// Hauptsammler
export function AXIOM_COLLECTOR(value = 1){

  const matrix = buildAxiomPipelineMatrix();

  return matrix.map(entry => {

    const energie = EnergieAxiomPipeline(entry.axiom, entry.pipe, value);
    const echo    = ZOOG.echo(entry.pipe, value);
    const hall    = DRUUCK.hall(entry.pipe, value);

    return {
      axiom: entry.axiom,
      pipe: entry.pipe,

      // EVO-Ring
      ring: evoRingSegment(entry.axiom, entry.pipe),

      // EVO-Pyramide
      pyramid: evoPyramid(entry.axiom),

      // Energie / Echo / Hall
      energie,
      echo,
      hall,

      // eindeutiger Schlüssel
      key: `${entry.axiom}::${entry.pipe}`
    };
  });
}
