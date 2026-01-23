# Contacts-Per-Order Calculation Tool

In a consumer service environment for a toy manufacturer, it is important to consider multiple metrics such as the number of phone calls, emails and chat contacts received. Raw numbers are good to look at as well as trends over time. However, this shouldn't be the only base metrics used as the toy industry is very seasonal and demand greatly varies over time. Comparing the number of contacts to the number of orders placed by consumers on the website takes this seasonality into account. This is implemented in dataflows but executives often needs quicker numbers, for example to add to presentation or taking decisions during high-stress periods like Black Friday/Cyber Monday, before the winter holiday season or when an unpredicted issue arises.
Our contacts-per-order calculation tool will provide a quick solution for executives to input the number of contacts and orders and provide a contact per order calculation. For the purpose of this assignment, data will be manually inputed but in the workplace, the app will be linked to our internal order dataflow for a more automatised and easy process for users.

<details>
<summary>How to use</summary>
<ul>This will be a user guide.</ul>
</details>

<details>
<summary>Design</summary>
<ul>

## Defining requirements
### User stories
- **As** an executive stakeholder, **I want** to enter the total number of consumer service contacts **so that** I can calculate service demand relative to customer orders.

- **As** an executive stakeholder, **I want** to compare the number of consumer contacts to the total number of online orders **so that** service demand can be normalised for seasonal variation.

- **As** an executive stakeholder, **I want** to access clear comparison metrics **so that** they are easier to interpret and communicate during presentations.

- **As** a user in a high-pressure situation, **I want** results to appear immediately after triggering the calculation **so that** I can take business decisions without delay.

- **As** a user, **I want** clear feedback when inputs are invalid **so that** I understand what needs to be corrected.

- **As** a user, **I want** to reset all inputs and results **so that** I can quickly perform a new calculation.

- **As** a user with accessibility needs, **I want** to navigate and use the tool with a keyboard **so that** I can access the application without barriers.

### User requirements
As a result of these user stories, we can identify clear requirements.

#### 1. User Interface (UI)
- A numeric input field exists for number of contacts
- The system must provide order data or allow the user to enter the total number of online orders.
- Buttons to trigger calculations must be included.
- The application needs to clearly show consistently rounded results
- Users must be able to clear values without reloading the application

#### 2. Metrics and calculations
- Contacts represent the total or a part of consumer service interactions, according to user needs.
- Orders represent the total number of online orders.
- The application must use orders to account for seasonality and fluctuating demand.
- Contacts-per-order is calculated as _Number of contacts ÷ Total orders_.
- Difference between contacts-per-order measures are shown in percentage according to the formula: ((Contacts-per-order 1 - Contacts-per-order 2) ÷ Contacts-per-order 2) * 100

#### 3. Validation and system feedback
- The system rejects calculation when either the number of orders or contacts is zero, as zero values are considered non-representative.
- All fields reject non-numeric or negative values.
- Clear messages are shown for invalid or missing inputs without exposing technical details.

#### 4. Non-functional requirements
- No noticeable delay occurs after triggering calculation, ideally under 1 second.
- Results update without requiring a page refresh.
- The application supports keyboard and screen-ready accessibility features when possible.

</ul>
</details>

<details>
<summary>Project Management</summary>
<ul>I managed this project by using a lightweight Agile approach. I focused on incremental delivery, version control and clear documentation. I organised the project using a Kanban workflow where I created GitHub issues. I then linked pull requests to these GitHub issues to support visibility. I started by linking pull requests to the Kanban board but this duplicated tasks and could cause confusion. This pushed me to evolve my approach as I understood how issues and pull requests serve different purposes in GitHub. These pull requests were unlinked from the Kanban board and new ones weren't linked.

## Agile approach
The development followed an iterative process. Requirements were defined using user stories to identify requirements. These requirements were then prioritised using the MoSCoW technique to first deliver a working Minimum Viable Product (MVP) then extend functionalities in later iterations if and when time allows. A Test-Driven approach was used during development to support incremental delivery and reduce risks. This was crucial to produce a working application as soon as possible and add small steps over time, while keeping stakeholders in the loop to get their feedback.

## Prioritisation
I didn't attribute t-shirt sizes to tickets as this would be more useful with a team of developers compared to only one. However, to ensure the application delivers value efficiently, requirements are prioritised using the MoSCoW (Must have, Should have, Could have, Won't have) method which is commonly used as an Agile prioritisation framework. This supports incremental delivery and separates requirements between usability and enhancement features.

### Must have
These requirements are essential to meet core user stories and allow stakeholders to interpret service demand without delay.
- Numeric input fields for number of consumer service contacts and total number of online orders
- A calculation button triggers results to avoid reloading the page
- Calculations: Number of contacts ÷ Total orders
- Display of contact-per-order result without noticeable delay.
- Input validation, rejecting zero, negative and non-numerical values.

### Should have
These requirements improve clarity, usability and interpretation of results but are not required in an initial release.
- Calculation and display of percentage difference between two contacts-per-order measures.
- Consistent formating of calculated metrics
- A reset function to allow easier repeated calculation

### Could have
These requirements enhance the flexibility and accessibility but are considered lower priority.
- Full keyboard accessibility for all actions
- Screen reader support

### Won't have
These requirements were excluded on purpose to limit complexity but could be implemented in future iteration of the application.
- Automatic retrieval of order data from external systems or files.

## Iterations
The project is planned to be managed iteratively using short "sprints". Considering the small scope of this project and that I am a solo developer on the project, ceremonies and meetings weren't conducted. Sprints mainly helped to clearly define release cycle steps. If the project would be expanded and include more than one developer, I believe sprint planning, daily stand-up, backlog refinement, sprint review and retrospective would be useful.

### Iteration 1
This is a Minimum Viable Product aligned with MoSCoW must have requirements. It includes:
- A single contacts-per-order calculation.
- Validation for missing, non-numeric, zero and negative values.
- Immediate in-page results and clear error messages.
- Minimal styling for readability.

### Iteration 2
This includes "Should have" and some "Could have" features. This might not be fully implemented within the assignment timeframe due to time constraints. It includes:
- Second contacts-per-order calculation
- Comparison between both contacts-per-order calculations.
- Better formatting of metrics
- A reset function for repeated calculations

### Iteration 3
This wasn't required within the scope of this assignment but might be done in this project's future. This includes the rest of the "Could have" features as well as the "Won't have" features if deemed beneficial. It is mainly focused on retrieving order data to not make the input mandatory.
</ul>
</details>

<details>
<summary>Development</summary>
<ul>This project is a simple web-based calculation tool allowing users to input a number of consumer service contacts and a number of online orders to calculate the number of contacts per order. The focus was to deliver a Minimum Viable Product (MVP) with clear development, validation as well as enabling a quick feedback loop. Planned enhancements such as comparative calculations and percentage changes are documented in the earlier sections but intentionally scoped to later iterations.

## Technology stack
The project is implemented using:
- HTML. Used to create the user interface.
- CSS. Used to provide readability styling. It was kept to the minimum to support the MVP delivery.
- JavaScript. Used for calculation logic, validation and Document Object Model (DOM) interaction. 
- Jest. Used for testing.
- GitHub. Used for control versions as well as track issues, pull requests. It was also used to protect the main branch by not allowing direct commits to main.

## Architecture
To improve testing and maintenance, I separated logic from the user interface. _calculateContactsPerOrder_ is a pure function that validates inputs for number of orders and contacts, then returns the contacts-per-order metric. This allows the logic to be tested independently from the browser environment.
The user interface code in HTML and CSS is responsible for reading input values from JavaScript DOM, uses the calculation function then displays the result or an error message.

## Error handling
The implementation of input validation is primordial to ensure the calculation function is consistent across the whole application. It checks for missing/empty and non-numerical values which are rejected. Zero and negative values are also rejected as they are not representative of a business case or completely impossible. For example, it never happened that the consumer service didn't receive any contact so the measure would be useless.
When the user input numbers falling in one of these scenarios, the function returns a clear error message for the user to know how to fix their input without reloading the page as highlighted in requirements.

## Test-Driven Development
A test-driven approach was used for core calculation functions in JavaScript. Unit tests were written first for these functions. This is evidenced by pushing failing tests for the calculateContactsPerOrder function before implementing a solution. The User Interface was manually tested revealing browser error messages were displayed instead of my custom ones.

## Browser and testing compatibility
The app.js file is used for two different purposes. The first one is to handle normal browser behaviour like handling inputs and display results/errors. The second is to handle unit testing in Jest. Test-Driven Development highlighted these two use cases are not compatible by default. This is why I implemented environment checks so the module export only works in testing while DOM-related code is only used in the browser. Browser default form validation was also disabled so validation could be customisable.

## Styling
As mentioned earlier, styling was intentionally kept very minimal to focus on usability rather than visual design. Basic layout constraints, spacing and input fields were styled using CSS to improve readability and user experience while keeping the implementation aligned with the scope of the MVP.

</ul>
</details>

<details>
<summary>Reflection and next steps</summary>
<ul>This will be the conclusion, including a reflection and next steps.</ul>
</details>
