import { useState, ComponentPropsWithoutRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { buildBadgeUrl, getBadgeConfig } from "../utils/badges";

type MotionImgProps = MotionProps & ComponentPropsWithoutRef<"img">;

interface BadgeProps extends Omit<MotionImgProps, "src" | "alt"> {
  name: string;
  animated?: boolean;
}

export default function Badge({
  name,
  className = "",
  animated = false,
  ...props
}: BadgeProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const config = getBadgeConfig(name);
    const fallbackContent = (
      <>
        {config.logo && (
          <img
            src={`https://cdn.simpleicons.org/${config.logo}/white`}
            alt=""
            className="mr-1 size-3"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}
        {name}
      </>
    );

    const fallbackClassName = `inline-flex items-center rounded px-2 py-0.5 text-xs font-medium text-white ${className}`;
    const fallbackStyle = { backgroundColor: `#${config.color}` };

    if (animated) {
      return (
        <motion.span
          className={fallbackClassName}
          style={fallbackStyle}
          {...props}
        >
          {fallbackContent}
        </motion.span>
      );
    }

    return (
      <span className={fallbackClassName} style={fallbackStyle}>
        {fallbackContent}
      </span>
    );
  }

  const imgProps = {
    src: buildBadgeUrl(name),
    alt: name,
    className,
    loading: "lazy" as const,
    decoding: "async" as const,
    onError: () => setHasError(true),
  };

  if (animated) {
    return <motion.img {...imgProps} {...props} />;
  }

  return <img {...imgProps} {...(props as ComponentPropsWithoutRef<"img">)} />;
}
