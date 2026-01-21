import clsx from "clsx";
import { Search } from "lucide-react";
import { WindowControls } from "@components";
import { locations, type FinderItem, type FolderItem } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";

const isFolder = (item: FinderItem) => item.kind === "folder";

const Finder = () => {
  const { setActiveLocation, resetActiveLocation, activeLocation } =
    useLocationStore();
  const { openWindow } = useWindowStore();
    

  const renderList = (title: string, items: FolderItem[] = []) => (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id == activeLocation?.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item: FinderItem) => {
    if(item.kind === "file") {
    if(item.fileType === "pdf") {
      return openWindow("resume");
    }
    if(item.fileType === "txt") {
      // open the txtfile window and pass the file data
      return openWindow("txtfile", item);
    }
    if(item.fileType === "img") {
      // open image files using the image window
      return openWindow("imgfile", item);
    }
    if (["fig", "url"].includes(item.fileType) && item.href) {
      return window.open(item.href, "_blank")
    }
    } else {
        // folder
        return setActiveLocation(item);
    }
  }
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="finder-content">
        <div className="sidebar">
          {renderList("Favourites", Object.values(locations))}
          {renderList("My Projects", (locations.work.children ?? []).filter(isFolder))}
        </div>

        <ul className="content">
            {(activeLocation?.children ?? []).map((item) => (
                <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                    <img src={item.icon} alt={item.name} />
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const FinderWrapper = WindowWrapper({ Component: Finder, windowKey: "finder" });

export default FinderWrapper;
