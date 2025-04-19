import matrixData from "@/data/matrix-data.json";

export type StateValue = {
  value: string | boolean | number;
  notes: string;
  source: string;
  confidence: string;
};

export interface MatrixData {
  decisionPoint: string;
  [state: string]: string | StateValue;
}

export const MatrixDataset: MatrixData[] = matrixData;
