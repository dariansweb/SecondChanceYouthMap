// File: src/components/voices-tool/FormEngine/fields/ConditionalGroup.tsx

import React from "react";

interface ConditionalGroupProps {
  show: boolean;
  children: React.ReactNode;
}

const ConditionalGroup: React.FC<ConditionalGroupProps> = ({
  show,
  children,
}) => {
  if (!show) return null;

  return <div className="conditional-group">{children}</div>;
};

export default ConditionalGroup;
