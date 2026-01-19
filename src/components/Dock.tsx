import { dockApps, type WindowId } from "@constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import useWindowStore from "@store/window";

type AnimateIconProps = {
  icon: HTMLButtonElement;
  scale: number;
  y: number;
  duration?: number;
};

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons: NodeListOf<HTMLButtonElement> =
      dock.querySelectorAll(".dock-icon");

    const animateIcon = ({
      icon,
      scale,
      y,
      duration = 0.25,
    }: AnimateIconProps) => {
      return gsap.to(icon, {
        scale,
        y,
        duration,
        ease: "power1.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;

      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const letterCenterX = rect.left - left + rect.width / 2;

        const distance = Math.abs(mouseX - letterCenterX);
        const intensity = Math.exp(-(distance ** 2) / 2000);

        animateIcon({ icon, scale: 1 + 0.25 * intensity, y: -15 * intensity });
      });
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) =>
        animateIcon({ icon, scale: 1, y: 0, duration: 0.3 }),
      );
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = ({
    id,
    canOpen,
  }: {
    id: WindowId | "trash";
    canOpen: boolean;
  }) => { 
    if (!canOpen || id === "trash") {
      return;
    }
    const w = windows[id];
    if (w.isOpen) {
        closeWindow(id);
    } else {
        openWindow(id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-40"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
