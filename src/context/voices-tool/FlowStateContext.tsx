// File: src/context/voices-tool/FlowStateContext.tsx

"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface FlowStateContextProps {
  completedFlows: string[];
  completedFlowData: Record<string, unknown>;
  markFlowCompleted: (flowId: string, data: Record<string, unknown>) => void;
  resetRegistry?: () => void;
}

export const FlowStateContext = createContext<FlowStateContextProps>({
  completedFlows: [],
  completedFlowData: {},
  markFlowCompleted: () => {},
  resetRegistry: () => {},
});

export const useFlowState = () => useContext(FlowStateContext);

export const FlowStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [completedFlows, setCompletedFlows] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("completedFlows");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const [completedFlowData, setCompletedFlowData] = useState<
    Record<string, unknown>
  >(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("completedFlowData");
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem("completedFlows", JSON.stringify(completedFlows));
  }, [completedFlows]);

  useEffect(() => {
    localStorage.setItem(
      "completedFlowData",
      JSON.stringify(completedFlowData)
    );
  }, [completedFlowData]);

  const markFlowCompleted = (flowId: string, data: Record<string, unknown>) => {
    setCompletedFlows((prev) => [...new Set([...prev, flowId])]);
    setCompletedFlowData((prev) => ({ ...prev, [flowId]: data }));
  };

  const resetRegistry = () => {
    setCompletedFlows([]);
    setCompletedFlowData({});
    localStorage.removeItem("completedFlows");
    localStorage.removeItem("completedFlowData");
  };

  return (
    <FlowStateContext.Provider
      value={{
        completedFlows,
        completedFlowData,
        markFlowCompleted,
        resetRegistry,
      }}
    >
      {children}
    </FlowStateContext.Provider>
  );
};
