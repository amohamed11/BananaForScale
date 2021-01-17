---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

![bg left:40% 80%](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/1280px-Bananas.svg.png)

# **Banana for Scale**

Measure objects by using a Banana for scale

https://banana.amohamed.io/

<author>Anas Mohamed</author>

---

# Inspiration & Motivation

- Eliminate rulers from this world.
- Banana for scale is a commonplace joke on the internet.

---

# Solution

- Utilizing state-of-art object detection powered by Tensorflow.js right in the browser:
  1. Detect banana & object to be measured
  2. Compute the difference between mean dimensions of a Banana & the picture (cm to pixels).
  3. Use this difference to approximate dimensions of desired object

---

# Demo

Try it out at https://banana.amohamed.io/

---

# Problems

- Bananas have weird shapes. In other words, the arc of a Banana and the angle it is viewed from can drastically affect accuracy.
  - A more accurate measurement of a Banana's dimensions would be the five point measurement which accounts for this arc.
- Tensorflow.js is ~~state-of-art~~ very inaccurate in detection capability, and is limited in the objects that it can detect.

---

![height:600px](https://i.postimg.cc/QtSpCY3V/toilet.png)

---

# Future Improvements

- Switch to server-side object detection for more flexibility in library & better performance.
- Maybe utilize five-point measurement to improve accuracy of measurement.
- Eat more Bananas for research purposes.

---

# References

1. Sultan, Shahir & Rangaraju, Visvanathan & Nambi, Eyarkai & Chandrasekar, V.. (2018). Mathematical modeling of physical properties of banana fruit for machine vision systems using image processing method. Journal of Advanced Research in Dynamical and Control Systems. 10. 617.
2. Meng-Han Hu, Qing-Li Dong, Pradeep K. Malakar, Bao-Lin Liu & Ganesh K. Jaganathan (2015) Determining Banana Size Based on Computer Vision, International Journal of Food Properties, 18:3, 508-520, DOI: 10.1080/10942912.2013.833223

---

# End

Thank you for your time.  
Questions?
