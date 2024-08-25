import * as React from "react";
import Svg, { SvgProps, Mask, Path } from "react-native-svg";
const Logo = (props: SvgProps) => (
    <Svg width={226} height={116} fill="none" {...props}>
        <Mask
            id="a"
            width={198}
            height={50}
            x={16}
            y={55}
            fill="#000"
            maskUnits="userSpaceOnUse"
        >
            <Path fill="#fff" d="M16 55h198v50H16z" />
            <Path d="m26.4 58.48 12.16 29.76 12.096-29.76h8.384V102h-7.36V85.36l.96-15.232L41.824 96.88h-6.848l-10.56-26.816.96 15.296V102h-7.36V58.48H26.4Zm48.655 0h7.871v27.904c0 2.816.62 5.035 1.856 6.656 1.238 1.579 3.222 2.368 5.953 2.368 2.73 0 4.714-.79 5.951-2.368 1.238-1.621 1.856-3.84 1.856-6.656V58.48h7.873v27.904c0 4.907-1.302 8.853-3.904 11.84-2.603 2.944-6.528 4.416-11.776 4.416-5.291 0-9.238-1.472-11.84-4.416-2.56-2.987-3.84-6.933-3.84-11.84V58.48Zm56.871 37.056c4.949 0 7.424-1.835 7.424-5.504 0-1.493-.384-2.667-1.152-3.52-.726-.853-2.091-1.6-4.096-2.24l-5.248-1.728c-6.272-2.048-9.408-6.165-9.408-12.352 0-3.584 1.109-6.528 3.328-8.832 2.261-2.347 5.781-3.52 10.559-3.52 2.006 0 3.99.235 5.953.704 1.962.427 4.053 1.13 6.272 2.112l-2.368 6.592c-2.048-.81-3.798-1.387-5.248-1.728a16.467 16.467 0 0 0-4.352-.576c-1.963 0-3.52.363-4.672 1.088-1.11.683-1.664 1.941-1.664 3.776 0 1.365.384 2.496 1.152 3.392.81.853 2.133 1.579 3.968 2.176l5.248 1.728c3.157 1.067 5.525 2.624 7.104 4.672 1.621 2.005 2.432 4.672 2.432 8 0 3.84-1.216 6.955-3.648 9.344-2.432 2.347-6.251 3.52-11.456 3.52-2.048 0-4.182-.235-6.4-.704-2.176-.512-4.566-1.365-7.168-2.56l2.368-6.592c2.389 1.024 4.416 1.75 6.08 2.176 1.706.384 3.37.576 4.992.576ZM168.259 102h-7.68V58.48h7.68V102Zm22.895-17.216c0 3.115.683 5.675 2.048 7.68 1.365 1.963 3.605 2.944 6.72 2.944 1.28 0 2.603-.17 3.968-.512 1.408-.341 3.136-.917 5.184-1.728l2.368 6.656c-2.304 1.024-4.437 1.749-6.4 2.176-1.92.427-3.776.64-5.568.64-3.584 0-6.592-.768-9.024-2.304-2.389-1.536-4.181-3.648-5.376-6.336-1.195-2.688-1.792-5.76-1.792-9.216v-9.152c0-3.456.597-6.528 1.792-9.216 1.195-2.688 2.987-4.779 5.376-6.272 2.432-1.536 5.44-2.304 9.024-2.304 1.749 0 3.563.213 5.44.64 1.877.384 3.925 1.067 6.144 2.048l-2.368 6.784c-1.963-.81-3.605-1.387-4.928-1.728a15.353 15.353 0 0 0-3.84-.512c-3.115 0-5.355.981-6.72 2.944-1.365 1.963-2.048 4.501-2.048 7.616v9.152Z" />
        </Mask>
        <Path
            fill="#919095"
            d="m26.4 58.48 1.851-.756-.508-1.244H26.4v2Zm12.16 29.76-1.851.757 1.856 4.543 1.848-4.547-1.853-.753Zm12.096-29.76v-2H49.31l-.507 1.247 1.853.753Zm8.384 0h2v-2h-2v2Zm0 43.52v2h2v-2h-2Zm-7.36 0h-2v2h2v-2Zm0-16.64-1.996-.126-.004.063v.063h2Zm.96-15.232 1.996.126-3.85-.876 1.854.75ZM41.824 96.88v2h1.349l.505-1.25-1.854-.75Zm-6.848 0-1.86.733.498 1.267h1.362v-2Zm-10.56-26.816 1.86-.733-3.856.858 1.996-.125Zm.96 15.296h2v-.063l-.004-.062-1.996.125Zm0 16.64v2h2v-2h-2Zm-7.36 0h-2v2h2v-2Zm0-43.52v-2h-2v2h2Zm6.533.757 12.16 29.76 3.702-1.513-12.16-29.76-3.702 1.513Zm15.864 29.756 12.096-29.76-3.706-1.506-12.096 29.76 3.706 1.506ZM50.656 60.48h8.384v-4h-8.384v4Zm6.384-2V102h4V58.48h-4Zm2 41.52h-7.36v4h7.36v-4Zm-5.36 2V85.36h-4V102h4Zm-.004-16.514.96-15.232-3.992-.252-.96 15.232 3.992.252Zm-2.89-16.108L39.97 96.13l3.708 1.5 10.816-26.752-3.708-1.5ZM41.824 94.88h-6.848v4h6.848v-4Zm-4.987 1.267-10.56-26.816-3.722 1.466 10.56 26.816 3.722-1.466ZM22.42 70.19l.96 15.296 3.992-.25-.96-15.296-3.992.25Zm.956 15.171V102h4V85.36h-4Zm2 14.64h-7.36v4h7.36v-4Zm-5.36 2V58.48h-4V102h4Zm-2-41.52H26.4v-4h-8.384v4Zm57.039-2v-2h-2v2h2Zm7.871 0h2v-2h-2v2Zm1.856 34.56-1.59 1.213.008.01.008.01 1.575-1.233Zm11.904 0 1.575 1.234.008-.01.007-.01-1.59-1.214Zm1.856-34.56v-2h-2v2h2Zm7.873 0h2v-2h-2v2Zm-3.905 39.744 1.499 1.325.005-.006.004-.005-1.508-1.314Zm-23.616 0-1.518 1.302.01.011.01.012 1.498-1.325Zm-3.84-37.744h7.873v-4h-7.873v4Zm5.873-2v27.904h4V58.48h-4Zm0 27.904c0 3.09.677 5.788 2.266 7.87l3.18-2.427c-.887-1.162-1.447-2.901-1.447-5.443h-4Zm2.281 7.89c1.742 2.222 4.418 3.134 7.526 3.134v-4c-2.353 0-3.645-.667-4.377-1.602l-3.149 2.468Zm7.526 3.134c3.109 0 5.785-.912 7.527-3.134l-3.149-2.468c-.732.935-2.024 1.602-4.377 1.602v4Zm7.542-3.155c1.589-2.08 2.267-4.779 2.267-7.869h-4c0 2.542-.56 4.281-1.446 5.443l3.18 2.426Zm2.267-7.869V58.48h-4v27.904h4Zm-2-25.904h7.872v-4h-7.873v4Zm5.872-2v27.904h4V58.48h-4Zm0 27.904c0 4.543-1.198 7.985-3.412 10.526l3.015 2.628c2.991-3.432 4.397-7.884 4.397-13.154h-4Zm-3.403 10.515c-2.107 2.383-5.4 3.741-10.278 3.741v4c5.62 0 10.176-1.586 13.275-5.091l-2.997-2.65Zm-10.278 3.741c-4.925 0-8.237-1.36-10.341-3.74l-2.997 2.649c3.102 3.508 7.683 5.091 13.338 5.091v-4Zm-10.321-3.718c-2.178-2.54-3.358-5.987-3.358-10.538h-4c0 5.262 1.38 9.71 4.321 13.142l3.037-2.604Zm-3.358-10.538V58.48h-4v27.904h4Zm61.143.128-1.524 1.295.018.022.019.02 1.487-1.337Zm-4.096-2.24-.626 1.9.009.002.008.003.609-1.905Zm-5.248-1.728.625-1.9-.005-.001-.62 1.901Zm-6.081-21.184-1.44-1.388 1.44 1.388Zm16.512-2.816-.465 1.945.02.005.021.004.424-1.954Zm6.272 2.112 1.883.676.629-1.752-1.702-.753-.81 1.829Zm-2.368 6.592-.736 1.86 1.921.76.698-1.944-1.883-.676Zm-5.248-1.728-.526 1.93.034.009.034.008.458-1.947Zm-9.023.512 1.048 1.703.008-.005.009-.005-1.065-1.693Zm-.512 7.168-1.519 1.302.033.038.035.037 1.451-1.377Zm3.968 2.176.625-1.9-.006-.002-.619 1.902Zm5.248 1.728.64-1.895-.008-.002-.007-.003-.625 1.9Zm7.103 4.672-1.584 1.221.015.018.014.018 1.555-1.257ZM143.51 99.12l1.388 1.439.007-.006.006-.006-1.401-1.427Zm-17.856 2.816-.459 1.947.022.005.023.005.414-1.957Zm-7.169-2.56-1.882-.676-.62 1.728 1.668.766.834-1.818Zm2.369-6.592.787-1.838-1.952-.837-.718 1.999 1.883.676Zm6.08 2.176-.497 1.937.029.008.028.006.44-1.951Zm4.991 2.576c2.664 0 5.025-.483 6.76-1.77 1.846-1.369 2.665-3.403 2.665-5.734h-4c0 1.338-.42 2.056-1.048 2.521-.74.549-2.091.983-4.377.983v4Zm9.425-7.504c0-1.835-.478-3.538-1.666-4.858l-2.973 2.676c.348.387.639 1.03.639 2.182h4Zm-1.629-4.815c-1.1-1.295-2.915-2.181-5.011-2.85l-1.217 3.81c1.915.611 2.83 1.218 3.181 1.63l3.047-2.59Zm-4.994-2.845-5.248-1.728-1.251 3.8 5.248 1.728 1.251-3.8Zm-5.253-1.73c-2.856-.932-4.823-2.277-6.085-3.934-1.254-1.646-1.943-3.772-1.943-6.516h-4c0 3.443.878 6.469 2.76 8.94 1.874 2.46 4.611 4.198 8.027 5.313l1.241-3.802Zm-8.028-10.45c0-3.134.953-5.56 2.768-7.445l-2.881-2.774c-2.622 2.723-3.887 6.185-3.887 10.219h4Zm2.768-7.444c1.738-1.804 4.63-2.908 9.119-2.908v-4c-5.067 0-9.215 1.243-12 4.132l2.881 2.776Zm9.119-2.908a23.5 23.5 0 0 1 5.487.65l.931-3.891a27.514 27.514 0 0 0-6.418-.759v4Zm5.528.658c1.806.393 3.768 1.05 5.887 1.987l1.619-3.658c-2.318-1.025-4.538-1.777-6.657-2.237l-.849 3.908Zm4.814-.518-2.368 6.592 3.765 1.352 2.368-6.592-3.765-1.352Zm.251 5.408c-2.1-.83-3.948-1.443-5.526-1.815l-.917 3.894c1.323.311 2.974.85 4.97 1.64l1.473-3.719Zm-5.458-1.798a18.47 18.47 0 0 0-4.878-.646v4c1.319 0 2.593.17 3.825.505l1.053-3.858Zm-4.878-.646c-2.182 0-4.156.4-5.738 1.395l2.131 3.386c.722-.455 1.863-.781 3.607-.781v-4Zm-5.721 1.385c-1.925 1.185-2.615 3.262-2.615 5.479h4c0-1.453.419-1.892.712-2.073l-2.097-3.406Zm-2.615 5.479c0 1.763.506 3.38 1.633 4.694l3.037-2.604c-.409-.477-.67-1.123-.67-2.09h-4Zm1.701 4.77c1.142 1.201 2.828 2.058 4.799 2.7l1.239-3.804c-1.698-.553-2.658-1.147-3.138-1.651l-2.9 2.755Zm4.793 2.698 5.248 1.728 1.251-3.8-5.248-1.728-1.251 3.8Zm5.233 1.723c2.891.976 4.884 2.342 6.16 3.998l3.169-2.442c-1.881-2.44-4.624-4.189-8.048-5.346L136.981 79Zm6.189 4.034c1.259 1.558 1.988 3.738 1.988 6.743h4c0-3.65-.894-6.804-2.877-9.257l-3.111 2.514Zm1.988 6.743c0 3.378-1.051 5.953-3.05 7.917l2.803 2.854c2.865-2.815 4.247-6.469 4.247-10.771h-4Zm-3.037 7.905c-1.901 1.834-5.108 2.959-10.068 2.959v4c5.452 0 9.882-1.222 12.845-4.081l-2.777-2.878Zm-10.068 2.959c-1.894 0-3.889-.217-5.986-.66l-.827 3.913c2.34.495 4.612.747 6.813.747v-4Zm-5.941-.65c-2.017-.475-4.278-1.278-6.792-2.432l-1.669 3.636c2.692 1.235 5.209 2.139 7.544 2.689l.917-3.894Zm-5.744.062 2.368-6.592-3.765-1.352-2.368 6.592 3.765 1.352Zm-.302-5.43c2.441 1.046 4.571 1.814 6.371 2.275l.993-3.874c-1.528-.392-3.451-1.075-5.789-2.077l-1.575 3.676Zm6.428 2.29c1.84.413 3.651.624 5.431.624v-4a20.7 20.7 0 0 1-4.552-.527l-.879 3.902ZM168.258 102v2h2v-2h-2Zm-7.679 0h-2v2h2v-2Zm0-43.52v-2h-2v2h2Zm7.679 0h2v-2h-2v2Zm0 41.52h-7.679v4h7.679v-4Zm-5.679 2V58.48h-4V102h4Zm-2-41.52h7.679v-4h-7.679v4Zm5.679-2V102h4V58.48h-4Zm26.944 33.984-1.653 1.126.005.008.006.008 1.642-1.142Zm10.688 2.432-.471-1.944-.007.002-.007.002.485 1.94Zm5.184-1.728 1.884-.67-.694-1.952-1.926.762.736 1.86Zm2.368 6.656.812 1.828 1.693-.753-.621-1.745-1.884.67Zm-6.4 2.176-.425-1.954-.009.002.434 1.952Zm-14.592-1.664-1.082 1.682.007.005.007.004 1.068-1.691ZM185.074 94l1.828-.812-1.828.812Zm0-27.584-1.828-.812 1.828.812Zm5.376-6.272 1.06 1.696.008-.005-1.068-1.691Zm14.464-1.664-.443 1.95.021.005.021.004.401-1.959Zm6.144 2.048 1.888.66.608-1.743-1.687-.746-.809 1.829Zm-2.368 6.784-.764 1.849 1.955.807.697-1.997-1.888-.659Zm-4.928-1.728-.5 1.937.5-1.937Zm-10.56 2.432 1.642 1.142-1.642-1.142Zm-4.048 16.768c0 3.403.747 6.386 2.395 8.806l3.306-2.252c-1.083-1.59-1.701-3.727-1.701-6.554h-4Zm2.406 8.822c1.849 2.658 4.812 3.802 8.362 3.802v-4c-2.68 0-4.197-.82-5.078-2.086l-3.284 2.284Zm8.362 3.802c1.459 0 2.945-.195 4.453-.572l-.97-3.88a14.341 14.341 0 0 1-3.483.452v4Zm4.439-.568c1.532-.372 3.354-.983 5.449-1.812l-1.472-3.72c-2.001.792-3.635 1.333-4.919 1.644l.942 3.888Zm2.829-3.002 2.368 6.656 3.768-1.34-2.368-6.656-3.768 1.34Zm3.44 4.158c-2.21.982-4.212 1.658-6.013 2.05l.85 3.908c2.124-.461 4.389-1.236 6.787-2.302l-1.624-3.656Zm-6.022 2.052c-1.791.398-3.501.592-5.134.592v4c1.951 0 3.953-.232 6.002-.688l-.868-3.904Zm-5.134.592c-3.299 0-5.914-.705-7.956-1.995l-2.136 3.382c2.822 1.782 6.223 2.613 10.092 2.613v-4Zm-7.942-1.986c-2.049-1.317-3.588-3.121-4.63-5.466l-3.656 1.624c1.348 3.032 3.393 5.452 6.122 7.206l2.164-3.364Zm-4.63-5.466c-1.063-2.392-1.62-5.18-1.62-8.404h-4c0 3.688.638 7.044 1.964 10.028l3.656-1.624Zm-1.62-8.404v-9.152h-4v9.152h4Zm0-9.152c0-3.225.557-6.012 1.62-8.404l-3.656-1.624c-1.326 2.984-1.964 6.34-1.964 10.028h4Zm1.62-8.404c1.04-2.34 2.572-4.116 4.608-5.388l-2.12-3.392c-2.743 1.714-4.794 4.12-6.144 7.156l3.656 1.624Zm4.616-5.393c2.042-1.29 4.657-1.995 7.956-1.995v-4c-3.869 0-7.27.83-10.092 2.613l2.136 3.382Zm7.956-1.995c1.586 0 3.25.193 4.997.59l.886-3.9c-2.008-.457-3.97-.69-5.883-.69v4Zm5.039.6c1.706.348 3.615.98 5.736 1.917l1.618-3.658c-2.317-1.025-4.503-1.76-6.552-2.178l-.802 3.918Zm4.657-.571-2.368 6.784 3.776 1.318 2.368-6.784-3.776-1.318Zm.284 5.594c-2.007-.828-3.745-1.442-5.192-1.816l-1 3.874c1.198.309 2.746.847 4.664 1.64l1.528-3.698Zm-5.192-1.816a17.349 17.349 0 0 0-4.34-.575v4c1.052 0 2.164.145 3.34.449l1-3.874Zm-4.34-.575c-3.55 0-6.513 1.144-8.362 3.802l3.284 2.284c.881-1.267 2.398-2.086 5.078-2.086v-4Zm-8.362 3.802c-1.66 2.386-2.406 5.358-2.406 8.758h4c0-2.829.619-4.935 1.69-6.474l-3.284-2.284Zm-2.406 8.758v9.152h4v-9.152h-4Z"
            mask="url(#a)"
        />
        <Path
            fill="#E0DCEA"
            d="M4.76 39V11.8h8.28c2.027 0 3.627.293 4.8.88 1.2.587 2.053 1.413 2.56 2.48.533 1.067.8 2.32.8 3.76v1.12c0 2.107-.907 3.72-2.72 4.84 1.28.507 2.253 1.24 2.92 2.2.667.96 1 2.107 1 3.44v1.12c0 1.467-.267 2.76-.8 3.88-.533 1.093-1.413 1.947-2.64 2.56s-2.867.92-4.92.92H4.76Zm8.28-22.8H9.56V23h3.48c1.067 0 1.867-.24 2.4-.72.56-.507.84-1.187.84-2.04v-1.32c0-.853-.28-1.52-.84-2-.533-.48-1.333-.72-2.4-.72Zm1 11.2H9.56v7.2h4.48c1.12 0 1.973-.267 2.56-.8s.88-1.253.88-2.16v-1.32c0-.907-.293-1.613-.88-2.12-.587-.533-1.44-.8-2.56-.8ZM37.958 29v10h-4.8V11.8h9.08c2.747 0 4.854.707 6.32 2.12 1.494 1.387 2.24 3.253 2.24 5.6v1.72c0 1.547-.333 2.907-1 4.08-.666 1.173-1.626 2.067-2.88 2.68 2.187 3.733 4.054 7.4 5.6 11h-5.48a89.432 89.432 0 0 0-4.76-10h-4.32Zm4.28-12.8h-4.28v8.4h4.28c1.174 0 2.067-.293 2.68-.88.64-.613.96-1.44.96-2.48v-1.72c0-1.013-.32-1.813-.96-2.4-.613-.613-1.506-.92-2.68-.92Zm39.535 6.32v5.72c0 3.467-.866 6.2-2.6 8.2-1.733 1.973-4.266 2.96-7.6 2.96-3.36 0-5.906-.987-7.64-2.96-1.706-2-2.56-4.733-2.56-8.2v-5.72c0-3.467.854-6.187 2.56-8.16 1.734-1.973 4.28-2.96 7.64-2.96 3.334 0 5.867.987 7.6 2.96 1.734 1.973 2.6 4.693 2.6 8.16Zm-4.92 0c0-2.187-.426-3.827-1.28-4.92-.853-1.12-2.186-1.68-4-1.68-1.813 0-3.146.56-4 1.68-.853 1.093-1.28 2.733-1.28 4.92v5.72c0 2.187.427 3.84 1.28 4.96.854 1.12 2.187 1.68 4 1.68 1.814 0 3.147-.56 4-1.68.854-1.12 1.28-2.773 1.28-4.96v-5.72Zm35.506 0v5.72c0 3.467-.866 6.2-2.6 8.2-1.733 1.973-4.266 2.96-7.6 2.96-3.36 0-5.906-.987-7.64-2.96-1.706-2-2.56-4.733-2.56-8.2v-5.72c0-3.467.854-6.187 2.56-8.16 1.734-1.973 4.28-2.96 7.64-2.96 3.334 0 5.867.987 7.6 2.96 1.734 1.973 2.6 4.693 2.6 8.16Zm-4.92 0c0-2.187-.426-3.827-1.28-4.92-.853-1.12-2.186-1.68-4-1.68-1.813 0-3.146.56-4 1.68-.853 1.093-1.28 2.733-1.28 4.92v5.72c0 2.187.427 3.84 1.28 4.96.854 1.12 2.187 1.68 4 1.68 1.814 0 3.147-.56 4-1.68.854-1.12 1.28-2.773 1.28-4.96v-5.72ZM138.145 39l-6.8-11.88c-.453.507-.92 1.013-1.4 1.52a69.413 69.413 0 0 1-1.44 1.56V39h-4.8V11.8h4.8v12.92c2.027-2.32 3.76-4.52 5.2-6.6a52.047 52.047 0 0 0 3.72-6.32h5.24a72.407 72.407 0 0 1-3.68 6.52 53.597 53.597 0 0 1-4.08 5.64l9.04 15.04h-5.8Zm30.889-4.6V39h-15.68V11.8h4.8v22.6h10.88Zm24.075-22.6-8.32 16.28V39h-4.8V28.16l-8.4-16.36h5.12l5.88 11.6 5.56-11.6h4.96Zm8.878 27.2V11.8h4.4a104.948 104.948 0 0 1 6 8.72 97.565 97.565 0 0 1 5.16 9.4l-.36-8.12v-10h4.6V39h-4.4a413.796 413.796 0 0 0-5.32-10.12 102.705 102.705 0 0 0-5.8-9.64l.32 9.36V39h-4.6Z"
        />
    </Svg>
);
export default Logo;