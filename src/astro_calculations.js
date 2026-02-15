const astroCalculations = {
  // input in format: HH|MM|SS
  // to convert RA to float degree
  // (H * 15) + (M * 15/60) + (S * 15/3600)
  convertRA: (ra) => {
    let [hours, minutes, seconds] = ra.split("|").map(x => parseFloat(x));
    return (hours * 15) + (minutes * (15/60)) + (seconds * (15/3600))
  },

  // to convert DEC to float
  // ADD D + M/60 + S/3600
  convertDEC: (dec) => {
    let eclipticOffset = dec[0] == '-' ? -1 : 1;
    let [degrees, minutes, seconds] = dec.split("|").map(x => parseFloat(x));
    return degrees + (((minutes / 60) + (seconds / 3600)) * eclipticOffset)
  }
}

export { astroCalculations }
