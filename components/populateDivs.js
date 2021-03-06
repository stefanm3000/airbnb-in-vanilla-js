"use strict";

import { createPropertyCard } from "./createPropertyCard.js";

let container = document.getElementById("grid-container");

export function populateDivs(data) {
  for (let i = 0; i < data.length; i++) {
    container.appendChild(createPropertyCard(data[i]));
  }
}
