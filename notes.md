# Sprint 2

## Styling Steps

1. Global Styles and Utilities:
Begin by ensuring that your _global.scss, _reset.scss, _variables.scss, _mixins.scss, and _fonts.scss are comprehensive and cover all the basic styles, fonts, colors, and mixins you'll need across components.
Check that these files are correctly imported into your main SASS file (often App.scss or similar).

2. Styling Components:
Top-to-Bottom Approach: Starting from the header and moving down to the footer is a logical approach. It helps you see the styling changes in a flow as you would browse the website.
Implement BEM (Block Element Modifier) methodology in your class names for maintainability and readability. For instance, for a Header component, use class names like .header, .header__logo, .header__nav, etc.
Use SASS variables for consistent styling, such as colors, font-sizes, margins, and paddings.
Apply Flexbox for layout control. Utilize your _mixins.scss for common Flexbox patterns if applicable.

3. Responsive Design:
Ensure your components are responsive. Use media queries where necessary to adjust the layout for different screen sizes.

4. Iterative Approach and Testing:
Style one component at a time and test its appearance and responsiveness in the browser.
It’s crucial to check each component in isolation and in the context of the entire application to ensure consistency.

5. Refinement:
After the initial pass, go back and refine your styles. This might include adjusting margins and paddings for better spacing, fine-tuning colors, or tweaking responsive behaviors.

6. Maintainability:
Keep your SASS/CSS maintainable by avoiding overly specific selectors and keeping your style rules concise.
This approach ensures that you systematically cover each part of your application, maintaining a consistent style throughout while adhering to best practices. Remember to frequently check your application in the browser to see the effects of your styling changes.

# Sprint 3

## Initial Setup and Understanding
- [x] Review Sprint 2: Understand the existing codebase and functionality.
- [x] Read Sprint 3 Instructions: Familiarize with new features and requirements.

## Functional Requirements:

### API Server:

- [ ] Build a new API service that manages video data.
  - [ ] The end-points and response structure of your API server must match that of the mock API server.
  - [ ] The API must have the following end-points:
    - [x] GET /videos: Responds with an array of videos.
    - [x] GET /videos/:id: Responds with an object containing the details of the video with an id of :id.
    - [x] POST /videos: Adds a new video to the video list. A unique id must be generated for each video added.
- [ ] When submitting a new video from the form, it must POST to the API. You need to provide the hard-coded image path for the video thumbnail on the front-end within the request body.
- [ ] Serve images as static assets from the Node server.
- [ ] Data should persist on the server, even after restarting the Node server. Use a JSON file for data persistence.
  - [ ] Use a single JSON file as the source of truth for all data. (video-details.json)

### Video Upload Page:

- [ ] Implement the video upload functionality.
  - [ ] Create an event handler for the upload form so that when a user submits a new video, it posts the video to your API to save it to the list of videos.
  - [ ] A new video should be persisted in a JSON file with the app data.
  - [ ] No requirement for uploading an image file; hardcode an image path when creating a new video, corresponding to a static asset path from the Node server.
  - [ ] Fill any missing data for a new video object with placeholder values, not with extra form inputs.

## Visual Design Requirements:

- [ ] The site must be responsive at and between breakpoints, closely resembling the mockups in the design package.
- [ ] Resolve any inconsistencies with the design from previous sprints to match the mockups as closely as possible.
- [ ] Incorporate any feedback provided around the visual design from previous sprints into this final sprint. This Sprint represents the completed product that the "client" has requested.

## Implementation Requirements:

- [ ] Incorporate any feedback provided around your implementation from previous sprints into this final Sprint. This Sprint represents the completed product that the "client" has requested.
- [ ] Follow the proper folder structure and naming convention outlined in the Project Guidelines section in Synapse and the Sprint 3 folder Structure Diagram.
- [ ] Use the provided assets.
- [ ] Use multiple React components.
- [ ] Use react-router-dom with multiple routes, one for each page.
- [ ] Use SASS variables for CSS.
- [ ] Use BEM principles when naming classes.
- [ ] Use Flexbox for layout control.
- [ ] Make sure to create a new repository for your server-side code and merge your develop branch with the main branch on both your client and server repositories before submission.