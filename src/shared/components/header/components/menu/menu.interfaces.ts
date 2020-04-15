export interface MenuProps {
  onLinkClick(): void;
}

export interface PetsIds {
  idsToCompare: string[];
}

export interface RootState {
  comparisonHandler: PetsIds;
}
