export type MatrixData = {
  decisionPoint: string;
  [state: string]: StateValue | string;
};

export type StateValue = {
  value: string | boolean | number;
  notes: string;
  source: string;
  confidence: "low" | "medium" | "high";
};
