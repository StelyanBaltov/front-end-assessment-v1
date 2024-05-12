Things done:
1. Fix router issues
2. Fix categories selection issues
3. Implement product Add/Update
4. Implement default expiration date (30 days from the creation date)
5. Check feature checkbox dynamically if the rating is above a threshold (8)
6. Prevent form submit if there are erros
7. Add index.js in components for a general export for more convenient importing
8. Extract validator.js in a seperate folder for consistency and readability

Things to improve:
1. Add typescript
2. Refactor API classes to functions for consistency
3. Move fetch data logic from index.jsx to component based approach (e.g. call fetch from useEffect from the component)
4. In general it is a good practice to keep the render/return clean, we can extract the repeated logic (for example the input fields)
and map them from a config file. Also to achieve that we should refactor the local state from having multiple setStates to only one,
with object as a default value
5. We can create a page folder and move more complex logic there (a page can be defined as more complex composition of componens) and keep components logic cleaner
6. There are some depricated functions, we can updated depenencies and keep the code up to date if possible.

