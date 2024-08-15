# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development guide

## Step 1 - Install all packages

Install all packages and dependencies from package.json:

```
npm i
```

## Folder Structure

The project follows a specific folder structure to ensure organization and clarity. Please adhere to the following guidelines:

-   **`/src`**: Contains the source code of the project.

  -   **`/app`**: Main application code.

    -   **`/core`** : This folder often contains core functionalities that are not directly related to a specific feature or page. It's a good place to put services, guards, interceptors, and other pieces of code that are critical to the application but not tied to a particular feature.

      -   **`/auth`** : This folder contain authentication-related code, such as services or guards responsible for handling user authentication and authorization.
      -   **`/guards`** : Guards are used to control access to certain routes in your application. They can be placed here to keep the code organized.
      -   **`/interceptors`** : Interceptors can be used to modify HTTP requests or responses globally. Placing them in this folder helps maintain a clean structure.
      -   **`/layout`** : This might be used for components or services related to the overall layout of your application, such as a navigation bar or footer.
      -   **`/models`** : This folder can contain data models used throughout the application. Defining models in one place makes it easier to manage and maintain consistency.
      -   **`/services`** : Services that are shared across multiple features or components can be placed here. These could include data services, utility services, etc.

    *   **`/features`** : This folder is typically used for organizing pages or features of your application. Each feature might have its own subfolder containing components, services, and other files specific to that feature.
    *   **`/shared`** : This folder is for components, services, or other pieces of code that are shared across multiple features. It helps to avoid duplication and ensures consistency in the application."

      -   **`/components`**: This directory contains reusable UI components utilized across various features of the application. Organizing components here promotes reusability, maintains consistency in design patterns, and facilitates easier maintenance and development.
      -   **`/styles`**: Housing global and component-specific stylesheets, this directory centralizes the styling resources for the application. Global stylesheets define overarching design principles, while component-specific stylesheets tailor the appearance of individual components, fostering a cohesive and visually appealing user interface.

  -   **`/assets`**: Resources like images, fonts and databases.

    -   **`/data`**: Houses data-related files or mockups used in the project.

      -   **`db.json`**: JSON file serving as the database for the json-server mock API. This file contains mock data used for simulating API responses during development.

    -   **`/images`**: Stores image files used within the application. These include icons, graphics, and other visual elements.
    -   **`/fonts`**: Holds font files utilized for typography and styling purposes in the application.

  -   **`/stories`**: Storybook for automatic components documentation. Try: `ng storybook`

-   **`/docs`**: Documentation files.
-   **`/tests`**: Unit, integration, e2e and other tests.

## Project Organization

To maintain consistency and ease collaboration, the project follows the GitFlow branching model. The main branches are:

-   **`main`**: Represents the production-ready code. Only merge into this branch after thorough testing.
-   **`develop`**: The main branch for ongoing development. Feature branches branch off from here, and completed features are merged back.
-   **`feature/branch-name`**: Feature branches for new features or enhancements. Always branch off from `develop`.
-   **`bugfix/branch-name`**: Bugfix branches for resolving issues. Always branch off from `develop`.
-   **`hotfix/branch-name`**: Hotfix branches for critical fixes in the production code. Branch off from `main`.

## Commit and Push Guidelines

To maintain a clean and well-documented version history, follow these guidelines:

1. **Feature Development:**

  - Create a new branch for each feature or enhancement.
  - Use clear and concise commit messages, adhering to the [Conventional Commits standard](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., 'feat:', 'fix:', 'docs:', etc.).
  - Regularly push changes to the remote repository.

2. **Bug Fixes:**

  - Create a new branch for each bug fix.
  - Include a reference to the issue being addressed in your commit message.
  - Use clear and concise commit messages, following the Conventional Commits standard.
  - Push changes promptly.

3. **Code Review:**

  - Before merging into `develop` or `main`, ensure that your code has been reviewed.
  - Address feedback and retest.
  - Ensure commit messages follow the Conventional Commits standard.

4. **GitFlow Model:**

  - Strictly adhere to the GitFlow branching model.
  - Respect the roles and responsibilities defined by GitFlow.
  - Use Conventional Commits standard for commit messages.

By adhering to these guidelines, we can maintain a well-organized and collaborative development environment. If you have any questions or encounter issues, please refer to this documentation or reach out to the project team.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
