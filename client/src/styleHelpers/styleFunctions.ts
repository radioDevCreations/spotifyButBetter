import Styles from "../types/Styles";
import { styleColors } from "./styleColors";

export const styleFunctions = {
  cannotSelect: (): Styles => {
    return {
      userSelect: `none`,
      mozUserSelect: `none`,
      webkitUserSelect: `none`,
    };
  },
  borderDraw: (
    width: number,
    style: string,
    color: string,
    which?: string,
  ): Styles => {
    switch (which) {
      case "bottom":
        return {
          borderBottom: `${width}px ${style} ${color}`,
        };
      case "left":
        return {
          borderLeft: `${width}px ${style} ${color}`,
        };
      case "top":
        return {
          borderTop: `${width}px ${style} ${color}`,
        };
      case "right":
        return {
          borderRight: `${width}px ${style} ${color}`,
        };
      default:
        return {
          border: `${width}px ${style} ${color}`,
        };
    }
  },
  flexCenter: (): Styles => {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  },
  flexCenterX: (): Styles => {
    return {
      display: "flex",
      justifyContent: "center",
    };
  },
  flexCenterY: (): Styles => {
    return {
      display: "flex",
      alignItems: "center",
    };
  },
  inputBorder: (): Styles => {
    return { border: `2px solid ${styleColors.lightgray}`, borderRadius: `3px` };
  },
};
