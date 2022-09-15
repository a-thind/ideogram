# Ideogram
A lightweight interactive HTML widget in R for rendering an annotation-overlaid ideogram diagram using [Ideogram.js](https://eweitz.github.io/ideogram/) ([https://github.com/eweitz/ideogram](https://github.com/eweitz/ideogram)). The annotation bands on the chromosomes of the ideogram register click events allowing integration of the interactive ideogram in Shiny applications.

# System Requirements
- R (>4.2.1)

To install all the widget's dependencies, type the following in R:
```
install.packages(c("htmlwidgets", "pals", "DescTools"))
```


# Installation
To install the ideogram R library, download the [zip file](https://github.com/a-thind/ideogram/archive/refs/heads/main.zip) and run the following command in R:
```
install.packages("ideogram-main.zip", type="source", repos=NULL)
```


# Usage
To start using the ideogram library in the R environment, type the following in R:
```
library(ideogram)
```

After installation of the ideogram library in R, create the htmlwidget in R by calling the ```ideogram``` function with an IBIS IBD segment file:
```
ideogram("ibd_segment.txt")
```
