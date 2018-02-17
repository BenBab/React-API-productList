Clone Repo

npm install

then run: npm start


To have access to the API endpoints I added them to the chrome browser extension

For cross origin accessibility disable cross origin restrictions in your browser. Safari: Develop/Disable Cross Origin Restrictions, Chrome:
install this plugin https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

How it works:
The App.js renders a header and Async body component.
The AsyncBody Fetches the data and will either show an error or render the list of categories that can be selected. The data is passed dow through props. 
When a category is selected then the searchbox component and productList component will appear 
The searchBox component can use the list of products and filter out any products with non matching characters regardless of case
In the productList using an 'active' property that is set onClick, we can expand the specific product component that is clicked on.


To Do: 
Add Redux; Currently most of the state is being managed primaraly in the parent level components and being passed down to the children where needed. This is fine for a small app like this. However, if the app needed to scale then adding Redux would be a sound next step

I am fairly novice with testing librarys such as Jest and Enzyme, I will need to further learn them as they are looking to become fairly standardized when using React. As such I have not included the test files in this app. Using PropTypes for typechecking the components  


![Optional Text](https://github.com/BenBab/React-API-productList/blob/master/public/image.PNG)

