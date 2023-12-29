import {
      IconBrandFacebook,
      IconBrandInstagram,
      IconBrandLinkedin,
      IconCalendarEvent,
      IconMenu2,
      IconX,
} from "@tabler/icons-react";
import { ICON } from "@/constants/icon";
import { TIconType } from "@/models/icon/iconModel";

interface IIcon {
      name: TIconType;
      className?: string;
      size?: number;
}

function AppIcon({ name, className, size }: IIcon) {
      const RenderIcon = () => {
            switch (name) {
                  case "menu":
                        return <IconMenu2 className={className} size={size ?? ICON.size} />;

                  case "clear":
                        return <IconX className={className} size={size ?? ICON.size} />;

                  case "facebook":
                        return <IconBrandFacebook className={className} size={size ?? ICON.size} />;

                  case "instagram":
                        return <IconBrandInstagram className={className} size={size ?? ICON.size} />;

                  case "linkedin":
                        return <IconBrandLinkedin className={className} size={size ?? ICON.size} />;

                  case "calender":
                        return <IconCalendarEvent className={className} size={size ?? ICON.size} />;

                  default:
                        alert("Please select icon");
                        break;
            }
      };

      return <RenderIcon />;
}

export default AppIcon;
