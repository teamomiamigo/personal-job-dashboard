---
name: Daily Task Tracker System
overview: Create a comprehensive day-by-day task file that breaks down every single day of the 5-week project plan with specific tasks, time allocations, and check-in status aligned with the user's daily work schedule.
todos:
  - id: create-docs-dir
    content: Create docs/ directory structure
    status: pending
  - id: create-daily-tasks-file
    content: Create docs/DAILY_TASKS.md with complete day-by-day breakdown for all 38 days, including specific tasks, time blocks, checkboxes, and notes sections
    status: pending
    dependencies:
      - create-docs-dir
  - id: create-project-plan
    content: Create docs/PROJECT_PLAN.md with project scope, core features, and timeline overview
    status: pending
    dependencies:
      - create-docs-dir
  - id: create-architecture
    content: Create docs/ARCHITECTURE.md with AWS and Supabase architecture details
    status: pending
    dependencies:
      - create-docs-dir
  - id: create-features
    content: Create docs/FEATURES.md with detailed MVP feature specifications
    status: pending
    dependencies:
      - create-docs-dir
  - id: create-data-model
    content: Create docs/DATA_MODEL.md with all 9 entities and relationships
    status: pending
    dependencies:
      - create-docs-dir
  - id: create-tech-stack
    content: Create docs/TECH_STACK.md with technology decisions and rationale
    status: pending
    dependencies:
      - create-docs-dir
  - id: update-readme
    content: Update README.md to reference the daily tasks file and documentation structure
    status: pending
    dependencies:
      - create-daily-tasks-file
---

# Daily Task Tr

acker System Plan

## Primary Goal

Create `docs/DAILY_TASKS.md` - a single, comprehensive file that contains every single day's work broken down with specific tasks, time blocks, and checkboxes for tracking progress.

## File Structure: `docs/DAILY_TASKS.md`

### Header Section

- Project overview and timeline (5 weeks, ~38 days)

- Progress tracker (overall completion percentage)
- Quick navigation to each week

### Week-by-Week Breakdown

Each week will have:

1. **Week Header**: Week number, dates, goal, and progress bar

2. **Daily Tasks**: Every single day broken down with:

- Date (specific day)
- Day of week
- Time allocation (45-min blocks for weekdays, 2hr blocks for weekends)
- Specific tasks with checkboxes

- Expected deliverables
- Notes section for blockers/learnings

### Detailed Day Breakdown

**Weekday Format (Mon-Fri):**

```javascript
## Day X: [Date] - [Day Name]
**Time Block:** 45 minutes
**Focus:** [Main task]

### Tasks
- [ ] Task 1: [Specific action]
- [ ] Task 2: [Specific action]
- [ ] Task 3: [Specific action]

### Deliverables
- [Expected outcome]

### Notes
[Space for blockers, learnings, adjustments]
```



**Weekend Format:**

```javascript
## Day X: [Date] - [Day Name]
**Time Block 1:** 2 hours
**Time Block 2:** 2 hours
**Focus:** [Main weekend goal]

### Block 1 Tasks (2hr)
- [ ] Task 1
- [ ] Task 2

### Block 2 Tasks (2hr)
- [ ] Task 3
- [ ] Task 4

### Weekend Deliverables
- [Expected outcomes]

### Notes
[Space for notes]
```



## Complete Day-by-Day Breakdown

### Week 1: Architecture + Skeleton (Jan 6-12)

- **Day 1 (Jan 6)**: Define MVP features - write down and freeze the 4 core features

- **Day 2 (Jan 7)**: Decide stack - React (Vite/Next), AWS Lambda + API Gateway, Supabase vs DynamoDB

- **Day 3 (Jan 8)**: Data model - design all 9 entities (company, role/posting, application, contact, interaction, interviews, tasks, documents, status history)
- **Day 4 (Jan 9)**: Repo setup + basic frontend layout

- **Day 5 (Jan 10)**: AWS account setup + IAM sanity

- **Day 6 (Jan 11 - Weekend)**: Build barebones UI (2hr) + Create first Lambda (2hr)

- **Day 7 (Jan 12 - Weekend)**: Deploy hello-world API + verify "this is real" checkpoint

### Week 2: Backend Core (Jan 13-19)

- **Day 8-12 (Jan 13-17)**: Create Lambda functions (Create, Get all, Update status, Delete)
- **Day 13 (Jan 18 - Weekend)**: Hook API Gateway to Lambdas + DynamoDB table live

- **Day 14 (Jan 19 - Weekend)**: Wire frontend → backend + Test flows manually + Fix IAM issues

### Week 3: Auth + Real Usage (Jan 20-26)

- **Day 15-19 (Jan 20-24)**: Cognito setup, Login/logout, Lock data per user, Error handling
- **Day 20 (Jan 25 - Weekend)**: Start using the app + Add missing fields

- **Day 21 (Jan 26 - Weekend)**: Kill unnecessary features + Dogfood the app

### Week 4: UX + Polish (Jan 27-Feb 2)

- **Day 22-26 (Jan 27-31)**: Improve layout, Status colors, Sorting/filtering, Empty states

- **Day 27 (Feb 1 - Weekend)**: Responsive tweaks + Performance fixes

- **Day 28 (Feb 2 - Weekend)**: Small delight touches (icons, spacing) - no animation rabbit holes

### Week 5: Deployment + Narrative (Feb 3-12)

- **Day 29-33 (Feb 3-7)**: Deploy frontend (S3 + CloudFront or Vercel), Environment config, Final bug fixes

- **Day 34 (Feb 8 - Weekend)**: Write README (Problem, Why built, Architecture diagram, AWS services)

- **Day 35 (Feb 9 - Weekend)**: Prep interview talking points (Tradeoffs, What you'd do next, What broke)
- **Day 36-38 (Feb 10-12)**: Final polish, Live URL, GitHub repo, Confidence check

## Supporting Documentation Files

1. **`docs/PROJECT_PLAN.md`** - High-level overview, scope, core features

2. **`docs/ARCHITECTURE.md`** - Technical architecture, AWS services, Supabase setup

3. **`docs/FEATURES.md`** - Detailed MVP feature specs (Job tracker, Follow-up system, Dashboard view, Filtering)

4. **`docs/DATA_MODEL.md`** - All 9 entities with full field specifications and relationships

5. **`docs/TECH_STACK.md`** - Technology decisions and rationale

## Key Features

- **Every single day** has specific tasks (38 days total)
- **Checkboxes** for each task to track completion

- **Time allocations** clearly marked (45-min weekdays, 2hr weekend blocks)

- **Progress tracking** at week and overall project level
- **Notes sections** for daily learnings and blockers

- **Weekend checkpoints** with specific deliverables
- **End-of-week goals** clearly stated

## Implementation Priority

1. Create `docs/DAILY_TASKS.md` with complete day-by-day breakdown (PRIMARY FOCUS)

2. Create supporting documentation files for reference