---
layout: redlines
title: Testing Redlines
path: redlines-test

# Redlines YAML structure
redlines:
  verticalgrid: 8 # Options are 4/8/5/10/false
  offset: 37 # To adjust your design with the grid
  base:
    retina: true
    images: 
      - "/img/redlines-test/base-01.png"
      - "/img/redlines-test/base-02.png"
  layers:
    - name: "Spacing"
      retina: true
      open: false
      images: 
        - "/img/redlines-test/spacing-01.png"
        - "/img/redlines-test/spacing-02.png"
    - name: "Color & Typography"
      retina: true
      open: false
      images: 
        - "/img/redlines-test/color-01.png"
        - "/img/redlines-test/color-02.png"
  notes:
    - x: 380
      y: 250
      text: "We don't have a version without image. Isn't that **bold**?"
    - x: 906
      y: 187
      text: "The text can grow, but we recommend you to use only 2 line headlines"
    - x: 646
      y: 269
      text: "Another note, because, why not? Also, let's add [a link](https://www.etsy.com/)"
---

:metal::metal::metal: and so on :metal::metal::metal:
