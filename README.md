# Ideogram
A HTML widget in R for rendering an overlaid diagram using [Ideogram.js](https://eweitz.github.io/ideogram/) ([https://github.com/eweitz/ideogram](https://github.com/eweitz/ideogram)).

# System Requirements
- R

# Installation
To install the ideogram widget, download the [zip file](https://github.com/a-thind/ideogram/archive/refs/heads/main.zip) and run the following command in R:
```
install.packages("ideogram-main.zip, type="source", repos=NULL)
```

# Usage
After installationTo create the htmlwidget in R type:
```
ideogram("ibd_segment.txt")
```
