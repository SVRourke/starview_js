the thought was originally fleshed out in code pen editors:

this is the first one, I'm converting Right ascension and declination values for the constellations orion and canis major into floating point angle values, treating those as x and y cartesian coordinates and drawing points on an html canvas element using thos values, I'm also playing with some scaling, flipping and trying to rotate the points around a synthetic origin which is not really working
https://codepen.io/SVRourke/pen/myEvGWO?editors=0010

this second codepen is really focused on rotation around a synthetic origin using synthetic x,y values and it nails it:
https://codepen.io/SVRourke/pen/XJKGJJx?editors=0010



I'm intending to use the synthetic (arbitrary) origin to simulate a celestial pole, I also need to add some sort of spherical projection to the points in addition to the scaling
