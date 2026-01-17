import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import Link from "next/link";

// Six sizes are available, and you can override them by using `className` without a `size`.
// Add an Iconify icon by providing its name and any Icon props.
// Icon width scales with `size`, but you can override it by passing `width`.
// If `to` is provided, the component renders a <Link>; otherwise it renders a <button>.
// Icons render on the left by default; set `right` to move the icon to the right.
// `className` styles the button itself, not the icon.

/**
 * Reusable button with optional Link behavior and Iconify icon support.
 * @param {object} props
 * @param {"primary-fill"|"secondary-fill"|"primary-outline"|"secondary-outline"} [props.type]
 * @param {1|2|3|4|5|6} [props.size]
 * @param {string} [props.text]
 * @param {string} [props.icon]
 * @param {boolean|number} [props.left]
 * @param {boolean} [props.right]
 * @param {number} [props.gap]
 * @param {function} [props.onClick]
 * @param {string} [props.to]
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
export default function Button({
  type = "primary-fill",
  size = 2,
  text = "Click me",
  icon = "",
  left = 1,
  right = false,
  gap = 1,
  onClick,
  to = "",
  className = "",
  ...iconProps
}) {
  function getTextStyles(buttonSize) {
    switch (buttonSize) {
      case 1:
      case 2:
        return "text-sm";
      case 3:
      case 4:
        return "text-sm md:text-base";
      case 5:
      case 6:
        return "text-sm md:text-base lg:text-lg";
      default:
        return "";
    }
  }

  function getPaddingStyles(buttonSize, buttonType) {
    // if the type is outline so remove 2px (border-width) horizontally and vertically from the button size
    if (buttonType.includes("outline")) {
      switch (buttonSize) {
        case 1:
          return "px-1.5 sm:px-3.5 py-1.5";
        case 2:
          return "px-2.5 sm:px-5.5 py-2";
        case 3:
          return "px-3.5 sm:px-7.5 py-2.5";
        case 4:
          return "px-4.5 sm:px-9.5 py-3";
        case 5:
          return "px-5.5 sm:px-11.5 py-3.5";
        case 6:
          return "px-6.5 sm:px-13.5 py-4";
      }
    }
    switch (buttonSize) {
      case 1:
        return "px-2 sm:px-4 py-2";
      case 2:
        return "px-3 sm:px-6 py-2.5";
      case 3:
        return "px-4 sm:px-8 py-3";
      case 4:
        return "px-5 sm:px-10 py-3.5";
      case 5:
        return "px-6 sm:px-12 py-4";
      case 6:
        return "px-7 sm:px-14 py-4.5";
    }
  }

  // Use text-center if there's no icon.
  function getBtnMainStyles(buttonType) {
    const common = `cursor-pointer rounded-md duration-200 ${
      className?.includes("hidden")
        ? ""
        : "inline-flex justify-center items-center"
    }`;
    let special = "";
    switch (buttonType) {
      case "primary-fill":
        special = "text-white bg-primary hover:bg-primary-soft";
        break;
      case "secondary-fill":
        special = "group text-white bg-secondary hover:bg-secondary-soft";
        break;
        <div className="border-black"></div>;
      case "primary-outline":
        special =
          "group border border-text-primary text-text-primary bg-white hover:border-primary hover:text-white hover:bg-primary";
        break;
      case "secondary-outline":
        special =
          "group border border-text-primary text-text-primary bg-white hover:border-secondary hover:text-white hover:bg-secondary";
        break;
      default:
        special = "";
    }

    return `${common} ${special} ${className}`;
  }

  function getIconMainStyles(buttonType) {
    const common = "inline-block duration-200";
    let special = "";

    switch (buttonType) {
      case "primary-fill":
        special = "text-white";
        break;
      case "secondary-fill":
        special = "text-white";
        break;
      case "primary-outline":
        special = "text-text-primary group-hover:text-white";
        break;
      case "secondary-outline":
        special = "text-text-primary group-hover:text-white";
        break;
      default:
        special = "";
    }

    return `${common} ${special}`;
  }

  return (
    <div className={`w-fit text-center inline-block`}>
      {to ? (
        <Link
          href={to}
          className={`${getBtnMainStyles(type)} ${getPaddingStyles(
            size,
            type
          )} ${getTextStyles(size)}`}
        >
          {icon && (!right ? left : left === 1 ? false : left) && (
            <Icon
              icon={icon}
              width={iconProps?.width ?? 15 + size * 3}
              className={`${getIconMainStyles(type)}`}
              style={{ marginRight: `${gap * 4}px` }}
              {...iconProps}
            />
          )}
          {text}
          {icon && right && (
            <Icon
              icon={icon}
              width={iconProps?.width ?? 15 + size * 3}
              className={`${getIconMainStyles(type)}`}
              style={{ marginLeft: `${gap * 4}px` }}
              {...iconProps}
            />
          )}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${getBtnMainStyles(type)} ${getPaddingStyles(
            size,
            type
          )} ${getTextStyles(size)}`}
        >
          {icon && (!right ? left : left === 1 ? false : left) && (
            <Icon
              icon={icon}
              width={iconProps?.width ?? 15 + size * 3}
              className={`${getIconMainStyles(type)}`}
              style={{ marginRight: `${gap * 4}px` }}
              {...iconProps}
            />
          )}
          {text}
          {icon && right && (
            <Icon
              icon={icon}
              width={iconProps?.width ?? 15 + size * 3}
              className={`${getIconMainStyles(type)}`}
              style={{ marginLeft: `${gap * 4}px` }}
              {...iconProps}
            />
          )}
        </button>
      )}
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    "primary-fill",
    "secondary-fill",
    "primary-outline",
    "secondary-outline",
  ]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string,
  icon: PropTypes.string,
  left: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  right: PropTypes.bool,
  gap: PropTypes.number,
  onClick: PropTypes.func,
  to: PropTypes.string,
  className: PropTypes.string,
};
