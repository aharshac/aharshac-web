---
cizm_project_id: rJ6OCkCWW
cizm_path: 'https://www.collaborizm.com/project/rJ6OCkCWW'
date: '2017-06-01T19:43:48.728Z'
date_modified: '2017-06-03T15:59:12.293Z'
summary: ''
description: An Arduino Bot controlled via Android through Bluetooth Serial Port Profile.
title: Arduino Bluetooth Bot
stripped_title: arduino-bluetooth-bot
route: portfolio/arduino-bluetooth-bot.md
published: true
cover: covers/x1jvr6auogvekzfzqeo7
thumbnail: project_photos/rrrvrvdxmv25ejcvgcee
assoc_id: ''
assoc_name: ''
layout: Project
skills:
- Arduino
- Android
- Bluetooth
- Communication
---
# Project Overview

An Arduino Bot controlled via Android through Bluetooth Serial Port Profile.    
Based on [**The Node Bot**](https://www.collaborizm.com/project/r1dE09adg) project.

&nbsp;

![IMG_20170601_233053511-40-40.jpg](czm://wk65qri4dzaxdhxrgl1z)

&nbsp;
**Bot**
@[youtube](​https://www.youtube.com/watch?v=98Af_wxncB0)

**Controller**
@[youtube](​https://www.youtube.com/watch?v=cLuQ6KyXpGI)

&nbsp;

## High-Level Components
### Arduino Mega 2560
- Connects to the HC-05 Bluetooth Module via **Serial1** hardware serial port.
- HC-05 is configured in Serial Port Profile.
- Default device name is **HC-05** and PIN is **1234**.
- 4 individual motors for wheels, but 2 on each side are controlled as one.
- L298N for motor control.
- 2s 1000 mAh Li-po battery.

### Android
- Uses [**Android-BluetoothSPPLibrary**](https://github.com/akexorcist/Android-BluetoothSPPLibrary) by [*Akexorcist*](https://github.com/akexorcist) as Bluetooth wrapper.
- Shows connection state and an activity to choose Bluetooth device.

&nbsp;

# How To Receive Resume Credit
Make one yourself or contribute to this project.

# Teammates & Contributors I'm Looking For
Open to all those who want to learn about Android and Arduino.

# Where I Need the Most Help
Make a custom Bluetooth library.

# Why Sponsor This Project?
R&D

# Why I'm Passionate About This Project
A simple project that might help you to build something big.

# Supporting Material & Info
* [**GitHub repo**](https://github.com/aharshac/bt-bot/)
