# Agent setup prompt

Copy everything inside the block below and paste it into Claude Code, Cursor,
Codex, or any coding agent working in your project.

---

```
Add the "Agent Wave Loader" component to this project.

Source: https://github.com/Rorogogogo/roro-ui-lib/tree/main/components/agent-wave-loader

What it is: a React + TypeScript loading indicator for AI "thinking" states. A
signal traces an arc across a row of agent marks (Claude Code, Codex, Gemini,
DeepSeek, Kimi), bouncing each one as it lands. Plain CSS, no Tailwind, no build
step, no runtime dependency on the source repo.

Steps:

1. Work out where UI components live in this project (look for
   src/components/ui, components/ui, app/components, or whatever convention is
   already in use) and create an `agent-wave-loader` folder there. Match the
   existing casing and path-alias style — do not invent a new convention.

2. Download these five files into that folder, keeping the filenames exactly:

   https://raw.githubusercontent.com/Rorogogogo/roro-ui-lib/main/components/agent-wave-loader/agent-wave-loader.tsx
   https://raw.githubusercontent.com/Rorogogogo/roro-ui-lib/main/components/agent-wave-loader/agent-wave-loader.css
   https://raw.githubusercontent.com/Rorogogogo/roro-ui-lib/main/components/agent-wave-loader/agent-logos.tsx
   https://raw.githubusercontent.com/Rorogogogo/roro-ui-lib/main/components/agent-wave-loader/utils.ts
   https://raw.githubusercontent.com/Rorogogogo/roro-ui-lib/main/components/agent-wave-loader/index.ts

   The files use relative imports only, so they work as-is once they are in the
   same folder. Do not rewrite the imports between them.

3. Check the bundler can import CSS from a .tsx file. Vite, Next.js, Remix and
   CRA all support this by default — if this project does too, change nothing.
   If it does not, move the contents of agent-wave-loader.css into whichever
   global stylesheet this project already loads, and delete the
   `import "./agent-wave-loader.css";` line from agent-wave-loader.tsx.

4. Note the one external dependency: agent-logos.tsx imports `HelpCircle` from
   `lucide-react` for its `UnknownAgentLogo` export. The loader itself never
   uses it. If lucide-react is not already a dependency here, delete the
   `UnknownAgentLogo` function and the `import { HelpCircle } from
   "lucide-react";` line rather than installing a package for one unused icon.

5. If this project uses a Next.js App Router, add "use client" at the very top
   of agent-wave-loader.tsx — the component is animated and client-only.

6. Show me a real usage example wired into this codebase — find somewhere an
   actual loading or pending state exists and render the component there, rather
   than writing a standalone demo file:

   import { AgentWaveLoader } from "<the path you used>";

   <AgentWaveLoader label="Thinking…" />

   Props: `label` (string, defaults to "AI is working…", doubles as the
   accessible name) and `className` (string, optional).

7. Verify it compiles — run this project's typecheck or build command — and tell
   me the exact import path you settled on.

Do not modify the component's animation timing, keyframes, or the offset-path in
the CSS. They are tuned together and small edits break the arc.
```

---

## Customising after install

Once it's in, you can follow up with the agent in plain language:

- "Make the agent wave loader slower — set `--agent-wave-duration` to 2.4s."
- "Change the loader marks to monochrome; drop the per-agent brand colours."
- "Remove Kimi and DeepSeek from the loader's `MARKS` array."

See [README.md](README.md) for the full list of CSS custom properties.
