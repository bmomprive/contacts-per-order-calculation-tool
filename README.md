# Contacts-Per-Order Calculation Tool

In a consumer service environment for a toy manufacturer, it is important to consider multiple metrics such as the number of phone calls, emails and chat contacts received. Raw numbers are good to look at as well as trends over time. However, this shouldn't be the only base metrics used as the toy industry is very seasonal and demand greatly varies over time. Comparing the number of contacts to the number of orders placed by consumers on the website takes this seasonality into account. This is implemented in dataflows but executives often needs quicker numbers, for example to add to presentation or taking decisions during high-stress periods like Black Friday/Cyber Monday, before the winter holiday season or when an unpredicted issue arises.
Our contacts-per-order calculation tool will provide a quick solution for executives to input the number of contacts and orders and provide a contact per order calculation. For the purpose of this assignment, data will be manually inputed but in the workplace, the app will be linked to our internal order dataflow for a more automatised and easy process for users.

<details>
<summary>How to use</summary>
<ul> ## Purpose
This application allows users to calculate contacts per order by entering the total number of consumer service contacts and the total number of online order for a given time period. The result helps to take consumers demand into account while evaluating consumer service interactions volume.

## How to use the application
1. Open the application in a web browser. It is available [here](https://bmomprive.github.io/contacts-per-order-calculation-tool/).
2. Enter the total number of consumer service contacts in the **Contacts** input field.
3. Enter the total number of online orders in the **Orders** input field.
4. Click the **Calculate** button.
5. The calculated contacts-per-order value will be displayed below your inputs.

![Application User Interface](https://github.com/user-attachments/assets/72f82394-10b3-44a9-8f83-d6c859954427)

In the example above, it means there is 0,775 contacts for each order placed on the website. Results are rounded to 4 decimal points to increase readability.

## Error messages
The application will validate your inputs before displaying any results. Both fields must be filled with numerical values which are strictly greater than 0. If an invalid input is entered, a clear error message will indicate how you can correct your input.


![Application error handling if the value "0" is entered](https://github.com/user-attachments/assets/959a8675-226b-492b-9cbb-2ec634c475b8)

## Limitations
The current version only supports a single contacts-per-order calculation. Comparing contacts per order and automatically fill order data will be available in the future.

</ul>
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

### Prototyping
To start designing the application, I used FIGMA to create wireframes. These low fidelity representations of the app allows for experimentation without losing time. In our case, it allowed us to show multiple application layouts to stakeholders. For each wireframe, we keep minimum functionalities and only created a path without errors. Error handling will be added later in the project lifecycle.
  
#### Wireframe 1
The first wireframe was clearly showing where to input numbers of contacts and orders. Spaces on the left and right helped to identify two sets of inputs for future comparaisons.

##### Wireframe 1 - Inputs

![Prototype1-inputs](https://github.com/user-attachments/assets/fb8f5276-69e4-49ea-8b61-3ed8c9452a40)

##### Wireframe 1 - Outputs

![Prototype1-results](https://github.com/user-attachments/assets/cc3b272a-e00e-4520-8c1f-ce0fe4c5f796)

#### Wireframe 2
While still wanting to give the same functionalities as the first design, the second one was created in an effort to make the app more compact. However, this was deemed too narrow and crowded by stakeholders and it could have led to users' confusion.

##### Wireframe 2 - Inputs

![Prototype2-inputs](https://github.com/user-attachments/assets/2a75216c-5c7c-40ec-9301-4a1b1ceab0e6)

##### Wireframe 2 - Outputs

![Prototype2-results](https://github.com/user-attachments/assets/1e58cfec-c95d-4b33-9fe2-fce70c1e014d)

## Accessibility
Despite the Minimum Viable Product application being very simple, accessibility has been considered. For example, all actions can be done using a keyboard and accessible with a screen-reader.
The Chrome Lighthouse evaluation also returns a score of 98 for accessibility. This will need to be maintained as the project becomes more complicated in future iteration of the project.

![Application Lighthouse](https://github.com/user-attachments/assets/c53b8431-14ff-434f-a34b-b32ebf4bfb8b)

</ul>
</details>

<details>
<summary>Project Management</summary>
<ul>I managed this project by using a lightweight Agile approach. I focused on incremental delivery, version control and clear documentation. I organised the project using a Kanban workflow where I created GitHub issues. I then linked pull requests to these GitHub issues to support visibility. I started by linking pull requests to the Kanban board but this duplicated tasks and could cause confusion. This pushed me to evolve my approach as I understood how issues and pull requests serve different purposes in GitHub. These pull requests were unlinked from the Kanban board and new ones weren't linked.

![Kanban board](https://github.com/user-attachments/assets/3b1c792d-9b0e-4f6e-b195-abc9dd63bc5c)


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
<summary>Evaluation</summary>
<ul>
This project was the first time I used new programming languages like html, CSS and JavaScript. Learning these languages shorten the development lifecycle and limited the project deliverable to only a Minimum Viable Product for now. Test-Driven development was instrumental as it also allowed me to correct my mistakes earlier. In the end, this MVP met core requirements of the project. The initial request to allow the calculation of contacts per order is possible in the application as is and we could argue other iterations are outside of the initial scope, despite being useful enhancements.
Another challenge I face was understanding how Git and GitHub worked, especially how issues and pull requests work together. This initially resulted in some duplication and time loss but it taught me a valuable skill to version control.
To conclude, this project taught me the importance of iterative delivery, scope control and testing while engineering software. It also highlighted the value of documentation which helped with design decision paralysis at the beginning of this project. If more time was available, the next iteration of this project would focus on comparing two contacts-per-order calculations with a more visualy pleasing user interface for enhanced clarity without compromising accessibility.
  
</ul>
</details>
