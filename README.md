# Ideogram
A lightweight interactive HTML widget in R for rendering an interactive ideogram diagram displaying shared identity-by-descent (IBD) regions between individuals detected from [IBIS](https://github.com/williamslab/ibis) or [TRUFFLE](https://adimitromanolakis.github.io/truffle-website/) using [Ideogram.js](https://eweitz.github.io/ideogram/) ([https://github.com/eweitz/ideogram](https://github.com/eweitz/ideogram)). The annotation bands on the chromosomes of the created ideogram register click events and display tooltips. This interactive ideogram widget can be embedded in Shiny applications or R-markdown documents (Rmd).

![Screenshot from 2022-08-26 20-35-13](https://user-images.githubusercontent.com/26285885/190521305-94d45292-a140-43b2-b6a1-2582a6a9cadb.png)

## System Requirements
- R (>4.2.1)
- htmlwidgets (>=1.5.4 )
- pals (>=1.7)
- DescTools (>=0.99.45)


To install all the widget's dependencies, type the following in R:
```
install.packages(c("htmlwidgets", "pals", "DescTools"))
```


## Download and Installation
To download the latest release of the Ideogram htmlwidget library click here.
To install the ideogram R library, download the [tar file (.tar.gz)](https://github.com/a-thind/ideogram/archive/refs/tags/v0.1.0-alpha.tar.gz) and run the following command in R using the downloaded ideogram tar file path:
```
install.packages("ideogram-0.1.0-alpha.tar.gz", type="source", repos=NULL)
```
## IBD Segment File
The input IBD segment file containing IBD segment to be displayed on the ideogram widget can be either an IBIS IBD segment file (.seg) or a TRUFFLE segments file (.segment).

An example <b>IBIS segment</b> file (default file is usually headerless)<br/><br/>
![Screenshot from 2022-09-16 14-33-30](https://user-images.githubusercontent.com/26285885/190651099-ba52fb6e-e7cb-4f34-afcc-2cd2fe89d7a3.png)
<br/><br/>

If a header is provided, the header must be specified as follows:<br/><br/>
![Screenshot from 2022-09-16 14-35-17](https://user-images.githubusercontent.com/26285885/190651492-ce765220-017f-49f2-8904-ce0aca71d07f.png)
<br/><br/>

An example <b>Truffle segments</b> file (taken from an example provided on the TRUFFLE website at https://adimitromanolakis.github.io/truffle-website/documentation/doc.html)
![image](https://user-images.githubusercontent.com/26285885/190647191-29a3bebd-dfb8-4341-867b-00e9ac211dbe.png)


## Usage
To start using the ideogram library in the R environment, type the following in R:
```
library(ideogram)
```

After installation of the ideogram library in R, create the htmlwidget in R by calling the ```ideogram``` function with an IBD segment file (.seg/.segment from [IBIS](https://github.com/williamslab/ibis)/[TRUFFLE](https://adimitromanolakis.github.io/truffle-website/)):
```
ideogram("ibd_segment.txt")
```
## Embedding the ideogram widget in a Shiny Application
The ideogram library has two Shiny binding functions:

1. ```ideogramOutput``` - Shiny front-end function (with a widget id) 

2. ```renderIdeogram``` - Shiny back-end (server) function  to render the ideogram

To embed the widget in a Shiny App, use the ```ideogramOutput``` in the Shiny front-end function with a custom ID and invoke the ideogram function in a ```renderIdeogram``` function in the back-end (server), as demonstrated in a basic Shiny app below:
```
install.packages(shiny) # if not installed
library(shiny)

# render Shiny UI
ui <- fluidPage(
  ideogramOutput("ideogram_id")
)
# server logic code
serve <- function(input, output){
  output$ideogram_id <- renderIdeogram({
    ideogram("ibd_segment_file_path.seg")
  })
}
shinyApp(ui, output)
```
