# roro-ui-lib

A small, growing collection of React + TypeScript UI components I keep reaching
for. Every component is self-contained: copy the folder, import it, done.

There is no package to install, no build step, and no runtime dependency on this
repo. You own the code the moment you copy it — change the colours, rip out the
parts you don't need, no upstream to fight with.

## Components

| Component | What it does | Preview |
| --- | --- | --- |
| [`agent-wave-loader`](components/agent-wave-loader) | AI "thinking" indicator — a signal arcs across Claude Code, Codex, Gemini, DeepSeek and Kimi marks, bouncing each one as it lands. | [preview.html](components/agent-wave-loader/preview.html) |

## How to use a component

Pick whichever of these three suits you.

### 1. Let an AI agent do it (fastest)

Every component ships a `prompt.md` — a self-contained instruction block written
for a coding agent. Open the file, copy the whole thing, and paste it into Claude
Code, Cursor, Codex, or whatever you use. It will fetch the files, place them
correctly for your project's conventions, and show you a working usage example.

```
components/agent-wave-loader/prompt.md
```

### 2. Copy the folder by hand

```bash
# from the root of your project
mkdir -p src/components/ui
curl -L https://github.com/Rorogogogo/roro-ui-lib/archive/refs/heads/main.tar.gz \
  | tar -xz --strip-components=3 -C src/components/ui \
    roro-ui-lib-main/components/agent-wave-loader
```

Then import it:

```tsx
import { AgentWaveLoader } from "@/components/ui/agent-wave-loader";

export function Composer({ isThinking }: { isThinking: boolean }) {
  return isThinking ? <AgentWaveLoader label="Thinking…" /> : null;
}
```

### 3. Clone and browse

```bash
git clone https://github.com/Rorogogogo/roro-ui-lib.git
open roro-ui-lib/components/agent-wave-loader/preview.html
```

Each component's `preview.html` is a standalone file — no server, no install.
Double-click it and you get a live, interactive demo with speed and theme
controls.

## What every component folder contains

```
components/<name>/
├── README.md          # what it is, props, customisation
├── prompt.md          # paste-into-your-AI-agent setup instructions
├── <name>.tsx         # the component
├── <name>.css         # plain CSS, no preprocessor
├── index.ts           # public exports
└── preview.html       # standalone interactive demo
```

## Conventions

These hold across the library, so a component behaves the way you'd expect
before you read its README:

- **React 18+ and TypeScript.** Function components, named exports, exported prop
  types.
- **Plain CSS, not Tailwind.** Styling lives in a sibling `.css` file the
  component imports itself. Tailwind projects work fine — the two don't collide.
- **Theming through CSS custom properties.** Every colour, duration, and size
  worth changing is a `--variable` on the component's root class. Override it in
  your own stylesheet instead of editing the component.
- **Dark mode by default.** Components respond to `prefers-color-scheme` without
  configuration.
- **Motion is optional.** Anything animated honours `prefers-reduced-motion:
  reduce` and degrades to a sensible static state.
- **Accessible out of the box.** Correct roles, labels, and `aria-hidden` on
  decorative elements. Loading states announce through `role="status"`.
- **Near-zero dependencies.** Icons are inline SVG. Where a component needs
  something external, its README says so explicitly.

## Adding a component

1. Create `components/<name>/` following the file layout above.
2. Write the component so it works when the folder is copied anywhere — relative
   imports only, no reaching outside the folder.
3. Write `README.md` (props table, customisation, accessibility notes) and
   `prompt.md` (agent setup instructions).
4. Build `preview.html` as a single self-contained file.
5. Add a row to the components table above.

## License

MIT — see [LICENSE](LICENSE). Use it in anything, commercial or not.

Brand marks (Anthropic, OpenAI, Google, DeepSeek, Moonshot) belong to their
respective owners and are included for identification only.
