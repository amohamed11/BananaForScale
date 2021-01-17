# Banana for Scale

Measure things using a Banana for scale.  
Banana for Scale is a hackathon project built for HackED 2021.  
This app is entirely client sided and utilizes Vue for framework.  
[Tensorflow.js's CocoSSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) model is used for object detection.  
The size of the detected banana is used to measure the dimensions of the desired object.

## Dimensions & Accuracy

NOTE: This application of scaling goes beyond severe approximation to be honest.  
Dimensions (for bananas) used in scaling are about <sup>1</sup>

- Height: ~17cm
- Width of 3.78cm.

To make this approximation more accurate, a good idea would be to utilize the five points measurement of Bananas to scale more accurately<sup>2</sup>.

## Build Instructions

`npm run serve` to run project in dev mode

`npm run build` to build project to `dist/`

### References

1. Sultan, Shahir & Rangaraju, Visvanathan & Nambi, Eyarkai & Chandrasekar, V.. (2018). Mathematical modeling of physical properties of banana fruit for machine vision systems using image processing method. Journal of Advanced Research in Dynamical and Control Systems. 10. 617.
2. Meng-Han Hu, Qing-Li Dong, Pradeep K. Malakar, Bao-Lin Liu & Ganesh K. Jaganathan (2015) Determining Banana Size Based on Computer Vision, International Journal of Food Properties, 18:3, 508-520, DOI: 10.1080/10942912.2013.833223
