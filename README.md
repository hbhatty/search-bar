### Overview
A search bar that takes in fake information from an api. 

## What I learned
I was really lost initally because I didn't know how to first populate the results array, by sending it into a component.
I realized I can destructure the state itself to access it and then populate it by using fetch. I also learned for fetch we have to parse it from it json
form to get it into an object. From that I used filter to filter each result that was gotten from the api, to match what the user was entering.