import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data as {
    name?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string[];
  } | null;

  if (!data) return null;

  const { name, imageUrl } = data;
  const src = imageUrl ?? null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4">
        {src && (
          <div className="w-full flex justify-center">
            <img
              src={src}
              alt={name}
              className="max-w-full max-h-[70vh] rounded object-contain"
            />
          </div>
        )}
      </div>
    </>
  );
};

const ImgWindow = WindowWrapper({ Component: Image, windowKey: "imgfile" });

export default ImgWindow;
