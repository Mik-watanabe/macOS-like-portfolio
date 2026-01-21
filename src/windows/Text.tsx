import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data as {
    name?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string[];
  } | null;

  if (!data) return null;

  const { name, subtitle, imageUrl, description = [] } = data;
  const imgSrc = imageUrl ?? null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4 space-y-5 bg-white">
        {imgSrc && (
          <div className="w-full">
            <img src={imgSrc} alt={name} className="w-full rounded h-auto" />
          </div>
        )}

        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}
        
        <div className="space-y-3 leading-relaxed text-gray-800 text-base">
          {description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper({ Component: Text, windowKey: "txtfile" });

export default TextWindow;
