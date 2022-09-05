# Digging-Into-The-Belly-Button-Biome

<p> Using a json file that contains the data of various patients and the bacteria results from their belly button samples, I've created a dynamic and interactive dashbaord that displays the previously mentioned data. By choosing the patient number from the dropdown menu, you can change the information to reflect the findings on the newly selected patient. From the Top 10 Bacteria found, to the number of times they wash/shower per week, it's there. The link to the dashboard is provided below.</p>
<br>
<p><u> To Interact With The Dashboard, Click Here: </u></p>
https://dmcneill0711.github.io/Digging-Into-The-Belly-Button-Biome/
<br>
<hr>
<h3><i>Languages Used:</i></h3>
<li>HTML</li>
<li>JavaScript</li>
<br>
<hr>
<h3><i>Libraries Used:</i></h3>
<li>Bootstrap</li>
<li>D3.js</li>
<li>Plotly.js</li>
<br>
<hr>
<h3><i>Programs Used:</i></h3>
<li>Visual Studio Code</li>
<br>
<hr>
<h3><i>The Breakdown:</i></h3>
<p>1) Before building anything, I needed to examine and import the information. Following the link to the json, I was able to see how the data was organized. Then, using d3.json(), I created that constant variable and assigning it as dataSet. From there, I was about to pull and use the information. </p>
<p>2) After that, I assigned each section of the data to a variable describing what information it's populating using Object.values.</p>
<p>3) Once assigned, I created each funtion: </p>
<ul>
<li>displayBar: which uses the patient's sample_values and otu_ids to create a bar graph. *displays the Top 10 Bacteria found in sample*</li>
<li>displayBubble: which uses the patient's otu_ids, sample_values, and otu_labels to construct the bubble chart. *and uses the sample_values to determine the size of each marker*</li>
<li>displayWashing: this function grabs the last item on the metadata list and uses that to alter the gauge meter. </li>
<li>diplayMeta: this creates a string using the key value pairs of the patient's metadata. </li>
<li>lastly, a function to display the patient names in the dropdown menu</li>
</ul>
<p>4) The second to last function created was the updatePlot, which is a for loop that runs through the indexes, and when that index number matches the one associated with the patient number, it will select all of the following information and update all of the charts with the relevant information.</p>
<p>5) The final function used was the init() function, which determines what to display when the dashboard is first started. </p>
<br>
<hr>
<h3><i>Screen Shots:</i></h3>
![dashboard](https://user-images.githubusercontent.com/100710958/188471560-8206ff00-bf31-420a-b444-d21daf0dcc41.png)
![dash_bubble](https://user-images.githubusercontent.com/100710958/188471601-08bedded-1ed2-4dbd-a6b7-a644bb389aaa.png)


