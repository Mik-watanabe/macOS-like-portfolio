import type { WindowId } from "@constants";
import { useGSAP } from "@gsap/react";
import useWindowStore from "@store/window";
import gsap from "gsap";
// @ts-ignore
import { Draggable } from "gsap/Draggable";
import { useRef, type FC } from "react";

type Props = {
  Component: FC;
  windowKey: WindowId;
};
const WindowWrapper = ({ Component, windowKey }: Props) => {
  const wrapped = (props: any) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement | null>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen) {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
        );
      }
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, [windowKey]);

    return (
        <section
          id={windowKey}
          ref={ref}
          style={{ zIndex, display: isOpen ? "block" : "none" }}
          className="absolute"
        >
          <Component {...props} />
        </section>
    );
  };

  wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return wrapped;
};

export default WindowWrapper;
