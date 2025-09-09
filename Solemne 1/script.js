import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import data from './data.json' with {type : 'json'}

const yearScale = d3.scaleLinear([1980,2015],[0,1200])
const ageScale = d3.scaleBand(["5-14 years","15-24 years","25-34 years","35-54 years","55-74 years","75+ years"],[0,750])
const suicides_noScale = d3.scaleLinear([0,600],[1,16])

const puntitos = ([1,2,3,4,5,6])

// CHART
d3.select('.chart')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', function(d){
        return suicides_noScale(d.suicides_no)
    })
    .attr('cx', function(d){
        return yearScale(d.year)
    })
    .attr('cy', function(d){
        return ageScale(d.age)
    })



// EJE X
const xAxis = d3.axisBottom(yearScale)
d3.select('.x-axis')
    .call(xAxis)
    .attr('transform', 'translate(100, 850)')

// EJE Y
const yAxis = d3.axisLeft(ageScale)
d3.select('.y-axis')
    .call(yAxis)


// LABEL EJE X
d3.select('.x-axis')
    .append('text')
    .text('Año')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(1250, 5)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

// LABEL EJE Y
d3.select('.y-axis')
    .append('text')
    .text('Rango etario')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(0, -30)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

// LABEL TITULO
d3.select('.chart')
    .append('text')
    .text('Suicidios Masculinos - Chile: 1980-2015')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(400, -80)')
    .attr('font-size', '30px')
    .attr('fill', '#000000')

// LABEL LEYENDA
d3.select('.x-axis')
    .append('text')
    .text('Cantidad de Suicidios')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(940, -800)')
    .attr('font-size', '20px')
    .attr('fill', '#000000')

d3.select('.chart')
    .append('text')
    .text('1-99')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(800, -80)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

d3.select('.chart')
    .append('text')
    .text('100-199')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(850, -80)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

d3.select('.chart')
    .append('text')
    .text('200-299')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(910, -80)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

d3.select('.chart')
    .append('text')
    .text('300-399')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(970, -80)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

d3.select('.chart')
    .append('text')
    .text('400-499')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(1030, -80)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

d3.select('.chart')
    .append('text')
    .text('500+')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(1080, -80)')
    .attr('font-size', '15px')
    .attr('fill', '#000000')

