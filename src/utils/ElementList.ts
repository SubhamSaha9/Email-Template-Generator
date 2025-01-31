

import { Columns2, Facebook, Frame, Framer, Image, Link2, Link2Icon, PanelTop, Projector, RectangleEllipsis, SquareSplitVertical, Text, TextSelectionIcon, Twitter } from "lucide-react";
import { LayoutListsInterface } from "./Layout";

export interface ElementListInterface
  extends Omit<LayoutListsInterface, "numOfCol"> {
  content?: string;
  url?: string;
  style?:  React.CSSProperties,
  outerStyle?:React.CSSProperties,
  textarea?: string;
  imageUrl?: string;
  alt?: string;
  socialIcons?: Array<{ icon: string; url: string }>;
}

export default [
    {
        icon: RectangleEllipsis,
        label: 'Button',
        type: 'Button',
        content: 'Sample Button',
        url: '#',
        style: {
            textAlign: 'center',
            backgroundColor: '#007bff',
            color: '#FFFFFF',
            padding: '10px',
            width: 'auto',
            fontSize: '16px',
            borderRadius: '0px',
            fontWeight: 'normal',

        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
    },
    {
        icon: TextSelectionIcon,
        type: 'Text',
        label: 'Text',
        textarea: 'Sample Text',
        style: {
            backgroundColor: '#FFFFFF',
            color: '#000000',
            padding: '10px',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            textTransform: 'capitilized'//lowercase , capitilized
        },
        outerStyle: {
            backgroundColor: '#FFFFFF',
            width: '100%'
        }
    },
    {
        icon: Link2Icon,
        type: 'Link',
        label: 'Link',
        textarea: 'Sample Link',
        url: '#',
        style: {
            backgroundColor: '#FFFFFF',
            color: '#0096FF',
            padding: '10px',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            textTransform: 'capitilized'//lowercase , capitilized
        },
        outerStyle: {
            backgroundColor: '#FFFFFF',
            width: '100%'
        }
    },
    {
        icon: Image,
        type: 'Image',
        label: 'Image',
        imageUrl: "/image.png",
        alt: 'Image',
        url: '#',
        style: {
            backgroundColor: '#FFFFFF',
            padding: '10px',
            height: '50%',
            width: '70%',
            margin: '0px',
            borderRadius: '0px',
            objectFit: 'none'
        },
        outerStyle: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
        }
    },
    {
        icon: Frame,
        type: 'Logo',
        label: 'Logo',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        style: {
            backgroundColor: '#FFFFFF',
            padding: '10px',
            height: '30%',
            width: '30%',
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: '100%'
        }
    },
    {
        icon: PanelTop,
        type: 'LogoHeader',
        label: 'Logo Header',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        style: {
            backgroundColor: '#FFFFFF',
            padding: '10px',
            height: '40%',
            width: '40%',
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: '100%'
        }
    },
    {
        icon: SquareSplitVertical,
        type: 'Divider',
        label: 'Divider',
        style: {
            color: '#000000',
            padding: '10px',
            width: '100%'
        }
    },
    {
        type: 'SocialIcons',
        icon: Twitter,
        label: 'Social Icons',
        socialIcons: [
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
                url: '#'
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
                url: '#'
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
                url: '#'
            }
        ],
        options: [
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
                url: ''
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
                url: ''
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
                url: ''
            }
        ],
        style: {
            width: 30,
            height: 30
        },
        outerStyle: {
            display: 'flex',
            gap: 15,

        }



    }

]