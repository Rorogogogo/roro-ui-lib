# Agent Wave Loader

An AI "thinking" indicator. A small signal traces a parabolic arc across a row of
agent marks — Claude Code, Codex, Gemini, DeepSeek, Kimi — briefly landing on
each one, bouncing it, then exiting upward after the last mark and looping.

Built for the moment between "user hit send" and "first token arrives", where a
generic spinner says nothing about what is actually happening.

**[Open `preview.html`](preview.html)** in a browser for a live demo with speed
and light/dark controls. No server or install needed.

## Setup

Paste [`prompt.md`](prompt.md) into your coding agent and it will handle the
install. Or do it by hand:

1. Copy this folder into your project (e.g. `src/components/ui/agent-wave-loader`).
2. Make sure your bundler can import CSS from a `.tsx` file — Vite, Next.js,
   Remix, and Create React App all do this out of the box.
3. Import and render:

```tsx
import { AgentWaveLoader } from "@/components/ui/agent-wave-loader";

export function Composer({ isThinking }: { isThinking: boolean }) {
  if (!isThinking) return null;
  return <AgentWaveLoader label="Routing to the best agent…" />;
}
```

The component imports its own CSS, so there is nothing extra to register.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `"AI is working…"` | Visible text under the marks. Also the accessible name — screen readers announce it via `role="status"`. |
| `className` | `string` | — | Appended to the root element's class list, for layout or overrides. |

Both are optional:

```tsx
<AgentWaveLoader />
<AgentWaveLoader label="Compiling your workspace…" />
<AgentWaveLoader className="my-6" label="Thinking…" />
```

## Customisation

The root `.agent-wave-loader` class exposes CSS custom properties. Override them
in your own stylesheet rather than editing the component:

```css
.agent-wave-loader {
  --agent-wave-duration: 1.6s;          /* one full pass across all marks */
  --agent-wave-muted: #737373;          /* label + idle mark colour */
  --agent-wave-shadow: rgb(0 0 0 / .18);/* drop shadow under each mark */
}
```

Scoped to one instance:

```tsx
<AgentWaveLoader className="slow-loader" />
```

```css
.slow-loader { --agent-wave-duration: 2.4s; }
```

Per-mark brand colours are set with `:nth-of-type()` rules in
`agent-wave-loader.css` — change them there if you want a monochrome row.

To swap which agents appear, edit the `MARKS` array at the top of
`agent-wave-loader.tsx`. `agent-logos.tsx` also exports `ClaudeLogo`,
`AntigravityLogo`, and `UnknownAgentLogo`, which the loader doesn't use by
default. The animation timing is driven by each mark's index, so adding or
removing entries stays in sync automatically.

## Accessibility

- The root element carries `role="status"` and `aria-label={label}`, so the
  loading state is announced without stealing focus.
- The animated track is `aria-hidden` — screen readers get the label, not the
  decoration.
- Under `prefers-reduced-motion: reduce`, the travelling signal is hidden and the
  marks stop bouncing, leaving a static, legible row.

## Dependencies

The five marks used by the loader are inline SVG — no dependency.

`agent-logos.tsx` also exports `UnknownAgentLogo`, which is the one thing in this
folder that imports `lucide-react`. If you don't want that dependency, delete
that export and the `import { HelpCircle }` line at the top of the file; nothing
else references it.

## Files

| File | Purpose |
| --- | --- |
| `agent-wave-loader.tsx` | Component and accessible loading label. |
| `agent-wave-loader.css` | Motion, layout, shadows, dark mode, reduced motion. |
| `agent-logos.tsx` | Inline SVG agent marks. |
| `utils.ts` | `cn()` class-name helper used by the logos. |
| `index.ts` | Public exports. |
| `preview.html` | Standalone interactive demo. |
| `prompt.md` | Setup instructions for a coding agent. |
