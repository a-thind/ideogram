# Ideogram
A HTML widget in R for rendering an overlaid diagram using [Ideogram.js](https://eweitz.github.io/ideogram/) ([https://github.com/eweitz/ideogram](https://github.com/eweitz/ideogram)).

# System Requirements
- R

# Installation
To install the ideogram R library, download the [zip file](https://github.com/a-thind/ideogram/archive/refs/heads/main.zip) and run the following command in R:
```
install.packages("ideogram-main.zip", type="source", repos=NULL)
```


# Usage
To start using the ideogram library, type the following in R:
```
library(ideogram)
```

After installation of the ideogram library in R, create the htmlwidget in R by calling the ```ideogram``` function with an IBIS IBD segment file:
```
ideogram("ibd_segment.txt")
```
