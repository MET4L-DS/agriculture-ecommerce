import SectionIcon from "./SectionIcon";

const Button = ({
    icon = undefined,
    text = "",
    color = "inherit",
    bgColor = "inherit",
    padding = "",
    onClick,
}) => {
    return (
        <button
            className={`button-shadow font-encodedSans flex items-center gap-1 rounded outline outline-2 outline-${color} bg-${bgColor} px-8 py-3 text-${color} text-xs font-semibold transition-transform hover:-translate-y-1 active:bg-slate-400 active:text-white`}
            onClick={onClick}
            style={{ padding: `${padding}` }}
        >
            {icon && (
                <SectionIcon
                    icon={icon}
                    size={15}
                    bgColor={bgColor}
                    color="inherit"
                />
            )}

            {text}
        </button>
    );
};

export default Button;
