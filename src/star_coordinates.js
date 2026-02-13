import { convertDEC, convertRA } from "./astro_calculations"
const coordinates = [
  // ORION
  { x: convertRA("05|55|10"), y: convertDEC("7|24|25") }, // BETELGEUSE
  { x: convertRA("05|14|32"), y: convertDEC("-8|12|6") }, //Rigel
  { x: convertRA("05|25|08"), y: convertDEC("6|20|59") }, // Bellatrix
  { x: convertRA("05|36|13"), y: convertDEC("-1|12|7") }, // Alnilam
  { x: convertRA("05|40|45"), y: convertDEC("-1|56|34")}, // Alnitak
  { x: convertRA("05|32|00"), y: convertDEC("-0|17|57")}, // Mintaka
  { x: convertRA("05|47|45"), y: convertDEC("-9|40|11")}, // Saiph
  { x: convertRA("05|35|09"), y: convertDEC("9|56|3")}, // Meissa
  { x: convertRA("05|35|17"), y: convertDEC("-5|23|28")}, // Orion Nebula M42
  
  // Canis Major
  { x: convertRA("06|45|9.25"), y: convertDEC("-16|42|58")}, // SIRIUS
  { x: convertRA("06|58|37.55"), y: convertDEC("-28|58|19.5")}, // ADHARA
  { x: convertRA("07|08|23.49"), y: convertDEC("-26|23|35.5")}, // Wezen
  { x: convertRA("06|22|41.99"), y: convertDEC("-17|57|21.3")}, // MIRZAM
  { x: convertRA("07|03|45.4"), y: convertDEC("-15|37|39")}, // MULIPHEN
  { x: convertRA("07|20|51.9"), y: convertDEC("-30|03|51")}, // FURUD
  { x: convertRA("07|24|7.6"), y: convertDEC("-29|18|11")}, // ALUDRA
  { x: convertRA("06|46|00"), y: convertDEC("-20|46|00")}, // M41
  { x: convertRA("07|18|40.9"), y: convertDEC("-24|57|58")}, // NGC 2362
]

export { coordinates }