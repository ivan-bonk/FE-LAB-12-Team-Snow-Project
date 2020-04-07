export interface AddPetToCompareProps {
  id: string;
}

export interface ComparisonHandlerState {
  idsToCompare: string[];
}

export interface ComparisonState {
  comparisonHandler: ComparisonHandlerState;
}
