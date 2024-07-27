import type { HTMLAttributes } from "react";
import { iconPaths } from "../../utils/IconPaths";
import "./index.css";

interface Props {
  icon: keyof typeof iconPaths;
  color?: string;
  gradient?: boolean;
  size?: string;
  className?: string;
}

const Icon = (props: Props) => {
  const { color = "currentcolor", gradient, icon, size, className } = props;
  const iconPath = iconPaths[icon];

  const attrs: HTMLAttributes<"svg"> = {};
  if (size) attrs.style = { "--size": size };

  const gradientId =
    "icon-gradient-" + Math.round(Math.random() * 10e12).toString(36);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke={gradient ? `url(#${gradientId})` : color}
      fill={gradient ? `url(#${gradientId})` : color}
      {...attrs}
      className={className}
    >
      <g dangerouslySetInnerHTML={{ __html: iconPath }} />
      {gradient && (
        <linearGradient
          id={gradientId}
          x1="23"
          x2="235"
          y1="43"
          y2="202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--gradient-stop-1)" />
          <stop offset=".5" stop-color="var(--gradient-stop-2)" />
          <stop offset="1" stop-color="var(--gradient-stop-3)" />
        </linearGradient>
      )}
    </svg>
  );
};

export default Icon;
