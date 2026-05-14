1. You are a skilled secondary Computer Science teacher in Scotland.
2. Create a six-lesson Scheme of Work for Website Development including: lesson pages, resources (questions and presentations), templates, images, assessment tasks, success criteria, and rubrics.
3. Create a single directory called `Website Development Unit 1` and place all files and folders in this directory.
4. The unit topic should be easy for pupils to research independently (for example: `Visit Edinburgh`).
5. The build software is RocketCake.
6. Use RocketCake's drag-and-drop workflow to introduce pupils to website development.
7. Create HTML files for each lesson and populate them with complete lesson content.
8. Create presentation HTML files for each lesson and an index page linking to all presentations.
9. Set up Bootstrap on all lesson and presentation HTML pages:
   - Include Bootstrap 5 CSS in `<head>`.
   - Include Bootstrap 5 bundle JS before `</body>`.
   - Apply Bootstrap layout/components to lesson pages (for example: container spacing, readable headings, list groups, card-style content blocks).
   - Apply Bootstrap component styling to presentation content while preserving the slide design system.
10. Do not include a top navigation bar on presentation slides by default.
11. For each lesson question resource, include scaffolded questions under these exact levels:
   - `1 - Begining to learn`
   - `2 - Making progress`
   - `3 - Making Good progress`
   - `4 - Meeting target`
12. Apply the scaffolded levels to starter questions, check for understanding questions, and exit tickets in every lesson.

Rules

1. Pupil outcome website must be one page only.
2. Pupil build should use RocketCake tools (no requirement for pupils to hand-code HTML, CSS, or JavaScript).
3. Teacher resources may use HTML/CSS/JavaScript/Bootstrap to deliver lesson and presentation materials.
4. The scheme of work and all resources must include structured support and challenge.
5. Keep language suitable for Scottish secondary learners and align tasks to CfE Third Level benchmarks.
6. Question resources must clearly label and separate the four scaffold levels so teachers can target support and stretch.

Presentation and template design rules

1. Presentation templates should use a shared CSS structure:
   - Put global variables, body defaults, and shared slide/deck layout in `Resources/Presentations/Templates/Assets/Styles/base.css`.
   - Put each slide type's styling in its own CSS file, for example `01-title-slide.css`, `03-keywords.css`, `04-question-list.css`, `05-image+content.css`, and `06-questions.css`.
   - Use `main.css` to import shared and slide-specific template CSS when a page needs the full template set.
   - Avoid relying on the older combined `slides.css` for new templates unless explicitly needed.
2. Presentation slides should be designed to fit cleanly into one viewport so slide jumping works smoothly.
   - Use horizontal space before reducing all font sizes.
   - Move footer/help text into a side panel where this prevents bottom clipping.
   - Keep text inside cards, panels, and buttons from wrapping awkwardly where possible.
3. Use clearly identifiable content blocks so future template generation can replace content safely:
   - Use `context-scenario` for scaffolded question scenarios.
   - Use `question-context` for question-list context panels.
   - Use clear note/footer classes such as `question-list-note`, `questions-footer`, `keywords-footer`, and `image-content-footer`.
   - Use descriptive layout wrappers such as `question-list-workspace`, `questions-workspace`, `wireframe-column`, and `keyword-grid`.
4. Question slides should present the four scaffold levels across the top or as clear columns/cards:
   - Keep the level labels visible: `Beginning to learn`, `Making progress`, `Making good progress`, and `Meeting target`.
   - Use different tab/header colours for each level to make progression easy to scan.
   - Questions must match the scenario on the slide; avoid generic prompts that do not connect to the stated context.
5. Question-list slides should use a full-width heading area, then a three-column workspace where useful:
   - Left panel: context.
   - Centre panel: the question cards.
   - Right panel: note/footer guidance.
6. Image-and-content slides should place explanatory content and the image side by side where possible.
   - If a footer or reminder is needed, place it in the image column or unused side space rather than below the whole slide.
   - Use the template image path format `Assets/Images/...` from template HTML files.
7. Keyword slides should work as a keyword bank:
   - Use custom keyword cards rather than default Bootstrap cards.
   - Include icons, strong term labels, concise definitions, and a short footer prompt.
   - For animated keyword slides, clicking a card should open a centred focus card, dim the background, and close when the user clicks outside, clicks the focus card, or presses `Escape`.
   - The pop-out card should match the parent card theme where possible.
8. Keep presentation styling polished but not overdecorated:
   - Prefer clear panels, restrained shadows, 8px border radii, and the established teal/orange/purple/green accents.
   - Avoid large filled banners unless they are intentionally part of the design.
   - Keep layout components reusable and class names descriptive.

**Third level**

**Understanding the world through computational thinking**

***Experiences and Outcomes***

I can describe  different fundamental information processes and how they communicate and can identify their use in solving different problems. **TCH 3-13a**

I am developing my understanding of information and can use an information model to describe particular aspects of a real world system. **TCH 3-13b**

***Benchmarks***

* Recognises and describes information systems with communicating processes  which occur in the world around me
* Explains the difference between parallel processes and those that communicate  with each other
* Demonstrates an understanding of the basic principles of compression and encryption  of information
* Identifies a set of characteristics describing a collection of related items that enable  each item to be individually identified
* Identifies the use of common algorithms such as sorting and searching as part  of larger processes.

**Understanding and analysing computing technology**

***Experiences and Outcomes***

I understand language constructs for representing structured information. **TCH 3-14a**

I can describe the structure and operation of computing systems which  have multiple software and hardware levels that interact with each other. **TCH 3-14b**

***Benchmarks***

* Understands that the same information could be represented in more than one representational system
* Understands that different information could be represented in exactly the same representation
* Demonstrates an understanding of structured information in programs, databases or webpages
* Describes the effect of mark-up language on the appearance of a webpage, and understand that this may be different on different devices
* Demonstrates an understanding of the von Neumann architecture and how machine code instructions are stored and executed within a computer system
* Reads and explains code extracts including those with variables and data structures
* Demonstrate an understanding of how computers communicate and share information  over networks including the concepts of sender, receiver, address and packets.
* Understands simple compression and encryption techniques used in computing technology

**Designing, building and testing computing solutions**

***Experiences and Outcomes***

I can select appropriate development tools to design, build, evaluate and refine computing solutions based on requirements. **TCH 3-15a**

***Benchmarks***

* Designs and builds a program using a visual language combining constructs  and using multiple variables.
* Represents and manipulates structured information in programs, or databases for example, works with a list data structure in a visual language, or a flat file database.
* Interprets a problem statement, and identifies processes and information to create a physical computing and/or software solution.
* Can find and correct errors in program logic.
* Groups related instructions into named subprograms (in a visual language). 
* Writes code in which there is communication between parallel processes (in a visual language). 
* Writes code which receives and responds to real world inputs (in a visual language).
* Designs and builds web pages using appropriate mark-up languages.



