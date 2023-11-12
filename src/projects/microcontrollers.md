---
title: prototyping microcontrollers with p5js
description: 
date: 2022-02-28
featimg: /img/cardsheet-faceplate.jpg
thumbnails:
    - img: /img/cardsheet-faceplate.jpg
      caption: A cardsheet prototype for the faceplate
    - img: /img/macropad-layout.png
      caption: Thinking of a basic layout for the macropad
    - img: /img/3D-printed-fail.jpg
      caption: A 3d print that failed
    - img: /img/3d-printed.jpg
      caption: A somewhat final case!! The hole is for the potentiometer
    - img: /img/macropad-desk.jpg
      caption: I had to 3d print an extra piece to add height for the components
tags: 
  - code   
  - microcontrollers
  - rp2040
  - raspberry pi pico
---
Last June (2021), I started getting interested in exploring physical computing after abuot 2-3 years of pure p5js fun! I didn't have a full sense of where to start, but was drawn to the *[Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/)*, a new microcontroller launched at the time. It's form and cost were important factors in choosing Pico over the Arduino line of boards. 

It was any interesting start, as it was also my first attempt at soldering! *Soldering is awesome and liberating*.  

I started the project by roughly soldering some wires to these keyboard switches which were an impulse buy! I learnt later that macropad enthusiasts are a league of their own and there are some extremely beautiful pieces out there! 

A video log introducing my switches and the raspberry pi pico.

https://youtu.be/41_ozMDnO44

With the help of some amazing documentation on the [Adafruit Learn Section](https://learn.adafruit.com/welcome-to-circuitpython), I was able to use the pico and the switches with Circuitpython. Of course, I decided to attempt some form ideas by reusing some packaging material I found at home. 

https://youtu.be/iS-ZmNogjL4

I realised that Pico and Ciruitpython allows you access to the [HID](https://en.wikipedia.org/wiki/Human_interface_device) (Keyboard and Mouse) events on any computer with buttons, joysticks and even potentiometers. HID basically refers to  any device that 'humans'/people use to connect with the computer like a mouse, keyboard, or even a game controller. So I jumped into this head first applying the HID commands to my existing projects in p5js with keypressed and mouse events. The project in the video is a generative text randomizer. 

https://youtu.be/3QRVyliTupM


I started imagining my p5js sketches in full screen on large projectors but with these small buttons and peripherals, instead of the entire keyboard or mouse present at the installation! 

https://youtu.be/1Kx8UWQLRg0

With some digging around, it seemed apparent that HID works well with joysticks! Thumb joysticks are suprisingly inexpensive about Rs. 70 (a dollar or so). Once I was able to control the mouse with the joystick, I tested it with a sketch that had voice recognition. I find that its nicer to test voice with an essay or an article over just shouting "hello hello". I was reading this [wonderful piece](https://caravanmagazine.in/crime/love-and-rage-natasha-narwal-devangana-kalita-letters-tihar-jail) at the time and I recommend this others too. 

https://youtu.be/-oHTTcG9Ya8


Eventually I've progressed the prototype form to a small macropad case (although this wasnt my original intention), its easy to be swayed by the beautiful cases on the internet and build your own. 
