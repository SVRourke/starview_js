import { astroCalculations } from "./astro_calculations"
const { convertRA, convertDEC } = astroCalculations;
const coordinates = [
  // ORION
  { x: astroCalculations.convertRA("05|55|10"), y: astroCalculations.convertDEC("7|24|25") }, // BETELGEUSE
  { x: astroCalculations.convertRA("05|14|32"), y: astroCalculations.convertDEC("-8|12|6") }, //Rigel
  { x: astroCalculations.convertRA("05|25|08"), y: astroCalculations.convertDEC("6|20|59") }, // Bellatrix
  { x: astroCalculations.convertRA("05|36|13"), y: astroCalculations.convertDEC("-1|12|7") }, // Alnilam
  { x: astroCalculations.convertRA("05|40|45"), y: astroCalculations.convertDEC("-1|56|34")}, // Alnitak
  { x: astroCalculations.convertRA("05|32|00"), y: astroCalculations.convertDEC("-0|17|57")}, // Mintaka
  { x: astroCalculations.convertRA("05|47|45"), y: astroCalculations.convertDEC("-9|40|11")}, // Saiph
  { x: astroCalculations.convertRA("05|35|09"), y: astroCalculations.convertDEC("9|56|3")}, // Meissa
  { x: astroCalculations.convertRA("05|35|17"), y: astroCalculations.convertDEC("-5|23|28")}, // Orion Nebula M42
  
  // Canis Major
  { x: astroCalculations.convertRA("06|45|9.25"), y: astroCalculations.convertDEC("-16|42|58")}, // SIRIUS
  { x: astroCalculations.convertRA("06|58|37.55"), y: astroCalculations.convertDEC("-28|58|19.5")}, // ADHARA
  { x: astroCalculations.convertRA("07|08|23.49"), y: astroCalculations.convertDEC("-26|23|35.5")}, // Wezen
  { x: astroCalculations.convertRA("06|22|41.99"), y: astroCalculations.convertDEC("-17|57|21.3")}, // MIRZAM
  { x: astroCalculations.convertRA("07|03|45.4"), y: astroCalculations.convertDEC("-15|37|39")}, // MULIPHEN
  { x: astroCalculations.convertRA("07|20|51.9"), y: astroCalculations.convertDEC("-30|03|51")}, // FURUD
  { x: astroCalculations.convertRA("07|24|7.6"), y: astroCalculations.convertDEC("-29|18|11")}, // ALUDRA
  { x: astroCalculations.convertRA("06|46|00"), y: astroCalculations.convertDEC("-20|46|00")}, // M41
  { x: astroCalculations.convertRA("07|18|40.9"), y: astroCalculations.convertDEC("-24|57|58")}, // NGC 2362
]

export { coordinates }
