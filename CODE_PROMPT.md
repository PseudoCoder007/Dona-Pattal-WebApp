# Code Writing Prompt: GSD + Ponytail Workflow

## Before Writing Any Code

### 1. Load Skills
```
skill name="gsd-discuss-phase"
skill name="ponytail"
```

### 2. Clarify Requirements (GSD Discuss)
- What problem are we solving?
- Who is the user?
- What are acceptance criteria?
- What's the simplest thing that could work?

### 3. Apply Ponytail Filter
- **YAGNI**: Do we actually need this?
- **Stdlib first**: Can native APIs handle it?
- **One line > fifty**: What's the minimal implementation?
- **Delete > add**: What can we remove instead?

## Design → Code Checklist

| Phase | GSD Action | Ponytail Lens |
|-------|------------|---------------|
| **Explore** | `gsd-explore` / `gsd-map-codebase` | What existing code solves this? |
| **Spec** | `gsd-spec-phase` → SPEC.md | Ambiguity score < 3? |
| **UI** | `gsd-ui-phase` → UI-SPEC.md | Native HTML/CSS over frameworks? |
| **AI** | `gsd-ai-integration-phase` → AI-SPEC.md | Deterministic over probabilistic? |
| **Plan** | `gsd-plan-phase` → PLAN.md | Tasks splittable to 1-file changes? |
| **Review** | `gsd-plan-review-convergence` | Any task > 2hrs? Split it. |
| **Execute** | `gsd-execute-phase` | Parallel waves, 1 task = 1 commit |
| **Verify** | `gsd-verify-work` (UAT) | Real usage, not unit test theater |
| **Ship** | `gsd-ship` → PR | `ponytail-review` on diff |

## Minimal Prompt Template

> **Task**: [One-sentence description]
>
> **Constraints**:
> - Use only stdlib / existing deps
> - Single file change preferred
> - No new abstractions unless 3+ uses exist
> - Delete dead code in same PR
>
> **Acceptance**: [Measurable, testable criteria]
>
> **Ponytail intensity**: [lite | full | ultra]

## Red Flags (Stop and Reconsider)
- Creating new interface/abstract class
- Adding dependency for < 50 lines of utility
- "Flexible" / "extensible" / "future-proof" in spec
- More than 3 files for a single feature
- Tests requiring mocks for internal logic

## Verification Before Completion
```bash
# Run these before claiming done
skill name="verification-before-completion"
skill name="gsd-verify-work"
# + project-specific: lint, typecheck, build
```