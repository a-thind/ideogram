#' R binding for ideogram
#'
#' Plots ideogram.
#'
#' @import htmlwidgets
#'
#' @export
ideogram <- function(df, width = NULL, height = NULL,
                     elementId = NULL) {
  # forward options using x
  x = list(
    data = df[,-1],
    samples = data.frame(name=levels(factor(df$name)),
                         color=levels(factor(df$color)),
                         shape=rep("rectangle",
                                   length(unique(df$name))))
  )



  # create widget
  htmlwidgets::createWidget(
    name = 'ideogram',
    x,
    width = width,
    height = height,
    package = 'ideogram',
    elementId = elementId,
    sizingPolicy = htmlwidgets::sizingPolicy(
      viewer.padding = 0,
      browser.fill = TRUE
      )
  )
}

#' Shiny bindings for ideogram
#'
#' Output and render functions for using ideogram within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a ideogram
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name ideogram-shiny
#'
#' @export
ideogramOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'ideogram', width, height, package = 'ideogram')
}

#' @rdname ideogram-shiny
#' @export
renderIdeogram <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, ideogramOutput, env, quoted = TRUE)
}
