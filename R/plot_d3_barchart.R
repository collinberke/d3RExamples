#' Plot a bar chart with D3
#'
#' Plot a simple bar chart using the D3 javascript library.
#'
#' @import htmlwidgets
#'
#' @export
plot_d3_barchart <- function(
  width = NULL,
  height = NULL,
  elementId = NULL
) {
  # forward options using x
  x = list(
    message = message
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'plot_d3_barchart',
    x,
    width = width,
    height = height,
    package = 'd3RExamples',
    elementId = elementId
  )
}

#' Shiny bindings for plot_d3_barchart
#'
#' Output and render functions for using plot_d3_barchart within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a plot_d3_barchart
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name plot_d3_barchart-shiny
#'
#' @export
plot_d3_barchartOutput <- function(outputId, width = '100%', height = '400px') {
  htmlwidgets::shinyWidgetOutput(
    outputId,
    'plot_d3_barchart',
    width,
    height,
    package = 'd3RExamples'
  )
}

#' @rdname plot_d3_barchart-shiny
#' @export
renderPlot_d3_barchart <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) {
    expr <- substitute(expr)
  } # force quoted
  htmlwidgets::shinyRenderWidget(
    expr,
    plot_d3_barchartOutput,
    env,
    quoted = TRUE
  )
}
