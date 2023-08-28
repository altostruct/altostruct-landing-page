import { PropsWithChildren } from "react";

function BorderedPanel(props: PropsWithChildren<{ label: string }>) {
  const { label, children } = props;
  return (
    <div className="border border-[#939793] p-6 relative">
      <pre className="absolute top-0 -translate-y-1/2 bg-[#161616]">
        {label}
      </pre>
      {children}
    </div>
  );
}

export default BorderedPanel;
