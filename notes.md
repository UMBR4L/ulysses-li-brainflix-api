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
- [ ] Read Sprint 3 Instructions: Familiarize with new features and requirements.

## API Server Development
- [ ] Create API Server: Set up a new Express.js server repository.
  - [ ] Implement API endpoints (`GET /videos`, `GET /videos/:id`, `POST /videos`) matching the mock API.
  - [ ] Serve video images as static assets.
  - [ ] Use a JSON file for data persistence.

## Implementing Features
- [ ] Enhance Video Upload Page:
  - [ ] Implement form handling to POST new videos.
  - [ ] Manage hardcoded image paths and placeholder data.
- [ ] Add Video Deletion Feature: 
  - [ ] Create UI delete button.
  - [ ] Handle API requests for video deletion.
- [ ] Implement Video Likes and Dislikes:
  - [ ] Update UI with like and dislike buttons.
  - [ ] Manage state and API calls for like/dislike actions.
- [ ] Enhance Comment Functionality:
  - [ ] Allow posting new comments.
  - [ ] Implement comment deletion.

## Testing, Debugging, and Finalization
- [ ] Test New Features: Ensure functionality and check for bugs.
- [ ] Code Cleanup: Refactor for readability and maintainability.
- [ ] Final Review: Check all requirements and feedback.
- [ ] Submit the Project: Merge develop with main branch and submit.

## Optional: Diving Deeper
- [ ] Additional Challenges (if main tasks are completed):
  - [ ] Implement comments endpoints.
  - [ ] Add custom video player features.
  - [ ] Implement video liking functionality.
