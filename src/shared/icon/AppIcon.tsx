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
      IconDots,
      IconDownload,
      IconEdit,
      IconEye,
      IconHome2,
      IconLock,
      IconLockOpen,
      IconMapPin,
      IconMenu2,
      IconPlus,
      IconShare2,
      IconTrash,
      IconTriangle,
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

                  case "dashboard":
                        return <IconHome2 className={className} size={size ?? ICON.size} />;

                  case "more-horizontal":
                        return <IconDots className={className} size={size ?? ICON.size} />;

                  case "sort-ascending":
                        return <IconTriangle className={className} size={size ?? ICON.size} />;

                  case "sort-descending":
                        return (
                              <IconTriangle className={className + " rotate-180"} size={size ?? ICON.size} />
                        );

                  case "view":
                        return <IconEye className={className} size={size ?? ICON.size + 2} />;

                  case "update":
                        return <IconEdit className={className} size={size ?? ICON.size} />;

                  case "delete":
                        return <IconTrash className={className} size={size ?? ICON.size} />;

                  case "add":
                        return <IconPlus className={className} size={size ?? ICON.size} />;

                  case "download":
                        return <IconDownload className={className} size={size ?? ICON.size} />;

                  default:
                        alert("Please select icon");
                        break;
            }
      };

      return <RenderIcon />;
}

export default AppIcon;
