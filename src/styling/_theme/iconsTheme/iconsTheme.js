import * as React from "react";

import AppleMaps24 from "./components/appleMaps24";
import GMaps24 from "./components/gmaps24";
import Waze24 from "./components/waze24";
import AppleMaps48 from "./components/appleMaps48";
import GMaps48 from "./components/gmaps48";
import Waze48 from "./components/waze48";
import StoreRoadSign from "./components/storeRoadSign";
import FooterDecorative from "./components/footerDecorative";

const iconsTheme = () => {
  return {
    catalog: {
      LOGO_GAUCHA: {
        24: "M21.68 4.57C15.556-.437 7.55.002 3.296 4.76c-5.445 6.088-3.258 12.508.195 15.52 8.087 7.053 21.686 2.297 20.426-10.426l-12.173-.031v5.007l5.71.032c-1.802 4.5-7.48 4.459-9.667 1.592C2.451 9.458 12.258 3 17.696 8.485",
      },
      WAZE: {
        24: () => <Waze24 />,
        48: () => <Waze48 />,
      },
      GMAPS: {
        24: () => <GMaps24 />,
        48: () => <GMaps48 />,
      },
      APPLE_MAPS: {
        24: () => <AppleMaps24 />,
        48: () => <AppleMaps48 />,
      },
      SEND: {
        24: "M2.74 2.252l1.365 9.555.772.193-.772.193-1.365 9.555L22.236 12 2.74 2.252zm3.155 7.94L5.26 5.749 17.764 12 5.26 18.252l.635-4.445L13.123 12l-7.228-1.807z",
      },
      ALERT_TRIANGLE: {
        24: "M22.442 15.953L15.436 3.978a3.974 3.974 0 00-6.873 0l-7.008 11.98a4.007 4.007 0 003.419 6.04h14.038a4.005 4.005 0 003.43-6.045zm-19.164 1.02l7.013-11.988a1.976 1.976 0 013.416-.003l7.01 11.985a2.007 2.007 0 01-1.714 3.031H4.983a2.004 2.004 0 01-1.705-3.024zM12 17.999a1 1 0 100-2 1 1 0 000 2zm1.004-10h-2.001v7h2v-7z",
        12: "M11.22 7.977L7.719 1.989a1.987 1.987 0 00-3.436 0L.778 7.979a2.003 2.003 0 001.71 3.02h7.018a2.003 2.003 0 001.715-3.023zm-9.581.51l3.507-5.995a.988.988 0 011.707 0l3.506 5.992A1.003 1.003 0 019.5 9.999h-7.01a1.002 1.002 0 01-.852-1.512zM6 8.999a.5.5 0 100-1 .5.5 0 000 1zm.502-5h-1v3.5h1V4z",
      },

      SEARCH: {
        24: "M10 18a8 8 0 116.32-3.094l5.387 5.387-1.414 1.414-5.387-5.387A7.965 7.965 0 0110 18zm6-8a6 6 0 11-12 0 6 6 0 0112 0z",
      },
      PIN: {
        24: "M12 23.328l.658-.575C18.188 17.923 21 13.707 21 10c0-5.25-4.097-9-9-9s-9 3.75-9 9c0 3.707 2.811 7.924 8.342 12.753l.658.575zm0-2.665C7.307 16.433 5 12.85 5 10c0-4.103 3.164-7 7-7s7 2.897 7 7c0 2.85-2.307 6.433-7 10.663zM12 5a5 5 0 110 10 5 5 0 010-10zm-3 5a3 3 0 116 0 3 3 0 01-6 0z",
      },

      CLOCK: {
        24: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 12V6h-2v8h7v-2h-5z",
      },

      CALENDAR_DATES: {
        24: "M7.2 4.8H4.8V3.6H2.4v3.6h19.2V3.6h-2.4v1.2h-2.4V3.6H7.2v1.2zm14.4 4.8H2.4v12h19.2v-12zm-4.8-8.4H7.2V0H4.8v1.2H2.4A2.4 2.4 0 000 3.6v18A2.4 2.4 0 002.4 24h19.2a2.4 2.4 0 002.4-2.4v-18a2.4 2.4 0 00-2.4-2.4h-2.4V0h-2.4v1.2zM8.4 14.4H6V12h2.4v2.4zm2.4 0h2.4V12h-2.4v2.4zm7.2 0h-2.4V12H18v2.4zM6 19.2h2.4v-2.4H6v2.4zm7.2 0h-2.4v-2.4h2.4v2.4z",
      },

      HOME: {
        24: "M20 7.093V2h-3v2.093l3 3zM24 13L12 1 0 13h3v10h7v-5h4v5h7V13h3zm-5 8h-3v-5H8v5H5V10.74l7-6.912 7 6.99V21z",
      },

      SHOP: {
        24: "M10 9V7.902L11.047 3h1.905L14 7.9v1.098C14 10.065 13.067 11 12 11s-2-.933-2-2zm5 0c0 1.067.934 2 2.001 2C18.068 11 19 10.167 19 9.1V8.002L16.004 3h-1.943L15 7.902V9zM5 9.068C5 10.135 5.933 11 7 11s2-.865 2-1.932V7.971L9.939 3H7.996L5 7.971v1.097zM1 12h22v12H1V12zm2 8h18v-6H3v6zM4 9.068V7.971L6.887 3H4.873L0 7.971v1.098C0 10.135.933 11 2 11s2-.865 2-1.932zM19.127 3h-2.014L20 7.902V9c0 1.067.933 2 2 2s2-.865 2-1.932V7.971L19.127 3zM19 0H5v2h14V0z",
      },

      ARROW_BOTTOM: {
        24: "M11 18.586V3h2v15.586l6.293-6.293 1.414 1.414L12 22.414l-8.707-8.707 1.414-1.414L11 18.586z",
        48: "M22 37.1716V6H26V37.1716L38.5858 24.5858L41.4142 27.4142L24 44.8284L6.58575 27.4142L9.41418 24.5858L22 37.1716Z",
      },

      ARROW_RIGHT: {
        24: "M17.586 13H3v-2h14.586l-6.293-6.293 1.414-1.414L21.414 12l-8.707 8.707-1.414-1.414L17.586 13z",
      },
      ARROW_LEFT: {
        24: "M6.414 13l6.293 6.293-1.414 1.414L2.586 12l8.707-8.707 1.414 1.414L6.414 11H21v2H6.414z",
      },
      ARROW_TOP: {
        24: "M13 5.414V22h-2V5.414l-6.293 6.293-1.414-1.414L12 1.586l8.707 8.707-1.414 1.414L13 5.414z",
      },

      MENU: { 24: "M22 7V5H2v2h20zm0 4v2H2v-2h20zm0 6v2H2v-2h20z" },
      CHEVRON_LEFT: {
        24: "M2.828 9l7.293 7.293-1.414 1.414L0 9 8.707.293l1.414 1.414L2.828 9z",
      },

      CHEVRON_RIGHT: {
        24: "M14.586 12L7.293 4.707l1.414-1.414L17.414 12l-8.707 8.707-1.414-1.414L14.586 12z",
      },

      CALL_PHONE: {
        24: "M10.857 8.338c.518-.698.704-1.434.118-2.084-1.315-1.84-2.2-2.977-2.754-3.525-1.055-1.042-2.79-.901-3.703-.001-.49.483-.657.65-1.16 1.16C.552 6.697 2.263 12.63 6.81 17.184c4.548 4.552 10.482 6.264 13.293 3.45.465-.447.858-.84 1.169-1.169.895-.946 1.03-2.604-.006-3.681-.532-.553-1.617-1.394-3.534-2.766-.587-.525-1.284-.411-1.922.008-.307.201-.53.405-.952.827l-.767.767c-.1.1-1.471-.585-2.801-1.917C9.96 11.37 9.274 9.999 9.374 9.899l.767-.768c.134-.134.198-.198.28-.285.171-.18.313-.342.436-.508zm4.649 7.695l.766-.767c.232-.232.383-.375.505-.474 1.68 1.207 2.653 1.965 3.05 2.378.239.248.202.7-.006.92-.287.302-.66.675-1.117 1.117-1.818 1.819-6.608.437-10.479-3.438-3.872-3.876-5.253-8.666-3.449-10.471.502-.51.66-.669 1.144-1.145.182-.179.676-.219.896-.001.427.422 1.22 1.436 2.385 3.06-.06.074-.136.159-.228.255-.067.071-.123.128-.246.25l-.766.767c-1.303 1.303-.193 3.52 1.916 5.632 2.107 2.11 4.326 3.22 5.629 1.917z",
        60: "M27.142 20.845c1.295-1.745 1.76-3.585.294-5.209-3.287-4.6-5.498-7.444-6.885-8.814-2.636-2.604-6.973-2.252-9.256-.002a210.176 210.176 0 00-2.901 2.902C1.38 16.74 5.657 31.576 17.029 42.958c11.369 11.38 26.203 15.66 33.231 8.627a92.71 92.71 0 002.922-2.925c2.238-2.365 2.578-6.51-.015-9.203-1.328-1.381-4.04-3.485-8.834-6.914-1.468-1.313-3.21-1.028-4.805.019-.768.503-1.326 1.013-2.381 2.069l-1.916 1.916c-.252.253-3.678-1.463-7.004-4.792-3.328-3.33-5.042-6.757-4.79-7.008l1.916-1.918c.335-.335.495-.497.7-.713.427-.45.781-.857 1.088-1.27zm11.623 19.238l1.916-1.917c.58-.581.956-.939 1.263-1.185 4.199 3.015 6.63 4.912 7.624 5.944.596.62.504 1.75-.015 2.298a89.448 89.448 0 01-2.793 2.794c-4.545 4.547-16.52 1.093-26.197-8.594-9.68-9.69-13.133-21.666-8.622-26.179a207.647 207.647 0 012.86-2.862c.453-.447 1.688-.547 2.24-.002 1.067 1.055 3.048 3.59 5.961 7.649-.15.187-.34.399-.568.64a33.86 33.86 0 01-.615.625l-1.915 1.916c-3.258 3.258-.484 8.802 4.789 14.08 5.268 5.274 10.815 8.051 14.072 4.793z",
      },

      WHATSAPP: {
        24: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
        60: "M.143 60L4.36 44.593A29.668 29.668 0 01.393 29.727C.4 13.337 13.738 0 30.125 0c7.953.003 15.418 3.1 21.033 8.72 5.612 5.62 8.702 13.09 8.7 21.035-.008 16.393-13.345 29.73-29.733 29.73a29.75 29.75 0 01-14.22-3.62L.143 60zm16.492-9.517c4.19 2.487 8.19 3.977 13.48 3.98 13.62 0 24.715-11.086 24.723-24.713C54.843 16.095 43.8 5.025 30.135 5.02c-13.63 0-24.717 11.085-24.722 24.71-.003 5.562 1.627 9.728 4.365 14.085l-2.498 9.12 9.355-2.453zm28.468-13.66c-.185-.31-.68-.495-1.425-.868-.743-.372-4.395-2.17-5.078-2.417-.68-.248-1.175-.373-1.672.372-.495.743-1.92 2.418-2.353 2.913-.432.495-.867.557-1.61.184-.742-.372-3.137-1.154-5.975-3.687-2.207-1.97-3.7-4.402-4.132-5.148-.433-.742-.045-1.145.325-1.515.335-.332.742-.867 1.115-1.302.377-.43.5-.74.75-1.238.247-.495.125-.93-.063-1.302-.187-.37-1.672-4.027-2.29-5.515-.605-1.448-1.217-1.253-1.672-1.275L19.598 16c-.495 0-1.3.185-1.98.93-.68.745-2.6 2.54-2.6 6.198 0 3.657 2.662 7.19 3.032 7.684.373.495 5.238 8 12.69 11.218a42.986 42.986 0 004.235 1.565c1.78.565 3.4.485 4.68.295 1.428-.212 4.395-1.797 5.015-3.532.62-1.738.62-3.225.433-3.535z",
      },

      CIRCLE_CHECKED: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm3.293-12.707L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l6.707-6.707-1.414-1.414z",
      },

      CIRCLE_X: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm-3.293-4.293L12 13.414l3.293 3.293 1.414-1.414L13.414 12l3.293-3.293-1.414-1.414L12 10.586 8.707 7.293 7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414z",
      },

      MAIL: {
        24: "M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zm0 6.618V19h18V9.619l-9 4.5-9-4.5zm0-2.236l9 4.5 9-4.5V5H3v2.382z",
      },

      FILE_TEXT: {
        24: "M5 1h10.414L21 6.586V21a2 2 0 01-2 2H5a2 2 0 01-2-2V3a2 2 0 012-2zm8 2H5v18h14V9h-4a2 2 0 01-2-2V3zm2 .414V7h3.586L15 3.414zM8 17v-2h6v2H8zm0-6v2h8v-2H8z",
      },

      VIEW_ALL: { 24: "M2 2h9v9H2zM2 13h9v9H2v-9zM13 13h9v9h-9zM13 2h9v9h-9z" },
      QUESTION_MARK: {
        24: "M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm21.818 0c0 5.422-4.396 9.818-9.818 9.818S2.182 17.422 2.182 12 6.578 2.182 12 2.182 21.818 6.578 21.818 12zM12 17.453a1.091 1.091 0 100-2.182 1.091 1.091 0 000 2.182zm-1.09-3.271h2.18c0-.871.138-1.03 1.034-1.479 1.558-.779 2.24-1.574 2.24-3.43 0-2.378-1.872-3.818-4.364-3.818a4.364 4.364 0 00-4.364 4.363h2.182c0-1.205.977-2.182 2.182-2.182 1.393 0 2.182.607 2.182 1.637 0 .87-.137 1.03-1.034 1.479-1.557.779-2.239 1.573-2.239 3.43z",
      },
      WOMAN_FACE: {
        96: "M64.615 50c0 3.312-2.067 6-4.615 6s-4.615-2.688-4.615-6 2.067-6 4.615-6 4.615 2.688 4.615 6zM36 44c-2.548 0-4.615 2.688-4.615 6s2.067 6 4.615 6 4.615-2.688 4.615-6-2.067-6-4.615-6zm12 33.416c8.252 0 11.077-9.416 11.077-9.416H36.923S40.05 77.416 48 77.416zm48 14.556c-9.796 6.856-20.005 5.016-25.263-5.952-6.173 6.02-13.683 9.948-22.737 9.948-9.342 0-16.678-3.64-22.833-9.78C19.883 96.996 9.74 98.788 0 91.972c16.154-7-10.076-47.252 15.153-77.5C23.58 4.372 35.358 0 48 0c12.642 0 24.42 4.372 32.847 14.472 25.229 30.248-1 70.5 15.153 77.5zM75.072 67.528a3.776 3.776 0 011.975-1.72c9.035-3.312 9.43-17.444 5.738-20.048-.867-.608-1.96-.46-2.481-.212-2.452 1.18-5.191-.776-5.191-3.656 0-1.884-.126-4.004-.355-5.892H37.462C34.46 31.916 34.615 24.22 36 17.72c-3.334 3.928-6.251 12.996-6.923 18.28h-7.832a50.925 50.925 0 00-.354 5.892c0 2.88-2.74 4.836-5.191 3.656-.52-.248-1.61-.4-2.481.212-3.693 2.604-3.298 16.736 5.737 20.048a3.762 3.762 0 011.976 1.72c6.31 11.316 14.824 20.444 27.072 20.444 12.243 0 20.762-9.132 27.068-20.444z",
      },
      MAN_FACE: {
        96: "M61.188 54c0 3.312-2.077 6-4.636 6s-4.635-2.688-4.635-6 2.076-6 4.635-6c2.559 0 4.636 2.688 4.636 6zm-28.74-6c-2.559 0-4.636 2.688-4.636 6s2.077 6 4.636 6 4.635-2.688 4.635-6-2.076-6-4.635-6zM89 57.252c0 7.06-3.653 15.964-11.64 19.624C69.71 90.056 58.865 100 44.5 100c-13.873 0-25.387-10.248-32.86-23.124C3.654 73.212 0 64.308 0 57.252c0-8.212 2.796-12.104 5.255-13.956-1.447-6.096-3.82-20.584 3.57-29.636 3.48-4.26 9.138-6.16 15.28-5.096C26.77 2.436 37.498 0 44.5 0c11.125 0 24.508 2.564 33.898 14.064 7.302 8.944 6.111 22.964 5.147 29.076C86.052 44.924 89 48.816 89 57.252zM53.4 76H35.6s2.514 7.532 8.9 7.532c6.63 0 8.9-7.532 8.9-7.532zm26.192-26.032C64.351 51.54 50.749 37.736 45.946 28.872c-.3 3.236.69 10.228 3.594 13.42-11.774.256-21.639-6.368-27.665-15.472-3.103 5.596-4.605 12.352-4.605 19.1 0 2.888-2.767 4.832-5.214 3.656-.52-.252-1.617-.404-2.488.212-3.709 2.592-3.32 16.732 5.758 20.048.831.304 1.532.912 1.988 1.72 2.43 4.344 5.021 7.92 7.736 10.888 3.419 2.532 3.916-7.5 6.182-10.88 2.544-3.796 9.104-4.504 13.268-1.288 4.168-3.216 10.724-2.508 13.268 1.288 2.266 3.384 2.763 13.416 6.182 10.88 2.711-2.964 5.303-6.544 7.736-10.888a3.808 3.808 0 011.987-1.72c8.763-3.2 9.627-16.74 5.919-19.868z",
      },
      CHILD_MALE_FACE: {
        96: "M78.52 32.82C76.937 13.046 63.383 4 44.5 4c-19.072 0-32.452 9.243-34.02 28.82C2.967 33.387 0 41.136 0 49.703c0 7.552 3.193 18.508 11.778 20.636C16.202 84.523 27.46 92 44.5 92s28.298-7.475 32.722-21.66C85.807 68.213 89 57.255 89 49.704c0-8.512-2.944-16.316-10.48-16.884zM74.29 62.703c-1.665.036-3.1 1.26-3.52 2.996C67.852 77.844 59.015 84 44.5 84c-14.514 0-23.351-6.155-26.266-18.3-.42-1.735-1.854-2.96-3.52-2.995-7.917-.165-9.04-18.6-4.954-21.468 1.009-.708 2.277-.416 2.804-.164 2.488 1.2 5.292-.829 5.214-3.765-.263-10.104 3.452-18.588 11.978-22.824-2.459 11.293 8.176 22.552 24.742 18.393C39.62 28.484 50.582 7.992 63.22 17.06c5.963 4.867 8.21 12.288 8.01 20.252-.078 2.956 2.755 4.956 5.214 3.764.526-.257 1.79-.548 2.803.163 4.083 2.864 2.96 21.3-4.958 21.465zM61.187 46c0 3.313-2.076 6-4.635 6-2.559 0-4.635-2.688-4.635-6s2.076-6 4.635-6c2.559 0 4.636 2.688 4.636 6zm-28.74 6c-2.558 0-4.635-2.688-4.635-6s2.077-6 4.636-6 4.635 2.688 4.635 6c0 3.313-2.076 6-4.635 6zm-2.78 12h29.666S56.203 75.5 44.5 75.5C32.448 75.5 29.667 64 29.667 64z",
      },
      CHILD_FEMALE_FACE: {
        96: "M76.234 50c0 3.312-2.082 6-4.648 6s-4.648-2.688-4.648-6c0-3.313 2.082-6 4.648-6s4.648 2.688 4.648 6zm-28.82-6c-2.566 0-4.648 2.688-4.648 6s2.082 6 4.648 6 4.648-2.688 4.648-6c0-3.313-2.082-6-4.648-6zM59.5 77.415c8.311 0 11.156-9.416 11.156-9.416H48.344s3.15 9.416 11.156 9.416zm44.625-23.212c0 7.7-3.332 18.953-12.335 20.752C84.505 88.924 73.654 96 59.5 96s-25.005-7.075-32.29-21.04c-9.003-1.803-12.335-13.052-12.335-20.756 0-8.588 3.009-16.372 10.572-16.892C27.132 16.917 40.122 4 59.5 4c19.378 0 32.368 12.916 34.053 33.316 7.571.515 10.572 8.291 10.572 16.887zm-9.784-8.464c-1.011-.711-2.287-.415-2.811-.163-2.459 1.172-5.229-.764-5.229-3.657 0-5.375-1.171-20.027-12.867-26.615 4.85 5.415 6.52 15.167 6.52 20.695H33.126a43.948 43.948 0 00-.428 5.92c0 2.893-2.77 4.829-5.229 3.657-.528-.252-1.8-.548-2.811.163-4.098 2.864-2.967 21.304 4.972 21.468 1.365.029 2.61.865 3.235 2.172C41.758 88 55.108 88 59.5 88c4.392 0 17.742 0 26.634-18.62.624-1.312 1.87-2.144 3.235-2.172 7.936-.167 9.074-18.603 4.972-21.467zm-2.302-26.991c14.12-4.373 1.395 29.384 26.961 29.251-8.427-5.876-3.321-21.904-5.578-32.664C111.496 6.164 104.765 4 100.406 4c-6.972 0-11.55 4.424-13.398 7.688 2.023 1.912 3.77 4.896 5.031 7.06zm-60.047-7.06C30.144 8.424 25.566 4 18.594 4 14.235 4 7.504 6.164 5.578 15.335 3.321 26.096 8.427 42.123 0 48c25.566.132 12.84-33.624 26.96-29.253 1.262-2.163 3.01-5.147 5.032-7.06z",
      },
      YOUNG_MAN_FACE: {
        96: "M61.188 58c0 3.312-2.077 6-4.636 6s-4.635-2.688-4.635-6 2.076-6 4.635-6c2.559 0 4.636 2.688 4.636 6zm-28.74-6c-2.559 0-4.636 2.688-4.636 6s2.077 6 4.636 6 4.635-2.688 4.635-6-2.076-6-4.635-6zM44.5 85.416c8.288 0 11.125-9.416 11.125-9.416h-22.25s3.141 9.416 11.125 9.416zM89 61.252c0 7.06-3.653 15.964-11.637 19.624C69.853 93.808 59.474 104 44.5 104c-14.188 0-25.354-10.192-32.863-23.124C3.653 77.212 0 68.308 0 61.252c0-8.212 3.197-15.2 10.05-15.856C13.21 9 41.83 11.764 46.529 2c1.197 2.236 1.768 6.284-.075 9.144 3.238-.18 8.693-5.216 10.217-10.208 2.796 1.464 3.83 6.308 2.432 9.416 2.01-.412 8.11-4.6 11.355-10.352 2.552 6.252.097 14.252-2.625 19.084l-.045.004c6.66 6.828 10.313 16.516 11.162 26.304 6.894.66 10.05 7.668 10.05 15.86zm-9.567-7.464c-.872-.608-1.97-.46-2.493-.212-2.076 1-4.501-.248-5.087-2.64l-.004.064c-1.235-10.416-4.172-19.416-9.683-22.26-23.833 28.036-40.124-3.656-44.277 14.116-.374 2.328-.616 4.688-.616 7.064 0 2.876-2.755 4.836-5.213 3.656-.52-.248-1.621-.4-2.492.212-3.709 2.604-3.316 16.736 5.762 20.048.83.304 1.532.912 1.984 1.72C26.39 91.768 36.69 96 44.5 96c12.193 0 20.822-9.076 27.19-20.444a3.787 3.787 0 011.984-1.72c9.074-3.312 9.467-17.444 5.758-20.048z",
      },
      YOUNG_WOMAN_FACE: {
        96: "M78.56 37.396C76.974 18.144 65.263 0 44.276 0S11.578 18.144 9.992 37.396C3.132 38.056 0 45.08 0 53.252c0 7.02 3.597 15.868 11.453 19.564C22.282 94.3 39.25 96 44.276 96c5.025 0 21.994-1.7 32.823-23.184 7.855-3.7 11.453-12.544 11.453-19.564 0-8.076-3.103-15.192-9.992-15.856zm-5.258 28.44c-.907.332-1.66 1.036-2.099 1.964C62.326 86.544 48.349 88 44.276 88c-4.074 0-18.05-1.456-26.927-20.2-.44-.924-1.192-1.628-2.1-1.964C6.217 62.52 5.83 48.38 9.52 45.788c.76-.532 1.808-.536 2.476-.212 2.435 1.168 5.188-.756 5.188-3.656l.073-2.264C23.91 38.032 33.236 28.56 35.572 23.5c-.255 3.408-3.288 13.016-7.66 16.252 10.14 0 23.06-10.028 28.355-19.312.325 8.324 7.8 16.064 14.888 17.244.125 1.416.214 2.828.214 4.236 0 2.892 2.749 4.828 5.188 3.656.52-.252 1.605-.4 2.475.212 3.69 2.592 3.303 16.732-5.73 20.048zM60.88 50c0 3.312-2.066 6-4.612 6-2.546 0-4.612-2.688-4.612-6s2.066-6 4.612-6c2.546 0 4.612 2.688 4.612 6zm-28.594 6c-2.546 0-4.613-2.688-4.613-6s2.067-6 4.613-6c2.545 0 4.612 2.688 4.612 6s-2.067 6-4.612 6zm.922 12h22.138s-2.823 9.416-11.07 9.416C36.333 77.416 33.208 68 33.208 68zM107 68c-10.26 3.188-13.715-4.24-14.759-16-1.83-20.608-3.59-35.704-14.946-33.02-1.395-3.376-3.1-6.732-5.86-9.908C74.656 4.564 80.781 0 87.785 0c26.993 0 13.909 45.964 13.909 56 0 6 1.085 9.292 5.306 12z",
      },
      OLD_MAN_FACE: {
        96: "M89 53.252c0-8.212-2.796-12.104-5.255-13.956 1.45-6.096 3.82-20.584-3.57-29.636-3.48-4.26-9.138-6.16-15.28-5.096C60.072 2.336 52.786 0 44.5 0c-8.284 0-15.571 2.336-20.396 4.564-6.14-1.064-11.8.832-15.278 5.096-7.39 9.052-5.018 23.54-3.571 29.636C2.796 41.148 0 45.036 0 53.252c0 3.984 1.209 8.524 3.656 12.408-1.798 5.684 1.94 12.196 8.467 11.416-1.18 6.488 5.061 11.712 11.429 8.512-.746 4.652 5.27 10.32 12.767 6.276C38.808 94.152 40.725 96 44.493 96c4.283 0 6.845-2.572 8.444-4.14 7.498 4.048 13.253-1.624 12.511-6.276 6.371 3.2 12.609-2.024 11.43-8.512 6.526.78 10.264-5.732 8.466-11.416C87.787 61.776 89 57.232 89 53.252zm-44.5 26.28c-6.386 0-8.9-7.532-8.9-7.532h17.8s-2.27 7.532-8.9 7.532zm13.268-11.968c-3.9-2.06-9.104-4.504-13.268-1.288-4.168-3.216-9.367-.772-13.268 1.288-15.764 8.32-29.756-16.092-21.664-21.776.756-.528 1.81-.54 2.492-.212 2.45 1.168 5.213-.764 5.213-3.656 0-8.856 2.567-17.736 7.988-23.952l.056-.04c9.656-10.384 28.706-10.384 38.362 0l.06.044c5.421 6.216 7.988 15.096 7.988 23.948 0 2.904 2.773 4.82 5.213 3.656.523-.252 1.617-.4 2.489.212 7.973 5.568-5.615 30.244-21.66 21.776zM58.406 38c-4.168 0-7.765 2.516-9.667 6.184a13.077 13.077 0 00-4.239-.696c-1.48 0-2.855.232-4.239.696C38.36 40.516 34.761 38 30.594 38c-6.134 0-11.125 5.384-11.125 12s4.991 12 11.125 12c4.565 0 8.473-2.992 10.187-7.244.912-2.264 1.46-5.204 3.719-5.204 2.258 0 2.81 2.94 3.72 5.204C49.932 59.008 53.84 62 58.405 62c6.134 0 11.125-5.384 11.125-12S64.54 38 58.406 38zM30.594 56c-3.07 0-5.563-2.688-5.563-6s2.492-6 5.563-6c3.07 0 5.562 2.688 5.562 6s-2.492 6-5.562 6zm27.812 0c-3.07 0-5.562-2.688-5.562-6s2.492-6 5.562-6c3.07 0 5.563 2.688 5.563 6s-2.492 6-5.563 6z",
      },
      OLD_WOMAN_FACE: {
        96: "M37.308 75.973h22.384s-2.854 9.416-11.192 9.416c-8.032 0-11.192-9.416-11.192-9.416zm33.304-15.98c0 5.048-4.368 9-9.95 9-4.245 0-7.29-2.308-8.931-5.616-.855-1.728-1.537-3.728-3.235-3.728-1.697 0-2.38 2-3.234 3.728-1.638 3.312-4.682 5.616-8.932 5.616-5.577 0-9.95-3.952-9.95-9s4.369-9 9.95-9c3.768 0 6.947 1.824 8.637 4.552a10.321 10.321 0 013.526-.612c1.23 0 2.38.204 3.525.612 1.69-2.724 4.869-4.552 8.637-4.552 5.588 0 9.957 3.952 9.957 9zm-29.924 0c0-1.656-1.948-3-4.354-3s-4.354 1.344-4.354 3 1.948 3 4.354 3 4.354-1.344 4.354-3zm24.328 0c0-1.656-1.947-3-4.354-3-2.406 0-4.353 1.344-4.353 3s1.947 3 4.353 3c2.407 0 4.354-1.344 4.354-3zM97 50.813c0 8.784-3.544 17.28-7.462 22.912h-.007c-1.899 2.964-4.507 5.544-7.973 7.124-8.763 14.924-20.46 23.124-33.058 23.124-12.599 0-24.302-8.2-33.058-23.124-3.466-1.58-6.074-4.16-7.973-7.124h-.007C3.544 68.097 0 59.6 0 50.813c0-22.452 11.562-37.928 34.718-32.3-2.913-2.716-7.178-4.592-11.49-5.404C31.316 1.129 43.486-.027 48.5-.027c5.014 0 17.184 1.156 25.272 13.136-4.313.812-8.58 2.688-11.49 5.404C85.118 12.96 97 27.937 97 50.813zm-22.329-3.924C56.924 48.009 48.5 38.349 48.5 33.057c0 5.296-8.42 14.952-26.171 13.832C12.789 78.165 33.2 95.973 48.5 95.973c14.528 0 35.972-16.948 26.171-49.084z",
      },
      STORE_ROAD_SIGN: {
        300: () => <StoreRoadSign />,
      },
      FOOTER_DECORATIVE: {
        250: () => <FooterDecorative />,
      },
      CIRCLE_PLUS: {
        24: "M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM17 11H13V7H11V11H7V13H11V17H13V13H17V11Z",
        48: "M24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46ZM24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM34 22H26V14H22V22H14V26H22V34H26V26H34V22Z",
      },
      CIRCLE_MINUS: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zM7 11v2h10v-2H7z",
        48: "M24 46C11.85 46 2 36.15 2 24S11.85 2 24 2s22 9.85 22 22-9.85 22-22 22zm0-4c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18zM14 22v4h20v-4H14z",
      },
      THUMBS_UP: {
        24: "M22 12c0-1.683-1.13-3-3-3h-3.073l.028-.077.182-.482V8.44l.16-.422c.19-.51.329-.922.441-1.329.17-.615.262-1.17.262-1.69 0-1.472-.908-2.386-2.252-2.777-.606-.177-1.133-.223-1.748-.223h-.48l-.3.374c-.339.422-1.005 1.184-1.773 2.061C9.03 6.053 7.267 8.068 6.57 9.082A2 2 0 006 9H4a2 2 0 00-2 2v9a2 2 0 002 2h2c.687 0 1.293-.346 1.653-.874.304.196.642.36 1.01.491a6.74 6.74 0 002.371.381L18 22c2.755 0 4-4.056 4-10zM9.337 19.733C8.452 19.418 8 18.901 8 18V11c0-.241.044-.454.142-.68.174-.409 1.76-2.218 3.263-3.932a154.94 154.94 0 002.055-2.374 3.5 3.5 0 01.73.128c.572.167.81.406.81.857 0 .317-.064.702-.19 1.159-.094.34-.216.701-.387 1.162l-.15.395-.194.515a8.11 8.11 0 00-.274.845c-.25 1 0 1.924 1.195 1.924h4c.691 0 1 .36 1 1 0 4.79-.985 8-2 8h-7.037a4.809 4.809 0 01-1.626-.265zM4 20v-9h2v9H4z",
      },
      THUMBS_DOWN: {
        24: "M16.137 15.558a95.34 95.34 0 01-.182-.482L15.927 15H19c1.87 0 3-1.318 3-3 0-5.944-1.245-10-4-10h-7.001a6.702 6.702 0 00-2.336.382 4.885 4.885 0 00-1.01.492A1.998 1.998 0 006 2H4a2 2 0 00-2 2v9a2 2 0 002 2h2a2 2 0 00.57-.083c.698 1.015 2.46 3.03 3.877 4.648.768.878 1.434 1.639 1.773 2.061l.3.374h.488c.607 0 1.134-.046 1.74-.223C16.092 21.387 17 20.473 17 19c0-.52-.092-1.075-.262-1.69a15.692 15.692 0 00-.44-1.329l-.161-.423zM8 13V6c0-.902.452-1.418 1.337-1.735a4.814 4.814 0 011.629-.266L16.534 4H18c1.015 0 2 3.21 2 8 0 .64-.309 1-1 1h-4c-1.194 0-1.444.924-1.195 1.924.058.235.144.494.274.846l.194.513.15.396c.171.46.293.821.387 1.162.126.457.19.842.19 1.159 0 .451-.238.69-.81.857-.242.07-.479.109-.73.128-.526-.63-1.28-1.489-2.055-2.374-1.503-1.714-3.089-3.523-3.263-3.931A1.66 1.66 0 018 13zm-4 0V4h2v9H4z",
      },
      CIRCLE_ARROW_TOP_RIGHT: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm-3.293-4.293L14 11.414V15h2V8H9v2h3.586l-5.293 5.293 1.414 1.414z",
      },
      CIRCLE_MINUS: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zM7 11v2h10v-2H7z",
      },
      CIRCLE_ARROW_TOP: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm1-4v-6.586l2.293 2.293 1.414-1.414L12 6.586l-4.707 4.707 1.414 1.414L11 10.414V17h2z",
      },
      CIRCLE_ARROW_BOTTOM: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zM11 7v6.586l-2.293-2.293-1.414 1.414L12 17.414l4.707-4.707-1.414-1.414L13 13.586V7h-2z",
      },
      CIRCLE_ARROW_RIGHT: {
        24: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm-5-8h6.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414L13.586 11H7v2z",
      },
      FILTER: {
        24: "M2 6.376l7 8v8.567l6-2.25v-6.317l7-8V4a2 2 0 00-2-2H4a2 2 0 00-2 2v2.376zM20 4v1H4V4h16zM5.204 7h13.592l-5.25 6h-3.092l-5.25-6zM11 15v5.057l2-.75V15h-2z",
      },
    },
  };
};

export default iconsTheme;
