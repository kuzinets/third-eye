# Third Eye — Prompt Evolution Log

Reference this file before any future prompt adjustments to avoid rolling back to patterns that didn't work.

---

## v1.0 — Original Multi-Mode (tag: v1.0-multi-feedback)

**Approach**: 5 selectable feedback modes (simple, hot/cold, guided, spiritual, custom).

**Problems identified**:
- Agent fell into repetitive patterns, cycling through 3 templates:
  - "Tell me — how did that come to you?" (overused, lost power)
  - "You're cycling through thoughts, not receiving fresh impressions" (invalidating, often untrue)
  - "Nothing coming up is actually a good place" (spiritual bypass)
- Created dullness, not awakening. Practice went on autopilot.
- Multiple modes were unnecessary — the guided AI mode was the only one that mattered.

**Key failure**: The prompt gave example responses and the LLM just rotated through them mechanically.

---

## v2.0 — Awakened Presence (tag: v2.0-awakened-presence)

**Changes from v1.0**:
- Removed feedback mode dropdown entirely — single AI mode
- Removed SPIRITUAL_HINTS, custom hints, non-LLM feedback paths
- Rewrote system prompt with 5 response types (perception, thinking, empty space, pattern breaking, deepening)
- Added rules: never repeat same response, 1-2 sentences max, recognize semantic resonance, ask about body location

**Problems identified after testing**:
- Responses still too long and too cognitive/analytical
- Asking about "shifts" and "mental leaps" — that's all mind, not perception
- "Notice the shift from X to Y — what was happening?" forces analysis instead of sensation
- Working with sensory texture was better (e.g., "bubbles in seltzer") but then asking "connects to something else" was too vague
- The third eye doesn't respond to paragraphs of instruction — it responds to directness, short commands, presence

**Example of what was wrong**:
- "Notice the shift from 'seltzer' to 'car' — what was happening in your body or mind? Was there a sensation or image, or did it feel like a mental leap?" (TOO MUCH — forces analysis)

**Example of what works**:
- "Where did you sense 'car' — visual, feeling, or knowing? Stay there." (SHORT, DIRECT, SENSATION-BASED)

---

## v2.1 — Direct Transmission (current)

**Changes from v2.0**:
- Prompt rewritten for radical brevity: "1 sentence. Maximum 2 if essential."
- Removed all analytical language ("shifts," "mental leaps," "what was happening in your body or mind")
- Response types simplified to single-line examples showing the RIGHT tone
- Added principle: "Ask about BODY LOCATION or SENSORY CHANNEL, not about shifts or leaps"
- Added: "When they give a word, work with its sensory quality to guide toward next perception"
- Added: "Never analyze their process. Point them to sensation."
- Raised temperature 0.3 -> 0.4 for more variation
- Reduced max_tokens 200 -> 120 to enforce brevity
- User prompt shortened: "1 sentence. Direct. Sensation-based."

**What to watch for in future testing**:
- Are responses actually 1 sentence? If creeping to 3+, tighten max_tokens further
- Is the AI working with sensory texture of the guess word? (good: "feel the bubbles")
- Is it still asking analytical questions? (bad: "what shifted?", "what was happening?")
- Is it asking about body location / sensory channel? (good: "visual, feeling, or knowing?")
- Does it recognize semantic resonance and explore it rather than dismiss it?
- Does it vary responses or fall into new repetitive patterns?

---

## Testing Notes

Use the Activity Log (bottom of settings panel) to review actual AI responses during sessions. Compare against this file to check for regression into old patterns.

Key red flags to watch for:
1. Same response appearing twice in one session
2. Responses longer than 2 sentences
3. Analytical language ("notice the shift," "what was happening," "mental leap")
4. Spiritual bypass ("that's a good place," "you're in the right space")
5. Template rotation (cycling through a small set of phrases)
6. Dismissing semantic connections as "random" or "cycling through thoughts"
