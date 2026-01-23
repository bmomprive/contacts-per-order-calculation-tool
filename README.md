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
<ul>This will explain how I managed the project.

## Prioritisation
To ensure the application delivers value efficiently, requirements are prioritised using the MoSCoW (Must have, Should have, Could have, Won't have) method which is a commonly used Agile prioritisation framework. This supports incremental delivery and separate requirements between usability and enhancement features.

### Must have
These requirements are essential to meet core user stories and allow stakeholders to interpret service demand without delay.
- Numeric input fields for number of consumer service contacts and total number of online orders
- A calculation button triggers results to avoid reloading the page
- Calculations: Number of contacts ÷ Total orders
- Display of contact per order result without noticeable delay.
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

</ul>
</details>

<details>
<summary>Development</summary>
<ul>This will explain the coding part of the project.</ul>
</details>

<details>
<summary>Reflection and next steps</summary>
<ul>This will be the conclusion, including a reflection and next steps.</ul>
</details>
