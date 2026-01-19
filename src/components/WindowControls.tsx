import type { WindowId } from "@constants";
import useWindowStore from "@store/window";

const WindowControls = ({ target }: { target: WindowId }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <button
        type="button"
        className="close"
        aria-label="Close window"
        onClick={() => closeWindow(target)}
      />
      <button
        type="button"
        className="minimize"
        aria-label="Minimize window"
        disabled
      />
      <button
        type="button"
        className="maximize"
        aria-label="Maximize window"
        disabled
      />
    </div>
  );
};

export default WindowControls;
