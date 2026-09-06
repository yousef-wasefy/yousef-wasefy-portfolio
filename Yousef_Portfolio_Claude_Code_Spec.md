# Yousef Alwasefy Portfolio — Full Build Specification for Claude Code

## 1. Project Goal

Build a **simple, clean, professional personal portfolio website** for **Yousef Alwasefy**, a Computer Science student and aspiring **Junior .NET Backend Developer**.

This portfolio is being created for a DEPI portfolio-building assignment, but it should also be good enough to keep using later for:
- CV applications
- LinkedIn
- GitHub
- Internships
- Junior backend roles
- Freelance/profile sharing

The result should feel like a real student/developer portfolio, **not an AI-generated landing page**.

The design direction should be:
- Simple
- Light
- Clean
- Professional
- Easy to read
- Easy to navigate
- Backend/developer-focused
- Natural and believable for a CS student

The user liked the simplicity of **Matt Farley’s portfolio**, but the website should **not copy it**. Use only the general idea of simplicity, whitespace, readable typography, and clear sections.

---

## 2. Important Design Philosophy

Avoid anything that makes the portfolio look over-designed, artificial, or AI-generated.

### Do:
- Use lots of clean whitespace
- Keep the layout simple
- Use a small color palette
- Use readable typography
- Make projects visually important
- Keep content concise
- Keep the website fully responsive
- Use subtle hover effects
- Use very light transitions if needed
- Make the site feel like it was carefully built by a junior developer

### Do NOT:
- Use gradients
- Use glassmorphism
- Use neon colors
- Use glowing effects
- Use particles
- Use animated backgrounds
- Use fake AI illustrations
- Use rotating technology logos
- Use a typing animation
- Use 3D effects
- Use a glowing mouse cursor
- Use huge shadows
- Use progress bars like "C# 90%"
- Add unnecessary sections
- Add fake testimonials
- Add fake achievements
- Add a footer section
- Add technologies or skills that are not listed below

---

# 3. Technology Stack

Use only:

- HTML5
- CSS3
- Vanilla JavaScript

Do not use:
- React
- Vue
- Angular
- Bootstrap
- Tailwind
- Any JS framework

The website should be lightweight and easy for the owner to understand and edit later.

---

# 4. Suggested Project Structure

```text
portfolio/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── assets/
    ├── images/
    └── files/
```

The `assets/images/` folder can stay empty initially if no real image is used.

Do not add a fake or AI-generated profile picture.

---

# 5. Personal Identity

## Name

**Yousef Alwasefy**

## Professional Title

**Junior .NET Backend Developer**

This title should be the main identity throughout the portfolio.

Do not replace it with:
- Full-Stack Developer
- Software Engineer
- AI Engineer
- Senior Developer
- .NET Expert

The portfolio should remain focused on backend development.

---

# 6. Required Portfolio Sections

Use the following sections and keep this order:

1. Cover / Hero
2. About
3. USP
4. Education
5. Skills
6. Work Experience
7. Offered Services
8. Projects
9. Call to Action & Contact Information
10. Thank You

### Do not include:
- Achievements
- Testimonials
- Footer

These were intentionally removed.

---

# 7. Navigation

Use a simple sticky navbar.

### Left:
**Yousef Alwasefy**

### Right navigation links:

- About
- Skills
- Experience
- Projects
- Contact

Do not put every single section in the navbar because it will make it crowded.

On mobile:
- Use a simple hamburger menu
- Keep it easy to open/close
- Close the menu after clicking a navigation link

Use smooth scrolling.

---

# 8. Visual System

## Color Palette

Use this as the main design system:

```css
--background: #F8FAFC;
--surface: #FFFFFF;
--text-primary: #1F2937;
--text-secondary: #6B7280;
--accent: #2563EB;
--border: #E5E7EB;
```

Small adjustments are acceptable if they improve contrast, but keep the palette visually close to this.

### Design rules:
- Light theme only for now
- No gradients
- No dramatic shadows
- Use thin borders
- Use the accent blue only where useful
- Keep the page visually calm

---

# 9. Typography

Preferred font:

**Inter**

Use a clean fallback stack if needed.

Suggested sizing:

- Hero name: 48–56px desktop
- Hero title: 24–30px
- Section heading: 28–32px
- Card/service heading: ~20px
- Body text: 16–18px
- Small/meta text: 14–16px

Scale typography properly for mobile.

Avoid using too many font weights.

---

# 10. Buttons

Use two styles.

## Primary Button

Example:
**View Projects**

Style:
- Blue background
- White text
- Around 8px border radius
- Simple hover state
- No glow

## Secondary Button

Example:
**Contact Me**

Style:
- Transparent or white background
- Blue border
- Blue text
- Around 8px border radius

Do not use highly rounded pill buttons.

---

# 11. Cards

Cards should be used carefully.

Recommended for:
- Offered Services
- Possibly Work Experience

Card style:
- White background
- Thin gray border
- Very subtle shadow or no shadow
- Border radius around 8–12px
- Comfortable padding

Do not turn every section into cards.

---

# 12. Section Backgrounds

Use very subtle alternation between white and the light page background.

Suggested:

- Hero → White
- About → #F8FAFC
- Education → White
- Skills → #F8FAFC
- Experience → White
- Services → #F8FAFC
- Projects → White
- Contact → #F8FAFC
- Thank You → White

This alternation should be subtle.

---

# 13. Section 1 — Cover / Hero

The Hero should be visually simple.

No profile picture is required initially.

Do not use a fake illustration.

The whitespace itself should help the page look professional.

## Content

### Name
**Yousef Alwasefy**

### Title
**Junior .NET Backend Developer**

### Short Introduction

> Computer Science student at Ain Shams University focused on backend development using C#, ASP.NET Core, REST APIs, and databases.

### Buttons

1. **View Projects**
   - Scrolls to Projects

2. **Contact Me**
   - Scrolls to Contact

Suggested hero height:
- Around 80–90vh on desktop
- Smaller and natural on mobile

Do not force full-screen height if it hurts readability.

---

# 14. Section 2 — About

Keep this section text-focused.

Do not put the whole About section inside a large card.

Use a readable maximum width.

## Content

> I’m a Computer Science student at Ain Shams University with a growing focus on backend development using .NET. I’ve been building practical projects with C#, ASP.NET Core, REST APIs, Entity Framework Core, and PostgreSQL, including an Internship Management System and a Library Management System.
>
> I enjoy understanding how backend systems work, organizing application logic, working with databases, and improving my problem-solving skills. I’m currently focused on strengthening my fundamentals, building better projects, and gaining real-world experience as a backend developer.

Keep the writing natural.

Do not rewrite it into generic marketing language such as:
- "passionate developer"
- "innovative solutions"
- "cutting-edge technologies"
- "highly scalable enterprise systems"

---

# 15. Section 3 — USP

The USP should be visually highlighted but still simple.

It can be:
- A small bordered block
- A subtle accent area
- A centered sentence
- A simple quote-style section

Do not make it look like an advertisement.

## Exact USP

> **I develop practical .NET backend applications with clean APIs, organized code, and reliable database integration.**

Keep this as one clear sentence.

---

# 16. Section 4 — Education

A small vertical timeline is acceptable, but keep it lightweight.

Do not create a complicated animated timeline.

## Education Item 1

### Institution
**Ain Shams University**

### Degree
**Bachelor’s Degree in Computer Science**

### Date
**2024 – Present**

### Description

> Building a strong foundation in programming, object-oriented programming, data structures, and problem solving.

---

## Education Item 2

### Organization
**ConnectX**

### Program
**AI Web Application Summer Training**

### Date
**2026**

### Description

> Completed a summer training program focused on AI web application concepts and practical implementation.

**A small View Certificate button.**

This training/certificate belongs in Education, not Achievements.

---

# 17. Section 5 — Skills

Do not use skill percentage bars.

Use grouped skills and simple tags/chips.

## Backend Development

- C#
- ASP.NET Core
- RESTful APIs
- Entity Framework Core

## Databases

- PostgreSQL
- SQL
- Database Design
- CRUD Operations

## Programming Fundamentals

- Object-Oriented Programming (OOP)
- Data Structures
- Problem Solving
- Debugging

## Tools

- Git
- GitHub
- Swagger
- Postman
- Visual Studio
- VS Code

## Other

- C++

C++ is a secondary skill, not the main focus.

Do not visually give it the same importance as C# / .NET.

---

# 18. Section 6 — Work Experience

The DEPI program should be placed here as a training experience.

It must clearly appear as **Trainee**, not as a full-time job.

## Organization

**Digital Egypt Pioneers Initiative (DEPI)**

## Role

**Web Development Using .NET Trainee**

## Date

**07/2026 – Present**

## Description

> Training focused on web development using C#, .NET, ASP.NET Core, databases, frontend technologies, and practical software development concepts.

Keep this concise.

Do not invent company-style responsibilities or fake work experience.

---

# 19. Section 7 — Offered Services

Use four simple service cards.

## Service 1 — Backend API Development

> Building RESTful APIs using ASP.NET Core for web applications and backend systems.

## Service 2 — Database Integration

> Connecting applications with relational databases and handling CRUD operations using Entity Framework Core and SQL.

## Service 3 — Backend Logic & Validation

> Implementing business logic, request validation, and organizing backend code in a clear and maintainable way.

## Service 4 — API Testing & Debugging

> Testing endpoints using Swagger and Postman, debugging issues, and improving application reliability.

Use a 2-column desktop grid if it looks good.

Stack vertically on small screens.

Icons are optional.

If icons are used:
- Keep them minimal
- Use one consistent icon style
- Do not make the cards visually busy

---

# 20. Section 8 — Projects

This is the most important section of the portfolio.

The two projects should have more visual importance than the service cards.

Do not reduce them to tiny cards.

Each project should have:
- Project title
- Type
- Short description
- Technology tags
- Key features
- My Role / contribution
- GitHub button

There are only two projects intentionally.

Do not add fake projects.

---

## Project 1 — Internship Management System

### Type
**Backend Web API**

### Description

> A backend system designed to manage internships, companies, users, and internship applications. The project provides APIs for handling the main internship workflow, including authentication, internship management, and application operations.

### Technologies

- C#
- ASP.NET Core Web API
- Entity Framework Core
- PostgreSQL
- JWT

### Key Features

- User authentication and authorization using JWT
- Internship creation and management
- Internship application workflow
- Company and user account management
- Application validation and business logic
- RESTful API endpoints
- Database integration using Entity Framework Core

### My Role

> I developed and improved the backend logic, handled API validation, worked with database operations, and debugged issues related to authentication, applications, and internship visibility.

### GitHub

https://github.com/yousef-wasefy/Internship_Management_System

Use a button such as:

**View on GitHub**

Open external links in a new tab safely.

---

## Project 2 — Library Management System

### Type
**C++ Console Application**

### Description

> A console-based library management system built with C++ to manage library items, members, borrowing, returns, and loan records. The project applies object-oriented programming concepts to organize different item and member types while keeping the main library operations separated into reusable components.

### Technologies / Concepts

- C++
- OOP
- Inheritance
- Polymorphism
- STL
- File Handling

### Key Features

- Manage library items including books and magazines
- Add, remove, and search for library items
- Manage student and staff members
- Borrow and return library items
- Track active and completed loan records
- Handle overdue fees
- Track available and total item copies
- Save and load data using files
- Separate application logic using service and repository classes

### My Role

> I designed the application using object-oriented programming concepts, created different item and member types using inheritance, implemented borrowing and loan management logic, and added file-based persistence to keep the system data between runs.

### GitHub

https://github.com/yousef-wasefy/Library_Management_System

Use a button such as:

**View on GitHub**

---

# 21. Project Layout Direction

Projects should be visually large and easy to scan.

Possible layout:

```text
Project Name
Type

Description

[Tech] [Tech] [Tech]

Key Features
• ...
• ...
• ...

My Role
...

[ View on GitHub ]
```

The two projects may use slightly alternating layouts to reduce repetition, but do not make the design complicated.

No project screenshots are required initially.

Do not use fake screenshots.

---

# 22. Section 9 — Call to Action & Contact Information

## Heading

**Let’s Connect**

## Text

> I’m currently looking to gain more practical experience, work on backend projects, and grow as a .NET developer.

## Contact Details

### Email
**yousefalwasefy@gmail.com**

Use:
`mailto:yousefalwasefy@gmail.com`

### LinkedIn
**www.linkedin.com/in/yousef-alwasefy**

Actual clickable link:
https://www.linkedin.com/in/yousef-alwasefy

### GitHub
https://github.com/yousef-wasefy

### CTA Button

**Get in Touch**

The main Get in Touch button can open the email link.

Use small simple icons for:
- Email
- LinkedIn
- GitHub

Icons should not dominate the section.

---

# 23. Section 10 — Thank You

This should be a real final section because the portfolio structure follows the training slides.

Do NOT replace it with a footer.

## Content

### Heading

**Thank You**

### Text

> Thank you for taking the time to view my portfolio.

### Name

**Yousef Alwasefy**

### Title

**Junior .NET Backend Developer**

Keep this section minimal and spacious.

---

# 24. Responsive Design

The website must work well on:
- Desktop
- Laptop
- Tablet
- Mobile

Important responsive behavior:

### Navbar
- Desktop → normal links
- Mobile → hamburger menu

### Hero
- Stack naturally on small screens
- Buttons may stack if needed

### Skills
- Tags should wrap naturally

### Services
- Desktop → 2 columns
- Mobile → 1 column

### Projects
- Full-width readable layout
- No horizontal scrolling

### Typography
- Reduce large sizes on mobile
- Preserve hierarchy

### Spacing
- Reduce vertical padding on smaller screens
- Keep enough breathing room

---

# 25. Accessibility & Quality

Use semantic HTML where practical:
- `header`
- `nav`
- `main`
- `section`
- `article`
- headings in proper order

Also:
- Add visible keyboard focus states
- Use accessible button/link contrast
- Add `aria-label` where icons need explanation
- Respect reduced motion where possible
- External links should use appropriate `rel` attributes
- Ensure no broken links
- Ensure no horizontal overflow

---

# 26. JavaScript Requirements

Keep JavaScript minimal.

Use it only for things such as:
- Mobile navbar toggle
- Closing mobile menu after navigation
- Optional subtle scroll reveal
- Optional active navigation state

Do not use JS just to create flashy effects.

The site should remain understandable even without complex JavaScript.

---

# 27. Animation Rules

Allowed:
- Smooth scrolling
- Button hover
- Link hover
- Small card hover
- Very subtle fade/reveal on scroll

Not allowed:
- Typing effect
- Parallax-heavy effects
- Floating objects
- Animated particles
- Technology logo carousels
- Cursor effects
- 3D cards
- Automatic sliders

If using scroll-reveal, keep it subtle and respect `prefers-reduced-motion`.

---

# 28. Content Tone

The writing should feel:
- Natural
- Student-level
- Honest
- Professional
- Simple

Avoid buzzwords like:
- Cutting-edge
- World-class
- Highly scalable
- Innovative digital experiences
- Expert
- Enterprise-grade
- Passionate technology enthusiast

Do not make Yousef sound more experienced than he is.

---

# 29. Things Intentionally Not Included

Do not add these unless explicitly requested later:

- Testimonials
- Achievements
- Footer
- Blog
- Dark mode
- Contact form backend
- Profile photo
- Project screenshots
- Download CV button
- AI-related branding
- Freelance pricing
- Client logos
- Fake statistics
- Number counters
- Skill percentages

---

# 30. Repository / Project Notes for Later

The Library Management System GitHub repository currently works as a project reference, but later it may need:
- README improvement
- Repository cleanup
- Removal of unnecessary generated files such as IDE/build artifacts

This cleanup is **not required for the first portfolio website implementation**.

Focus first on building the portfolio.

---

# 31. Recommended Implementation Phases

## Phase 1 — Base Layout
Build:
- Global CSS variables
- Typography
- Responsive container
- Navbar
- Hero

Check:
- Desktop
- Mobile
- Spacing
- Button styles

---

## Phase 2 — Personal Sections
Build:
- About Me
- USP
- Education

Keep them simple and readable.

---

## Phase 3 — Technical Sections
Build:
- Skills
- Work Experience
- Offered Services

Use tags and simple cards.

---

## Phase 4 — Projects
Build:
- Internship Management System
- Library Management System
- GitHub buttons

Give this section strong visual priority.

---

## Phase 5 — Ending
Build:
- Contact / CTA
- Thank You

---

## Phase 6 — Polish
Review:
- Responsive behavior
- Mobile navbar
- Alignment
- Section spacing
- Typography
- Hover effects
- Smooth scrolling
- External links
- Accessibility
- No overflow
- No broken links

---

# 32. Suggested Wireframe

```text
┌─────────────────────────────────────────────────────┐
│ Yousef Alwasefy       About Skills Experience ... │
└─────────────────────────────────────────────────────┘


                    HERO

                Yousef Alwasefy

          Junior .NET Backend Developer

        Short introduction about backend

        [ View Projects ] [ Contact Me ]


                    ABOUT ME

           Short readable About text

        ┌────────────────────────────┐
        │ USP sentence               │
        └────────────────────────────┘


                    EDUCATION

        Ain Shams University
        2024 – Present

        ConnectX
        AI Web Application Summer Training
        2026


                     SKILLS

        Backend
        [C#] [ASP.NET Core] [REST APIs] [...]

        Databases
        [PostgreSQL] [SQL] [...]

        Fundamentals
        [OOP] [Data Structures] [...]

        Tools
        [Git] [GitHub] [Swagger] [...]

        Other
        [C++]


                 WORK EXPERIENCE

        ┌────────────────────────────┐
        │ DEPI                       │
        │ .NET Web Development       │
        │ Trainee                    │
        │ 07/2026 – Present          │
        └────────────────────────────┘


                OFFERED SERVICES

        ┌────────────────┐ ┌────────────────┐
        │ Backend API    │ │ Database       │
        │ Development    │ │ Integration    │
        └────────────────┘ └────────────────┘

        ┌────────────────┐ ┌────────────────┐
        │ Logic &        │ │ Testing &      │
        │ Validation     │ │ Debugging      │
        └────────────────┘ └────────────────┘


                    PROJECTS

        Internship Management System
        Backend Web API

        Description

        [C#] [ASP.NET] [EF Core] [JWT]

        Features
        My Role

        [ View on GitHub ]


        ───────────────────────────────


        Library Management System
        C++ Console Application

        Description

        [C++] [OOP] [STL] [File Handling]

        Features
        My Role

        [ View on GitHub ]


                    CONTACT

                 Let's Connect

        Email
        LinkedIn
        GitHub

                [ Get in Touch ]


                   THANK YOU

      Thank you for taking the time
           to view my portfolio.

               Yousef Alwasefy
       Junior .NET Backend Developer
```

---

# 33. Final Acceptance Criteria

The first version is considered successful when:

- [ ] All required sections exist
- [ ] Sections appear in the specified order
- [ ] No Testimonials section exists
- [ ] No Achievements section exists
- [ ] No footer is added
- [ ] Hero is simple and professional
- [ ] About content matches the provided copy
- [ ] USP matches the provided sentence
- [ ] Education includes Ain Shams University
- [ ] Education includes ConnectX AI Web Application Summer Training
- [ ] Skills are grouped correctly
- [ ] DEPI appears as training experience
- [ ] Services contain exactly the four agreed areas
- [ ] Exactly two projects are shown
- [ ] Both project GitHub links work
- [ ] Contact details are correct
- [ ] Thank You is a dedicated final section
- [ ] Website is responsive
- [ ] Mobile navbar works
- [ ] No horizontal overflow
- [ ] No fake images/content
- [ ] No skill percentage bars
- [ ] No excessive animation
- [ ] No gradients
- [ ] Visual design stays simple and light
- [ ] Code is clean enough for a CS student to understand
- [ ] HTML, CSS, and JS are separated into their own files

---

# 34. Instruction to Claude Code

Please build the first complete version of this portfolio based on the specification above.

Priorities:

1. Correct content
2. Simple professional appearance
3. Clear structure
4. Responsive behavior
5. Clean understandable code
6. No unnecessary complexity

Do not redesign the project into a flashy portfolio.

Do not add new sections, fake content, technologies, images, achievements, or testimonials without explicit approval.

After building the first version, summarize:
- Files created
- Main design choices
- Responsive behavior implemented
- Any assumptions made

The goal is to create a portfolio that looks like a thoughtful and polished student developer website, not an AI-generated template.
