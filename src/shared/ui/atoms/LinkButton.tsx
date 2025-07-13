interface LinkButtonProps {
    text: string;
    textColor: string;
    colorItem: string;
    colorClass: string;
    animation: string;
    onClick: () => void;
}

export function LinkButton({ text, textColor, colorItem, colorClass, animation, onClick }: LinkButtonProps) {
    return(
        <div>
            <button
                className={`${colorClass} ${animation} border border-[#3562A6] lg:flex text-white py-[19px] gap-[10px] pl-8 pr-4 w-fit`}
                onClick={onClick}
            >
                <p className={`font-normal ${textColor} cursor-pointer`}>{text}</p>
                <svg className={`${colorItem}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}