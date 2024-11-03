# Bar Chart - D3.js

### Description
Creating a program that takes a large dataset and displays it as a Bar Chart using HTML, CSS, and JavaScript.

### The bar chart should look similar to this:
![image](https://shots.codepen.io/username/pen/GrZVaM-800.jpg?version=1632988410)

> I used the D3 svg-based visualization library to visualize the data


#### Aim and Instructions
* Using a large dataset consisting of over 1000 data entries and visualizing it in the form of a Bar Chart using D3.js
* The Bar Chart had to have a list of functions.
* One of the functions was that if the dataset is altered o modified, then the Bar Chart would render that modification (if it is still in a dataset format).
* The other function was that when hovering over areas on the bar chart, it will display  a tooltip providing a description (a short one) of the hovered area. The description should be linked to the dataset's ID.
* Another aim of this project was to produce axes for the bar chart.

#### User Stories/Tests to pass:

- [x] #1: My chart should have a title with a corresponding id="title".

- [x] #2: My chart should have a g element x-axis with a corresponding id="x-axis".

- [x] #3: My chart should have a g element y-axis with a corresponding id="y-axis".

- [x] #4: Both axes should contain multiple tick labels, each with a corresponding class="tick".

- [x] #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.

- [x] #6: Each .bar should have the properties data-date and data-gdp containing date and GDP values.

- [x] #7: The .bar elements' data-date properties should match the order of the provided data.

- [x] #8: The .bar elements' data-gdp properties should match the order of the provided data.

- [x] #9: Each .bar element's height should accurately represent the data's corresponding GDP.

- [x] #10: The data-date attribute and its corresponding .bar element should align with the corresponding value on the x-axis.

- [x] #11: The data-gdp attribute and its corresponding .bar element should align with the corresponding value on the y-axis.

- [x] #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

- [x] #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.

### CodePen Project Link
You can view my project on CodePen using this link:
[*Bar Chart in D3* by Kutz](https://codepen.io/kutzz/pen/PoVbONN)

