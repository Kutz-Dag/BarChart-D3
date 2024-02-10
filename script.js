let w = 800;
let h = 400;
let padding = 40;
let widthOfBar = 2;

const request = new XMLHttpRequest();
request.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);
request.send();
request.onload = function() {
  const json = JSON.parse(request.responseText);
  
  const svg = d3.select('.barChart')
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
  
  let tooltip = d3.select(".barChart")
                  .append("div")
                  .style("visibility", "hidden")
                  .style("position", "absolute")
                  .attr("id", "tooltip")
                  
  let minTime = new Date(d3.min(json.data,(d)=>d[0]))
  let maxTime = new Date(d3.max(json.data,(d)=>d[0]))
  
  const xScale = d3.scaleTime()
    .domain([minTime, maxTime])
    .range([padding,w-padding])
  
  let maxGDP = d3.max(json.data,(d)=>d[1])
  
  const yScale = d3.scaleLinear()
    .domain([0, maxGDP])
    .range([h-padding,padding])
  
  const xAxis = d3.axisBottom(xScale);  
 
  svg.append('g')
     .attr("transform", "translate(0,"+(h-padding)+")")
     .attr("id","x-axis")
     .call(xAxis)
  
  const yAxis = d3.axisLeft(yScale);
    
  svg.append('g')
     .attr("transform", "translate("+ padding +",0)")
     .attr("id","y-axis")
     .call(yAxis)
  
  let mouseover = (d,i) => {
    let positions = d3.pointer(mouseover);
    tooltip.style("visibility", "visible")
           .html(i[0]+"<br>$"+i[1])
           .attr("data-date", i[0])
           .attr("data-gdp", i[1])
           .style("left",event.pageX+"px")
           .style("top",event.pageY+"px")
  }
  
  svg.selectAll("rect")
    .data(json.data)
    .enter()
    .append("rect")
    .attr("data-date",(d)=>d[0])
    .attr("data-gdp",(d)=>d[1])
    .attr("y",(d,i)=>yScale(d[1]))
    .attr("height",(d,i)=>h-padding-yScale(d[1]))
    .attr("class", "bar")
    .attr("x", (d) => xScale(new Date(d[0])))
    .attr("width", (w-padding)/json.data.length)
    .attr("index", (d,i)=>i)
    .on("mouseover", mouseover)
    .on("mouseleave", ()=>{return tooltip.style("visibility", "hidden")})
  
}


