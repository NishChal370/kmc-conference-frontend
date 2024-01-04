import {
      IconArrowNarrowLeft,
      IconArrowNarrowRight,
      IconBed,
      IconBrandFacebook,
      IconBrandInstagram,
      IconBrandLinkedin,
      IconCalendarEvent,
      IconCarGarage,
      IconCheck,
      IconChevronDown,
      IconClockHour2,
      IconLock,
      IconLockOpen,
      IconMapPin,
      IconMenu2,
      IconShare2,
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

                  case "clock":
                        return <IconClockHour2 className={className} size={size ?? ICON.size} />;

                  case "location":
                        return <IconMapPin className={className} size={size ?? ICON.size} />;

                  case "share":
                        return <IconShare2 className={className} size={size ?? ICON.size} />;

                  case "parking":
                        return <IconCarGarage className={className} size={size ?? ICON.size} />;

                  case "accommodation":
                        return <IconBed className={className} size={size ?? ICON.size} />;

                  case "arrow-right":
                        return <IconArrowNarrowRight className={className} size={size ?? ICON.size} />;

                  case "arrow-left":
                        return <IconArrowNarrowLeft className={className} size={size ?? ICON.size} />;

                  case "lock":
                        return <IconLock className={className} size={size ?? ICON.size} />;

                  case "unlock":
                        return <IconLockOpen className={className} size={size ?? ICON.size} />;

                  case "tick":
                        return <IconCheck className={className} size={size ?? ICON.size} />;

                  case "down-arrow":
                        return (
                              <IconChevronDown
                                    className={`
                                                ${className} 
                                                transition-all duration-500 ease-in-out
                                          `}
                                    size={size ?? ICON.size}
                              />
                        );
                  default:
                        alert("Please select icon");
                        break;
            }
      };

      return <RenderIcon />;
}

export default AppIcon;
