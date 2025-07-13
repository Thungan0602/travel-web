interface MenuBarProps {
    name: string;
  }
  
  export function MenuBar({ name }: MenuBarProps) {
    return (
      <div className="shrink-0 snap-start text-base lg:font-normal font-extralight hover:border-b-2 border-[#3562A6] hover:text-[#3562A6] hover:font-bold uppercase box-border lg:h-6 h-18">
        {name}
      </div>
    );
  }
  
  