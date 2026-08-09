import "./agent-wave-loader.css";
import {
  ClaudeCodeBotLogo,
  CodexLogo,
  DeepSeekLogo,
  GeminiLogo,
  KimiLogo,
} from "./agent-logos";

const MARKS = [
  { id: "claude-code", Mark: ClaudeCodeBotLogo },
  { id: "codex", Mark: CodexLogo },
  { id: "gemini", Mark: GeminiLogo },
  { id: "deepseek", Mark: DeepSeekLogo },
  { id: "kimi", Mark: KimiLogo },
] as const;

export interface AgentWaveLoaderProps {
  label?: string;
  className?: string;
}

export function AgentWaveLoader({
  label = "AI is working…",
  className,
}: AgentWaveLoaderProps) {
  return (
    <div
      aria-label={label}
      className={["agent-wave-loader", className].filter(Boolean).join(" ")}
      role="status"
    >
      <span aria-hidden className="agent-wave-track">
        <span className="agent-wave-signal" />
        {MARKS.map(({ id, Mark }, index) => (
          <span
            className="agent-wave-mark"
            key={id}
            style={{ animationDelay: `${index * 176}ms` }}
          >
            <Mark className="agent-wave-logo" />
          </span>
        ))}
      </span>
      <span className="agent-wave-label">{label}</span>
    </div>
  );
}
